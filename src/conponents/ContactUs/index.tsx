import { FormEvent, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import axiosInstance from "../../utils/AxiosInstance";

function ContactUs() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [description, setDescription] = useState<string>();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = await axiosInstance.post("/user/contact-us", {
      name,
      email,
      description,
    });

    alert(result.data.message);

    if (result.data.error === false) {
      setName("");
      setEmail("");
      setDescription("");
    }
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              defaultValue={name}
              onChange={(e) => setName((e.target as HTMLInputElement).value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              defaultValue={email}
              onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            style={{ height: "100px" }}
            placeholder="Enter your message"
            defaultValue={description}
            onChange={(e) =>
              setDescription((e.target as HTMLInputElement).value)
            }
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default ContactUs;
