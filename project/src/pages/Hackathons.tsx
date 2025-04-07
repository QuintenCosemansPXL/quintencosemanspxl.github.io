import React from 'react';
import { Trophy, Clock, Users, GitBranch } from 'lucide-react';

const hackathons = [
  {
    title: 'Sustainable Tech Hackathon',
    description: 'Ontwikkeling van een platform voor het monitoren en reduceren van energieverbruik in smart buildings.',
    achievement: '1e plaats',
    team: '4 personen',
    duration: '48 uur',
    tech: ['React', 'Node.js', 'IoT Sensors', 'Machine Learning'],
    year: '2024',
  },
  {
    title: 'HealthTech Innovation Challenge',
    description: 'Creatie van een AI-gedreven systeem voor vroege detectie van gezondheidsrisicos.',
    achievement: 'Runner-up',
    team: '3 personen',
    duration: '36 uur',
    tech: ['Python', 'TensorFlow', 'React Native', 'AWS'],
    year: '2023',
  },
  // Add more hackathons as needed
];

function Hackathons() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hackathons</h1>
          <p className="text-xl text-gray-600">
            Innovatieve oplossingen ontwikkeld tijdens intense hackathon sessies
          </p>
        </div>

        <div className="grid gap-8">
          {hackathons.map((hackathon, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{hackathon.title}</h2>
                  <div className="flex items-center">
                    <Trophy className="h-6 w-6 text-yellow-500 mr-2" />
                    <span className="font-semibold text-gray-700">{hackathon.achievement}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{hackathon.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-gray-700">{hackathon.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-gray-700">{hackathon.team}</span>
                  </div>
                  <div className="flex items-center">
                    <GitBranch className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-gray-700">{hackathon.year}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {hackathon.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hackathons;