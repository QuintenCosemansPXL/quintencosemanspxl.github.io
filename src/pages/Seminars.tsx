import React from 'react';
import { Calendar, Users, MapPin } from 'lucide-react';

const seminars = [
  {
    title: 'Modern Web Development',
    date: 'Maart 2024',
    location: 'Amsterdam',
    attendees: '150+',
    description: 'Een diepgaande sessie over moderne web development technieken en best practices.',
    role: 'Spreker',
  },
  {
    title: 'Cloud Native Applications',
    date: 'December 2023',
    location: 'Rotterdam',
    attendees: '200+',
    description: 'Workshop over het bouwen en deployen van cloud-native applicaties.',
    role: 'Workshop Leider',
  },
  // Add more seminars as needed
];

function Seminars() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Seminaries</h1>
          <p className="text-xl text-gray-600">
            Een overzicht van seminars waar ik als spreker of deelnemer bij betrokken was
          </p>
        </div>

        <div className="grid gap-8">
          {seminars.map((seminar, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{seminar.title}</h2>
                <p className="text-gray-600 mb-4">{seminar.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                    <span>{seminar.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                    <span>{seminar.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-blue-600 mr-2" />
                    <span>{seminar.attendees} deelnemers</span>
                  </div>
                </div>

                <div className="mt-4 inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {seminar.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Seminars;