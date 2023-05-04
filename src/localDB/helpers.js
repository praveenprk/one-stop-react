export const getUserEmail = () => {
    let userInfo = localStorage?.getItem("userInfo");
    userInfo = JSON.parse(userInfo);
    return userInfo?.email;
}

export const getAccessToken = () => {
    return localStorage?.getItem("access_token");
}

export const saveAccessTokenToLS = (access_token) => {
    localStorage?.setItem("access_token", access_token);
    if(localStorage?.getItem("access_token")) return true
}

export const parseDateFromISO = (ISO_date_string) => {
    return Date.parse(ISO_date_string);
}

export const compareDates = (datetimestring) => {
   let parsedDate = parseDateFromISO(datetimestring)

//    parsedDate <
}

export const guidGenerator = () => {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

export const logout = () => {
    localStorage.removeItem("user_info");
    localStorage.removeItem("access_token");
}