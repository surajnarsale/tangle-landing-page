import React, { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedText from '@/components/molecules/AnimateText'

export default function App() {
  // Placeholder text data, as if from API
  const Heading = [
    { type: 'heading1', text: 'Framer Motion' },
    {
      type: 'heading2',
      text: 'Animating responsive text!',
    },
  ]

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={container}>
      <div className="container">
        {Heading.map((item, index) => {
          return <AnimatedText {...item} key={index} />
        })}
      </div>
    </motion.div>
  )
}
