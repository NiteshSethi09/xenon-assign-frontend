import { lazy, Suspense } from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Header from "./conponents/Header";

const Signup = lazy(() => import("./conponents/Signup"));
const Login = lazy(() => import("./conponents/Login"));
const Products = lazy(() => import("./conponents/Products"));
const ContactUs = lazy(() => import("./conponents/ContactUs"));

function App() {
  return (
    <>
      <Header />
      <Container fluid={true}>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
