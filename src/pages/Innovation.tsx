import React from 'react';
import { ArrowRight } from 'lucide-react';

const Innovation = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Innovation Routes</h1>
        <p className="text-lg text-gray-600 mb-12">
          Discover the innovative projects and trajectories I've undertaken, showcasing creative problem-solving and technological advancement.
        </p>

        {/* Timeline */}
        <div className="relative">
          {[1, 2, 3].map((project, index) => (
            <div key={project} className={`mb-12 ${index % 2 === 0 ? 'md:ml-[50%]' : 'md:mr-[50%]'}`}>
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="text-sm text-blue-600 mb-2">Q{project} 2024</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Innovation Project {project}
                </h3>
                <p className="text-gray-600 mb-4">
                  Detailed description of the innovation project, including challenges, solutions, and outcomes.
                </p>
                <img
                  src={`https://images.unsplash.com/photo-167${project}586432-b9f69c692aa1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                  alt={`Project ${project}`}
                  className="w-full rounded-lg mb-4"
                />
                <button className="inline-flex items-center text-blue-600 hover:text-blue-700">
                  Learn More <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Innovation;