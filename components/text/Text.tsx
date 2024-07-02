'use client'

import lcs from './Text.module.scss'
import { motion, useInView } from 'framer-motion'
import { paragraphs } from './Text.mock'
import { FC, useRef } from 'react'

interface TextProps {}

const Text: FC<TextProps> = (props) => {
  const {} = props

  const animation = {
    initial: {
      y: '100%'
    },
    enter: (i: number) => ({
      y: '0',
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i
      }
    })
  }

  const elRef = useRef<any>(null)

  const isInView = useInView(elRef, { once: true })

  return(
    <div ref={elRef} className={lcs.el}>
      {paragraphs.map((text, index) => {
        return <div key={index} className={lcs.line}>
          <motion.span
            className={lcs.paragraph}
            custom={index}
            variants={animation}
            initial='initial'
            animate={isInView ? 'enter' : ''}
          >
            {text}
          </motion.span>
        </div>
      })}
    </div>
  )
}

export default Text
