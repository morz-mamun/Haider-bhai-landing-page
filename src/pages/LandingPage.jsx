import { Star } from "lucide-react";
import { Shapes } from "lucide-react";
import { ChartNoAxesGantt } from "lucide-react";
import Feature from "../components/Feature";

export const LandingPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0 ">
        <video
          autoPlay
          loop
          muted
          className="object-cover no-repeat w-full h-full"
        >
          <source src="/rain-drop.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-85" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col max-w-[1440px] mx-auto">
        {/* Header */}
        <header className="py-10 px-3">
          <div className="w-fit text-white font-bold">
            <div className="bg-black border border-white flex items-center">
              <p className="border-r border-white px-[6px]">L</p>
              <p className="px-1">W</p>
            </div>
            <div className="bg-red-500 border border-white flex items-center">
              <p className="border-r border-white px-1">H</p>
              <p className="px-1">H</p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center">
          <div className="container mx-auto px-3">
            <div className="max-w-2xl">
              {/* Subtitle */}
              <p className="text-white/80 text-sm mb-4 font-light">
                শেখা হোক শেখার মতো
              </p>

              {/* Main Heading */}
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tights">
                লার্ন উইথ হামিন হায়দার
              </h1>

              {/* CTA Button */}
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-base font-medium rounded-lg transition-colors duration-300 cursor-pointer">
                আমাদের সব কোর্স
              </button>
            </div>
          </div>
        </main>

        {/* Features Section */}
        <section className="pb-16">
          <div className="container mx-auto px-3">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
              {/* Feature 1 */}
              <Feature
                icon={<ChartNoAxesGantt className="text-white" />}
                title="গোছানো কন্টেন্ট"
                desc="যাতে আপনি খুব সহজে প্রয়োজনীয় আইটেমটি খুঁজে পান।"
              />
              <Feature
                icon={<Star className="text-white" />}
                title="দরকারি টপিকস"
                desc="যাতে অপ্রয়োজনীয় বিষয় শিখতে গিয়ে সময় নষ্ট না হয়।"
              />
              <Feature
                icon={<Shapes className="text-white" />}
                title="শিখতে সহজ"
                desc="যাতে কঠিন থেকে কঠিনতম বিষয়ও একদম সহজ হয়।"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
