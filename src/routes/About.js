import React from 'react'
import InfoCard from '../components/InfoCard'

function About() {


  return (
    <div className='root text-gray-200 h-screen'>
      <div className='flex flex-col md:flex-row max-w-3xl mx-auto min-h-sm pt-16 md:pt-32 gap-4'>
        <div className='p-6'>
          <p className='text-3xl mb-4 text-accent-light'>A brief bio:</p>
          <p className='mb-4'>My name is Damien "Saavi" Mousavi. I began my university education as a physics major in 2015, planning on entering electrical engineering. However, around that time, I started programming and was fascinated with the freedom that a computer gives you to create art, tools, and toys alike. So, harkening back to my childhood as the curious type who spent an endless amount of time dissecting, examining, and building things, I transitioned to computer science.</p>
          <p className='mb-4'>
            Still maintaining my love for math and physics, I began incorporating them into my projects, taking elective courses in mathematics while studying physics on my own time.
          </p>
          <p className='mb-4'>
            While studying full-time, I also began learning full-stack web development outside of the university starting in 2018, which broadened my horizon to the field's vast potential.
          </p>
          <p className='mb-4'>
            I enjoy designing and creating front-end experiences that enable one to explore and interact with information in endless ways. Working on the back-end satisfies my appetite for managing, analyzing, and manipulating data while applying mathematical concepts. Being the marriage of the prior two, full-stack development is all my curious childhood self could ever dream of!
          </p>
        </div>
        <InfoCard className='rounded-3xl shadow-3xl mx-auto' />
      </div>
      <div className='h-16' />
    </div >
  )
}

export default About