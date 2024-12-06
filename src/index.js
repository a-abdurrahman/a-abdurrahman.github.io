
import App from "./scripts/views/app";


const app = new App({body: document.querySelector('#body')});

const newAnchor = document.createElement('a')
newAnchor.href = './#/login'

// if (localStorage.getItem('accessToken') === null){
//   newAnchor.click()
//   console.log('null')
// } 

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  console.log("load");
});
