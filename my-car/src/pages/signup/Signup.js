import { useSignup } from "../../hooks/useSignup";
import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, name);
  };
  return (
    <div class="row align-items-center">
      <div class="col"></div>
      <div class="col">
        <Form inline onSubmit={handleSubmit}>
          <FormGroup className="mb-2 me-sm-2 mb-sm-0">
            <Label className="me-sm-2" for="exampleEmail">
              Email
            </Label>
            <Input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </FormGroup>
          <FormGroup className="mb-2 me-sm-2 mb-sm-0">
            <Label className="me-sm-2" for="examplePassword">
              Password
            </Label>
            <Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </FormGroup>

          <FormGroup className="mb-2 me-sm-2 mb-sm-0">
            <Label className="me-sm-2" for="examplePassword">
              Name
            </Label>
            <Input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </FormGroup>
          <br />
          {!isPending && <Button>Submit</Button>}
          {isPending && <Button disabled>loading</Button>}
          {error && <p>{error}</p>}
        </Form>
      </div>
      <div class="col"></div>
    </div>
  );
}
