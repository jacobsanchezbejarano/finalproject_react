import BookingForm from "./BookingForm";

export default function Reservations(props) {
    return (
        <>
            <BookingForm availableTimes={props.availableTimes} updateTimes={props.updateTimes}/>
        </>
    )
}