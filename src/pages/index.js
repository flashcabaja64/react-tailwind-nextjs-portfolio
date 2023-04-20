import Head from 'next/head';
import Layout from '../components/Layout';
import Image from 'next/image';
import devPic from '../../src/assets/developer-pic-1.png'
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons';
import lightBulb from '../../src/assets/miscellaneous_icons_1.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Hubert Yang Front-End Web Design React Next.js Tailwind Portfolio" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2'>
              <Image src={devPic} alt="Developer Image" className='w-full h-auto'/>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Crafting Beautiful and Intuitive Web Experiences" className='!text-6xl !text-left'/>
              <p className='my4 text-base font-medium'>
                Highly motivated web developer with expertise in designing and developing user interfaces. Skilled in creating UI pages and debugging web applications. Possesses exceptional analytical and problem-solving skills in a fast-paced environment. Proficient in front-end and back-end frameworks, with a passion for staying up-to-date with emerging technologies.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link 
                  href="./assets/resume.pdf" 
                  target={"_blank"}
                  download={true}
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg border border-solid border-transparent border-2 hover:border-dark font-semibold hover:bg-light hover:text-dark'
                >
                  Resume <LinkArrow className={"w=6 ml-1"}/>
                </Link>
                <Link href="mailto:hubertyang88@yahoo.com" target={"_blank"} className='ml-4 text-lg font-medium capitalize text-dark underline'>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <div className='absolute right-8 bottom-8 inline-block w-24'>
          <Image src={lightBulb} alt="light bulb" className='w-full h-auto'/>
        </div>
      </main>
    </>
  )
}
