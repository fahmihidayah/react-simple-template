import { getURL } from "."
import { getAccessToken } from "../local/user";

export const requestSignIn = async (loginForm) => {
    const response = await fetch(getURL("token"), {
        method: "POST",
        headers : {
            "Content-Type": "Application/json"
        },
        body : JSON.stringify(loginForm)
    });

    const jsonResponse = await response.json();
    console.log(jsonResponse)

    if(!response.ok) {
        throw Error(jsonResponse.message);
    }

    return jsonResponse;
}

export const requestSignUp = async (registerForm) => {
    const response = await fetch(getURL("register"), {
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify(registerForm)
    })

    const jsonResponse = await response.json();
    return jsonResponse;
}

export const requestGetProfile = async () => {
    const token = getAccessToken();
    const response = await fetch(getURL("user"), {
        method: "GET",
        headers: {
            "Content-Type": "Application/json",
            "Authorization": `Bearer ${token}`
        }
    })

    const jsonResponse = await response.json();

    return jsonResponse;
}