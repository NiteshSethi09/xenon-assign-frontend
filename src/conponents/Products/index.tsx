import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axiosInstance from "../../utils/AxiosInstance";
import ItemCard, { cardProps } from "../ItemCard";

const Products = () => {
  const [products, setProducts] = useState<cardProps[]>([]);
  useEffect(() => {
    async function getProducts() {
      const result = await axiosInstance.get("/product/get-products");
      setProducts(result.data.data);
    }
    getProducts();
  }, []);

  return (
    <>
      {products?.length! > 0 ? (
        <>
          <Container>
            <h2>List of Products</h2>
            <Row xs={1} md={5}>
              {products?.map((product) => (
                <Col key={product._id}>
                  <ItemCard {...product} />
                </Col>
              ))}
            </Row>
          </Container>
        </>
      ) : (
        <h2>No products found...</h2>
      )}
    </>
  );
};

export default Products;
