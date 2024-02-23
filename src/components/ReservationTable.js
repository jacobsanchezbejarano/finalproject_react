import {
    Box,
    Heading,
    VStack,
  } from "@chakra-ui/react";
import React, { useState, useEffect } from 'react';

const ReservationTable = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    // Obtener reservas del localStorage al cargar el componente
    const storedReservations = JSON.parse(localStorage.getItem('reservations')) || [];
    setReservations(storedReservations);
  }, []); // Solo se ejecuta una vez al cargar el componente

  return (
    <VStack p={16} alignItems="flex-start">
        <Heading as="h1" id="reservations-section">
            Reservations
        </Heading>
        <Box p={4} rounded="md" w="100%">
        
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Guests</th>
              <th>Occasion</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation, index) => (
              <tr key={index}>
                <td>{reservation.date}</td>
                <td>{reservation.time}</td>
                <td>{reservation.guests}</td>
                <td>{reservation.occasion}</td>
                <td>{reservation.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </Box>
    </VStack>
  );
};

export default ReservationTable;
