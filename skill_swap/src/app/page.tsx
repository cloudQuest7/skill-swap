
import React from 'react';
import { Button } from '@/frontend/Components/ui/button';
import { Input } from '@/frontend/Components/ui/input';
import { ArrowRight, Users, BookOpen, Star } from 'lucide-react';
import { SkillProfiles } from '@/frontend/Components/SkillProfiles';
import Header from '@/frontend/Components/Header';

export default function SkillSwapHero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95 text-foreground">
      <Header />
      {/* Add padding for the fixed header */}
      <div className="h-16"></div>
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[30%] -left-[10%] w-[500px] h-[500px] bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-[20%] -right-[10%] w-[400px] h-[400px] bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          {/* Decorative elements */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-4 opacity-80">
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-bounce"></div>
            <div className="w-3 h-3 rounded-full bg-purple-500 animate-bounce delay-100"></div>
            <div className="w-3 h-3 rounded-full bg-cyan-500 animate-bounce delay-200"></div>
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 relative">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent 
              [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] animate-gradient-x">
              Skill Swap
            </span>
            <div className="absolute -right-8 top-0 text-2xl animate-bounce"></div>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed
            animate-fade-in backdrop-blur-sm">
            Connect, learn, and grow by exchanging skills with talented individuals worldwide
          </p>
          
          {/* Search Bar with enhanced styling */}
          <div className="flex max-w-xl mx-auto mb-10 transform hover:scale-[1.02] transition-all duration-300">
            <Input 
              placeholder="What do you want to learn?" 
              className="flex-1 bg-background/80 backdrop-blur-md border-2 border-primary/20 text-foreground 
                placeholder-muted-foreground text-lg py-6 rounded-l-xl shadow-[0_0_25px_rgba(59,130,246,0.15)]
                focus:border-primary/40 transition-all duration-300"
            />
            <Button className="ml-0 bg-primary hover:bg-primary/90 px-8 py-6 rounded-r-xl
              shadow-[0_0_25px_rgba(59,130,246,0.2)] hover:shadow-[0_0_35px_rgba(59,130,246,0.3)]
              transition-all duration-300">
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
            <Button size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-7 text-lg
                shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:shadow-[0_0_35px_rgba(59,130,246,0.4)]
                transition-all duration-300 hover:scale-105 rounded-xl group">
              <span>Start Learning</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" 
              className="border-2 border-primary/30 text-foreground hover:bg-accent/50 px-10 py-7 text-lg
                backdrop-blur-sm transition-all duration-300 hover:scale-105 rounded-xl
                hover:border-primary/50">
              <Users className="w-5 h-5 mr-2" />
              <span>Swap Skills</span>
            </Button>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>10k+ Users</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              <span>500+ Skills</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4" />
              <span>4.9/5 Rating</span>
            </div>
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
        <div className="container mx-auto px-4 max-w-7xl rounded-xl md:mx-8 lg:mx-16 xl:mx-32 shadow-lg">
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
                  <a href="https://github.com" target="_blank" rel="noopener" className="group" aria-label="GitHub">
                    <span className="inline-block bg-gradient-to-br from-gray-700 to-gray-900 rounded-full p-2 group-hover:scale-110 transition-transform shadow-lg">
                      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </span>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener" className="group" aria-label="LinkedIn">
                    <span className="inline-block bg-gradient-to-br from-blue-600 to-blue-800 rounded-full p-2 group-hover:scale-110 transition-transform shadow-lg">
                      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </span>
                  </a>
                  <a href="mailto:contact@skillswap.com" className="group" aria-label="Email">
                    <span className="inline-block bg-gradient-to-br from-purple-500 to-purple-700 rounded-full p-2 group-hover:scale-110 transition-transform shadow-lg">
                      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
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
