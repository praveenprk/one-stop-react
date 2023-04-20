export const getUserEmail = () => {
    let userInfo = localStorage.getItem("userInfo");
    userInfo = JSON.parse(userInfo);
    return userInfo.email;
}