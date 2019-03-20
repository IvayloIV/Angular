import { Ticket } from './Ticket';

function solve(ticketsArr: Array<string>, sortCriteria: string) {
    const sorts = {
        destination: (a: Ticket, b: Ticket) => a['destination'].localeCompare(b['destination']),
        price: (a: Ticket, b: Ticket) => a['price'] - b['price'],
        status: (a: Ticket, b: Ticket) => a['status'].localeCompare(b['status']),
    };
    
    const tickets = [];
    for (let ticket of ticketsArr) {
        let [destination, priceStr, status] = ticket.split('|');
        tickets.push(new Ticket(destination, Number(priceStr), status));
    }

    let currentSort = sorts[sortCriteria]
    return tickets.sort(currentSort);
}

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'));