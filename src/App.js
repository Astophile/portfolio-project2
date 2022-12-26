import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Articleinfo from "./components/Article/Articleinfo";
import Products from "./components/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Articles from "./components/Articles";
import Category from "./components/Category";
import LoginForm from "./components/LoginForm";
import Sellform from "./components/Sell_form";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbar />
                <Category />
                <Products />
                <Footer />
              </div>
            }
          />
          <Route
            path="/Login-Form"
            element={
              <div>
                <LoginForm />
              </div>
            }
          />
          <Route
            path="/:category"
            element={
              <div>
                <Navbar />
                <Category />
                <Articles />
                <Footer />
              </div>
            }
          />
          <Route
            path="/Articleinfo/:id"
            element={
              <div>
                <Navbar />
                <Category />
                <Articleinfo />
                <Footer />
              </div>
            }
          />
          <Route
            path="/Sellform"
            element={
              <div>
                <Sellform />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
