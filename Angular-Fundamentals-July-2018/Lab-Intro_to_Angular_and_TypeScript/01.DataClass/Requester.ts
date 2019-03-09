interface IRequester {
    method: string;
    uri: string;
    version: string;
    message: string;
    response: string;
    fulfilled: boolean;
}

class Requester implements IRequester {
    response: string;
    fulfilled: boolean;

    constructor(
        public method: string, 
        public uri: string, 
        public version: string, 
        public message: string
    ) {
        this.response = undefined;
        this.fulfilled = false;
    }
}

export default Requester;
