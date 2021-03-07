import Layout from './src/components/Layout'

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}

export function onRouteUpdate() {
    if (window.netlifyIdentity) {
        // Init netlify identity
        window.netlifyIdentity.init({
            container: 'body',
            locale: 'en',
        })
    }
}
