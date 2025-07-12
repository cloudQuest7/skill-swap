"use client"

import React from 'react';
import Image from 'next/image';
import { Badge } from '@/frontend/Components/ui/badge';
import { Button } from '@/frontend/Components/ui/button';
import { SkillSwapDialog } from '@/frontend/Components/SkillSwapDialog';

interface ProfilePageProps {
  params: {
    id: string;
  }
}

export default function ProfilePage({ params }: ProfilePageProps) {
  const [currentUserSkills, setCurrentUserSkills] = React.useState<string[]>([])
  
  React.useEffect(() => {
    // In a real app, fetch current user's skills from API/auth context
    setCurrentUserSkills(["JavaScript", "React", "Node.js"])
  }, [])
  
  // In a real app, fetch profile data based on params.id
  const profile = {
    name: "Marc Demo",
    profileImage: "/placeholder-avatar.jpg",
    skillsOffered: ["React", "Next.js", "Python"],
    skillsWanted: ["Design", "Graphic Design"],
    rating: 3.8,
    availability: "Available Now",
    about: "Full-stack developer with 5 years of experience. Passionate about teaching and learning new technologies.",
    achievements: ["Creative Badger", "Top Rated"],
    totalSwaps: 24,
    joinedDate: "2024"
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="p-8 rounded-xl bg-card border border-border shadow-lg dark:bg-gray-900/50 dark:border-gray-800">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="relative h-40 w-40 rounded-full overflow-hidden border-4 border-primary/20 dark:border-primary/10 shadow-xl">
              <Image
                src={profile.profileImage}
                alt={`${profile.name}'s profile`}
                fill
                className="object-cover"
              />
            </div>
          
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent dark:from-primary/90 dark:to-primary/60">{profile.name}</h1>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="default" className="bg-green-500/10 text-green-500 dark:bg-green-500/20 dark:text-green-400">
                    {profile.availability}
                  </Badge>
                  <span className="text-muted-foreground dark:text-gray-400">Member since {profile.joinedDate}</span>
                </div>
              </div>
              <SkillSwapDialog 
                userSkills={currentUserSkills}
                targetSkills={profile.skillsOffered}
                onRequestSent={() => {
                  // Handle successful request
                  console.log("Request sent successfully");
                }}
              />
            </div>
            
            <p className="text-muted-foreground dark:text-gray-400 mb-6">{profile.about}</p>
            
            <div className="flex gap-4">
              <div className="text-center px-4 py-2 bg-muted dark:bg-gray-800 rounded-lg border border-border dark:border-gray-700">
                <div className="text-2xl font-bold text-primary dark:text-primary/90">{profile.totalSwaps}</div>
                <div className="text-sm text-muted-foreground dark:text-gray-400">Successful Swaps</div>
              </div>
              <div className="text-center px-4 py-2 bg-muted dark:bg-gray-800 rounded-lg border border-border dark:border-gray-700">
                <div className="text-2xl font-bold text-primary dark:text-primary/90">{profile.rating}</div>
                <div className="text-sm text-muted-foreground dark:text-gray-400">Rating</div>
              </div>
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
    </div>
  );
}
