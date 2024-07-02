'use client'

import { useScroll, useTransform, motion, MotionValue } from 'framer-motion'
import React, { useRef } from 'react'
import lcs from './Character.module.scss'

interface WordData {
  children: string
  progress: MotionValue<number>
  range: any
}

const Word = ({children, progress, range}: WordData) => {
  const amount = range[1] - range[0]
  const step = amount / children?.length

  return (
    <span className={lcs.word}>
      {children?.split('').map((char, i) => {
        const start = range[0] + (i * step)
        const end = range[0] + ((i + 1) * step)
        return <Char
          key={`char_${i}`}
          progress={progress}
          range={[start, end]}
        >
          {char}
        </Char>
      })}
    </span>
  )
}

const Char = ({children, progress, range}: WordData) => {
  const opacity = useTransform(progress, range, [0,1])
  return (
    <span>
      <span className={lcs.shadow}>{children}</span>
      <motion.span style={{opacity: opacity}}>{children}</motion.span>
    </span>
  )
}

export default function Paragraph({ text }: { text: string }) {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.9', 'start 0.25']
  })

  const words = text.split(' ')
  return (
    <p
      ref={container}
      className={lcs.paragraph}
    >
      {words.map( (word, i) => {
        const start = i / words.length
        const end = start + (1 / words.length)
        return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
      })}
    </p>
  )
}
