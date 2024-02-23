import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Home from './components/Home';
import Card from "./components/Card";
import { reducer, reserve } from './utils';
import BookingForm from './components/BookingForm';
import { AlertProvider } from "./context/alertContext";

test('Renders the home screen', () => {
    render(<Home />);
    const headingElement = screen.getByText("Little Lemon");
    expect(headingElement).toBeInTheDocument();

    const subheading = screen.getByText("Chicago");
    expect(subheading).toBeInTheDocument();

    const button_reserve = screen.getByText("Reserve a Table");
    expect(button_reserve).toBeInTheDocument();

    const button_menu = screen.getByText("Online Menu");
    expect(button_menu).toBeInTheDocument();
})


test('Renders the cards with their attributes', () => {
  const data = {
      id: "1",
      img: "",
      name: "Greek Salad",
      price: 12.99,
      description: "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garic and rosemary croutons.",
  }
  render(<Card {...data}/>);
  const headingElement = screen.getByText("Greek Salad")
  expect(headingElement).toBeInTheDocument();

  const price = screen.getByText("$ 12.99");
  expect(price).toBeInTheDocument();

  const description = screen.getByText("The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garic and rosemary croutons.");
  expect(description).toBeInTheDocument();
})


test("Returns available times for a specific date", () => {
  // Arrange
  const state = [];
  const action = { date: "2024-02-24" };

  // Act
  const newState = reducer(state, action);

  // Assert
  expect(newState).toEqual([
    { id: 1, time: "17:00" },
    { id: 2, time: "18:00" },
    { id: 3, time: "19:00" },
    { id: 4, time: "20:00" },
    { id: 5, time: "21:00" },
    { id: 6, time: "22:00" }
  ]);
});

test("Returns an empty array for an unknown date", () => {
  // Arrange
  const state = [];
  const action = { date: "2024-02-26" };

  // Act
  const newState = reducer(state, action);

  // Assert
  expect(newState).toEqual([]);
});


test('should save a reservation to localStorage', () => {
  localStorage.clear();
  const reservationData = {
    date: '2024-02-22',
    time: '18:00',
    guests: '5',
    occasion: 'Birthday',
    comment: 'Special instructions',
  };

  reserve(reservationData);

  expect(localStorage.getItem('reservations')).not.toBeNull();

  const storedReservations = JSON.parse(localStorage.getItem('reservations'));
  expect(storedReservations).toEqual([reservationData]);
});

test('should add multiple reservations to localStorage', () => {
  localStorage.clear();
  const reservationData1 = {
    date: '2024-02-22',
    time: '18:00',
    guests: '5',
    occasion: 'Birthday',
    comment: 'Special instructions',
  };

  const reservationData2 = {
    date: '2024-02-23',
    time: '19:00',
    guests: '2',
    occasion: 'Anniversary',
    comment: 'No special instructions',
  };

  reserve(reservationData1);
  reserve(reservationData2);

  const storedReservations = JSON.parse(localStorage.getItem('reservations'));
  expect(storedReservations).toEqual([reservationData1, reservationData2]);
});


test('displays error messages when form fields are empty', async () => {
  const availableTimes = [
    { id: 1, time: "17:00" },
    { id: 2, time: "18:00" },
    { id: 3, time: "19:00" },
    { id: 4, time: "20:00" },
    { id: 5, time: "21:00" },
    { id: 6, time: "22:00" }];
  render(<AlertProvider><BookingForm availableTimes={availableTimes}/></AlertProvider>);

  fireEvent.submit(screen.getByText('Make Your reservation'));

  await waitFor(() => {
    expect(screen.getByText('Date is required')).toBeInTheDocument();
    expect(screen.getByText('Time is required')).toBeInTheDocument();
  });
});

test('does not display error messages when form fields are filled correctly', async () => {
  const availableTimes = [
    { id: 1, time: "17:00" },
    { id: 2, time: "18:00" },
    { id: 3, time: "19:00" },
    { id: 4, time: "20:00" },
    { id: 5, time: "21:00" },
    { id: 6, time: "22:00" }
  ];

  render(
    <AlertProvider>
      <BookingForm availableTimes={availableTimes}/>
    </AlertProvider>
  );

  fireEvent.change(screen.getByLabelText('Choose date *'), { target: { value: '2024-02-22' } });
  fireEvent.change(screen.getByLabelText('Choose time *'), { target: { value: '18:00' } });
  fireEvent.change(screen.getByLabelText('Number of guests'), { target: { value: '5' } });
  fireEvent.change(screen.getByLabelText('Occasion'), { target: { value: 'Birthday' } });

  fireEvent.submit(screen.getByText('Make Your reservation'));

  await waitFor(() => {
    expect(screen.queryByText('Date is required')).toBeNull();
    expect(screen.queryByText('Time is required')).toBeNull();
  });
});