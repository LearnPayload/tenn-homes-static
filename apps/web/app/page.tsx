import Link from "next/link";
import Image from "next/image";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Card, CardContent } from "@workspace/ui/components/card";
import {
  MapPin,
  Star,
  ChevronRight,
  ChevronLeft,
  RulerIcon,
  BedIcon,
  ToiletIcon,
} from "lucide-react";
import { Header } from "@/components/header";
import Hero from "@/components/hero";
const company_name = "Tenn Homes";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <Hero />

        {/* About Section */}
        <section className="py-16 bg-background text-foreground">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">
                  Your Trusted Partner in East Tennessee Real Estate
                </h2>
                <p className="text-muted-foreground mb-6">
                  With deep roots in East Tennessee, we understand what makes
                  this region special. From the Great Smoky Mountains to the
                  Tennessee River, we help you find the perfect property that
                  captures the essence of mountain living.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our team of local experts knows every corner of East
                  Tennessee, from Knoxville's vibrant downtown to the peaceful
                  mountain communities. We'll guide you through every step of
                  finding your dream home in this beautiful region.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-md px-6 py-2.5">
                  MEET OUR TEAM
                </Button>
              </div>

              <div className="md:w-1/2 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-6 rounded-md">
                  <div className="text-3xl font-bold text-primary mb-2">
                    25+
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Years of experience in the local real estate market helping
                    clients find their dream homes
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-md">
                  <div className="text-3xl font-bold text-primary mb-2">
                    1.5k
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Happy clients whose dream homes we've helped them find and
                    purchase
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-md">
                  <div className="text-3xl font-bold text-primary mb-2">
                    18+
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Professional agents with exceptional local knowledge
                    ensuring quality service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Properties */}
        <section className="py-16 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold">
                  Featured Properties in East Tennessee
                </h2>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Property Card 1 */}
              <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow py-0">
                <div className="relative">
                  <Image
                    src="https://placehold.co/600x400/png"
                    alt="Amazing Home For Family"
                    width={600}
                    height={400}
                    className="object-cover h-48 w-full"
                  />
                  <div className="absolute top-4 left-4 bg-[#193C40] text-white px-2 py-1 text-xs font-medium">
                    FEATURED
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-1">
                    Amazing Home For Family
                  </h3>
                  <p className="text-primary font-bold mb-2">$850,000</p>
                  <div className="flex items-center text-muted-foreground text-sm mb-3">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>Knoxville, TN</span>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground border-t pt-3">
                    <span className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2 22h20M2 11h20M15 2H9l-3 9h12l-3-9z"
                        />
                      </svg>
                      3
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                      2
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                        />
                      </svg>
                      2,100 Sq Ft
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Property Card 2 */}
              <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow py-0">
                <div className="relative">
                  <Image
                    src="https://placehold.co/600x400/png"
                    alt="Scandinavian Style Home"
                    width={600}
                    height={400}
                    className="object-cover h-48 w-full"
                  />
                  <div className="absolute top-4 left-4 bg-[#2E5902] text-white px-2 py-1 text-xs font-medium">
                    FOR SALE
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-1">
                    Scandinavian Style Home
                  </h3>
                  <p className="text-primary font-bold mb-2">$645,000</p>
                  <div className="flex items-center text-muted-foreground text-sm mb-3">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>Gatlinburg, TN</span>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground border-t pt-3">
                    <span className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2 22h20M2 11h20M15 2H9l-3 9h12l-3-9z"
                        />
                      </svg>
                      3
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                      2
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                        />
                      </svg>
                      1,800 Sq Ft
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Property Card 3 */}
              <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow py-0">
                <div className="relative">
                  <Image
                    src="https://placehold.co/600x400/png"
                    alt="Modern Family Home"
                    width={600}
                    height={400}
                    className="object-cover h-48 w-full"
                  />
                  <div className="absolute top-4 left-4 bg-[#D96941] text-white px-2 py-1 text-xs font-medium">
                    NEW
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-1">Modern Family Home</h3>
                  <p className="text-primary font-bold mb-2">$475,000</p>
                  <div className="flex items-center text-muted-foreground text-sm mb-3">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>Johnson City, TN</span>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground border-t pt-3">
                    <span className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2 22h20M2 11h20M15 2H9l-3 9h12l-3-9z"
                        />
                      </svg>
                      4
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                      3
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                        />
                      </svg>
                      2,450 Sq Ft
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Property Card 4 */}
              <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow py-0">
                <div className="relative">
                  <Image
                    src="https://placehold.co/600x400/png"
                    alt="Elegant Villa"
                    width={600}
                    height={400}
                    className="object-cover h-48 w-full"
                  />
                  <div className="absolute top-4 left-4 bg-[#A62B1F] text-white px-2 py-1 text-xs font-medium">
                    LUXURY
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-1">Elegant Villa</h3>
                  <p className="text-primary font-bold mb-2">$1,700,000</p>
                  <div className="flex items-center text-muted-foreground text-sm mb-3">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>Chattanooga, TN</span>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground border-t pt-3">
                    <span className="flex items-center gap-1">
                      <ToiletIcon size={16} />5
                    </span>
                    <span className="flex items-center gap-1">
                      <BedIcon size={16} />4
                    </span>
                    <span className="flex items-center gap-1">
                      <RulerIcon size={16} />
                      3,700 Sq Ft
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Property Types */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">
              Explore East Tennessee's Diverse Property Types
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Type 1 */}
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="https://placehold.co/600x400/png"
                  alt="Apartment"
                  width={500}
                  height={300}
                  className="object-cover h-64 w-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-1">
                    APARTMENT
                  </h3>
                  <p className="text-white/80 text-sm">10 PROPERTIES</p>
                </div>
              </div>

              {/* Type 2 */}
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="https://placehold.co/500x300/png"
                  alt="Single Family Home"
                  width={500}
                  height={300}
                  className="object-cover h-64 w-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-1">
                    SINGLE FAMILY HOME
                  </h3>
                  <p className="text-white/80 text-sm">24 PROPERTIES</p>
                </div>
              </div>

              {/* Type 3 */}
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="https://placehold.co/500x300/png"
                  alt="Villa"
                  width={500}
                  height={300}
                  className="object-cover h-64 w-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-1">VILLA</h3>
                  <p className="text-white/80 text-sm">8 PROPERTIES</p>
                </div>
              </div>

              {/* Type 4 */}
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="https://placehold.co/500x300/png"
                  alt="Condo"
                  width={500}
                  height={300}
                  className="object-cover h-64 w-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-1">CONDO</h3>
                  <p className="text-white/80 text-sm">12 PROPERTIES</p>
                </div>
              </div>

              {/* Type 5 */}
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="https://placehold.co/500x300/png"
                  alt="Land"
                  width={500}
                  height={300}
                  className="object-cover h-64 w-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-1">LAND</h3>
                  <p className="text-white/80 text-sm">6 PROPERTIES</p>
                </div>
              </div>

              {/* Type 6 */}
              <div className="group relative overflow-hidden rounded-lg">
                <Image
                  src="https://placehold.co/500x300/png"
                  alt="Office"
                  width={500}
                  height={300}
                  className="object-cover h-64 w-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-1">OFFICE</h3>
                  <p className="text-white/80 text-sm">5 PROPERTIES</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row bg-background rounded-lg overflow-hidden shadow-lg">
              <div className="md:w-1/2 p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Find Your East Tennessee Dream Home?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Contact us now for a free consultation with one of our expert
                  East Tennessee agents. We'll help you find the perfect
                  property that meets all your requirements, whether you're
                  looking for a mountain retreat or a downtown condo.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-white w-fit">
                  CONTACT US
                </Button>
              </div>
              <div className="md:w-1/2 relative min-h-[300px]">
                <Image
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Professional real estate agent in modern office"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-background text-foreground">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12">Testimonials</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-accent p-8 rounded-lg">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "Working with {company_name} was an absolute pleasure. They
                  understood exactly what we were looking for in the Smoky
                  Mountains and made the entire process smooth. They found our
                  dream home with the perfect mountain view!"
                </p>
                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-accent">
                    <Image
                      src="https://placehold.co/100x100/png"
                      alt="Client"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">
                      Knoxville, TN
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-accent p-8 rounded-lg">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "I was impressed by the professionalism and local knowledge of
                  the team at {company_name}. They sold our home in Knoxville
                  quickly and at the best price. Their understanding of the East
                  Tennessee market is unmatched!"
                </p>
                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-accent">
                    <Image
                      src="https://placehold.co/100x100/png"
                      alt="Client"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">James Smith</h4>
                    <p className="text-sm text-muted-foreground">
                      Gatlinburg, TN
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-accent p-8 rounded-lg">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "As a first-time homebuyer in Johnson City, I was nervous. But
                  they made the process so easy. They were always there to
                  answer my questions about the area and helped me find the
                  perfect starter home in a great neighborhood."
                </p>
                <div className="flex items-center">
                  <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-accent">
                    <Image
                      src="https://placehold.co/100x100/png"
                      alt="Client"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Emily Rodriguez</h4>
                    <p className="text-sm text-muted-foreground">
                      Johnson City, TN
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-16 bg-accent text-accent-foreground">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12">
              East Tennessee Real Estate Tips, Trends, And Updates
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Blog Post 1 */}
              <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1596134474939-f248eb9ed3fe?q=80&w=3786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Downtown Knoxville Market Square"
                    width={500}
                    height={300}
                    className="object-cover h-48 w-full"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">
                    Guide to Downtown Knoxville: Market Square and Beyond
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    Discover the charm of Market Square, local eateries, and the
                    vibrant culture that makes downtown Knoxville a perfect
                    place to call home.
                  </p>
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span>April 6, 2025</span>
                    <Button
                      variant="link"
                      className="text-primary p-0 h-auto font-medium"
                    >
                      Continue Reading
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Blog Post 2 */}
              <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1625663033411-61031d9ac19e?q=80&w=4287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Gatlinburg Scenic View"
                    width={500}
                    height={300}
                    className="object-cover h-48 w-full"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">
                    Living in Gatlinburg: A Local's Perspective
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    Experience the magic of living in the Gateway to the Smokies
                    - from year-round tourism to peaceful mountain living.
                  </p>
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span>March 28, 2025</span>
                    <Button
                      variant="link"
                      className="text-primary p-0 h-auto font-medium"
                    >
                      Continue Reading
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Blog Post 3 */}
              <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1657312145619-8fdad5e7b663?q=80&w=4315&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Johnson City Downtown"
                    width={500}
                    height={300}
                    className="object-cover h-48 w-full"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">
                    Johnson City's Growing Communities
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    Explore the newest developments and family-friendly
                    neighborhoods in Johnson City's thriving community.
                  </p>
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span>March 15, 2025</span>
                    <Button
                      variant="link"
                      className="text-primary p-0 h-auto font-medium"
                    >
                      Continue Reading
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Blog Post 4 */}
              <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1509838174235-432f709c7bfd?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Fall colors in the Smokies"
                    width={500}
                    height={300}
                    className="object-cover h-48 w-full"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">
                    Best Neighborhoods for Mountain Views
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    Find your perfect mountain vista - top communities in Sevier
                    County with spectacular Smoky Mountain views.
                  </p>
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span>March 5, 2025</span>
                    <Button
                      variant="link"
                      className="text-primary p-0 h-auto font-medium"
                    >
                      Continue Reading
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated With East Tennessee Real Estate
            </h2>
            <p className="max-w-2xl mx-auto mb-8">
              Sign up for our newsletter and be the first to know about new
              properties, market trends, and expert advice about living in East
              Tennessee. No spam, just valuable content about our beautiful
              region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background text-foreground border-0"
              />
              <Button variant="outline">SIGN UP</Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background text-foreground border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-bold text-primary">
                  {company_name}
                </span>
              </div>
              <p className="text-muted-foreground mb-4">
                Your trusted partner for East Tennessee real estate since 2005.
                We're committed to helping you find the perfect property that
                meets all your requirements, whether you're looking for a
                mountain retreat, downtown condo, or family home.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Market</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-primary"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/listings"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Listings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/agents"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Agents
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Real Estate</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Houses
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Apartments
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Condos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Villas
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Land
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Commercial
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Help</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-muted mt-12 pt-8 text-sm text-center text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} {company_name}. All rights
              reserved.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
