import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import BackgroundSection from '../components/globals/background-section'
import Info from '../components/home/info'

const AboutPage = ({ data }) => (
    <>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <BackgroundSection
            img={data.img.childImageSharp.fluid}
            title="about us"
            styleClass="about-background"
        />
        <Info otherPage={{ path: '/', name: 'home page' }} />
    </>
)

export const query = graphql`
    {
        img: file(relativePath: { regex: "/about-background/" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default AboutPage
