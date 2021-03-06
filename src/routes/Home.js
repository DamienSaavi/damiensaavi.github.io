import React, { useEffect, useRef } from 'react'
import Project from '../components/Project.js'
import { init } from 'ityped'
import { IoRocket, IoLogoGithub } from "react-icons/io5";
import brewmate_icon from '../assets/brewmate.png'
import vybot_icon from '../assets/vybot.png'
import gol_icon from '../assets/gol.png'
import bm_icon from '../assets/mailer-logo.png'

const tech = [
  'ReactJS', 'MySQL', 'Node',
  'ExpressJS', 'Python', 'GCP',
  'MongoDB', 'PHP', 'C#'
] 

const loadingFrames = [...new Array(5).fill('▄▄▄▄'), '■▄▄▄', '▀■▄▄', '■▀■▄', '▄■▀■', '▄▄■▀', '▄▄▄■']

function Home({ className }) {
  const loader = useRef({ step: 0, timer: null })

  useEffect(() => {
    submitCommand(null)
    alert('Please visit my updated website at http://damiensaavi.com\nThis website does not recieve updates and will be closed soon.')
  }, [])

  function toggleLoading(val) {
    const outputDiv = document.getElementById("terminal-output")
    loader.current.step = 0

    if (val) {
      loader.current.timer = setInterval(() => {
        const i = loader.current.step
        outputDiv.innerHTML = loadingFrames[i]
        loader.current.step = (i + 1) % loadingFrames.length
      }, 100);
    } else {
      clearInterval(loader.current.timer)
      outputDiv.innerHTML=''
    }
  }

  function outputToTerminal(output) {
    const el = output.shift()
    const id = 'terminal-output-' + output.length

    switch ((typeof el).toLowerCase()) {
      case 'string':
        const p = document.createElement('p')

        p.id = id
        p.className = 'mb-2'
        document.getElementById("terminal-output").appendChild(p);
        init(document.querySelector('#' + id), {
          showCursor: false,
          strings: [el],
          loop: false,
          typeSpeed: 5,
          startDelay: 0,
          onFinished: function () {

            if (output.length > 0)
              outputToTerminal(output)
          }
        })
        break;
      case 'object':
        const ul = document.createElement('ul')

        ul.id = id
        ul.className = 'grid grid-cols-3 gap-0 mx-auto pl-4 mb-2'
        document.getElementById("terminal-output").appendChild(ul)

        el.map((e, i) => {
          const li = document.createElement('li')
          li.id = id + '-' + i

          const sp = document.createElement('span')
          sp.appendChild(li)
          ul.appendChild(sp)
        })

        for (let i = 0; i < el.length; i++) {
          init(document.querySelector('#' + id + '-' + i), {
            showCursor: false,
            strings: [el[i]],
            loop: false,
            typeSpeed: 50,
            startDelay: i * 100,
            onFinished: function () {

              if (output.length > 0 && i === el.length - 1)
                outputToTerminal(output)
            }
          })
        }
        break;
        default:
          return
    }
  }

  function submitCommand(event) {
    toggleLoading(true)

    if (event)
      event.preventDefault()

    const output = ["CSUF graduate with a bachelor's degree in computer science plus various extra-curricular activities in full-stack web development, video game development, and tutoring for math, computer science, and physics.", 'Some recent tech I’m using:', tech]

    setTimeout(() => {
      toggleLoading(false)
      outputToTerminal(output)
    }, 3000);
  }

  return (
    <div className={`root text-gray-200 ${className}`}>
      <div className='intro-container flex flex-col relative md:flex-row justify-center items-center gap-4 md:gap-8 h-full min-h-sm w-full px-4 pb-16 overflow-hidden'>
        <div className='intro-name text-center md:text-left flex flex-col text-shadow z-10'>
          <p className='text-left opacity-90'>Hello👋🏽 I'm</p>
          <p className='text-4xl xs:text-5xl md:text-6xl font-extrabold'>Damien <br className='hidden md:block' />Mousavi</p>
          <p className='text-lg opacity-90'>Private Tutor | Web developer</p>
        </div>

        <div className='bg-sphere absolute rounded-full z-0 md:mr-72 transform md:-rotate-135' />

        <div className='terminal relative flex flex-col text-sm md:text-base w-full max-w-lg h-1/2 max-h-102 md:h-96 shadow-3xl'>
          <div className='terminal-bar relative text-xs flex justify-start h-8 py-2'>
            <div className='h-4 w-4 rounded-full ml-2 flex-shrink-0 btn-exit'></div>
            <div className='h-4 w-4 rounded-full ml-2 flex-shrink-0 btn-min'></div>
            <div className='h-4 w-4 rounded-full ml-2 flex-shrink-0 btn-max'></div>
            <span className='absolute w-full text-center'>~/intro.sh</span>
          </div>
          <div className='terminal-console overflow-y-auto p-2 flex-grow'>
            <div className='w-full opacity-80 pb-8' id='terminal-output'>
              {/* <p className='inline' id="intro-desc"></p><div className=' mb-4' />
              <p className='inline' id="intro-tech"></p><div className=' mb-4' />
              <ul className='grid grid-cols-3 gap-0 mx-auto pl-4'>
                {techli}
              </ul> */}
            </div>
          </div>
          <div className='h-14' />
          <div className='cmdline-container flex flex-row justify-between gap-2 absolute bottom-0 w-full p-2' onSubmit={(event) => { submitCommand(event) }}>
            <form className='cmdline flex p-2 gap-2 w-full'>
              <p className='intro-launch opacity-90'>{'>'}</p>
              <input type='text' className='w-full' id='shell' autoComplete='off' placeholder='Commands coming soon...' />
              <input type="submit" className="hidden" />
            </form>
            {/* <button></button> */}
          </div>
        </div>
      </div >

      <div className='projects-container mx-auto max-w-lg sm:max-w-3xl -mt-20 p-2'>
        <p className='text-4xl flex justify-center Z-10 text-shadow'>Projects<IoRocket className='ml-1 w-6' /></p>
        <hr className='mt-0 mb-12 w-3/4 mx-auto' />
        {/* TODO: use a loop to render wp api response instead */}

        <div className='relative'>
          <div className='hidden sm:block bg-main-light opacity-50 absolute h-full w-1 left-1/2 z-0'></div>
          <Project index={0}>
            <Project.Logo src={brewmate_icon} />
            <Project.Description title='Cheftmate'>
              A simple no-nonsense recipe app.
              <ul className='features pl-8'>
                <li>Step-by-step recipe walkthrough.</li>
                <li>Create and modify your own recipes.</li>
                <li>Save your recipes to the cloud and access them on another device.</li>
              </ul>
              <Project.ButtonBar>
                <Project.Button href='https://github.com/DamienSaavi/brewmate'>
                  GitHub<IoLogoGithub className='ml-1 inline w-4 h-4 align-baseline' />
                </Project.Button>
              </Project.ButtonBar>
            </Project.Description>
          </Project>

          <Project index={1}>
            <Project.Logo src={vybot_icon} />
            <Project.Description title='VyBot'>
              Discord music bot with extensive features.
              <ul className='features pl-8'>
                <li>Create playlists using keywords or Youtube links</li>
                <li>Save playlist to cloud and play anytime.</li>
                <li>Shuffle and modify queue.</li>
                <li>Intuitive text-based UI.</li>
              </ul>

              <Project.ButtonBar>
                <Project.Button href='https://github.com/DamienSaavi/vybot'>
                  GitHub<IoLogoGithub className='ml-1 inline w-4 h-4 align-baseline' />
                </Project.Button>
                <Project.Button href='https://discord.com/api/oauth2/authorize?client_id=679935364030660646&permissions=3155968&scope=bot'>
                  Try it!
                </Project.Button>
              </Project.ButtonBar>
            </Project.Description>
          </Project>

          <Project index={2}>
            <Project.Logo src={bm_icon} />
            <Project.Description title='Budget Mailer'>
              A mailchimp clone.
              <ul className='features pl-8'>
                <li>Rich text editor providing more freedom than most email services.</li>
                <li>Send properly formatted emails and newsletters to multiple contacts.</li>
                <li>Create and store contact list.</li>
              </ul>
              <Project.ButtonBar>
                <Project.Button href='https://github.com/DamienSaavi/budget-mailer'>
                  GitHub<IoLogoGithub className='ml-1 inline w-4 h-4 align-baseline' />
                </Project.Button>
              </Project.ButtonBar>
            </Project.Description>
          </Project>

          <Project index={3}>
            <Project.Logo src={gol_icon} />
            <Project.Description title='Lazy Game of Life'>
              Conway's Game of Life with a "lazy" update function implementation to boost performance.
              <Project.ButtonBar>
                <Project.Button href='https://github.com/DamienSaavi/lazy-game-of-life'>
                  GitHub<IoLogoGithub className='ml-1 inline w-4 h-4 align-baseline' />
                </Project.Button>
                <Project.Button href='https://damiensaavi.github.io/lazy-game-of-life'>
                  Try it!
                </Project.Button>
              </Project.ButtonBar>
            </Project.Description>
          </Project>


          <div className='flex h-18 w-60 mx-auto p-4 justify-center bg-main-light z-20 rounded-xl'>
            {/* <div className='bg-main-light mx-auto p-8 z-20 rounded-xl'> */}
            <a className='w-48 text-black text-center transform border-coa-dark bg-coa border-b-4 hover:bg-coa-highlight active:border-b-2 active:translate-y-0.5 active:mt-0.5 rounded-xl px-3 py-2.5 align-center' href='https://github.com/DamienSaavi?tab=repositories'>More on GitHub<IoLogoGithub className='ml-1 inline align-baseline' /></a>
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className='h-16'></div>
      <footer className='text-sm  transition-all hover:text-coa transform hover:-translate-y-1 text-center p-2 pb-8'><a href='https://github.com/DamienSaavi/damiensaavi.github.io'>Designed and built by Damien Mousavi</a></footer>
    </div >
  )
}

export default Home