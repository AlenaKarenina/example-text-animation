'use client'

import { MotionValue, motion, useScroll, useTransform } from 'framer-motion'
import React, { FC, ReactNode, useRef } from 'react'
import lcs from './Word.module.scss'
import { ParagraphsData } from '../paragraph/Paragraph.data'

interface WordProps {
  children: ReactNode
  progress: MotionValue<number>
  range: any
}

const Word: FC<WordProps> = (props) => {
  const { children, progress, range } = props

  const opacity = useTransform(progress, range, [0, 1])
  return <span className={lcs.word}>
    <span className={lcs.shadow}>{children}</span>
    <motion.span style={{opacity: opacity}}>{children}</motion.span>
  </span>
}

interface WordsProps extends ParagraphsData {}

const Words: FC<WordsProps> = (props) => {
  const { text } = props

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

export default Words
