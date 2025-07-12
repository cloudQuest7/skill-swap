"use client";

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

interface ProfilePageProps {
  params: {
    id: string;
  };
}

export default function ProfilePage({ params }: ProfilePageProps) {
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
    availability: "Available Now",
    availabilityTime: "Weekends & Evenings",
    totalSwaps: 24,
    rating: 4.7,
  };

  return (
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
