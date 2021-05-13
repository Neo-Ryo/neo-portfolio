import React, { useContext, useEffect, useState } from 'react';
import '../global.css';
import { SetMyRender } from '../../App';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const { page, setPage, previousPage, setPreviousPage } =
    useContext(SetMyRender);

  const [anime, setAnime] = useState('slideInRight');

  const handleUnsubscibe = () => {
    setPreviousPage(5);
    setAnime('slideOutRight');
    setTimeout(() => {
      setPage(page - 1);
    }, 1000);
  };

  const projects = [
    {
      id: 1,
      title: 'Pokedex',
      picture:
        'https://pokedex-ryo.netlify.app/static/media/pikachi-wallp.ba8bdbe0.jpg',
      description:
        'Created a pokedex using React, bootstrap, axios and the pokeAPI while I was at school to test out my skills',
      link: 'https://pokedex-ryo.netlify.app/',
      isDeployed: true,
    },
    {
      id: 2,
      title: 'Virus Clicker',
      picture:
        'https://images.unsplash.com/photo-1584118624012-df056829fbd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80',
      description:
        "This is one of my favorite, because I made it with fantastic people (Marion, Christelle and Charly), but also because it's a game!",
      link: 'https://virus-clicker.netlify.app/game',
      isDeployed: true,
    },
    {
      id: 3,
      title: 'The Switcher',
      picture:
        'https://ryo-switcher.netlify.app/static/media/pixel-background-gif-9.dbd8227f.gif',
      description:
        'My very first own little game app made with React and Node.js for the back-end, this was a fun thing to do (carelessly of the design, I focus on the technic at that time)',
      link: 'https://ryo-switcher.netlify.app/',
      isDeployed: true,
    },
  ];

  return (
    <div className={`wrapper-projects ${anime}`}>
      <h1 className='title title-area-project'>Things I've worked on</h1>

      <div className='projects-area projects-display'>
        {projects.map((project, i) => (
          <ProjectCard
            key={`${i}-${project.title}}`}
            title={project.title}
            description={project.description}
            picture={project.picture}
            link={project.link}
            isDeployed={project.isDeployed}
          />
        ))}
      </div>
      <button
        className='button-wrapper button-left'
        onClick={() => handleUnsubscibe()}
      >
        <i className='arrow left'></i>
      </button>
    </div>
  );
}
