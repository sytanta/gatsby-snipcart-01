import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import BackgroundSection from '../components/globals/background-section'
import Info from '../components/home/info'
import Menu from '../components/home/menu'
import Products from '../components/home/products'
import Contact from '../components/home/contact'

const IndexPage = ({ data }) => (
    <>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <BackgroundSection
            img={data.img.childImageSharp.fluid}
            title="regular joe's"
        />
        <Info otherPage={{ path: '/about', name: 'about page' }} />
        <Menu items={data.menu} />
        <Products />
        <Contact />
    </>
)

export const query = graphql`
    {
        img: file(relativePath: { regex: "/default-background/" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        menu: allContentfulCoffeeItem(
            filter: { node_locale: { eq: "en-US" } }
        ) {
            edges {
                node {
                    id
                    title
                    description {
                        description
                    }
                    price
                    category
                    image {
                        fixed(width: 50, height: 50) {
                            ...GatsbyContentfulFixed
                        }
                    }
                }
            }
        }
    }
`

export default IndexPage
