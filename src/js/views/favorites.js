class FavoriteTicket {
  constructor() {}

  getFavTicketById(id, tickets) {
    tickets.forEach((ticket) => {
      if (ticket.id === id) {
        return ticket;
      } else {
        return;
      }
    });
  }
}

const favTicket = new FavoriteTicket();
