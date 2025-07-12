"use client"

import React from 'react';
import { SkillCard } from './SkillCard';

const sampleProfiles = [
  {
    name: "Marc Demo",
    profileImage: "/placeholder-avatar.jpg",
    skillsOffered: ["React", "Next.js", "Python"],
    skillsWanted: ["Design", "Graphic Design"],
    rating: 3.8
  },
  {
    name: "Michell",
    profileImage: "/placeholder-avatar.jpg",
    skillsOffered: ["UI Design", "Figma", "Adobe XD"],
    skillsWanted: ["React", "Frontend Dev"],
    rating: 2.5
  },
  {
    name: "Joe Wills",
    profileImage: "/placeholder-avatar.jpg",
    skillsOffered: ["Node.js", "MongoDB", "Express"],
    skillsWanted: ["UI/UX", "Design Systems"],
    rating: 4.0
  }
];

export function SkillProfiles() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [availability, setAvailability] = React.useState('');
  const [skillCategory, setSkillCategory] = React.useState('');
  const [currentPage, setCurrentPage] = React.useState(1);
  const profilesPerPage = 5;

  const filteredProfiles = React.useMemo(() => {
    return sampleProfiles.filter(profile => {
      const matchesSearch = searchQuery === '' || 
        profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile.skillsOffered.some(skill => 
          skill.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        profile.skillsWanted.some(skill => 
          skill.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCategory = skillCategory === '' ||
        profile.skillsOffered.some(skill => 
          skill.toLowerCase().includes(skillCategory.toLowerCase())
        );

      // In a real app, you would have availability status in the profile data
      const matchesAvailability = availability === '';

      return matchesSearch && matchesCategory && matchesAvailability;
    });
  }, [searchQuery, skillCategory, availability]);

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-6 mb-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Available Skill Swappers</h2>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 p-4 rounded-lg bg-muted/40 border border-border">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search skills or people..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-background border border-input rounded-md px-4 py-2 pr-10 text-sm focus:ring-2 focus:ring-primary"
                />
                <svg
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <select 
                className="bg-background border border-input rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-primary min-w-[140px]"
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                aria-label="Filter by availability"
              >
                <option value="">All Availability</option>
                <option value="available">Available Now</option>
                <option value="busy">Currently Busy</option>
                <option value="away">Away</option>
                <option value="scheduled">Scheduled Only</option>
              </select>

              <select 
                className="bg-background border border-input rounded-md px-4 py-2 text-sm focus:ring-2 focus:ring-primary min-w-[140px]"
                value={skillCategory}
                onChange={(e) => setSkillCategory(e.target.value)}
                aria-label="Filter by skill category"
              >
                <option value="">All Skills</option>
                <option value="design">Design</option>
                <option value="development">Development</option>
                <option value="marketing">Marketing</option>
                <option value="business">Business</option>
                <option value="language">Languages</option>
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {filteredProfiles
            .slice((currentPage - 1) * profilesPerPage, currentPage * profilesPerPage)
            .map((profile) => (
              <SkillCard key={profile.name} profile={profile} />
            ))}
        </div>

        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ←
          </button>

          {Array.from({ length: Math.ceil(filteredProfiles.length / profilesPerPage) }).map((_, index) => {
            const page = index + 1;
            const isActive = page === currentPage;
            const isNearCurrent = Math.abs(page - currentPage) <= 1 || page === 1 || page === Math.ceil(filteredProfiles.length / profilesPerPage);
            
            if (!isNearCurrent) {
              if (page === 2 || page === Math.ceil(filteredProfiles.length / profilesPerPage) - 1) {
                return <span key={page} className="px-2">...</span>;
              }
              return null;
            }

            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 flex items-center justify-center rounded-md transition-colors
                  ${isActive ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'}`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(filteredProfiles.length / profilesPerPage)))}
            disabled={currentPage === Math.ceil(filteredProfiles.length / profilesPerPage)}
            className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
