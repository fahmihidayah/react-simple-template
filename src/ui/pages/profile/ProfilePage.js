import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { getAccessToken, setAccessToken, setRefreshToken } from '../../../service/local/user';
import { redirect, useLoaderData } from 'react-router-dom';
import { requestGetProfile } from '../../../service/api/user_api';


const ProfilePage = () => {

    const userData = useLoaderData();

    console.log(userData)
    return <>
        <Container>
            <Row>
                <Col>
                    <Card className='mt-4'>
                        <Card.Body>
                        <h4>Profile </h4>
                        <p>Email : {userData.details.email}</p>
                        </Card.Body>
                        
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
}

export const profileLoader = async ({request, params}) => {
    if(!getAccessToken()) {
        return redirect("/login")
    }
    else {
        const response = await requestGetProfile();
        if(response.error) {
            setAccessToken("")
            setRefreshToken("")
            return redirect("/login");
        }
        else {
            return response;
        }
    }
}

export default ProfilePage;