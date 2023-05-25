
import BookingForm from './Forms/BookingForm.js';
import {useState} from 'react'

function BookingPage(){
    const [bookingData, setBookingData] = useState({
        date: '',
        time: '',
        preferences: '',
        email: '',
        numberOfGuests: 0,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBookingData({ ...bookingData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(bookingData);
    };
    return(
        <BookingForm handleSubmit={handleSubmit} bookingData={bookingData} handleInputChange={handleInputChange}/>
    )
}

export default BookingPage;
