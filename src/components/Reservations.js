import BookingForm from "./BookingForm";
import ReservationTable from './ReservationTable';
import FullScreenSection from './FullScreenSection';
import { Flex } from "@chakra-ui/react";

export default function Reservations(props) {
    return (
        <FullScreenSection
            justifyContent="center"
            alignItems="center">
                <Flex>
                    <BookingForm availableTimes={props.availableTimes} updateTimes={props.updateTimes}/>
                    <ReservationTable/>
                </Flex>
        </FullScreenSection>
    )
}