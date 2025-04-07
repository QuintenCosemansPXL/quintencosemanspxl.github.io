import React from 'react';
import { Lightbulb, Target, Rocket } from 'lucide-react';

const innovations = [
  {
    title: 'AI-Driven Process Optimization',
    description: 'Implementatie van machine learning algoritmes voor procesoptimalisatie in productieomgevingen.',
    impact: 'Efficiëntieverbetering van 35% in productieprocessen',
    status: 'In productie',
    year: '2024',
  },
  {
    title: 'Smart City Monitoring Platform',
    description: 'Ontwikkeling van een IoT platform voor real-time monitoring van stedelijke infrastructuur.',
    impact: 'Implementatie in 3 grote Nederlandse steden',
    status: 'Pilot fase',
    year: '2023',
  },
  // Add more innovations as needed
];

function Innovation() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Innovatieroutes</h1>
          <p className="text-xl text-gray-600">
            Verkenning van nieuwe technologieën en innovatieve oplossingen
          </p>
        </div>

        <div className="grid gap-8">
          {innovations.map((innovation, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">{innovation.title}</h2>
                </div>

                <p className="text-gray-600 mb-6">{innovation.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center">
                    <Target className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-gray-700">{innovation.impact}</span>
                  </div>
                  <div className="flex items-center">
                    <Rocket className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-gray-700">{innovation.status}</span>
                  </div>
                  <div className="text-right text-gray-500">
                    {innovation.year}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Innovation;