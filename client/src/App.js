import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./componants/Header/Header";
import Footer from "./componants/Footer/Footer";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import { useEffect, useState } from "react";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
function App() {
  const [pathview, setpathview] = useState(false);
  const [pathpoing, setpathpoing] = useState(["product", "home", "cart"]);

  const path = window.location.pathname;
  const pathsplit = path.split("/");

  useEffect(() => {
    pathpoing.forEach((e) => {
      if (pathsplit.includes(e)) {
        setpathview(true);
      }
    });
  }, [pathview, pathsplit, pathpoing]);

  return (
    <>
      <div className="App">
        <Header pathview={pathview} />
        <div className={pathview ? "abc active" : "abc"}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/products" component={Products} />
              <Route path="/product" component={Product} />
              <Route path="/cart" component={Cart} />
            </Switch>
          </Router>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
