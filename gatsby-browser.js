export function onRouteUpdate() {
  if (window.netlifyIdentity) {
    // Init netlify identity
    window.netlifyIdentity.init({
      container: "body",
      locale: "en",
    })
  }
}
