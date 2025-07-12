"use client"

import React from 'react';
import Image from 'next/image';
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
  return (
    <div className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="relative h-16 w-16 rounded-full overflow-hidden">
          <Image
            src={profile.profileImage}
            alt={`${profile.name}'s profile`}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{profile.name}</h3>
          
          <div className="space-y-2">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Skills Offered:</p>
              <div className="flex flex-wrap gap-2">
                {profile.skillsOffered.map((skill) => (
                  <Badge key={skill} variant="default" className="bg-primary/10 text-primary hover:bg-primary/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground mb-1">Skills Wanted:</p>
              <div className="flex flex-wrap gap-2">
                {profile.skillsWanted.map((skill) => (
                  <Badge key={skill} variant="outline" className="border-blue-500/30">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-1">
            <span className="text-lg font-semibold">{profile.rating}</span>
            <span className="text-sm text-muted-foreground">/5</span>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Request
          </Button>
        </div>
      </div>
    </div>
  );
}
