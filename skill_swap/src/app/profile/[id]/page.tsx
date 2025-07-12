"use client"

import React from 'react';
import Image from 'next/image';
import { Badge } from '@/frontend/Components/ui/badge';
import { Button } from '@/frontend/Components/ui/button';
import { SkillSwapDialog } from '@/frontend/Components/SkillSwapDialog';
import { useRouter } from 'next/navigation';
import { updateProfileAction } from '@/lib/actions/auth-actions';

interface ProfilePageProps {
  params: {
    id: string;
  }
}

export default function ProfilePage({ params }: ProfilePageProps) {
  const router = useRouter();
  // Editable state for profile fields
  const [profile, setProfile] = React.useState({
    name: "Marc Demo",
    profileImage: "/placeholder-avatar.jpg",
    location: "",
    skillsOffered: ["React", "Next.js", "Python"],
    skillsWanted: ["Design", "Graphic Design"],
    availability: "Available Now",
    about: "Full-stack developer with 5 years of experience. Passionate about teaching and learning new technologies.",
    achievements: ["Creative Badger", "Top Rated"],
    totalSwaps: 24,
    joinedDate: "2024",
    profileType: "Public"
  });
  const [editing, setEditing] = React.useState(true);
  const [currentUserSkills, setCurrentUserSkills] = React.useState<string[]>([]);
  const [saving, setSaving] = React.useState(false);
  const [message, setMessage] = React.useState<string | null>(null);

  React.useEffect(() => {
    setCurrentUserSkills(["JavaScript", "React", "Node.js"]);
  }, []);

  // Handlers for form fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  // Simulate save (post to availability)
  const handleSave = async () => {
    setSaving(true);
    setMessage(null);
    const res = await updateProfileAction(profile);
    if (res.success) {
      setMessage('Profile saved and posted to availability!');
      setEditing(false);
    } else {
      setMessage(res.errorMessage || 'Failed to save profile');
    }
    setSaving(false);
  };

  const handleDiscard = () => {
    // In a real app, reload original profile data
    setEditing(false);
  };

  // Editable form UI
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="p-8 rounded-xl bg-card border border-border shadow-lg dark:bg-gray-900/50 dark:border-gray-800">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="relative h-40 w-40 rounded-full overflow-hidden border-4 border-primary/20 dark:border-primary/10 shadow-xl flex flex-col items-center justify-center">
              <Image
                src={profile.profileImage}
                alt="Profile photo"
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
              <label className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-primary/80 text-xs text-white px-2 py-1 rounded cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
                Add/Edit Photo
                <input type="file" accept="image/*" className="hidden" onChange={() => {}} />
              </label>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4">
                  <Button variant="ghost" className="text-green-500" onClick={handleSave} disabled={saving}>{saving ? 'Saving...' : 'Save'}</Button>
                  <Button variant="ghost" className="text-red-500" onClick={handleDiscard}>Discard</Button>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => router.push('/home')}>Home</Button>
                </div>
              </div>
              {message && (
                <div className={`mt-4 text-sm ${message.includes('saved') ? 'text-green-500' : 'text-red-500'}`}>{message}</div>
              )}
              <form className="space-y-6">
                <div>
                  <label className="block font-bold mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-background border border-input rounded-md px-4 py-2 text-base focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block font-bold mb-1">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={profile.location || ''}
                    onChange={handleChange}
                    placeholder="Enter your location"
                    className="w-full bg-background border border-input rounded-md px-4 py-2 text-base focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <label className="block font-bold mb-1">Skills Offered</label>
                    <input
                      type="text"
                      name="skillsOffered"
                      value={profile.skillsOffered.join(', ')}
                      onChange={e => setProfile(p => ({ ...p, skillsOffered: e.target.value.split(',').map(s => s.trim()) }))}
                      placeholder="e.g. React, Next.js, Python"
                      className="w-full bg-background border border-input rounded-md px-4 py-2 text-base focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block font-bold mb-1">Skills Wanted</label>
                    <input
                      type="text"
                      name="skillsWanted"
                      value={profile.skillsWanted.join(', ')}
                      onChange={e => setProfile(p => ({ ...p, skillsWanted: e.target.value.split(',').map(s => s.trim()) }))}
                      placeholder="e.g. Design, Graphic Design"
                      className="w-full bg-background border border-input rounded-md px-4 py-2 text-base focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-bold mb-1">Availability</label>
                  <input
                    type="text"
                    name="availability"
                    value={profile.availability}
                    onChange={handleChange}
                    placeholder="e.g. Weekends, Evenings"
                    className="w-full bg-background border border-input rounded-md px-4 py-2 text-base focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block font-bold mb-1">Profile</label>
                  <input
                    type="text"
                    name="profileType"
                    value={profile.profileType}
                    onChange={handleChange}
                    placeholder="e.g. Public, Private"
                    className="w-full bg-background border border-input rounded-md px-4 py-2 text-base focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block font-bold mb-1">About</label>
                  <textarea
                    name="about"
                    value={profile.about}
                    onChange={handleChange}
                    placeholder="Tell us about yourself..."
                    className="w-full bg-background border border-input rounded-md px-4 py-2 text-base focus:ring-2 focus:ring-primary"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4 dark:text-gray-200">Skills Offered</h2>
            <div className="flex flex-wrap gap-2">
              {profile.skillsOffered.map((skill) => (
                <Badge key={skill} variant="default" className="bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary/20 dark:text-primary/90 dark:hover:bg-primary/30">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4 dark:text-gray-200">Skills Wanted</h2>
            <div className="flex flex-wrap gap-2">
              {profile.skillsWanted.map((skill) => (
                <Badge key={skill} variant="outline" className="border-primary/30 dark:border-primary/20 dark:text-gray-300">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4 dark:text-gray-200">Achievements</h2>
          <div className="flex flex-wrap gap-3">
            {profile.achievements.map((achievement) => (
              <Badge key={achievement} className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20 dark:bg-yellow-500/20 dark:text-yellow-400 dark:border-yellow-500/30">
                {achievement}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
