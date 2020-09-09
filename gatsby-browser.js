import netlifyIdentity from "netlify-identity-widget"

export function onRouteUpdate() {
  netlifyIdentity.init({
    container: "body",
    locale: "en",
  })

  window.netlifyIdentity = netlifyIdentity
}
