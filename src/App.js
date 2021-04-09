import React, { useEffect, useState } from 'react'
import { init } from 'ityped'
import { IoRocket, IoMenu } from "react-icons/io5";
import './App.css'
import brewmate_icon from './brewmate.png'
import gh_icon from './gh.png'
import appstore_icon from './appstore.svg'

const tech = [
  'ReactJS', 'MySQL', 'Unity',
  'ExpressJS', 'Python', 'AWS',
  'MongoDB', 'Django', 'C#'
]

function App() {
  useEffect(() => {
    console.log('yeet')
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

  const [drawer, setDrawer] = useState(true)
  const [iTypeInit, setiTypeInit] = useState(false)

  const techli = tech.map((e, i) => <span><li className='inline' id={'intro-tech-' + i}></li></span>)

  return (
    <div className='root'>
      <div className='w-full flex justify-end fixed z-50'>
        <IoMenu className='w-10 h-10 text-main' onClick={() => setDrawer(!drawer)}></IoMenu>
        <div className={`w-32 h-64 transition-all duration-200 ease-in-out bg-red-900 ${drawer ? 'mr-0' : '-mr-32'}`}>
          <ul>
            {/* Nav links */}
          </ul>
        </div>
      </div>
      <div className='intro-container flex flex-col p-2 w-full py-12'>
        <div className='terminal max-w-lg flex flex-col self-center w-full xs:h-102'>
          <div className='terminal-bar flex justify-between w-full p-2'>
            <div class='button flex-shrink-0 btn-exit'></div>
            <div class='button flex-shrink-0 btn-min'></div>
            <div class='button flex-shrink-0 btn-max'></div>
            <span className='text-center mx-auto align-top'>~./intro.sh</span>
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
      </div>
      <div class='projects-container relative container mx-auto max-w-5xl p-2'>
        <h1 className='mb-4 text-3xl flex gap-1 text-main'>Projects<IoRocket className='w-6' /></h1>

        <div class='project-billboard w-full flex flex-col mx-auto max-w-4xl sm:flex-row gap-2'>
          <div className='project-image-container w-full flex align-middle z-10 px-16 sm:p-0 sm:w-1/3'>
            <img src={brewmate_icon} alt='' className='project-image w-12 shadow-3xl mx-auto z-10 '/>
          </div>
          <div className='project-desc w-full flex flex-col bg-base-light shadow-main bg-opacity-20 text-main rounded-3xl p-4 pt-24 -mt-24 sm:pt-4 sm:mt-0 sm:shadow-none sm:bg-opacity-0'>
            <p className='text-3xl font-bold text-center pb-2 pt-1 sm:text-left'>Brewmate</p>
            <p>
              A companion app for home brewing à la scientific method!
              <ul className='features pl-8'>
                <li>Step-by-step recipe walkthrough</li>
                <li>Create your own recipes</li>
                <li>Experiment with recipes and log your observations</li>
                <li>Save your recipes and logs to the cloud</li>
              </ul>
            </p>
            <div className='flex flex-col justify-start flex-wrap content-center sm:content-start p-4 gap-2'>
              <img src={appstore_icon} className='w-36'/>
              <img src={gh_icon} className='h-10 w-36 object-scale-down border-black border bg-white rounded-lg'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App