import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFigma, faReact, faGithub } from '@fortawesome/free-brands-svg-icons'; // Importez les icônes spécifiques de Font Awesome


interface Skill {
  category: string;
  skills: { name: string, icon: any }[]; // Mettez à jour la structure des compétences
}

const skillsData: Skill[] = [
  {
    category: 'Design',
    skills: [
      { name: 'Figma', icon: faFigma },
      { name: 'Tailwind', icon: '' }
    ],
  },
  {
    category: 'Front-end',
    skills: [
      { name: 'TypeScript', icon: '' },
      { name: 'React', icon: faReact }
    ],
  },
  {
    category: 'Back-end',
    skills: [
      { name: 'Node.js', icon: '' },
      { name: 'Express.js', icon: '' }
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MongoDB', icon: '' },
      { name: 'PostgreSQL', icon: '' }
    ]
  },
  {
    category: 'Other',
    skills: [
      { name: 'Git & GitHub', icon: faGithub },
      { name: 'Vercel', icon: '' }
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-5 text-center">
      {skillsData.map((skillCategory, index) => (
        <div key={index}>
          <h2 className="text-2xl font-bold mb-2">{skillCategory.category}</h2>
          <ul className="list-none pl-6">
            {skillCategory.skills.map((skill, idx) => (
              <li key={idx} className="mb-1 flex justify-center items-center">
                <FontAwesomeIcon icon={skill.icon} className="size-5 mr-2 justify-center" /> 
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
