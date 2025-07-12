'use client';

import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  return (
<<<<<<< HEAD
    <header className="w-full border-b border-border/40 backdrop-blur-sm fixed top-0 z-50 bg-background/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Skill Swap
            </h2>
          </Link>
=======
    <header
      className="relative flex h-24 w-full items-center justify-between bg-popover px-3 sm:px-8 header-shadow"
    >
      <Link className="flex flex-item gap-2" href="/">
        <Image
          src="/logo.png"
          height={50}
          width={50}
          alt="Logo"
          className="rounded-full"
          priority
        />
        <h1 className="flex flex-col pb-1 text-2xl font-semibold leading-6">
          Skill Swap<span> </span>
        </h1>
      </Link>
>>>>>>> b5743c2d8f5703daf2a704072f29d806e749cf1a

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/explore" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Explore
            </Link>
            <Link href="/how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-sm" asChild>
              <Link href="/login" passHref>
                Login
              </Link>
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link href="/sign-up" passHref>
                Sign Up
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}