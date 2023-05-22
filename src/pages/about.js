import AnimatedText from '@/component/AnimatedText';
import Layout from '@/component/Layout';
import Head from 'next/head';
import {React,useEffect, useRef, useState} from 'react';
import Image from 'next/image';
import Profile from '../../public/images/profile/myimage.png';
import { motion, useAnimation, useInView, useMotionValue, useSpring } from "framer-motion";
import HireMe from '@/component/HireMe';
import Skills from '@/component/Skills';

const NumberAnimation = ({number}) => {
  const ref =useRef(null); // for making a refrence type (similar to pointer)

  // Framer Motion Hooks
  const motionValue = useMotionValue(0); // to store initail or starting point
  const springValue = useSpring(motionValue,{duration:3000}); // animation hook, where inital value and duration is passed
  const isInView = useInView(ref); //checks is that component in viewport
  useEffect(() => {
    if(isInView){
      motionValue.set(number);
    }//setting number to its final
  }, [isInView, motionValue, number]); // these are depandancies i.e any change happens to any of these then to execute this function

  useEffect(()=>{
    springValue.on("change", (latest)=>{
      if(ref.current && latest.toFixed(0) <= number){
        ref.current.textContent = latest.toFixed(0);
      }
    })
  },[springValue, number]);

  return <span ref={ref}></span>
};


const about = () => {
  return (
    <>
      <Head>
        <title>Ajay Kumar | About Page</title>
        <meta name='description' content='about'></meta>
      </Head>
      <main className='fles w-full flex-col items-center justify-center'>
        <Layout className=''>
          <AnimatedText text='Passion Fuels Purpose'></AnimatedText>
          <div className='flex flex-row mt-5 p-5'>
            <div className='basis-2/5 flex flex-col items-center justify-start mt-4 p-4'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
              <p className='font-medium'> Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
                and user-centered digital experiences. With 4 years of experience in the field. I am always looking for 
                new and innovative ways to bring my clients' visions to life.
              </p>
              <br/>
              <p className='font-medium'> I believe that design is about more than just making things look pretty – it's about solving problems and 
                creating intuitive, enjoyable experiences for users. 
              </p>
              <br/>
              <p className='font-medium'> Whether I'm working on a website, mobile app, or 
                other digital product, I bring my commitment to design excellence and user-centered thinking to 
                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
              </p>
            </div>
            <div className=' basis-2/5 flex  p-4 rounded-2xl border-2 border-solid border-dark'>
              <div className=''>
              <Image src={Profile} className="w-full h-max rounded-2xl"></Image>
              
              </div>
            </div>
            <div className='basis-1/5 flex flex-col items-center justify-around p-4'>
              <div className='flex flex-col items-center justify-center'>
                <span className='inline-block text-5xl font-bold'><NumberAnimation number={10} />+</span>
                <h2 className='text-xl font-medium capitalize text-dark/75'> Projects</h2>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <span className='inline-block text-5xl font-bold'><NumberAnimation number={5} />+</span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>Certificates</h2>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <span className='inline-block text-5xl font-bold'><NumberAnimation number={6} />+</span>
                <h2 className='text-xl font-medium capitalize text-dark/75'> Month's Experience</h2>
              </div>
            </div>
          </div>

          <Skills />
        </Layout>
      </main>
    </>
  )
}

export default about