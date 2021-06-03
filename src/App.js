import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'
import { init } from 'ityped'
import { IoRocket, IoLogoGithub } from "react-icons/io5";
import { SiExpo } from "react-icons/si";
import './App.css'
import brewmate_icon from './brewmate.png'
import vybot_icon from './vybot.png'
import gol_icon from './gol.png'

const tech = [
  'ReactJS', 'MySQL', 'Node',
  'ExpressJS', 'Python', 'GCP',
  'MongoDB', 'PHP', 'C#'
]

function App() {
  useEffect(() => {
    if (iTypeInit) return
    setiTypeInit(true)

    init(document.querySelector('#intro-name'), {
      showCursor: true,
      strings: ["Damien Mousavi"],
      loop: false,
      typeSpeed: 20,
      startDelay: 2000,
      cursorChar: "|",
      onFinished: function () {
        let elements = document.getElementsByClassName('ityped-cursor');
        if (elements.length > 0) {
          elements[0].parentNode.removeChild(elements[0]);
        }
        init(document.querySelector('#intro-desc'), {
          showCursor: true,
          strings: ["CSUF graduate with a bachelor's degree in computer science plus various extra-curricular activities in full-stack web development, video game development, and tutoring for math, computer science, and physics."],
          loop: false,
          typeSpeed: 5,
          startDelay: 100,
          cursorChar: "|",
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
              cursorChar: "|",
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
                    cursorChar: "|",
                    onFinished: function () {
                      let elements = document.getElementsByClassName('ityped-cursor');
                      elements[0].parentNode.removeChild(elements[0]);
                      if (elements.length === 0) {
                        init(document.querySelector('#intro-launch'), {
                          showCursor: false,
                          strings: ["~> "],
                          loop: false,
                          typeSpeed: 10,
                          startDelay: 200,
                          cursorChar: "|"
                        })
                      }
                    }
                  })
                }
              }   // mind the steps
            })
          }
        })
      }
    })
    let cursors = document.getElementsByClassName('ityped-cursor');
    for (let i = 0; i < cursors.length; i++) {
      cursors[i].style.fontSize = '2rem';
      cursors[i].style.lineHeight = '2rem';
    }
  })

  const [iTypeInit, setiTypeInit] = useState(false)

  const techli = tech.map((e, i) => <span><li className='inline' id={'intro-tech-' + i}></li></span>)

  return (
    <div className='root'>
      <NavigationBar />
      <div className='h-16'></div>
      <div className='intro-container flex justify-start h-screen xs:justify-center flex-col p-2 pb-32 xs:-mb-32 w-full sm:mb-0 sm:pb-2 sm:h-102'>
        <div className='terminal max-w-lg flex flex-col self-center w-full'>
          <div className='terminal-bar flex justify-between w-full p-2'>
            <div class='button flex-shrink-0 btn-exit'></div>
            <div class='button flex-shrink-0 btn-min'></div>
            <div class='button flex-shrink-0 btn-max'></div>
            <span className='text-center mx-auto align-top'>~/intro.sh</span>
            <div class='button flex-shrink-0 opacity-0'></div>
            <div class='button flex-shrink-0 opacity-0'></div>
            <div class='button flex-shrink-0 opacity-0'></div>
          </div>
          <div className='terminal-console h-full p-4'>
            <div className='terminal-console-textarea w-full h-full'>{/*try to use flexbox later*/}
              <p className='intro inline' id="intro-name"></p><div className='br' />
              <p className='intro inline' id="intro-desc"></p><div className='br' />
              <p className='intro inline' id="intro-tech"></p><div className='br' />
              <ul className='intro grid grid-cols-3 gap-0 justify-items-end mx-auto max-w-xl px-2.5'>
                {techli}
              </ul>
              <div className='br' />
              <p className='intro intro-launch inline' id="intro-launch"></p>
              <input type='text' className='intro inline' id='shell' />
            </div>
          </div>
        </div>
      </div >
      <div class='projects-container container mx-auto max-w-2xl p-2'>
        <h1 className='text-3xl flex justify-center text-main'>Projects<IoRocket className='ml-1 w-6' /></h1>
        <hr className='mt-1 mb-12 w-2/3 mx-auto' />

        <div class='project-billboard mb-12 w-full flex flex-col mx-auto max-w-4xl sm:flex-row gap-4'>
          <div className='project-image-container w-full z-10 px-16 sm:p-0 sm:w-1/3'>
            <img src={brewmate_icon} alt='' className='project-image shadow-main mx-auto z-10 ' />
          </div>
          <div className='project-desc w-full flex flex-col bg-base-light bg-opacity-60 text-main rounded-3xl p-4 sm:px-8 pt-24 -mt-24 sm:pt-4 sm:mt-0 sm:shadow-none'>
            <p className='text-3xl font-bold text-center align-middle pb-2 pt-2 sm:text-left z-20'>Chefmate</p>
            <p>
              A simple no-nonsense recipe app.
              <ul className='features pl-8'>
                <li>Step-by-step recipe walkthrough</li>
                <li>Create and modify your own recipes</li>
                <li>Save your recipes to the cloud and access them on another device</li>
              </ul>
            </p>
            <div className='xs:h-16 flex flex-row justify-center sm:justify-start flex-wrap sm:content-start p-4 gap-3'>
              <a className='w-32 text-center transform bg-base-dark border-b-4 active:border-b-2 active:translate-y-0.5 hover:bg-subtle-dark  border-gray-900 rounded-xl px-3 py-2' href='https://github.com/DamienSaavi/brewmate'>GitHub<IoLogoGithub className='ml-1 inline w-4 h-4 align-baseline' /></a>
              <a className='w-32 text-center transform bg-base-dark border-b-4 active:border-b-2 active:translate-y-0.5 hover:bg-subtle-dark  border-gray-900 rounded-xl px-3 py-2' href='https://expo.io/@damiensaavi/chefmate'>Expo<SiExpo className='ml-1 inline w-4 h-4 align-middle' /></a>
            </div>
          </div>
        </div>


        <div class='project-billboard mb-12 w-full flex flex-col mx-auto max-w-4xl sm:flex-row-reverse gap-4'>
          <div className='project-image-container w-full z-10 px-16 sm:p-0 sm:w-1/3'>
            <img src={gol_icon} alt='' className='project-image shadow-main mx-auto z-10 ' />
          </div>
          <div className='project-desc w-full flex flex-col bg-base-light bg-opacity-60 text-main rounded-3xl p-4 sm:px-8 pt-24 -mt-24 sm:pt-4 sm:mt-0 sm:shadow-none '>
            <p className='text-3xl font-bold text-center align-middle pb-2 pt-2 sm:text-left z-20'>Lazy Game of Life</p>
            <p>
              Conway's Game of Life with a "lazy" update function that optimizes performance by only processing active cells and their neighbors rather than updating the entire grid.
            </p>
            <div className='xs:h-16 flex flex-row justify-center sm:justify-start flex-wrap sm:content-start p-4 gap-3'>
              <a className='w-32 text-center transform bg-base-dark border-b-4 active:border-b-2 active:translate-y-0.5 hover:bg-subtle-dark border-gray-900 rounded-xl px-3 py-2' href='https://github.com/DamienSaavi/lazy-game-of-life'>GitHub<IoLogoGithub className='ml-1 inline w-4 h-4 align-baseline' /></a>
              <a className='w-32 text-center transform bg-base-dark border-b-4 active:border-b-2 active:translate-y-0.5 hover:bg-subtle-dark border-gray-900 rounded-xl px-3 py-2' href='https://damiensaavi.github.io/lazy-game-of-life'>Website</a>
            </div>
          </div>
        </div>

        <div class='project-billboard mb-12 w-full flex flex-col mx-auto max-w-4xl sm:flex-row gap-4'>
          <div className='project-image-container w-full z-10 px-16 sm:p-0 sm:w-1/3'>
            <img src={vybot_icon} alt='' className='project-image shadow-main mx-auto z-10 ' />
          </div>
          <div className='project-desc w-full flex flex-col bg-base-light bg-opacity-60 text-main rounded-3xl p-4 sm:px-8 pt-24 -mt-24 sm:pt-4 sm:mt-0 sm:shadow-none '>
            <p className='text-3xl font-bold text-center align-middle pb-2 pt-2 sm:text-left z-20'>VyBot</p>
            <p>
              Discord music bot with extensive features.
              <ul className='features pl-8'>
                <li>Create playlists using keywords or Youtube links</li>
                <li>Shuffle and modify queue</li>
                <li>Text-based UI</li>
                <li>Various playback features</li>
              </ul>
            </p>
            <div className='xs:h-16 flex flex-row justify-center sm:justify-start flex-wrap sm:content-start p-4 gap-3'>
              <a className='w-32 text-center transform bg-base-dark border-b-4 active:border-b-2 active:translate-y-0.5 hover:bg-subtle-dark border-gray-900 rounded-xl px-3 py-2' href='https://github.com/DamienSaavi/vybot'>GitHub<IoLogoGithub className='ml-1 inline w-4 h-4 align-baseline' /></a>
            </div>
          </div>
        </div>

        <div className='xs:h-16 w-full flex flex-row justify-center flex-wrap p-4'>
          <a className='w-48 text-center transform bg-accent border-b-4 hover:bg-accent-light active:border-b-2 active:translate-y-0.5 border-gray-800 rounded-xl px-3 py-2' href='https://github.com/DamienSaavi?tab=repositories'>More on GitHub<IoLogoGithub className='ml-1 inline w-4 h-4 align-baseline' /></a>
        </div>

      </div>
      <div className='h-16'></div>
      <footer className='text-sm text-main transition-all hover:text-accent transform hover:-translate-y-1 text-center p-2 pb-8'><a href='https://github.com/DamienSaavi/damiensaavi.github.io'>Designed and built by Damien Mousavi</a></footer>
    </div >
  )
}

export default App