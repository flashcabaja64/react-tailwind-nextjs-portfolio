import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
  return (
    <motion.div 
      className='flex absolute items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 cursor-pointer shadow-dark'
      whileHover={{ scale: 1.05 }}
      initial={{ x:0, y:0 }}
      whileInView={{ x, y, }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>
      <section className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
        <motion.div 
          className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 cursor-pointer shadow-dark'
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-25vw" y="-5vw"/>
        <Skill name="CSS" x="-5vw" y="-10vw"/>
        <Skill name="Javascript" x="-20vw" y="6vw"/>
        <Skill name="ReactJS" x="0vw" y="12vw"/>
        <Skill name="UX Design" x="-20vw" y="-15vw"/>
        <Skill name="VueJS" x="15vw" y="-12vw"/>
        <Skill name="TypeScript" x="15vw" y="-12vw"/>
        <Skill name="Accessibility" x="32vw" y="-5vw"/>
        <Skill name="SQL" x="0vw" y="20vw"/>
        <Skill name="Jest/Mocha" x="-25vw" y="-22vw"/>
        <Skill name="ExpressJS" x="18vw" y="18vw"/>
      </section>
    </>
  )
}

export default Skills;