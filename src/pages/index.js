import Head from 'next/head';
import Layout from '../components/Layout';
import Image from 'next/image';
import devPic from '../../public/developer-pic-1.png'
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons';
import TransitionEffect from '@/components/Transition'
// import lightBulb from '../..public/miscellaneous_icons_1.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Hubert Yang Front-End Web Design React Next.js Tailwind Portfolio" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:p-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={devPic} alt="Developer Image" className='w-full h-auto lg:hidden md:inline-block md:w-full' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Crafting Beautiful and Intuitive Web Experiences" className='!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>
              <p className='my4 text-base font-medium md:text-sm sm:text-xs '>
                Highly motivated web developer with expertise in designing and developing user interfaces. Skilled in creating UI pages and debugging web applications. Possesses exceptional analytical and problem-solving skills in a fast-paced environment. Proficient in front-end and back-end frameworks, with a passion for staying up-to-date with emerging technologies.
              </p>
              <div className='flex items-center self-start mt-4 lg:self-center'>
                <Link 
                  href=".resume.pdf" 
                  target={"_blank"}
                  download={true}
                  className='
                    flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg 
                    border border-solid border-transparent border-2 font-semibold 

                    hover:border-dark hover:bg-light hover:text-dark hover:dark:bg-dark 
                    hover:dark:text-light dark:bg-light dark:text-dark hover:dark:border-light 
                    md:p-2 md:px-4 md:text-base
                    '
                >
                  Resume <LinkArrow className={"w=6 ml-1"}/>
                </Link>
                <Link href="mailto:hubertyang88@yahoo.com" target={"_blank"} className='ml-4 dark:text-light text-lg font-medium capitalize text-dark underline md:text-base'>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        {/* <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt="light bulb" className='w-full h-auto'/>
        </div> */}
      </main>
    </>
  )
}
