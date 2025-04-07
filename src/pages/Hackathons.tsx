import React from 'react';
import { Trophy } from 'lucide-react';

const Hackathons = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Hackathons</h1>
        <p className="text-lg text-gray-600 mb-12">
          Experience my journey through various hackathons, where innovation meets rapid development and problem-solving.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((hackathon) => (
            <div key={hackathon} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative">
                <img
                  src={`https://images.unsplash.com/photo-167${hackathon}586432-b9f69c692aa1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                  alt={`Hackathon ${hackathon}`}
                  className="h-48 w-full object-cover"
                />
                {hackathon === 1 && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-white p-2 rounded-full">
                    <Trophy size={24} />
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">March 2024</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Hackathon Project {hackathon}
                </h3>
                <p className="text-gray-600 mb-4">
                  Description of the hackathon project, including the challenge, solution, and results achieved.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    Technology 1
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    Technology 2
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    Technology 3
                  </span>
                </div>
                {hackathon === 1 && (
                  <div className="text-yellow-600 font-medium">
                    🏆 First Place Winner
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hackathons;