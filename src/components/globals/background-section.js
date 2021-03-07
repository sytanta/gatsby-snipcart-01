import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export default function BackgroundSection({
    img,
    styleClass = 'default-background',
    title = 'default title',
    children,
}) {
    return (
        <BackgroundImage className={styleClass} fluid={img}>
            <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
                {title}
            </h1>
            {children}
        </BackgroundImage>
    )
}
