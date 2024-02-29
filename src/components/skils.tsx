import React from 'react';

interface Skill {
  category: string;
  skills: { name: string }[]; 
}

const skillsData: Skill[] = [
  {
    category: 'Design',
    skills: [
      { name: 'Figma' },
      { name: 'Tailwind' },
    ],
  },
  {
    category: 'Front-end',
    skills: [
      { name: 'Typescript' },
      { name: 'React' },
      { name: 'React Native' },
      {name: 'Next'}
    ],
  },
  {
    category: 'Back-end',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'MongoDB' },
      { name: 'PostgreSQL' }
    ],
  },
  {
    category: 'Other',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'Vercel' },
      {name: 'Cloudinary'}
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-4 text-center">
      {skillsData.map((skillCategory, index) => (
        <div key={index}>
          <h2 className="text-2xl text-[#172554] font-bold mb-2 text-center">{skillCategory.category}</h2>
          <ul className="list-none">
            {skillCategory.skills.map((skill, idx) => (
              <li key={idx} className="mb-1 text-[#1e3a8a] flex justify-center items-center">
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
