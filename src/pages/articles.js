import React, { useRef } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image'
import { motion, useMotionValue } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText';
import article1 from '../../public/images/articles/create loading screen in react js.jpg'
import article2 from '../../public/images/articles/create modal component in react using react portals.png'
import TransitionEffect from '@/components/Transition';

const FramerImage = motion(Image);

const AnimatedImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = 'inline-block';
    x.set(event.pageX);
    y.set(-10)
  }

  function handleMouseLeave() {
    imgRef.current.style.display = 'none';
    x.set(0);
    y.set(0)
  }

  return (
    <Link href={link} target="_blank" onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
      <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
      <FramerImage 
        ref={imgRef} 
        src={img} 
        alt={title} 
        className='w-96 z-10 h-auto hidden absolute rounded-lg md:!hidden'
        style={{ x, y }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 }}}
        initial={{ opacity: 0 }}
        priority 
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
      />
    </Link>
  )
}

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li 
      className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-r-4 border-b-4 border-dark dark:border-light dark:bg-dark dark:text-light sm:flex-col'
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
    >
      <AnimatedImg title={title} img={img} link={link} />
      <span className='text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
    </motion.li>
  )
}

const FeaturedArticles = ({ img, title, time, summary, link }) => {
  return (
    <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>
      <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl' />
      <Link href={link} target="_blank" className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
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
      <Link href={link} target="_blank">
        <h2 className='capitalize text-2xl font-bold my-2 hover:underline mt-4 xs:text-lg'>{title}</h2>
      </Link>
      <p className='text-sm mb-2 xs:hidden sm:hidden'>{summary}</p>
      <span className='text-primary font-semibold dark:text-primaryDark'>{time}</span>
    </li>
  )
}

const articles = () => {
  return (
    <>
      <Head>
        <title>Hubert Yang | About Page</title>
        <meta name="description" content="Hubert Yang About Page"></meta>
      </Head>
      <TransitionEffect />
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text="Sharing Knowledge, Inspiring Growth." className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
          <ul className='grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16'>
            <FeaturedArticles 
              img={article1}
              title="title of a cool story"
              time="10 minutes"
              summary="this is a cool summary of a story"
              link="/"
            /> 
            <FeaturedArticles 
              img={article1}
              title="title of a cool story"
              time="10 minutes"
              summary="this is a cool summary of a story"
              link="/"
            />  
          </ul>
          <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
          <ul>
            <Article 
              title="This is the title."
              img={article2}
              date="March 22, 2023"
              link="/"
            />
            <Article 
              title="This is the title."
              img={article2}
              date="March 22, 2023"
              link="/"
            />
            <Article 
              title="This is the title."
              img={article2}
              date="March 22, 2023"
              link="/"
            />
            <Article 
              title="This is the title."
              img={article2}
              date="March 22, 2023"
              link="/"
            />
          </ul>
        </Layout>
      </main>
    </>
  )
}

export default articles;