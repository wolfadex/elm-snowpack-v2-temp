/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
// import Elm from "./Main.elm";
console.log("Elm", Elm);
const app = Elm.Main.init({
  node: document.getElementById("elm-root"),
});
// console.log("JS code");
if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    debugger;
    // app.unmount();
  });
}
