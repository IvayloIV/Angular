interface ITicket {
    destinationName: string,
    price: number,
    status: string
}

export default class Ticket implements ITicket {
    constructor(
        public destinationName: string,
        public price: number,
        public status: string,
    ) {}
}
