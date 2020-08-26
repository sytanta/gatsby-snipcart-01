const React = require("react")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

exports.onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([
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
