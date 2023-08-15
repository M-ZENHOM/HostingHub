"use client"
import { FC } from 'react'
import { motion } from "framer-motion"

interface AnimationDivProps {
    children: React.ReactNode
    dur?: number
    delay?: number
}

const AnimationDiv: FC<AnimationDivProps> = ({ children, dur, delay }) => {
    return <motion.div
        initial={{ translateY: 30, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: dur = 0.6, delay: delay }}
        viewport={{ once: true }}>
        {children}
    </motion.div>
}

export default AnimationDiv