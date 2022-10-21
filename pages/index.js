import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import code from "../public/code.png";
import weather from "../public/weath.jpg";
import Image from "next/image";
import chat from "../public/chat.png"
import ticket from "../public/ticket.png"


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Wasif Ali</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-6xl">W</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1om3ePLlHL_rRiCps4ZLGmqF6fT3uYs-Q/view?usp=sharing" target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Wasif Ali
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              MERN Stack Developer
            </h3>
            <p className="text-xl py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            I&apos;m a MERN Stack Developer coming from an SQA background. 
            I&apos;m ambitious, driven, and motivated with a proven record of achievement.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://twitter.com/m_wasif_a" target="_blank" rel="noreferrer"><AiFillTwitterCircle /></a>
              <a href ="https://www.linkedin.com/in/wasif-ali994/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
              <a href="https://github.com/WasifAli994" target="_blank" rel="noreferrer"><AiFillGithub /></a>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-5xl py-1 dark:text-white ">Stuff I&apos;ve Built</h3>
            <p className="text-xl py-2 leading-8 text-gray-800 dark:text-gray-200">
              Ever since I&apos;ve started my develpment journey, I&apos;ve built few projects
              to using my learnings to get the most out of the learning process. 
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={weather} width={100} height={100} />
              <h3 className="text-2xl font-medium pt-8 pb-2  ">
                <a href="http://weatherappjs.surge.sh/" target="_blank" rel="noreferrer">Weather App</a>
              </h3>
              <p className="py-2">
              A weather application which shows the updated and live weather forecast of an entered city
              </p>
              <h4 className="py-4 text-xl text-teal-600">Technologies I&apos;ve Used</h4>
              <p className="text-gray-800 py-1">HTML & CSS</p>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">Open Weather API</p>
              <p className="text-gray-800 py-1">CI/CD with Github actions</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={chat} width={100} height={100} />
              <h3 className="text-2xl font-medium pt-8 pb-2 ">
                Chat Application
              </h3>
              <p className="py-2">
              A real time chat app which let&apos;s the users to send and receive messages over a network
              </p>
              <h4 className="py-4 text-xl text-teal-600">Technologies I&apos;ve Used</h4>
              <p className="text-gray-800 py-1">Node js</p>
              <p className="text-gray-800 py-1">Express</p>
              <p className="text-gray-800 py-1">Web Sockets</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={ticket} width={100} height={100} />
              <h3 className="text-2xl font-medium pt-8 pb-2 ">
              Ticketing System
              </h3>
              <p className="py-2">
              A ticketing system for users to keep track of their working tickets
              for the day.
              </p>
              <h4 className="py-4 text-xl text-teal-600">Technologies I&apos;ve Used</h4>
              <p className="text-gray-800 py-1">Node js</p>
              <p className="text-gray-800 py-1">Express</p>
              <p className="text-gray-800 py-1">Mongo DB</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">JWT</p>
            </div>
          </div>
        </section>
        <footer class="h-08 bg-gray-600  text-white text-center shadow-lg p-10 rounded-xl my-10">
        <p className="py-1 text-md">Copyright © 2022 All rights reserved.</p>
        </footer>
        </main>
    </div>
  );
}
