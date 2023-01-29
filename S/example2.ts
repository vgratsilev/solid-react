/**
 * Single Responsibility.
 * Class should do his own tasks.
 *
 * Here we split requests to different classes.
 */

class HttpClient {
    get(url: string) {
    }

    post() {
    }

    put() {
    }

    delete() {
    }
}

class UserService {
    client: HttpClient;

    constructor(client) {
        this.client = client;
    }

    getOneUser(id: number) {
    }

    getAllUsers() {
    }
}

class RequisitesService {
    createRequisites() {
    }

    getRequisites() {
    }

    updateRequisites() {
    }
}
