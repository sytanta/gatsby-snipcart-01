import React from 'react'

import Layout from './src/components/layout'

export const wrapPageElement = ({ element, props }) => (
    <Layout {...props}>{element}</Layout>
)

export const shouldUpdateScroll = () => false

const scrollToPosition = (x, y) => {
    const c = document.documentElement.scrollTop || document.body.scrollTop

    y = Math.max(y, c)
    y = y - y / 10

    if (y > 2) {
        window.scrollTo(x, y)
        window.requestAnimationFrame(scrollToPosition.bind(null, x, y))
    }
}
