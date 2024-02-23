import BookingForm from "./BookingForm";
import ReservationTable from './ReservationTable';
import FullScreenSection from './FullScreenSection';

export default function Reservations(props) {
    return (
        <FullScreenSection
            justifyContent="center"
            alignItems="center">
                <BookingForm availableTimes={props.availableTimes} updateTimes={props.updateTimes}/>
                <ReservationTable/>
        </FullScreenSection>
    )
}