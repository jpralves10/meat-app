"use strict";
exports.__esModule = true;

var User = /** @class */ (function () {
    
    function User(email, name, profile, password) {
        this.email = email;
        this.name = name;
        this.profile = profile;
        this.password = password;
    }
    
    User.prototype.matches = function (another) {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password;
    };
    
    return User;
}());

exports.User = User;
exports.users = {
    "juliana@gmail.com": new User('juliana@gmail.com', 'Juliana', 'admin', 'juliana23'),
    "samanta@gmail.com": new User('samanta@gmail.com', 'Samanta', 'suport', 'samanta21')
};