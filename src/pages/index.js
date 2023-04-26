import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Layout from '@/component/Layout';
import ProfileImage from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from '@/component/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/component/Icons';
import Footer from '@/component/Footer';
import HireMe from '@/component/HireMe';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ajay's Portfolio</title>
        <meta name="description" content="Developed by Ajay Kumar" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2'>
              <Image src={ProfileImage} alt="Ajay Kumar" className='w-full h-auto'/>
            </div>
            <div className='w-1/2'>
              <AnimatedText text="Turning Vision Into Reality With Code And Design." className='!text-5xl' />
              <p className='my-4 text-base font-medium'>
              As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
              Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href="/Ajay Kumar Resume .pdf"
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark'
                target="_blank" download={true}>
                  Resume
                <LinkArrow className='w-6 ml-1'></LinkArrow>
                </Link>
                <Link href="mailto:ajsatyageeta@gmail.com" target="_blank"
                className='ml-4 text-lg font-medium capitalize text-dark underline'
                >Connect on Mail</Link>
              </div>
            </div>

          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  )
}
