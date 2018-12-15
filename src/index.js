import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import DynamicImport from "./dynamic-import";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Loader from "./components/common/loader";
import ScrollToT from "./components/common/scroll-to-top";
import "./styles/index.scss";

const PreLoader = () => (
  <div className="page-loading">
    <Loader />
  </div>
);

const Home = props => (
  <DynamicImport load={() => import("./components/pages/home")}>
    {Component =>
      Component === null ? <PreLoader /> : <Component {...props} />
    }
  </DynamicImport>
);

const NoMatch = props => (
  <DynamicImport load={() => import("./components/pages/no-match")}>
    {Component =>
      Component === null ? <PreLoader /> : <Component {...props} />
    }
  </DynamicImport>
);

const App = props => {
  return (
    <Router>
      <ScrollToTop>
        <div className="app-wrapper">
          <Header />
          <div className="main-wrapper">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
