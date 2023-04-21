export const getUserEmail = () => {
    let userInfo = localStorage.getItem("userInfo");
    userInfo = JSON.parse(userInfo);
    return userInfo.email;
}

export const saveAccessTokenToLS = (access_token) => {
    localStorage.setItem("access_token", access_token);
    if(localStorage.getItem("access_token")) return true
}