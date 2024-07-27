import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ContactEu,
  ContactUs,
  ContactIn,
  Home,
  Contact,
  ProductDetail,
  ProductList,
  Notfound,
  MuiHeader
} from "./index";

function MainRoute() {

  const [open, setOpen] = React.useState(false);
  return (

    <Router>
    <MuiHeader open={open} setOpen={setOpen} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="products" element={<ProductList />} />
      <Route path="products/:id" element={<ProductDetail />} />
      <Route path="contact" element={<Contact />}>
        <Route path="in" element={<ContactIn />} />
        <Route path="eu" element={<ContactEu />} />
        <Route path="us" element={<ContactUs />} />
      </Route>
      <Route path="*" element={<Notfound />} />
    </Routes>
    </Router>



  //   <Router>
  //   <MuiHeader open={open} setOpen={setOpen} />
  //    <Routes>
      
  //     <Route path="/" element={<Home />} />
  //     <Route path="products" element={<ProductList />} />
  //     <Route path="products/:id" element={<ProductDetail />} />

  //     <Route path="contact" element={<Contact />}>
  //       <Route path="in" element={<ContactIn />} />
  //       <Route path="eu" element={<ContactEu />} />
  //       <Route path="us" element={<ContactUs />} />
  //     </Route>

  //     <Route path="*" element={<Notfound />} />
  //   </Routes>
  //  </Router>
  );
}

export default MainRoute;