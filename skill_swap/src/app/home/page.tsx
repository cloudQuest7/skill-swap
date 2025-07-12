"use client";
import React from 'react';
import { Button } from '@/frontend/Components/ui/button';
import { Card } from '@/frontend/Components/ui/card';
import { SkillProfiles } from '@/frontend/Components/SkillProfiles';
import LogOutButton from '@/frontend/Components/LogOutButton';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  // Simulate user data (replace with real user info as needed)
  const isLoggedIn = true; // Replace with real auth state
  const user = {
    name: 'Jane Doe',
    avatar: '/placeholder-avatar.jpg',
  };

  return (
    <div className="relative">
      {/* Top-right user profile and logout (responsive & dynamic) */}
      <div className="fixed top-4 right-2 sm:top-6 sm:right-8 z-50 flex items-center gap-2 sm:gap-4 bg-background/80 rounded-full shadow-lg px-2 sm:px-4 py-1.5 sm:py-2 border border-border backdrop-blur-md">
        {isLoggedIn ? (
          <>
            <div className="relative h-8 w-8 sm:h-10 sm:w-10">
              <Link href="/profile/me" title="View Profile">
                <div className="absolute inset-0 rounded-full bg-primary/20 border-2 border-primary/30" />
                <Image
                  src={user.avatar}
                  alt={user.name}
                  width={40}
                  height={40}
                  className="rounded-full border border-primary relative z-10 object-cover h-full w-full cursor-pointer"
                />
              </Link>
            </div>
            <span className="font-semibold text-sm sm:text-base text-foreground hidden md:block max-w-[90px] sm:max-w-[120px] truncate">
              {user.name}
            </span>
            <LogOutButton />
          </>
        ) : (
          <Button asChild className="text-sm sm:text-base">
            <Link href="/login">Login</Link>
          </Button>
        )}
      </div>
      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">Welcome Back!</h1>
              <p className="text-muted-foreground">Your skill-swapping journey continues here.</p>
            </div>
            
          </div>

          <SkillProfiles />
        </div>
      </div>
    </div>
  );
}
