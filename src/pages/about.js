import React, { useRef, useEffect } from 'react';
import Head from 'next/head';
import AnimatedText from '../components/AnimatedText';
import Layout from '../components/Layout';
import Image from 'next/image';
import profilePic2 from '../../public/developer-pic-1.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '../components/SkillsComponent';
import Experience from '../components/Experience';
import Education from '../components/Education';
import TransitionEffect from '../components/Transition';

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if(isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if(ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])

  return (
    <span ref={ref}></span>
  )
}

const about = () => {
  return (
    <>
      <Head>
        <title>Hubert Yang | About Page</title>
        <meta name="description" content="Hubert Yang About Page"></meta>
      </Head>
      <TransitionEffect />
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text="Bringing Ideas to Life!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:text-4xl sm:mb-8'/>
          <section className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <article className='col-span-3 xl:col-span-4 flex flex-col items-start justify-start md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
              <p className='font-medium'>
                My journey in web development began when I discovered my love for both design and technology. I quickly realized that front end development was the perfect intersection of these two passions, allowing me to bring my creative ideas to life through code. Over the years, I&apos;ve honed my skills in HTML, CSS, JavaScript, and various front end frameworks and libraries, and I&apos;m always eager to learn more.</p>
              <p className='font-medium mt-6'>
                For me, front end development is about more than just writing code it&apos;s about solving problems and making a real impact on people&apos;s lives. Whether it&apos;s through a sleek and intuitive user interface, a seamless mobile experience, or an accessible and inclusive design, I strive to create web experiences that are not only visually stunning but also functional and user-friendly. I believe that great design and great code go hand in hand, and I&apos;m committed to delivering both to my clients and users.
              </p>
            </article>
            
            <article className='col-span-3 relative xl:col-span-4 h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:col-span-8 md:order-1'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
              <Image src={profilePic2} alt="personal photo" className='w-full h-auto rounded-2xl' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
            </article>

            <article className='col-span-2 xl:col-span-8 xl:flex-row xl:items-center flex flex-col items-end justify-between md:order-3'>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value="50"/>+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  Satisfied Employees
                </h2>
              </div>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value="20"/>+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  Projects Completed
                </h2>
              </div>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value="3"/>+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>
                  Years of Experience
                </h2>
              </div>
            </article>

          </section>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  )
}

export default about;