
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

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            {/* Brand Section */}
            <div>
              <h3 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent mb-4 drop-shadow-lg">
                Skill Swap
              </h3>
              <p className="text-gray-300 text-base mb-4 italic">
                Made with <span className="animate-pulse text-pink-400">❤️</span> by Hackaholics
              </p>
              <div className="flex items-center gap-2 mt-2">
                <Star className="text-yellow-400 w-5 h-5 animate-bounce" />
                <span className="text-sm text-gray-400">Empowering learners worldwide</span>
              </div>
            </div>

            {/* Links Sections */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              {/* About Column */}
              <div>
                <h4 className="text-lg font-bold mb-4 text-blue-300 tracking-wide">About</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 font-medium">
                      Our Mission
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 font-medium">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200 font-medium">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>

              {/* Services Column */}
              <div>
                <h4 className="text-lg font-bold mb-4 text-purple-300 tracking-wide">Services</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200 font-medium">
                      Products
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200 font-medium">
                      Join Our Team
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200 font-medium">
                      Partner With Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-bold mb-4 text-pink-300 tracking-wide">Connect</h4>
                <div className="flex space-x-5">
                  <a href="#" className="group" aria-label="Discord">
                    <span className="inline-block bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full p-2 group-hover:scale-110 transition-transform shadow-lg">
                      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                      </svg>
                    </span>
                  </a>
                  <a href="#" className="group" aria-label="X (Twitter)">
                    <span className="inline-block bg-gradient-to-br from-gray-700 to-black rounded-full p-2 group-hover:scale-110 transition-transform shadow-lg">
                      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </span>
                  </a>
                  <a href="#" className="group" aria-label="YouTube">
                    <span className="inline-block bg-gradient-to-br from-red-500 to-pink-600 rounded-full p-2 group-hover:scale-110 transition-transform shadow-lg">
                      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </span>
                  </a>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400 text-xs">Join our 10,000+ member community!</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              © 2025 Skill Swap. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
