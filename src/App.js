import React, { useEffect } from 'react'
import { init } from 'ityped'
import './App.css'

const tech = [
  'ReactJS', 'MySQL', 'Unity',
  'ExpressJS', 'Python', 'AWS',
  'MongoDB', 'Django', 'C#'
]

function App() {
  useEffect(() => {
    init(document.querySelector('#intro-name'), {
      showCursor: true,
      strings: ["Damien Mousavi"],
      loop: false,
      typeSpeed: 20,
      startDelay: 1000,
      cursorChar: "█",
      onFinished: function () {
        let elements = document.getElementsByClassName('ityped-cursor');
        while (elements.length > 0) {
          elements[0].parentNode.removeChild(elements[0]);
        }

        init(document.querySelector('#intro-desc'), {
          showCursor: true,
          strings: ["CSUF graduate with a bachelor's degree in computer science plus various extra-curricular activities in full-stack web development, video game development, and tutoring for math, computer science, and physics. Recent tech I’m using:"],
          loop: false,
          typeSpeed: 5,
          startDelay: 100,
          cursorChar: "█",
          onFinished: function () {
            let elements = document.getElementsByClassName('ityped-cursor');
            while (elements.length > 0) {
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
                  if (elements.length === 0) {
                    init(document.querySelector('#intro-launch'), {
                      showCursor: true,
                      strings: [">"],
                      loop: false,
                      typeSpeed: 100,
                      startDelay: 200,
                      cursorChar: "█"
                    })
                  }
                }
              })
            }
          }
        })
      }
    })
    let cursors = document.getElementsByClassName('ityped-cursor');
    for (let i = 0; i < cursors.length; i++)
      cursors[i].style.fontSize = '2.5rem';
  })

  const techli = tech.map((e, i) => <span><li className='inline' id={'intro-tech-' + i}></li></span>)

  return (
    <div className='root fixed h-screen w-screen p-4'>
      <div className='terminal container mt-24 mx-auto max-w-lg h-56'>
        <div className='terminal-bar w-full flex justify-items-start gap-2 p-2'>
          <div class='button btn-exit'></div>
          <div class='button btn-min'></div>
          <div class='button btn-max'></div>
          <span className='text-center mx-auto align-top text-xs'>~./intro.sh</span>
          <div class='button opacity-0'></div>
          <div class='button opacity-0'></div>
          <div class='button opacity-0'></div>
        </div>
        <div className='terminal-console flex self-center p-8'>
          <div className='w-full'>
            <p className='intro inline' id="intro-name"></p><br />
            <p className='intro inline' id="intro-desc"></p>
            <ul className='intro container grid grid-cols-3 gap-4 mx-auto max-w-xl p-4'>
              {techli}
            </ul>
            <p className='intro inline' id="intro-launch"></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App