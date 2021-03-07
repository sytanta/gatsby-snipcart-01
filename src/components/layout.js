import React from 'react'
import PropTypes from 'prop-types'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'

import '../styles/bootstrap.min.css'
import '../styles/layout.css'

import Navbar from './globals/navbar'
import Footer from './globals/footer'

const duration = 0.5

const variants = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        transition: {
            duration,
            delay: duration,
            when: 'beforeChildren',
        },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.3 },
    },
}

const Layout = ({ children }) => (
    <>
        <Navbar />
        <AnimateSharedLayout>
            <AnimatePresence exitBeforeEnter>
                <motion.main
                    key={location.pathname}
                    variants={variants}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                >
                    {children}
                </motion.main>
            </AnimatePresence>
        </AnimateSharedLayout>
        {/* {children} */}
        <Footer />
    </>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
