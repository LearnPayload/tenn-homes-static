"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";
import { Button } from "@workspace/ui/components/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet";
import { Menu } from "lucide-react";
import logo from "@workspace/ui/assets/TENNHOMES.svg";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`lg:fixed top-0 left-0 right-0 z-50 py-2 px-4 lg:px-0 transition-all duration-300 ${isScrolled ? "bg-background shadow-md" : "bg-transparent"}`}
    >
      <div className="container flex h-16 items-center justify-between py-4 mx-auto">
        <div className="flex items-center gap-2">
          <Image src={logo} alt="{company_name}" width={139} height={40} />
        </div>

        <nav className="hidden md:flex items-center gap-8 bg-background/50 px-6 py-2 rounded-full">
          <Link
            href="/listings"
            className="text-sm font-medium text-primary hover:text-primary"
          >
            LISTINGS
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-primary hover:text-primary"
          >
            ABOUT
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-primary hover:text-primary"
          >
            BLOG
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-primary hover:text-primary"
          >
            CONTACT
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex space-x-2">
            <Button variant="ghost" className="font-medium">
              Sign In
            </Button>
            <Button className="font-medium">Get Started</Button>
          </div>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="size-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>
                <Image
                  src={logo}
                  alt="{company_name}"
                  width={139}
                  height={40}
                />
              </SheetTitle>
              <SheetDescription>
                Tennessee Homes is a real estate company that specializes in
                selling and renting homes in Tennessee.
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-4 p-6">
              <Link
                href="/listings"
                className="text-lg font-medium text-primary hover:text-primary"
              >
                LISTINGS
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium text-primary hover:text-primary"
              >
                ABOUT
              </Link>
              <Link
                href="/blog"
                className="text-lg font-medium text-primary hover:text-primary"
              >
                BLOG
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium text-primary hover:text-primary"
              >
                CONTACT
              </Link>
              <div className="flex flex-col gap-2 pt-4 ">
                <Button
                  variant="link"
                  className="w-full justify-start text-lg underline"
                >
                  Sign In
                </Button>
                <Button className="w-full justify-start text-lg">
                  Get Started
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
