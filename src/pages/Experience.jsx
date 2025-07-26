import React from 'react';

function Experience() {
  const experiences = [
     {
      title: 'Full Stack Developer',
      company: 'ITU - Arfa Software Technology Park',
      duration: '2025 - Present', 
      description:
        'Building responsive user interfaces with React.js, integrating REST APIs, and maintaining modern web applications with performance optimizations.',
    },
    {
      title: 'Graphic Designer',
      company: 'Unitech Computer college',
      duration: '2024 - 2025',
      description:
        'Hands-on experience in graphic designer with a passion for turning ideas into bold, visual stories. I specialize in creating eye-catching designs that blend creativity with purpose.',
    },
    {
      title: 'SMM Expert',
      company: 'ACT Institute',
      duration: '2024 - 2025',
      description:
        'Hands-on experience Social Media Marketer helping brands grow through strategic content and digital engagement. Passionate about turning clicks into loyal customers across platforms.'
    },
    {
      title: 'Executive Diploma In Business Communication',
      company: 'uniathena',
      duration: '2024 - 2025',
      description:
        'I hold a diploma in Business Communication, equipping me with strong skills in professional writing, presentation, and interpersonal communication.This foundation helps me convey ideas clearly, build brand voice, and connect effectively with diverse audiences.'
    },
  ];

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-20 bg-gradient-to-b">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-white underline decoration-blue-500 hover:decoration-cyan-400 transition-all duration-500">
          Experience
        </h1>
      </div>

      <div className="max-w-3xl mx-auto space-y-10 border-l-4 border-blue-500 pl-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-cyan-700 relative shadow-lg rounded-lg p-6 border border-gray-400 transition-transform duration-500 hover:scale-105 hover:shadow-2xl group"
          >
            <div className="absolute -left-3 top-6 bg-blue-500 p-1.5 rounded-full group-hover:bg-cyan-400 transition-colors duration-300">
              <Icon />
            </div>
            <time className="text-sm italic text-white opacity-80">{exp.duration}</time>
            <h3 className="text-xl font-bold text-white mt-1 transition-colors duration-300 group-hover:text-cyan-100">
              {exp.title}
            </h3>
            <p className="text-white font-medium">{exp.company}</p>
            <p className="text-white text-justify mt-3 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Reusable Icon Component
const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
    className="h-4 w-4 text-white"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
      clipRule="evenodd"
    />
  </svg>
);

export default Experience;
