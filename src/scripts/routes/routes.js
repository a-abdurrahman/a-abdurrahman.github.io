import Dashboard from "../templates/pages/dashboard";
import Login from "../templates/pages/login";
import Products from "../templates/pages/products";

const routes = {
     '/': Dashboard, // default page
  '/home': Dashboard,
  "/login": Login,
   '/products': Products,
};

export default routes;
