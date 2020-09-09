import netlifyIdentity from "netlify-identity-widget"

export function onRouteUpdate() {
  window.netlifyIdentity = netlifyIdentity

  netlifyIdentity.init({
    container: "body",
    locale: "en",
  })
}
