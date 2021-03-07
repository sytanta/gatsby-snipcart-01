const React = require('react')

const Layout = require('./src/components/layout')

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

exports.wrapPageElement = ({ element, props }) => (
    <Layout.default {...props}>{element}</Layout.default>
)

exports.onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
    setHeadComponents([
        <script
            rel="preconnect"
            type="text/javascript"
            src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        ></script>,
        <link rel="preconnect" href="https://app.snipcart.com" />,
        <link rel="preconnect" href="https://cdn.snipcart.com" />,
        <link
            rel="stylesheet"
            href="https://cdn.snipcart.com/themes/v3.0.20/default/snipcart.css"
        />,
    ])

    setPostBodyComponents([
        <div
            hidden
            id="snipcart"
            data-api-key={process.env.GATSBY_SNIPCART_API}
        ></div>,
        <script src="https://cdn.snipcart.com/themes/v3.0.20/default/snipcart.js"></script>,
    ])
}
