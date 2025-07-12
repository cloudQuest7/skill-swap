import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import LogOutButton from "./LogOutButton";

function Header() {
  const user = null; // Replace with actual user authentication logic
  return (
    <header
      className="relative flex h-24 w-full items-center justify-between bg-popover px-3 sm:px-8 header-shadow"
    >
      <Link className="flex flex-item gap-2" href="/">
        <Image
          src="/napio.png"
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

      <div className="flex items-center gap-4">
        <ThemeToggle />
        {user ? (
        <LogOutButton/>
        ) : (
          <>
          <Button asChild type="button" title="Sign Up" className="hidden sm:block">
            <Link href="/sign-up">Sign Up</Link>
          </Button>
          <Button asChild type="button" variant="outline" title="Login">
            <Link href="/login">Login</Link>
          </Button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header