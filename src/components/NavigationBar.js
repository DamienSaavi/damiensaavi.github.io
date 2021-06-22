import { Fragment, useState } from 'react'
import InfoCard from './InfoCard';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import logo from '../assets/logo-md.png'
import '../stylesheet/App.css'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavigationBar({ path, setRoute }) {
    const [card, toggleCard] = useState(false)

    const navigation = [
        { name: 'Home', routeTo: 'home', current: (path == 'home') },
        { name: 'About me', routeTo: 'about', current: (path == 'about') },
    ]



    return (
        <Disclosure as="nav" className="fixed font-jos w-full bg-main-dark z-50">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="block h-9 w-auto rounded-full"
                                        src={logo}
                                        alt="Damien Saavi"
                                    />
                                    <div className='flex flex-col gap-0 pt-1 leading-4 ml-1 text-gray-400 select-none'>
                                        <p className=''>Damien</p>
                                        <p className=''>Mousavi</p>
                                    </div>
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                className={classNames(
                                                    item.current ? 'bg-main-light text-white' : 'text-gray-300 hover:bg-opacity-50 hover:bg-main-light hover:text-white',
                                                    'px-3 py-2 rounded-md text-sm font-medium cursor-pointer select-none'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                                onClick={() => { setRoute(item.routeTo) }}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                                <div className={`transform transition ${path=='about'? `-translate-y-full`:``} hidden sm:flex relative text-white h-full`}>
                                    <div className='p-2 z-10 flex h-full w-80 select-none text-center bg-main-dark justify-end' >
                                        <a className='w-32 flex flex-grow-0 text-center justify-center transform bg-coa border-b-4 active:border-b-2 active:mt-0.5 active:translate-y-0.5 hover:bg-coa-highlight border-coa-dark rounded-xl px-3 py-2.5 text-black cursor-pointer'
                                        onClick={() => toggleCard(!card)}>Contact Info</a>
                                    </div>
                                    <div className={`transition transform ${card && path=='home' ? 'translate-y-2' : '-translate-y-full'} w-min absolute top-full right-0 z-0`}>
                                        <InfoCard className={`rounded-3xl transition ${card && path=='home' ? 'shadow-glow' : 'shadow-none'}`} />
                                    </div>
                                </div>

                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    className={classNames(
                                        item.current ? ' bg-main-light text-white' : 'text-gray-300 hover:bg-main-light hover:bg-opacity-50 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium cursor-pointer select-none' 
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                    onClick={() => setRoute(item.routeTo)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className='flex flex-row gap-4 py-4 justify-start text-gray-300'>
                                <a target="_blank" href='https://github.com/DamienSaavi'><IoLogoGithub className='hover:text-white ml-1 inline w-9 h-9' title='GitHub' /></a>
                                <a target="_blank" href='https://www.linkedin.com/in/damienmousavi/'><IoLogoLinkedin className='hover:text-white ml-1 inline w-9 h-9' title='LinkedIn' /></a>
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
