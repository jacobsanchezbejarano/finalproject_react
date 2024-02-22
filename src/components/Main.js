import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import Reservations from "./Reservations";
import Order from "./Order";
import Login from "./Login";
import {Routes, Route} from 'react-router-dom';
import { useReducer } from "react";

// Definir el reducer
const reducer = (state, action) => {
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
  
  // Definir el estado inicial
  const initialState = [
    
  ];
export default function Main() {
   
    const [availableTimes, dispatch] = useReducer(reducer, initialState);

    return (
        <main>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/reservations" element={<Reservations availableTimes={availableTimes} updateTimes={dispatch}/>}/>
                <Route path="/order" element={<Order/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </main>
    )
}