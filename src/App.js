import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'
import { init } from 'ityped'
import { IoRocket, IoLogoGithub } from "react-icons/io5";
import './App.css'
import brewmate_icon from './brewmate.png'
import vybot_icon from './vybot.png'
import gol_icon from './gol.png'
import bm_icon from './mailer-logo.png'

const tech = [
  'ReactJS', 'MySQL', 'Node',
  'ExpressJS', 'Python', 'GCP',
  'MongoDB', 'PHP', 'C#'
]

function App() {
  useEffect(() => {
    if (iTypeInit) return
    setiTypeInit(true)

    // TODO: change to a cleaner recursive function
    init(document.querySelector('#intro-desc'), {
      showCursor: true,
      strings: ["CSUF graduate with a bachelor's degree in computer science plus various extra-curricular activities in full-stack web development, video game development, and tutoring for math, computer science, and physics."],
      loop: false,
      typeSpeed: 5,
      startDelay: 100,
      cursorChar: "█",
      onFinished: function () {
        let elements = document.getElementsByClassName('ityped-cursor');
        if (elements.length > 0)
          elements[0].parentNode.removeChild(elements[0]);

        init(document.querySelector('#intro-tech'), {
          showCursor: true,
          strings: ['Some recent tech I’m using:'],
          loop: false,
          typeSpeed: 5,
          startDelay: 0,
          cursorChar: "█",
          onFinished: function () {
            let elements = document.getElementsByClassName('ityped-cursor');
            if (elements.length > 0) {
              elements[0].parentNode.removeChild(elements[0]);
            }
            for (let i = 0; i < tech.length; i++) {
              init(document.querySelector('#intro-tech-' + i), {
                showCursor: true,
                strings: [tech[i]],
                loop: false,
                typeSpeed: 50,
                startDelay: i * 100,
                cursorChar: "█",
                onFinished: function () {
                  let elements = document.getElementsByClassName('ityped-cursor');
                  elements[0].parentNode.removeChild(elements[0]);
                }
              })
            }
          }   // mind the steps
        })
      }
    })
  })

  const [iTypeInit, setiTypeInit] = useState(false)

  const techli = tech.map((e, i) => <span><li className='inline' id={'intro-tech-' + i}></li></span>)

  return (
    <div className='root text-main'>
      <NavigationBar />
      <div className='flex flex-col relative md:flex-row justify-center items-center gap-4 md:gap-8 h-screen min-h-sm w-full px-4 pb-16 overflow-hidden'>
        <div className='text-center md:text-left flex flex-col text-shadow'>
          <h3 className='text-left opacity-90 z-10'>Hello👋🏽 I'm</h3>
          <p className='text-4xl xs:text-5xl md:hidden font-extrabold z-10'>Damien Mousavi</p>
          <p className='text-6xl hidden md:block font-extrabold z-10'>Damien<br />Mousavi</p>
          <h3 className='text-lg opacity-90 z-10'>Private Tutor | Web developer</h3>
        </div>

        <div className='sphere absolute rounded-full bg-bottom md:bg-right-top z-0 md:mr-72 transform md:-rotate-135' />

        <div className='terminal relative flex flex-col w-full max-w-lg h-1/2 max-h-102 md:h-96 shadow-3xl'>
          <div className='terminal-bar text-xs flex justify-between h-8 p-2'>
            <div class='button flex-shrink-0 btn-exit'></div>
            <div class='button flex-shrink-0 btn-min'></div>
            <div class='button flex-shrink-0 btn-max'></div>
            <span className='text-center mx-auto align-top'>~/intro.sh</span>
            <div class='button flex-shrink-0 opacity-0'></div>
            <div class='button flex-shrink-0 opacity-0'></div>
            <div class='button flex-shrink-0 opacity-0'></div>
          </div>
          <div className='terminal-console text-sm md:text-base flex flex-col justify-between overflow-y-auto p-2 h-full'>
            <div className='w-full opacity-90'>
              <p className='intro inline' id="intro-desc"></p><div className='br' />
              <p className='intro inline' id="intro-tech"></p><div className='br' />
              <ul className='intro grid grid-cols-3 gap-0 mx-auto pl-4'>
                {techli}
              </ul>
              <div className='h-12' />
            </div>
          </div>
          <div className='cmdline-container text-sm md:text-base absolute bottom-0 w-full p-2'>
            <div className='cmdline flex p-2 gap-2 w-full'>
              <p className='intro intro-launch opacity-90' id="launch">{'>'}</p>
              <input type='text' className='intro w-full' id='shell' placeholder='Commands coming soon...' />
            </div>
          </div>
        </div>
      </div >
      <div class='projects-container container mx-auto max-w-lg sm:max-w-3xl -mt-20 p-2'>
        <h1 className='text-4xl flex justify-center Z-10 text-shadow'>Projects<IoRocket className='ml-1 w-6' /></h1>
        <hr className='mt-1 mb-12 w-2/3 mx-auto' />

        <div class='project-billboard mb-12 w-full flex flex-col sm:flex-row gap-4'>
          <div className='project-image-container w-full z-10 px-16 sm:p-0 sm:w-1/3'>
            <img src={brewmate_icon} alt='' className='project-image shadow-3xl mx-auto z-10 ' />
          </div>
          <div className='project-desc w-full flex flex-col bg-base-light bg-opacity-40  rounded-3xl p-4 sm:px-5 pt-24 -mt-24 sm:pt-4 sm:mt-0 sm:shadow-none'>
            <p className='text-3xl font-bold text-center align-middle py-2 sm:text-left z-20 text-shadow'>Chefmate</p>
            <p className='opacity-90'>
              A simple no-nonsense recipe app.
              <ul className='features pl-8'>
                <li>Step-by-step recipe walkthrough.</li>
                <li>Create and modify your own recipes.</li>
                <li>Save your recipes to the cloud and access them on another device.</li>
              </ul>
            </p>
            <div className='flex flex-row justify-center sm:justify-start flex-wrap sm:content-start p-4 gap-3'>
              <a className='w-32 text-center transform bg-base-dark border-b-4 active:border-b-2 active:translate-y-0.5 hover:bg-subtle-dark  border-gray-900 rounded-xl px-3 py-2' href='https://github.com/DamienSaavi/brewmate'>GitHub<IoLogoGithub className='ml-1 inline w-4 h-4 align-baseline' /></a>
            </div>
          </div>
        </div>

        <div class='project-billboard mb-12 w-full flex flex-col sm:flex-row-reverse gap-4'>
          <div className='project-image-container w-full z-10 px-16 sm:p-0 sm:w-1/3'>
            <img src={vybot_icon} alt='' className='project-image shadow-3xl mx-auto z-10 ' />
          </div>
          <div className='project-desc w-full flex flex-col bg-base-light bg-opacity-40  rounded-3xl p-4 sm:px-5 pt-24 -mt-24 sm:pt-4 sm:mt-0 sm:shadow-none '>
            <p className='text-3xl font-bold text-center align-middle py-2 sm:text-left z-20 text-shadow'>VyBot</p>
            <p className='opacity-90'>
              Discord music bot with extensive features.
              <ul className='features pl-8'>
                <li>Create playlists using keywords or Youtube links</li>
                <li>Save playlist to cloud and play anytime.</li>
                <li>Shuffle and modify queue.</li>
                <li>Intuitive text-based UI.</li>
              </ul>
            </p>
            <div className='flex flex-row justify-center sm:justify-start flex-wrap sm:content-start p-4 gap-3'>
              <a className='w-32 text-center transform bg-base-dark border-b-4 active:border-b-2 active:translate-y-0.5 hover:bg-subtle-dark border-gray-900 rounded-xl px-3 py-2' href='https://github.com/DamienSaavi/vybot'>GitHub<IoLogoGithub className='ml-1 inline w-4 h-4 align-baseline' /></a>
            </div>
          </div>
        </div>

        <div class='project-billboard mb-12 w-full flex flex-col sm:flex-row gap-4'>
          <div className='project-image-container w-full z-10 px-16 sm:p-0 sm:w-1/3'>
            <img src={bm_icon} alt='' className='project-image shadow-3xl mx-auto z-10 ' />
          </div>
          <div className='project-desc w-full flex flex-col bg-base-light bg-opacity-40  rounded-3xl p-4 sm:px-5 pt-24 -mt-24 sm:pt-4 sm:mt-0 sm:shadow-none '>
            <p className='text-3xl font-bold text-center align-middle py-2 sm:text-left z-20 text-shadow'>Budget Mailer</p>
            <p className='opacity-90'>
              A mailchimp clone.
              <ul className='features pl-8'>
                <li>Rich text editor providing more freedom than most email services.</li>
                <li>Send properly formatted emails and newsletters to multiple contacts.</li>
                <li>Create and store contact list.</li>
              </ul>
            </p>
            <div className='flex flex-row justify-center sm:justify-start flex-wrap sm:content-start p-4 gap-3'>
              <a className='w-32 text-center transform bg-base-dark border-b-4 active:border-b-2 active:translate-y-0.5 hover:bg-subtle-dark border-gray-900 rounded-xl px-3 py-2' href='https://github.com/DamienSaavi/budget-mailer'>GitHub<IoLogoGithub className='ml-1 inline w-4 h-4 align-baseline' /></a>
            </div>
          </div>
        </div>

        <div class='project-billboard mb-12 w-full flex flex-col sm:flex-row-reverse gap-4'>
          <div className='project-image-container w-full z-10 px-16 sm:p-0 sm:w-1/3'>
            <img src={gol_icon} alt='' className='project-image shadow-3xl mx-auto z-10 ' />
          </div>
          <div className='project-desc w-full flex flex-col bg-base-light bg-opacity-40  rounded-3xl p-4 sm:px-5 pt-24 -mt-24 sm:pt-4 sm:mt-0 sm:shadow-none '>
            <p className='text-3xl font-bold text-center align-middle py-2 sm:text-left z-20 text-shadow'>Lazy Game of Life</p>
            <p className='opacity-90'>
              Conway's Game of Life with a "lazy" update function implementation to boost performance.
            </p>
            <div className='flex flex-row justify-center sm:justify-start flex-wrap sm:content-start p-4 gap-3'>
              <a className='w-32 text-center transform bg-base-dark border-b-4 active:border-b-2 active:translate-y-0.5 hover:bg-subtle-dark border-gray-900 rounded-xl px-3 py-2' href='https://github.com/DamienSaavi/lazy-game-of-life'>GitHub<IoLogoGithub className='ml-1 inline w-4 h-4 align-baseline' /></a>
              <a className='w-32 text-center transform bg-base-dark border-b-4 active:border-b-2 active:translate-y-0.5 hover:bg-subtle-dark border-gray-900 rounded-xl px-3 py-2' href='https://damiensaavi.github.io/lazy-game-of-life'>Website</a>
            </div>
          </div>
        </div>


        <div className='w-full flex flex-row justify-center flex-wrap p-4'>
          <a className='w-48 text-black text-center transform bg-accent border-b-4 hover:bg-accent-light active:border-b-2 active:translate-y-0.5 border-gray-800 rounded-xl px-3 py-2' href='https://github.com/DamienSaavi?tab=repositories'>More on GitHub<IoLogoGithub className='ml-1 inline w-4 h-4 align-baseline' /></a>
        </div>

      </div>
      <div className='h-16'></div>
      <footer className='text-sm  transition-all hover:text-accent transform hover:-translate-y-1 text-center p-2 pb-8'><a href='https://github.com/DamienSaavi/damiensaavi.github.io'>Designed and built by Damien Mousavi</a></footer>
    </div >
  )
}

export default App