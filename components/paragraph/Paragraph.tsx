'use client'

import { FC, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import lcs from './Paragraph.module.scss'
import { ParagraphsData } from './Paragraph.data'

interface ParagraphProps extends ParagraphsData {}

const Paragraph: FC<ParagraphProps> = (props) => {
  const { text } = props

  const container = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.9', 'start 0.25']
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return(
    <motion.p
      ref={container}
      className={lcs.paragraph}
      style={{opacity}}
    >
      {text}
    </motion.p>
  )
}

export default Paragraph
