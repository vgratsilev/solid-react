/**
 * Single Responsibility principle.
 * Class should do his own tasks.
 *
 * Here we extract methods from single User class.
 */

const http = { send: () => ({}) };
const generateId = () => Date.now() * Math.random();

class User {
    id: number;
    username: string;
    password: string;

    constructor(username: string, password: string) {
        this.id = generateId();
        this.username = username;
        this.password = password;
    }

    // save() {}
    // log() {}
    // send() {}
}

class UserRepository {
    save(user: User) {
        // save user to DB
    }
}

class UserLogger {
    log(user: User) {
        console.log(user);
    }
}

class UserController {
    send(user: User) {
        return http.send();
    }
}
