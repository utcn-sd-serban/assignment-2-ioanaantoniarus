import { EventEmitter } from "events";

class UserModel extends EventEmitter {
    constructor() {
        super();
        this.state = {
            users: [{
                username: "ioana33",
                password: "ioana33"
            }, {
                username: "antonia000",
                password: "000"
            }],
            currentUser: {
                username: "",
                password: ""
            },
            route: "questions-list"
        };
    }

    /*changeCurrentUser(username, password) {
        this.state = {
            ...this.state,
            currentUser: {
                username: username,
                password: password
            }
        };
        this.emit("change", this.state);
    }*/

    validateUser(username, password) {
        var i;
        var check = false;
        for (i = 0; i < this.state.users.length; i++) {
            if (username === this.state.users[i].username && password === this.state.users[i].password) {
                check = true;
            }
        }
        return check;
    }

    changeUserProperty(property, value) {
        this.state = {
            ...this.state,
            currentUser: {
                ...this.state.currentUser,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }
}

const userModel = new UserModel();

export default userModel;