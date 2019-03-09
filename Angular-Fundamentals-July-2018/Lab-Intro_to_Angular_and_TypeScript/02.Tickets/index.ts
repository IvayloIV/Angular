import Ticket from './Ticket';

function solve(ticketsArr: Array<string>, sortType: string) {
    const tickets: Array<Ticket> = [];

    const sorts = {
        destination: (tickets: Array<Ticket>) => tickets.sort((a: Ticket, b: Ticket) => a.destinationName.localeCompare(b.destinationName)),
        price : (tickets: Array<Ticket>) => tickets.sort((a: Ticket, b: Ticket) => a.price - b.price),
        status: (tickets: Array<Ticket>) => tickets.sort((a: Ticket, b: Ticket) => a.status.localeCompare(b.status))
    }
    
    for (let ticket of ticketsArr) {
        let [destinationName, priceStr, status] = ticket.split('|');
        tickets.push(new Ticket(destinationName, Number(priceStr), status));
    }

    return sorts[sortType](tickets);
}

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'));
