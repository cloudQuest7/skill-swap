
import React from 'react';
import { Button } from '@/frontend/Components/ui/button';
import { Input } from '@/frontend/Components/ui/input';
import { ArrowRight, Users, BookOpen, Star } from 'lucide-react';
import { SkillProfiles } from '@/frontend/Components/SkillProfiles';

export default function SkillSwapHero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95 text-foreground">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(59,130,246,0.2)] dark:drop-shadow-[0_0_35px_rgba(59,130,246,0.15)]">
            Skill Swap Platform
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Connect, learn, and grow by exchanging skills with talented individuals worldwide
          </p>
          
          {/* Search Bar */}
          <div className="flex max-w-xl mx-auto mb-8">
            <Input 
              placeholder="Search for skills..." 
              className="flex-1 bg-background/50 backdrop-blur-sm border-input text-foreground placeholder-muted-foreground text-lg py-6 shadow-[0_0_15px_rgba(59,130,246,0.1)]"
            />
            <Button className="ml-2 bg-primary hover:bg-primary/90 px-8 py-6">
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]">
              Start Learning
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-accent px-8 py-6 text-lg backdrop-blur-sm transition-all duration-300">
              Become a Teacher
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg bg-gray-900 border border-gray-800">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Find Skills</h3>
              <p className="text-gray-400">Browse through hundreds of skills offered by our community members</p>
            </div>
            <div className="text-center p-8 rounded-lg bg-gray-900 border border-gray-800">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <p className="text-gray-400">Send requests and connect with skilled individuals in your area</p>
            </div>
            <div className="text-center p-8 rounded-lg bg-gray-900 border border-gray-800">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Swap & Learn</h3>
              <p className="text-gray-400">Exchange skills and knowledge through collaborative learning</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Skill Profiles Section */}
      <SkillProfiles />
    </div>
  );
}
