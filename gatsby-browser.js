// import netlifyIdentity from "netlify-identity-widget"

export function onRouteUpdate() {
  //   window.netlifyIdentity = netlifyIdentity

  window.netlifyIdentity.init({
    container: "body",
    locale: "en",
  })
}
