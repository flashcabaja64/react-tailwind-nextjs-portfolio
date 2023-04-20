import React, { useRef, useEffect } from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Image from 'next/image';
import profilePic2 from '../assets/developer-pic-1.png'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);

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
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text="Bringing Ideas to Life!" className='mb-16'/>
          <section className='grid w-full grid-cols-8 gap-16'>
            <article className='col-span-3 flex flex-col items-start justify-start'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
              <p className='font-medium'>
                My journey in web development began when I discovered my love for both design and technology. I quickly realized that front end development was the perfect intersection of these two passions, allowing me to bring my creative ideas to life through code. Over the years, I've honed my skills in HTML, CSS, JavaScript, and various front end frameworks and libraries, and I'm always eager to learn more.</p>
              <p className='font-medium mt-6'>
                For me, front end development is about more than just writing code – it's about solving problems and making a real impact on people's lives. Whether it's through a sleek and intuitive user interface, a seamless mobile experience, or an accessible and inclusive design, I strive to create web experiences that are not only visually stunning but also functional and user-friendly. I believe that great design and great code go hand in hand, and I'm committed to delivering both to my clients and users.
              </p>
            </article>
            
            <article className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark'>
                <Image src={profilePic2} alt="personal photo" className='w-full h-auto rounded-2xl'/>
              </div>
            </article>

            <article className='col-span-2 flex flex-col items-end justify-between'>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'><AnimatedNumbers value="50"/>+</span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>Satisfied Clients</h2>
              </div>

              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'><AnimatedNumbers value="40"/>+</span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>Projects Completed</h2>
              </div>

              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'><AnimatedNumbers value="3"/>+</span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>Years of Experience</h2>
              </div>
            </article>

          </section>
        </Layout>
      </main>
    </>
  )
}

export default about;