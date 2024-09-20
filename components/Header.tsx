"use client";

import { UserButton, SignInButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
  const { isSignedIn } = useUser();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              width={30}
              height={30}
              className="object-cover"
              alt="Invoice AI Logo"
            />
            <span className="font-bold text-xl hidden sm:inline-block text-[#006D77]">
              Invoice AI
            </span>
          </Link>

          <nav className=" flex md:flex items-center space-x-4 h-full">
            <Link href="/dashboard">
              <Button
                size="sm"
                className="bg-[#E29578] text-white hover:bg-[#d68469]"
              >
                Dashboard
              </Button>
            </Link>
            {!isSignedIn && (
              <SignInButton forceRedirectUrl="/dashboard">
                <Button
                  size="sm"
                  className="bg-[#E29578] text-white hover:bg-[#d68469]"
                >
                  Sign In
                </Button>
              </SignInButton>
            )}
            {isSignedIn && (
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "h-9 w-9",
                  },
                }}
              />
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
