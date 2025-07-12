"use client";
import React from 'react';
import { Button } from '@/frontend/Components/ui/button';
import { Card } from '@/frontend/Components/ui/card';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Welcome Back!</h1>
            <p className="text-muted-foreground">Your skill-swapping journey continues here.</p>
          </div>
          <Button className="bg-primary">Find New Connections</Button>
        </div>

        {/* Stats and Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 dark:bg-gray-900/50">
            <h3 className="text-lg font-semibold mb-2">Active Swaps</h3>
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <p className="text-sm text-muted-foreground">Ongoing skill exchanges</p>
          </Card>
          
          <Card className="p-6 dark:bg-gray-900/50">
            <h3 className="text-lg font-semibold mb-2">Messages</h3>
            <div className="text-3xl font-bold text-primary mb-2">12</div>
            <p className="text-sm text-muted-foreground">Unread messages</p>
          </Card>
          
          <Card className="p-6 dark:bg-gray-900/50">
            <h3 className="text-lg font-semibold mb-2">Reputation</h3>
            <div className="text-3xl font-bold text-primary mb-2">4.8</div>
            <p className="text-sm text-muted-foreground">Average rating</p>
          </Card>
        </div>

        {/* Recent Activity */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <Card className="p-4 dark:bg-gray-900/50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">New Skill Match</h3>
                  <p className="text-sm text-muted-foreground">Sarah wants to exchange UI/UX skills for Python</p>
                </div>
                <Button variant="outline" size="sm">View Details</Button>
              </div>
            </Card>
            <Card className="p-4 dark:bg-gray-900/50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Completed Swap</h3>
                  <p className="text-sm text-muted-foreground">Successfully completed React.js exchange with Mike</p>
                </div>
                <Button variant="outline" size="sm">View Details</Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Recommended Swaps */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Recommended Skill Swaps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 dark:bg-gray-900/50">
              <h3 className="font-semibold mb-2">Frontend Development</h3>
              <p className="text-sm text-muted-foreground mb-4">3 people looking to exchange React skills</p>
              <Button className="w-full" variant="outline">Explore</Button>
            </Card>
            <Card className="p-6 dark:bg-gray-900/50">
              <h3 className="font-semibold mb-2">UI/UX Design</h3>
              <p className="text-sm text-muted-foreground mb-4">5 people interested in Figma skills</p>
              <Button className="w-full" variant="outline">Explore</Button>
            </Card>
            <Card className="p-6 dark:bg-gray-900/50">
              <h3 className="font-semibold mb-2">Backend Development</h3>
              <p className="text-sm text-muted-foreground mb-4">2 people offering Node.js expertise</p>
              <Button className="w-full" variant="outline">Explore</Button>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
