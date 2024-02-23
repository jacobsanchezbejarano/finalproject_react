import { render, screen } from "@testing-library/react";
import Home from './components/Home';
import Card from "./components/Card";
import { reducer, reserve } from './utils';


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
describe('Tests for local storage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should save a reservation to localStorage', () => {
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
    expect([storedReservations]).toEqual([reservationData1, reservationData2]);
  });
});