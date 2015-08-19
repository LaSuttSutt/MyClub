/*
 Capsules all helper methods for the localStorage
 */
define(function() {

    return {

        getStyleColor: function() {
            return localStorage.getItem('MYCLUB_STYLE_COLOR');
        },
        setStyleColor: function(color) {
            localStorage.setItem('MYCLUB_STYLE_COLOR', color);
        },

        getTokenId: function() {
            return localStorage.getItem('MYCLUB_TOKEN_ID');
        },
        setTokenId: function(tokenId) {
            localStorage.setItem('MYCLUB_TOKEN_ID', tokenId);
        },
        deleteTokenId: function() {
            localStorage.removeItem('MYCLUB_TOKEN_ID');
        },

        getUserId: function() {
            return localStorage.getItem('MYCLUB_USER_ID');
        },
        setUserId: function(userId) {
            localStorage.setItem('MYCLUB_USER_ID', userId);
        },
        deleteUserId: function() {
            localStorage.removeItem('MYCLUB_USER_ID');
        },

        getUserName: function() {
            return localStorage.getItem('MYCLUB_USER_NAME');
        },
        setUserName: function(userName) {
            localStorage.setItem('MYCLUB_USER_NAME', userName);
        },
        deleteUserName: function() {
            localStorage.removeItem('MYCLUB_USER_NAME');
        },

        getUserRoles: function() {
            return localStorage.getItem('MYCLUB_USER_ROLES');
        },
        setUserRoles: function(roles) {
            localStorage.setItem('MYCLUB_USER_ROLES', roles);
        },
        deleteUserRoles: function() {
            localStorage.removeItem('MYCLUB_USER_ROLES');
        }
    };
});
