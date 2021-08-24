
// 画面遷移
import { BrowserRouter, Route, Switch, useLocation, Redirect } from 'react-router-dom';

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

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  const query = new URLSearchParams(useLocation().search);
  console.log(`sort=${query.get('sort')}`);
  return <h2>Contact</h2>;
}

function NotFound() {
  return <h2>Not Found Page</h2>;
}

export default PageRouter;
