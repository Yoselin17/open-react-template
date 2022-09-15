import React, { useRef, useEffect } from 'react';
import { useLocation, Switch, Route } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';
import injectContext from './store/appContext';


// Layouts
import LayoutDefault from './layouts/LayoutDefault';

import CreatePage from './components/sections/CreatePage';
import UpdatePage from './components/sections/UpdatePage';

// Views 
import Home from './views/Home';
import Login from './views/Login';
import Admin from './views/Admin';
import SignUp from './views/SignUp';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <Route path="/login" component={Login}/>
          <Route path="/admin" component={Admin}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/createPage" component={CreatePage}/>
          <Route path="/updatePage" component={UpdatePage}/>
        </Switch>
      )} />
  );
}

export default injectContext(App);