
// 画面遷移
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';
import NotFound from '../pages/not_found';

function PageRouter() {

  const isAuthentication = function(){

    var authenticated = true;
    return authenticated;
  }

  return (
    <div>
     <BrowserRouter>
        <h1>Hello React Router</h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact?sort=1">Contact</a>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            {isAuthentication() ? () => <About /> : <Redirect to="/home" />}
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default PageRouter;
