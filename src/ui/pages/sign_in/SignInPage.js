import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SignInForm from "../../components/form/SignInForm";
import { requestSignIn } from "../../../service/api/user_api";
import { json, redirect } from "react-router-dom";
import { setAccessToken, setRefreshToken } from "../../../service/local/user";

const SignInPage = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col md="6" className="mt-3">
            <SignInForm></SignInForm>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export const signInAction = async ({ request, params }) => {
  const formData = await request.formData();

  try {
    const response = await requestSignIn({
      username: formData.get("username"),
      password: formData.get("password"),
    });
    console.log(response);
    setAccessToken(response.details.access);
    setRefreshToken(response.details.refresh);
    return redirect("/");
  } catch (error) {
    return json({ message: error.message });
  }
};

export default SignInPage;
