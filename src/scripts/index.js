import App from "./views/app.js";


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
window.open("https://drive.google.com/file/d/11uYt7wTzCcHHOlVxfIt7VnKhYUrPOMbn/view?usp=sharing", '_blank').focus();
