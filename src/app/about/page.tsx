import React from 'react'
import Lanyard from "@/components/Lanyard";
import AboutSection from "@/components/AboutSection";

const About = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Lanyard Component Section */}
            <div className="relative h-[600px] lg:h-[800px]">
              <Lanyard position={[0, 0, 10]} gravity={[0, -40, 0]} />
            </div>  
            {/* Content Section */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">About Me</h1>
              <div className="space-y-4 text-normal text-gray-700">
                <p>
                  I&apos;m a passionate developer who loves creating innovative solutions 
                  and bringing ideas to life through code.
                </p>
                <p>
                  With expertise in modern web technologies, I focus on building 
                  performant, accessible, and user-friendly applications.
                </p>
                <p>
                  When I&apos;m not coding, you can find me exploring new technologies, 
                  contributing to open source projects, or sharing knowledge with 
                  the developer community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Section */}
      <AboutSection />
    </>
  )
}

export default About