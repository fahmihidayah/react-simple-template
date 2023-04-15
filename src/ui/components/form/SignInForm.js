import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import {
  Form as RouterForm,
  json,
  redirect,
  useActionData,
} from "react-router-dom";
import { requestSignIn } from "../../../service/api/user_api";
import InputForm from "../input/InputForm";
import { useState } from "react";

const SignInForm = () => {
  const actionData = useActionData();

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <>
      {actionData && <Alert variant="danger">{actionData.message}</Alert>}
      <Card className="mt-3">
        <Card.Body>
          <h5 className="mb-3">Login</h5>
          <RouterForm method="POST">
            <InputForm
               controlId="userNameInput"
               label="Username"
               type="text"
               placeholder="Enter your username"
               value={username}
               name="username"
               onChange={(e) => setUsername(e.target.value)}
              //  isInvalid={nameError !== ''}
              //  errorMessage={nameError}
            ></InputForm>
            <InputForm
               controlId="passwordInput"
               label="Password"
               type="password"
               name="password"
               placeholder="Enter your password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
              //  isInvalid={nameError !== ''}
              //  errorMessage={nameError}
            ></InputForm>
            
            <div className="d-grid">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
          </RouterForm>
        </Card.Body>
      </Card>
    </>
  );
};

export const signInFormAction = async ({ request, params }) => {
  const data = await request.formData();

  const form = {
    username: data.get("username"),
    password: data.get("password"),
  };

  try {
    const jsonResponse = await requestSignIn(form);
  } catch (error) {
    return json({ message: error.message }, { status: 500 });
  }

  return redirect("/");
};

export default SignInForm;
