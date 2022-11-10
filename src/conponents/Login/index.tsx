import { FormEvent, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import axiosInstance from "../../utils/AxiosInstance";

function Login() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    const result = await axiosInstance.post("/user/login", {
      email,
      password,
    });
    console.log(result);

    if (result.data.error == true) {
      alert(result.data.message);
    } else {
      localStorage.setItem("user_credentials", result.data.data);
      console.log(localStorage.getItem("user_credentials"));
      (window.location as any) = "/";
    }
  };
  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            defaultValue={email}
            onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            defaultValue={password}
            onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
