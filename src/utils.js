export const reducer = (state, action) => {
    switch (action.date) {
        case '2024-02-24':
            return [
                { id: 1, time: "17:00" },
                { id: 2, time: "18:00" },
                { id: 3, time: "19:00" },
                { id: 4, time: "20:00" },
                { id: 5, time: "21:00" },
                { id: 6, time: "22:00" }];
        case '2024-02-25':
            return [
                { id: 1, time: "17:00" },
                { id: 2, time: "18:00" },
                { id: 3, time: "19:00" },
                { id: 4, time: "20:00" },
                { id: 5, time: "21:00" },
                { id: 6, time: "22:00" }];
        default:
            return [];
    }
  };

export const reserve = (reservationData) => {
    return new Promise((resolve, reject) => {
      try {
        const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
        reservations.push(reservationData);
        localStorage.setItem('reservations', JSON.stringify(reservations));
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  }
  