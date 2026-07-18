import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <motion.div className='py-8 bg-dark-300'>
            <div className='container mx-auto px-6 text-center'>
                <p className='text-gray-400'>©2026 Created By Sanskriti Raj Rathor. All rights reserved.</p>
            </div>
        </motion.div>
    )
}

export default Footer