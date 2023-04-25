import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/Layout';
import { GithubIcon } from '../components/Icons';
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import TransitionEffect from '../components/Transition';

import chatProject from '../../public/chat.jpg';
import choreProject from '../../public/chore_runner.jpg';
import deliveryProject from '../../public/delivery.jpg';
import evolveProject from '../../public/evolve.jpg';
import shoplocalProject from '../../public/local.jpg';
import webpackProject from '../../public/webpack.jpg';

const FramerImage = motion(Image)

const FeatureProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <article className='w-full relative flex items-center justify-between p-12 rounded-3xl rounded-br-2xl border border-solid border-dark bg-light shadow-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
    <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
      <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
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
      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
        <Link href={link} target="_blank" className='hover:underline underline-offset-2 dark:text-dark'>
          <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} target="_blank" className='w-10'>
            <GithubIcon />
          </Link>
          <Link href={github} target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>
            Visit Project
          </Link>
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
    {/* <div className='col-span-6 sm:col-span-12'> Use this for projects components for smaller sizing */}
      <Head>
        <title>Hubert Yang | Projects Page</title>
        <meta name="description" content="Hubert Yang Projects Page"></meta>
      </Head>
      <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text="Creating Digital Delights!" className='mb-8 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
          <section className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 xs:gap-x-0'>
            <div className='col-span-12'>
              <FeatureProjects 
                title="Chat Away App"
                summary="The online front-end chat application is a versatile and reliable tool designed for real-time communication and collaboration. It allows users to connect via direct messaging, private channels, and group conversations. The platform's modern design and intuitive interface make it easy to use and navigate, while the image uploading feature enables users to share visual content with ease. Overall, it is an excellent resource for remote teams or groups looking to work together in a digital environment."
                img={chatProject}
                link="https://chat-away-server.web.app/"
                github="https://github.com/flashcabaja64/chat-away-app"
                type="Personal Chat App"
              />
            </div>
            <div className='col-span-12'>
              <FeatureProjects 
                title="Shop Local"
                summary="Shop local restaurants for cashback is a great way to support small businesses in your community while saving money on your purchases. With this platform, users can browse local restaurants and cafes, place orders online, and earn cashback rewards for their purchases. Overall, it's an excellent resource for anyone looking to support their local economy and get more value out of their dining experiences."
                img={shoplocalProject}
                link="https://www.shop.com/shoplocal"
                github="https://github.com/flashcabaja64/chat-away-app"
                type="Shop Local favorites"
              />
            </div>
            <div className='col-span-12'>
              <FeatureProjects 
                title="EvolveChat"
                summary="The chat application designed for health insurance employees is a powerful tool for facilitating communication and collaboration within a large organization. This platform allows employees to connect with one another in real-time, sharing insights and ideas to improve the quality of service provided to customers. With its secure messaging capabilities, this app is an ideal resource for teams looking to work together effectively and efficiently."
                img={evolveProject}
                link="https://apps.apple.com/us/app/evolvechat/id1567123775"
                github="/"
                type="Health Care Chat App"
              />
            </div>
            <div className='col-span-12'>
              <FeatureProjects 
                title="Shop.com Webpack 5"
                summary="Single-handedly designed the entire webpack 5 that provided customers with an exceptional online shopping experince with its powerful bundling capabilities. Because of ths implementation loading times of website exceeded over 15% than its prior build. This help paved a way to ship better and new user interfaces and featured applications."
                img={webpackProject}
                link="https://www.shop.com/home-shopping-list"
                github="/"
                type="E-Commerce Project"
              />
            </div>
            <div className='col-span-12'>
              <FeatureProjects 
                title="Chore Runner"
                summary="Help track child chores and reward them upon completion is a fantastic tool for busy parents. With its intuitive interface and advanced functionality, this platform makes it easy to create chore charts, assign tasks, and track progress. Whether you're looking to teach your children responsibility or simply keep your household running smoothly, this website is an excellent resource for anyone looking to simplify their daily routines."
                img={choreProject}
                link="http://chorerunner-client.now.sh"
                github="https://github.com/flashcabaja64/ChoreRunner-Client"
                type="Track Children's House Chores"
              />
            </div>
            <div className='col-span-12'>
              <FeatureProjects 
                title="ChowCab"
                summary="ChowCab is a food delivery app that connects customers with local restaurants. Users can browse menus, place orders, and track deliveries in real-time. The app's intuitive interface and widespread availability make it a popular choice for anyone looking to order food from the comfort of their own home."
                img={deliveryProject}
                link="https://expo.dev/%40flashcabaja64/newapp?serviceType=classic&distribution=expo-go&releaseChannel=default"
                github="https://github.com/Team-Food-Delivery/food-delivery-webapp"
                type="Order Local Food Deliveries"
              />
            </div>
          </section>
        </Layout>
      </main>
    </>
    
  )
}

export default Projects;