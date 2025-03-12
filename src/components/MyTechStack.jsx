"use client";
import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const techStack = [
  { name: 'HTML', icon: '/images/stackicon/html.svg' },
  { name: 'CSS', icon: '/images/stackicon/css.png' },
  { name: 'Tailwind', icon: '/images/stackicon/tailwind.png' },
  { name: 'JavaScript', icon: '/images/stackicon/js.png' },
  { name: 'React', icon: '/images/stackicon/react.png' },
  { name: 'Next.js', icon: '/images/stackicon/nextjs.png' },
  { name: 'MySQL', icon: '/images/stackicon/mysql.svg' },
  { name: 'MongoDB', icon: '/images/stackicon/mongodb.svg' },
];

const MyTechStack = () => {
  return (
    <section className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <h2 className="text-white text-center text-4xl font-bold mb-8">Mon Tech Stack</h2>
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 sm:flex-row items-center justify-between bg-[#181818]">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {techStack.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={tech.icon}
                alt={`${tech.name} icon`}
                width={64}
                height={64}
                className="mb-4"
              />
              <p className="text-[#ADB7BE] text-base">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Section */}
      <div className="mt-12">
        <h3 className="text-white text-center text-2xl font-bold mb-4">Mes Compétences en Mouvement</h3>
        <Marquee speed={50} gradient={false} pauseOnHover>
          {techStack.map((tech, index) => (
            <div key={index} className="flex items-center mx-8">
              <Image
                src={tech.icon}
                alt={`${tech.name} icon`}
                width={48}
                height={48}
                className="mr-2"
              />
              <p className="text-white text-lg">{tech.name}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default MyTechStack;