import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {
  Form as RouterForm,
  json,
  redirect,
  useActionData,
} from "react-router-dom";
import { useState } from "react";
import InputForm from "../input/InputForm";
import { requestSignUp } from "../../../service/api/user_api";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const actionData = useActionData();

  return (
    <>
      {actionData && (
        <Alert variant="danger">
          <ul>
            {actionData.messages.map((e) => (
              <li>{e}</li>
            ))}
          </ul>
        </Alert>
      )}
      <Card className="mt-3">
        <Card.Body>
          <h5 className="mb-3">Register</h5>
          <RouterForm method="post">
            <Row>
              <Col>
                <InputForm
                  controlId="firstNameInput"
                  label="First Name"
                  type="text"
                  placeholder="Enter your first name"
                  value={firstName}
                  name="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                  //  isInvalid={nameError !== ''}
                  //  errorMessage={nameError}
                ></InputForm>
              </Col>
              <Col>
                <InputForm
                  controlId="lastNameInput"
                  label="Last Name"
                  type="text"
                  placeholder="Enter your last name"
                  value={lastName}
                  name="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                  //  isInvalid={nameError !== ''}
                  //  errorMessage={nameError}
                ></InputForm>
              </Col>
            </Row>

            <InputForm
              controlId="emailInput"
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              //  isInvalid={nameError !== ''}
              //  errorMessage={nameError}
            ></InputForm>

            <InputForm
              controlId="passwordInput"
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              //  isInvalid={nameError !== ''}
              //  errorMessage={nameError}
            ></InputForm>

            <InputForm
              controlId="confirmPasswordInput"
              label="Confirm Password"
              type="password"
              placeholder="Enter your password Confirmation"
              value={confirmPassword}
              name="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              //  isInvalid={nameError !== ''}
              //  errorMessage={nameError}
            ></InputForm>
            <div className="d-grid">
              <Button variant="primary" type="submit">
                Register
              </Button>
            </div>
          </RouterForm>
        </Card.Body>
      </Card>
    </>
  );
};

export default SignUpForm;
