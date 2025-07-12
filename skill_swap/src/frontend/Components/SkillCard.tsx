"use client"

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/frontend/Components/ui/button';
import { Badge } from '@/frontend/Components/ui/badge';

interface SkillProfile {
  name: string;
  profileImage: string;
  skillsOffered: string[];
  skillsWanted: string[];
  rating: number;
}

export function SkillCard({ profile }: { profile: SkillProfile }) {
  const router = useRouter();

  const handleCardClick = () => {
    // Convert name to URL-friendly format for the ID
    const profileId = profile.name.toLowerCase().replace(/\s+/g, '-');
    router.push(`/profile/${profileId}`);
  };

  return (
    <div 
      className="group relative bg-gray-800 rounded-xl cursor-pointer border border-transparent hover:border-white/5 transition-colors duration-300"
      onClick={handleCardClick}
    >
      {/* Main Content */}
      <div className="relative p-6">
        <div className="flex items-start gap-6">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative h-20 w-20 rounded-full overflow-hidden ring-1 ring-white/10">
              <Image
                src={profile.profileImage}
                alt={`${profile.name}'s profile`}
                fill
                className="object-cover"
              />
            </div>
            {/* Rating Badge */}
            <div className="absolute -bottom-2 -right-2 bg-gray-700 rounded-full p-0.5">
              <div className="flex items-center gap-1 px-2 py-0.5 rounded-full">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-bold text-gray-400">{profile.rating}</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 space-y-4">
            {/* Name and Skills Header */}
            <div>
              <h3 className="text-xl font-bold text-white">
                {profile.name}
              </h3>
              <p className="text-sm text-gray-400 mt-1">Professional Skill Exchanger</p>
            </div>
            
            {/* Skills Section */}
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Skills Offered
                </h4>
                <div className="flex flex-wrap gap-2">
                  {profile.skillsOffered.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="default" 
                      className="bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Looking To Learn
                </h4>
                <div className="flex flex-wrap gap-2">
                  {profile.skillsWanted.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Action Button */}
          <Button 
            className="bg-gray-700 text-gray-200 hover:bg-gray-600 transition-colors shadow"
            onClick={(e) => {
              e.stopPropagation();
              // Handle request logic here
              alert('Request sent!');
            }}
          >
            Connect
          </Button>
        </div>
      </div>
    </div>
  );
}
