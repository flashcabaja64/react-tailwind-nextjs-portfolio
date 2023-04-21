import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import ListIcon from './ListIcon';

const Details = ({ position, company, companyURL, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
      <ListIcon reference={ref} />
      <motion.div
        initial={{ y:50 }}
        whileInView={{ y:0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className='capitalize font-bold text-2xl'>
          {position}&nbsp;<a className="text-primary capitalize" target="_blank" href={companyURL}>@{company}</a>
        </h3>
        <span className='capitalize font-medium text-dark/75'>
          {time} | {address}
        </span>
        <p className='font-medium w-full'>
          {work}
        </p>
      </motion.div>
    </li>
  )
}

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  });

  return (
    <section className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>
        Experience
      </h2>
      
      <article ref={ref} className='w-[75%] mx-auto relative'>
        <motion.div 
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'
          style={{ scaleY: scrollYProgress }}
        >
        </motion.div>
        <ul className='w-full flex flex-col items-start justify-between ml-4'>
          <Details 
            company="SHOP.COM"
            companyURL="https://www.shop.com/"
            position="Front-End Engineer"
            time="2021 - 2023"
            address="Monterey, CA"
            work="Developed within the Front-End team responsible for managing and designing new/old features for SHOP.COM's e-commerce platform, including exponentially increasing the performance and optimization of their web site, leading to customer site retention time."
          />
          <Details 
            company="EvolveNXT"
            companyURL="https://www.evolvenxt.com/"
            position="Full-Stack Engineer"
            time="2019 - 2021"
            address="Torrance, CA"
            work="Developed within the Front-End team responsible for managing and designing new/old features for SHOP.COM's e-commerce platform, including exponentially increasing the performance and optimization of their web site, leading to customer site retention time."
          />
          <Details 
            company="Thinkful"
            companyURL="https://www.thinkful.com/"
            position="Full-Stack Engineering Apprenticeship"
            time="2019"
            address="Los Angeles, CA"
            work="Developed within the Front-End team responsible for managing and designing new/old features for SHOP.COM's e-commerce platform, including exponentially increasing the performance and optimization of their web site, leading to customer site retention time."
          />
        </ul>
      </article>
    </section>
  )
}

export default Experience;