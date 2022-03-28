import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending }=useLogin()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
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
          <br />
          {!isPending&&<Button>Submit</Button>}
          {isPending&&<Button className="btn" disabled>loading</Button>}
          {error && <p>{error}</p>}
        </Form>
      </div>

      <div class="col">

      </div>
      
      
    </div>
  );
}
