import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const variants = {
  initial: { opacity: 0, y: 18, filter: 'blur(4px)' },
  enter:   { opacity: 1, y: 0,  filter: 'blur(0px)' },
  exit:    { opacity: 0, y: -12, filter: 'blur(4px)' },
}

export default function PageTransition({ children }: Props) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  )
}
