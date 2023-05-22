import React from 'react';
import { animate, motion } from 'framer-motion';

const Skill = ({name, x, y}) => {

  return(
          <motion.div  className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
            py-3 px-6 shadow-dark cursor-pointer absolute' 
            
            whileHover={{scale:1.05}}
            initial = {{x:0,y:0}}
            whileInView = {{ x:x,y:y }}
            transform = {{duration:2}}
          
            >
              {name}
          </motion.div>
  )

};

const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-6 w-full text-center'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
            <motion.div  className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
            p-8 shadow-dark cursor-pointer'  whileHover={{scale:1.05}}>
              SDE
            </motion.div>
            
            <Skill name='HTML' x='-21vw' y='2vw' />
            <Skill name='CSS' x='-5vw' y='-11vw' />
            <Skill name='JavaScript' x='17vw' y='-7vw' />
            <Skill name='Sass' x='19vw' y='5vw' />
            <Skill name='React.js' x='0vw' y='12vw' />
            <Skill name='Bootstrap' x='15vw' y='12vw' />
            <Skill name='Tailwind' x='12vw' y='-16vw' />
            <Skill name='C/C++' x='5vw' y='-5vw' />
            <Skill name='Core Java' x='0vw' y='6vw' />
            <Skill name='Python' x='-10vw' y='0vw' />
            <Skill name='Microsoft PowerApps' x='-20vw' y='-8vw' />
            <Skill name='Microsoft PowerBI' x='-25vw' y='8vw' />
            <Skill name='AWS - Cloud' x='-11vw' y='-19vw' />
            <Skill name='Microsoft Power Automate' x='29vw' y='0vw' />
            <Skill name='Next.js' x='29vw' y='-8vw' />
            <Skill name='Spring Boot' x='-35vw' y='0vw' />






            
            
        </div>
    </>
  )
}

export default Skills