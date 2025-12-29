"use client";
import { AnimatedEntry } from "@/components/animations/animated-entry";
import { Features } from "@/components/Features";
import { MoreFeatures } from "@/components/MoreFeatures";
import { PlansSection } from "@/components/PlansSection";
import { Questions } from "@/components/Questions";
import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";
import { SocialNetworks } from "@/components/SocialNetworksSection";
import { Tittle } from "@/components/Tittle";
import { ToJoin } from "@/components/ToJoin";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollToTopButton } from "@/components/ui/button-scroll-up";
import { MyNumbersFloatingThings } from "@/components/ui/numbers-section";

export default function Home() {
  return (
    <>
      <div className="relative">
        <BackgroundRippleEffect />
        <div className="w-full">
          <div className="fixed top-0 left-0 w-full z-50">
            <AnimatedEntry animation="fadeDown" delay={0.2}>
              <Navbar />
            </AnimatedEntry>
          </div>
          <section id="inicio">
            {/* Navbar fijo */}

            <div className="h-[120px]"></div>
            <AnimatedEntry triggerOnce={false}>
              <div className="relative z-10">
                <MyNumbersFloatingThings />
                <div className="relative z-100">
                  <Tittle></Tittle>
                </div>
              </div>
            </AnimatedEntry>
            <AnimatedEntry triggerOnce={false}>
              <div className="my-20 max-sm:my-10 relative z-10 md:px-[120px]">
                <div className="flex flex-col justify-center items-center mb-1.5">
                  <Badge className="bg-blue-50 text-blue-800 mb-2">
                    Afiliados
                  </Badge>
                </div>
                <div className="">
                  <SocialNetworks />
                </div>
              </div>
            </AnimatedEntry>
          </section>
          <AnimatedEntry triggerOnce={false}>
            <section
              id="afiliados"
              className="my-20 max-sm:my-10 relative z-10"
            >
              <Features />
            </section>
          </AnimatedEntry>
        </div>
        <AnimatedEntry triggerOnce={false}>
          <section
            id="caracteristicas"
            className="my-20 max-sm:my-10 relative z-10"
          >
            <MoreFeatures />
          </section>
        </AnimatedEntry>
        <AnimatedEntry triggerOnce={false}>
          <section className="my-20 max-sm:my-10 relative z-10" id="to-join">
            <ToJoin />
          </section>
        </AnimatedEntry>
        <AnimatedEntry triggerOnce={false}>
          <section id="planes" className="my-20 max-sm:my-10 relative z-10">
            <PlansSection />
          </section>
        </AnimatedEntry>
        <AnimatedEntry triggerOnce={false}>
          <section id="faqs" className="relative z-10 max-sm:mb-10">
            <Questions />
          </section>
        </AnimatedEntry>
        <Footer />
        <div className="md:hidden h-10 w-full "></div>
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2   w-full px-6 flex gap-5 flex-col items-end z-200 bg-transparent">
          <ScrollToTopButton></ScrollToTopButton>

          <Button
            className="bg-blue-700 w-full cursor-pointer hover:bg-blue-800 md:hidden dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white"
            onClick={() =>
              document
                .getElementById("planes")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Elegir mi plan
          </Button>
        </div>
      </div>
    </>
  );
}
