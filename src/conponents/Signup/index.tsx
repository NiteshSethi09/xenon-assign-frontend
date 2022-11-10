import { FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/AxiosInstance";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();
    const result = await axiosInstance.post("/user/signup", {
      name,
      email,
      password,
      confirmPassword,
    });
    console.log(result);

    if (result.data.error == true) {
      alert(result.data.message);
    } else {
      navigate("/login");
    }
  };
  return (
    <Form onSubmit={handleSignUp}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          defaultValue={name}
          onChange={(e) => setName((e.target as HTMLInputElement).value)}
        />
      </Form.Group>

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
          placeholder="Enter Password"
          defaultValue={password}
          onChange={(e) => setPassword((e.target as HTMLInputElement).value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword2">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="ConfirmPassword"
          defaultValue={confirmPassword}
          onChange={(e) =>
            setConfirmPassword((e.target as HTMLInputElement).value)
          }
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Signup;
