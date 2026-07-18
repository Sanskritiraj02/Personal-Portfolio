import React from 'react'
import { motion } from 'framer-motion'
import myProfile from '../assets/Docs/MyPhoto.jpeg'
import { aboutInfo } from '../assets/assets'

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id = 'about'
            className='py-20 bg-dark-200'
        >
                <div className='container mx-0 px-6'>
                    {/* HEADING */}
                    <h2 className='text-3xl font-bold text-center mb-4'>About
                        <span className='text-purple'> Me</span>
                    </h2>
                    <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get to know the person behind the code: my story, values, and what drives me</p>

                    {/* image+my journey */}
                    <div className='flex flex-col md:flex-row items-center gap-12'>
                        {/* image */}
                        <div className='md:w-1/2 rounded-2xl overflow-hidden'>
                            
                            <motion.img 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            viewport={{ once: false , amount:0.2}}
                            className='w-full h-full object-cover'
                            src={myProfile} alt='Profile'/>
                        </div>
                        {/* Text Section */}
                        <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: false , amount:0.2}}
                        className='md:w-1/2'>
                            <div className='rounded-2xl p-8'>
                                <h3 className='text-2xl font-semibold text-left mb-6'>My Journey</h3>
                                <p className='text-gray-300 mb-6'>I’m a Computer Science student passionate about Data Science and problem-solving. My journey began with curiosity about how systems work, which gradually turned into a strong interest in coding and building efficient solutions.</p>
                                <p className='text-gray-300 mb-6'>I started with C and C++, building a solid foundation in Data Structures and Algorithms. Over time, I explored data-focused learning, while consistently improving my logical thinking and analytical skills. I focus on strengthening core concepts and maintaining a disciplined approach to continuous learning. I believe in consistency, continuous improvement, and pushing my limits to grow.</p>

                                {/* Cards */}
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                    {
                                        aboutInfo?.map((data, index) => (
                                            <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                                                <div className='text-purple text-4xl mb-4'>
                                                    <data.icon />
                                                </div>
                                                <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                                                <p className='text-gray-400'>{data.description}</p>
                                            </div>
                                        ))
                                    }
                                </div>

                            </div>
                        </motion.div>
                    </div>
                </div>
        </motion.div>
    )
}

export default About