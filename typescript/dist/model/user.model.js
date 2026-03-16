"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Role = void 0;
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["CUSTOMER"] = "CUSTOMER";
})(Role || (exports.Role = Role = {}));
class User {
    id;
    username;
    email;
    role;
    constructor(id, username, email, role) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.role = role;
    }
}
exports.User = User;
//# sourceMappingURL=user.model.js.map