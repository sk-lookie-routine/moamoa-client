/* eslint-disable prettier/prettier */
function saveAccessTokenToCookie(value) {
    document.cookie = `access_token=${value}`;
}

function getAccessTokenFromCookie() {
    return document.cookie.replace(
        /(?:(?:^|.*;\s*)access_token\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
    );
}

function deleteCookie(value) {
    document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export {
    saveAccessTokenToCookie,
    getAccessTokenFromCookie,
    deleteCookie,
};
