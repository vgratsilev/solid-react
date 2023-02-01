/**
 * Dependency inversion principle
 */

// before
// class xmlHttpRequestService { }
//
// // low-level module
// class xmlHttpService extends xmlHttpRequestService {
//     request(url: string, type: string) { }
// }
//
// // high-level module
// class Http {
//     constructor(private xmlHttpService: xmlHttpService) { }
//
//     get(url: string, options: any) {
//         this.xmlHttpService.request(url, 'GET');
//     }
//
//     post(url: string, options: any) {
//         this.xmlHttpService.request(url, 'POST');
//     }
// }

// after
class xmlHttpRequestService {
    open() { }
    send() { }
}

interface IConnection {
    request(url: string, options: any): any;
}

class Http {
    constructor(private httpConnection: IConnection) { }

    get(url: string, options: any) {
        this.httpConnection.request(url, 'GET');
    }

    post(url: string, options: any) {
        this.httpConnection.request(url, 'POST');
    }
}

class xmlHttpService implements IConnection {
    xhr = new xmlHttpRequestService();
    request(url: string, options: any): any {
        this.xhr.open();
        this.xhr.send();
    }
}




