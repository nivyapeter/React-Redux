import Header from "./containers/Header";
import {BrowserRouter as Router,Route,Routes } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <Router>
    <div>
      <Header />
      <Routes>
       <Route path="/" element={<ProductListing />}/>
        <Route path="/product/:productid" element={<ProductDetails />} />
        <Route>404 Not Found</Route>
     </Routes>
    </div>
    </Router>
  );
}

export default App;
