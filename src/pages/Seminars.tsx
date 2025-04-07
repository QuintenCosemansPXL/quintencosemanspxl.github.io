import React from 'react';

const Seminars = () => {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Seminars</h1>
        <p className="text-lg text-gray-600 mb-12">
          Explore the various seminars I've conducted and attended, sharing knowledge and experiences in technology and innovation.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((seminar) => (
            <div key={seminar} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src={`https://images.unsplash.com/photo-167${seminar}586432-b9f69c692aa1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                alt={`Seminar ${seminar}`}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">March 2024</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Seminar Title {seminar}
                </h3>
                <p className="text-gray-600 mb-4">
                  Detailed description of the seminar, including key topics covered and main takeaways.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    Topic 1
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    Topic 2
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    Topic 3
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seminars;