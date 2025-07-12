"use client";

<<<<<<< HEAD
import React from 'react';
import Image from 'next/image';
import { Badge } from '@/frontend/Components/ui/badge';
import { Button } from '@/frontend/Components/ui/button';
import { SkillSwapDialog } from '@/frontend/Components/SkillSwapDialog';
import { useRouter } from 'next/navigation';
import { updateProfileAction } from '@/lib/actions/auth-actions';
=======
import React from "react";
import {
  MapPin,
  Shield,
  Zap,
  Clock,
  BadgeCheck,
  Mail,
  Users,
  Quote,
} from "lucide-react";
>>>>>>> b5743c2d8f5703daf2a704072f29d806e749cf1a

interface ProfilePageProps {
  params: {
    id: string;
  };
}

export default function ProfilePage({ params }: ProfilePageProps) {
<<<<<<< HEAD
  const router = useRouter();
  // Editable state for profile fields
  const [profile, setProfile] = React.useState({
    name: "Marc Demo",
    profileImage: "/placeholder-avatar.jpg",
    location: "",
    skillsOffered: ["React", "Next.js", "Python"],
    skillsWanted: ["Design", "Graphic Design"],
=======
  const profile = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    location: "San Francisco, CA",
    role: "Learner & Mentor",
    joinedDate: "2024",
    about:
      "Full-stack developer with 5 years of experience. Passionate about teaching and learning new technologies.",
    skillsOffered: ["React", "Next.js", "Python"],
    skillsWanted: ["UI Design", "Machine Learning"],
    achievements: ["Top Rated", "Creative Badger"],
>>>>>>> b5743c2d8f5703daf2a704072f29d806e749cf1a
    availability: "Available Now",
    availabilityTime: "Weekends & Evenings",
    totalSwaps: 24,
<<<<<<< HEAD
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
=======
    rating: 4.7,
>>>>>>> b5743c2d8f5703daf2a704072f29d806e749cf1a
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
<<<<<<< HEAD
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
=======
    <div className="min-h-screen bg-[#0f172a] text-white px-4 sm:px-10 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Left Panel */}
        <div className="bg-[#1e293b] border border-gray-700 rounded-xl p-8 flex flex-col items-center text-center relative">
          {/* Glow ring behind avatar */}
          <div className="absolute top-6 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl animate-pulse z-0"></div>

          {/* Avatar */}
          <div className="relative z-10 w-36 h-36 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg mb-4">
            <img
              src={profile.avatar}
              alt="avatar"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Name */}
          <h2 className="text-xl font-semibold mt-2">{profile.name}</h2>

          {/* Email */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
            <Mail className="w-4 h-4" />
            {profile.email}
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
            <MapPin className="w-4 h-4" />
            {profile.location}
          </div>

          {/* Role */}
          <span className="mt-4 px-4 py-1 rounded-full bg-blue-700 text-blue-200 text-sm font-medium shadow-md shadow-blue-500/10 border border-blue-600">
            <Users className="w-4 h-4 inline mr-1 mb-1" />
            {profile.role}
          </span>

          {/* Availability Pulse */}
          <div className="mt-3 flex items-center text-xs text-cyan-300 bg-cyan-500/10 border border-cyan-600 rounded-full px-3 py-1 font-medium shadow-md shadow-cyan-500/10">
            <Clock className="w-3 h-3 animate-pulse mr-1" />
            {profile.availability}
          </div>

          {/* Joined Date */}
          <p className="mt-2 text-xs text-gray-500">
            Joined in {profile.joinedDate}
          </p>

          {/* Quote / Motto */}
          <p className="mt-5 text-sm italic text-gray-400">
            “Always learning. Always building.”
          </p>
        </div>

        {/* Right Panel */}
        <div className="md:col-span-2 bg-[#1e293b] border border-gray-700 rounded-xl p-8 space-y-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About</h3>
            <p className="text-gray-300">{profile.about}</p>
          </div>

          {/* Skills */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Skills Offered */}
            <div>
              <h4 className="flex items-center text-white font-semibold gap-2 mb-3">
                <Zap className="w-4 h-4 text-cyan-400" />
                Skills Offered
              </h4>
              <div className="flex flex-wrap gap-2">
                {profile.skillsOffered.map((skill) => (
                  <span
                    key={skill}
                    className="bg-cyan-700/10 text-cyan-300 border border-cyan-600 px-4 py-1 rounded-full text-sm hover:bg-cyan-700/20 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills Wanted */}
            <div>
              <h4 className="flex items-center text-white font-semibold gap-2 mb-3">
                <Shield className="w-4 h-4 text-purple-400" />
                Skills Wanted
              </h4>
              <div className="flex flex-wrap gap-2">
                {profile.skillsWanted.map((skill) => (
                  <span
                    key={skill}
                    className="bg-purple-700/10 text-purple-300 border border-purple-600 px-4 py-1 rounded-full text-sm hover:bg-purple-700/20 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
>>>>>>> b5743c2d8f5703daf2a704072f29d806e749cf1a
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Swaps */}
            <div className="bg-[#334155] border border-gray-600 rounded-xl p-5 text-center">
              <div className="text-sm text-gray-400 mb-1">Swaps</div>
              <div className="text-white text-2xl font-bold">
                {profile.totalSwaps}
              </div>
            </div>

            {/* Rating */}
            <div className="bg-[#334155] border border-gray-600 rounded-xl p-5 text-center">
              <div className="text-sm text-gray-400 mb-1">Rating</div>
              <div className="text-white text-2xl font-bold">
                {profile.rating}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-[#334155] border border-gray-600 rounded-xl p-5 text-center">
              <div className="text-sm font-medium flex justify-center items-center text-gray-300 gap-2 mb-1">
                <Clock className="w-4 h-4 text-white" />
                Availability
              </div>
              <div className="text-gray-300 mt-1 text-sm">
                {profile.availabilityTime}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="flex items-center gap-2 text-white font-semibold mb-3">
              <BadgeCheck className="w-4 h-4 text-yellow-400" />
              Achievements
            </h4>
            <div className="flex flex-wrap gap-3">
              {profile.achievements.map((ach) => (
                <span
                  key={ach}
                  className="bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 px-3 py-1 rounded-full text-sm hover:bg-yellow-500/20 transition"
                >
                  {ach}
                </span>
              ))}
            </div>
          </div>

          {/* Request Button */}
          <div className="text-right">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-cyan-600 hover:to-blue-600 transition px-6 py-3 rounded-md text-white font-medium shadow-md shadow-blue-500/10 hover:shadow-blue-500/20">
              Request Skill Swap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
