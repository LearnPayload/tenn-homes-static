"use client";

import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Select } from "@workspace/ui/components/select";
import { Button } from "@workspace/ui/components/button";
import { Phone, Search } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

import homeForeground from "@workspace/ui/assets/smokymountainhome2.png";
import homeBackground from "@workspace/ui/assets/home-background.png";
import { cn } from "@workspace/ui/lib/utils";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Calculate scale based on scroll position
  const calculateScale = () => {
    const maxScale = 1.2; // Starting scale
    const minScale = 1; // Minimum scale
    const scrollThreshold = 500; // Distance to scroll before reaching min scale

    // Calculate scale based on scroll position
    const scale = Math.max(
      minScale,
      maxScale - (scrollY / scrollThreshold) * (maxScale - minScale)
    );

    return scale;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative lg:h-[640px] 2xl:h-[840px]">
        <div
          ref={imageRef}
          className={cn(
            `absolute inset-0 z-0 overflow-hidden bg-left-top bg-cover bg-fixed`
          )}
          style={{
            backgroundImage: `url(${homeBackground.src})`,
          }}
        >
          <Image
            src={homeForeground}
            alt="Aerial view of the Blue Ridge Mountains in East Tennessee"
            fill
            className="object-center object-cover"
            style={{
              transform: `scale(${calculateScale()})`,
              willChange: "transform",
            }}
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-0 py-6 lg:py-32">
          <div className="max-w-xl space-y-5 bg-background/50 p-6 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Discover Your Dream Home in East Tennessee
            </h1>
            <p className="text-primary/80 max-w-md">
              Explore our collection of beautiful properties across the Smoky
              Mountains, from Knoxville to Johnson City. Find your perfect home
              in the heart of Tennessee's most scenic region.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-4 py-2 flex items-center gap-2">
              <Phone className="h-4 w-4" />
              (865) 555-1234
            </Button>
          </div>

          {/* Search Filters */}
          <div className="mt-12 bg-background p-6 rounded-lg shadow-lg max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-1">
                <div className="flex flex-col h-full">
                  <span className="text-xs font-medium text-muted-foreground mb-1">
                    PROPERTY TYPE
                  </span>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-full border-muted text-accent-foreground">
                      <SelectValue placeholder="Property Type" />
                    </SelectTrigger>
                    <SelectContent className="text-foreground bg-background">
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="condo">Condo</SelectItem>
                      <SelectItem value="land">Land</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="md:col-span-1">
                <div className="flex flex-col h-full">
                  <span className="text-xs font-medium text-muted-foreground mb-1">
                    LOCATION
                  </span>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-full border-muted text-accent-foreground">
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      <SelectItem value="knoxville">Knoxville</SelectItem>
                      <SelectItem value="chattanooga">Chattanooga</SelectItem>
                      <SelectItem value="gatlinburg">Gatlinburg</SelectItem>
                      <SelectItem value="johnson-city">Johnson City</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="md:col-span-1">
                <div className="flex flex-col h-full">
                  <span className="text-xs font-medium text-muted-foreground mb-1">
                    PRICE
                  </span>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-full border-muted text-accent-foreground">
                      <SelectValue placeholder="Price" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any Price</SelectItem>
                      <SelectItem value="100k-300k">$100k - $300k</SelectItem>
                      <SelectItem value="300k-500k">$300k - $500k</SelectItem>
                      <SelectItem value="500k-750k">$500k - $750k</SelectItem>
                      <SelectItem value="750k-1m">$750k - $1M</SelectItem>
                      <SelectItem value="1m+">$1M+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="md:col-span-1">
                <div className="flex flex-col h-full justify-end">
                  <Button>
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
