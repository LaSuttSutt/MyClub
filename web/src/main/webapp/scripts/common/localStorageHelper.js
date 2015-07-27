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
        getToken: function() {
            return localStorage.getItem('MYCLUB_TOKEN');
        },
        setToken: function(token) {
            localStorage.setItem('MYCLUB_TOKEN', token);
        },
        getUserName: function() {
            return localStorage.getItem('MYCLUB_USER_NAME');
        },
        setUserName: function(userName) {
            localStorage.setItem('MYCLUB_USER_NAME', userName);
        },
        getUserRoles: function() {
            return localStorage.getItem('MYCLUB_USER_ROLES');
        },
        setUserRoles: function(roles) {
            localStorage.setItem('MYCLUB_USER_ROLES', roles);
        }
    };
});
