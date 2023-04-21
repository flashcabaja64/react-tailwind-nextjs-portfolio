import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image'
import { motion } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText';
import article1 from '../../public/images/articles/create loading screen in react js.jpg'

const FramerImage = motion(Image)

const FeaturedArticles = ({ img, title, time, summary, link }) => {
  return (
    <li className='col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl'>
      <Link href={link} target="_blank" className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
        <FramerImage 
          src={img} 
          alt={title} 
          className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className='capitalize text-2xl font-bold my-2 hover:underline'>{title}</h2>
      </Link>
      <p className='text-sm mb-2'>{summary}</p>
      <span className='text-primary font-semibold'>{time}</span>
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
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
        <Layout className='pt-16'>
          <AnimatedText text="Sharing Knowledge, Inspiring Growth." className='mb-16' />
          <ul className='grid grid-cols-2 gap-16'>
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
        </Layout>
      </main>
    </>
  )
}

export default articles;