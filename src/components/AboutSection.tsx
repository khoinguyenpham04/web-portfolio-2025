import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-8 max-w-6xl pb-8">
        <hr className="border-t border-gray-200 w-full mx-auto my-16" />
        {/* Education Section */}
        <div className="mb-16">
          <h2 className="text-sm font-medium text-gray-400 tracking-wider uppercase mb-12">Education</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Education Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-2">
                  University of Manchester
                </h3>
                <p className="text-xl md:text-2xl text-gray-500 mb-4">BSc. (Hons) Computer Science — Manchester, United Kingdom</p>
                <p className="text-lg text-gray-400 mb-6">Sep 2023 – August 2027</p>
                <div className="space-y-2 text-gray-500">
                  <p>Coursework: Data Science, Operating Systems, Computer Engineering & Architecture, Discrete Mathematics.</p>
                  <p>Activities: Student Representative, Google Developer Student Club, Hyperloop Manchester, Manchester Robotics Society, GreatUniHack ’23, Hackchester - Cyber Security, Manchester Trading Society, MUDSS.</p>
                </div>
              </div>
            </div>

            {/* Campus Image */}
            <div className="relative">
              <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/about/Lanyard/uom.jpg"
                  alt="Berkeley campus during the spring"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-500 mt-3 italic">Manchester Campus in Summer</p>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-200 w-full mx-auto my-16" />

        {/* Technologies & Skills Section */}
        <div className="mb-16">
          <h2 className="text-sm font-medium text-gray-400 tracking-wider uppercase mb-12">
            Technologies & Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ul className="space-y-2 text-gray-700">
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>React & Next.js</li>
              <li>Node.js & Express</li>
            </ul>
            <ul className="space-y-2 text-gray-700">
              <li>Python & Django</li>
              <li>GraphQL & REST APIs</li>
              <li>Git & GitHub</li>
              <li>SQL & NoSQL Databases</li>
            </ul>
            <ul className="space-y-2 text-gray-700">
              <li>Tailwind CSS & Styled Components</li>
              <li>Three.js & React Three Fiber</li>
              <li>Docker & CI/CD</li>
              <li>Agile & Scrum</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
