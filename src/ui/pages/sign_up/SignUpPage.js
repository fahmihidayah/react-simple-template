import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SignUpForm from "../../components/form/SignUpForm";
import {redirect, json} from 'react-router-dom'
import { requestSignUp } from "../../../service/api/user_api";

const SignUpPage = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col md="6" className="mt-3">
            <SignUpForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};


export const signUpAction = async ({request, params}) => {
  const formData = await request.formData();
  console.log(formData.get("firstName"))
  try{
    const response = await requestSignUp({
      first_name : formData.get("firstName"),
      last_name: formData.get("lastName"),
      email : formData.get("email"),
      password : formData.get("password")
    });
    if(response.error) {
      return json({messages : response.error_details })
    }
    return redirect("/")
  }
  catch(error) {
    return json({ messages: [error.message] });
  }
}

export default SignUpPage;
