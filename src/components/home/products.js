import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Product from './product'
import Title from '../globals/title'

const getProducts = graphql`
    {
        products: allContentfulCoffeeProduct(
            filter: { node_locale: { eq: "en-US" } }
        ) {
            edges {
                node {
                    id
                    title
                    price
                    private
                    image {
                        fluid(maxHeight: 426) {
                            src
                            ...GatsbyContentfulFluid_tracedSVG
                        }
                    }
                }
            }
        }
    }
`

export default () => {
    const data = useStaticQuery(getProducts)

    const allProducts = data.products.edges.slice()
    const [products, setProducts] = useState([])

    let netlifyIdentity
    if (typeof window !== 'undefined') {
        netlifyIdentity = window.netlifyIdentity
    }

    useEffect(() => {
        if (netlifyIdentity && netlifyIdentity.currentUser()) {
            setProducts(allProducts)
        } else {
            setProducts(
                allProducts.filter(({ node: pro }) => {
                    return !pro.private
                })
            )
        }

        if (netlifyIdentity) {
            netlifyIdentity.on('login', () => {
                setProducts(allProducts)
            })

            netlifyIdentity.on('logout', () => {
                setProducts(
                    allProducts.filter(({ node: pro }) => {
                        return !pro.private
                    })
                )
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section className="py-5">
            <div className="container">
                <Title title="our products" />
                <div className="row">
                    {products.map(({ node: product }) => {
                        return <Product key={product.id} product={product} />
                    })}
                </div>
            </div>
        </section>
    )
}
