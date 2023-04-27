import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';
import { GithubIcon } from '../components/Icons';
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import TransitionEffect from '../components/Transition';

import projectDetails from '../utils/projectData';

const FramerImage = motion(Image)

const FeatureProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='w-full relative flex items-center justify-between p-12 rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 md:flex-col xl:flex-col 2xl:flex-col'>
    <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
      <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full xl:w-full 2xl:w-full'>
        <FramerImage 
          src={img} 
          alt={title} 
          className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 md:w-full xl:w-full 2xl:w-full'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base 2xl:pt-4 xl:pt-4'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2 dark:text-dark'>
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        <div className='mt-2 flex items-center'>
          {github ? (
            <>
            <Link href={github} target="_blank" className='w-10'>
              <GithubIcon />
            </Link>
            <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>
              Visit Project
            </Link>
            </>
          ) : (
            <Link href={link} target="_blank" className='rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>
              Visit Project
            </Link>
          )}
          
        </div>
      </div>
    </article>
  )
};

// const Project = ({ type, title, img, link, github }) => {
//   return (
//     <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
//       <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
//       <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
//         <FramerImage 
//           src={img} 
//           alt={title} 
//           className='w-full h-auto'
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.2 }}
//         />
//       </Link>
//       <div className='w-full flex flex-col items-start justify-between mt-4'>
//         <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
//         <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
//           <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl'>{title}</h2>
//         </Link>
//         {/* <p className='my-2 font-medium text-dark'>{summary}</p> */}
//         <div className='mt-2 flex items-center justify-between w-full'>
//           <Link href={github} target="_blank" className='rounded-lg font-semibold underline md:text-base'>
//             Visit
//           </Link>
//           <Link href={github} target="_blank" className='w-8 md:w-6'>
//             <GithubIcon />{" "}
//           </Link>
//         </div>
//       </div>
//     </article>
//   )
// }

const Projects = () => {
  return (
    <>
    {/* <div className='col-span-12'> Use this for projects components for larger sizing */}
      <Head>
        <title>Hubert Yang | Projects Page</title>
        <meta name="description" content="Hubert Yang Projects Page"></meta>
      </Head>
      <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text="Creating Digital Delights!" className='mb-8 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
          <section className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 xs:gap-x-0'>
            {projectDetails.map(item => (
              <div className='col-span-6 sm:col-span-12' key={item.id}>
                <FeatureProjects 
                  title={item.title}
                  summary={item.summary}
                  img={item.img}
                  link={item.link}
                  github={item.github}
                  type={item.type}
                />
              </div>
            ))}
          </section>
        </Layout>
      </main>
    </>
  )
}

export default Projects;