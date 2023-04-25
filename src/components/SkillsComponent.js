import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
  return (
    <motion.div 
      className='flex absolute items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 cursor-pointer shadow-dark dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
      whileHover={{ scale: 1.05 }}
      initial={{ x:0, y:0 }}
      whileInView={{ x, y, transition:{ duration:1.5} }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}

const SkillsComponent = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
      <section className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
        <motion.div 
          className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 cursor-pointer shadow-dark dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2'
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-25vw" y="-5vw"/>
        <Skill name="CSS" x="5vw" y="-30vw"/>
        <Skill name="Javascript" x="-20vw" y="16vw"/>
        <Skill name="ReactJS" x="0vw" y="12vw"/>
        <Skill name="UX Design" x="-20vw" y="-15vw"/>
        <Skill name="VueJS" x="15vw" y="-12vw"/>
        <Skill name="TypeScript" x="15vw" y="-12vw"/>
        <Skill name="Accessibility" x="32vw" y="-5vw"/>
        <Skill name="SQL" x="0vw" y="20vw"/>
        <Skill name="Jest/Mocha" x="-15vw" y="-30vw"/>
        <Skill name="ExpressJS" x="18vw" y="18vw"/>
        <Skill name="Redux" x="-10vw" y="30vw"/>
      </section>
    </>
  )
}

export default SkillsComponent;