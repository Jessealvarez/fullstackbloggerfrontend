const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;
export const registerUser = (username, password) => {
    await fetch(`https://${urlEndpoint}/auth/register-user`, {
        method: 'POST',
        //Note: Do not forget to set the following header in the POST request:
        headers: {
            'Content-Type': 'application/json'
        },
         body: JSON.stringify({
        username,
        password
    })
})
//It should await to receive a success message from the server
//If the login was successful, it should set a new token in local storage:
const responseJSON = await response.json();
if (responseJSON.success) {
          localStorage.setItem(process.env.REACT_APP_TOKEN_HEADER_KEY, JSON.stringify(responseJSON.token));
        }
return responseJSON.success;
}
export const loginUser = (username, password) => {
 await fetch(`https://${urlEndpoint}/auth/login-user`, {
        method: 'POST',
        //Note: Do not forget to set the following header in the POST request:
        headers: {
            'Content-Type': 'application/json'
        },
         body: JSON.stringify(
        username,
        password
         )});
    const responseJSON = await response.json();
        if (responseJSON.success) {
          localStorage.setItem(process.env.REACT_APP_TOKEN_HEADER_KEY, JSON.stringify(responseJSON.token));
        }
        return responseJSON.success;
}

export const logoutUser = () => {
    localStorage.removeItem(process.env.REACT_APP_TOKEN_HEADER_KEY);
    return true;
}

export const  getUserToken = () => {
    return JSON.parse(localStorage.getItem(process.env.REACT_APP_TOKEN_HEADER_KEY));

}

export default Auth