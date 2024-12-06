import routes from "../routes/routes";
import UrlParser from "../routes/url-parser";


class App {
  constructor({ body, newAnchor, tokenManager }) {
    this._anchor = newAnchor;
    this._body = body;
    this.tokenManager = tokenManager;
  }

  _initialAppShell() {
    console.log('test')
    if (this.tokenManager.accessToken === null) {
      newAnchor.click();
      console.log("null");
    }
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();

    const page = routes[url];
    this._body.innerHTML = await page.renderPage();
    await page.afterRenderPage();
  }
}

export default App;
