import React from 'react';
import { Code, Cpu, Database, Globe } from 'lucide-react';

const skills = [
  {
    icon: <Code className="h-6 w-6" />,
    name: 'Frontend Development',
    description: 'Expert in React, TypeScript en moderne web frameworks',
  },
  {
    icon: <Database className="h-6 w-6" />,
    name: 'Backend Development',
    description: 'Ervaring met Node.js, Python en database architectuur',
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    name: 'Cloud Computing',
    description: 'AWS, Azure en containerization technologieën',
  },
  {
    icon: <Globe className="h-6 w-6" />,
    name: 'DevOps',
    description: 'CI/CD, Infrastructure as Code, monitoring',
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat h-[60vh]"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Welkom op mijn Portfolio
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl">
              Software Engineer & Innovator
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Over Mij</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Als gepassioneerde software engineer focus ik me op het bouwen van schaalbare en innovatieve oplossingen.
            Met een sterke achtergrond in zowel frontend als backend development, streef ik ernaar om complexe problemen
            om te zetten in elegante oplossingen.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-blue-600 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{skill.name}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;