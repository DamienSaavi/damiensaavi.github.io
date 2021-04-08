import React, { useEffect, useState} from 'react'
import { init } from 'ityped'
import { IoRocketOutline, IoMenu } from "react-icons/io5";
import { Drawer } from '@material-ui/core';
import './App.css'


const tech = [
  'ReactJS', 'MySQL', 'Unity',
  'ExpressJS', 'Python', 'AWS',
  'MongoDB', 'Django', 'C#'
]

function App() {
  useEffect(() => {
    console.log('yeet')
    if (iTypeInit)  return
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

  const [drawer, setDrawer] = useState(false)
  const [iTypeInit, setiTypeInit] = useState(false)

  const techli = tech.map((e, i) => <span><li className='inline' id={'intro-tech-' + i}></li></span>)

  return (
    <div className='root'>
      <div className='w-full flex justify-end fixed p-1'>
      <IoMenu className='w-10 h-10 text-gray-300' onClick={() => setDrawer(!drawer)}></IoMenu>
      <Drawer classes={'h-16'} open={drawer} onClose={() => setDrawer(false)}>YEEEEET</Drawer>
      </div>
      <div className='intro-container flex flex-col p-2 w-full h-screen py-12'>
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
              <p className='intro inline' id="intro-name"></p><br />
              <p className='intro inline' id="intro-desc"></p><br />
              <p className='intro inline' id="intro-tech"></p><br />
              <ul className='intro grid grid-cols-3 gap-0 justify-items-end mx-auto max-w-xl px-2.5'>
                {techli}
              </ul>
              <br/>
              <p className='intro intro-launch inline' id="intro-launch"></p>
              <input type='text' className='intro inline' id='shell'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App