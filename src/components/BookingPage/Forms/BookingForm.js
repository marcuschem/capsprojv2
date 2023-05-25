import {useCallback} from 'react';
import {useState} from 'react';


function BookingForm(handleSubmit, bookingData, handleInputChange){
    return(
    <form onSubmit={handleSubmit} className="container-fluid w-50 p-5">
        <section className="col-12">
            <label htmlFor="date-input" className="form-label">
                Date:
            </label>
            <input
                className="form-control"
                id="date-input"
                type="date"
                name="date"
                value={bookingData.date}
                onChange={handleInputChange}
                required
            />
        </section>
        <section className="col-12">
            <label htmlFor="time-input" className="form-label">
                Time
            </label>
            <input
                className="form-control"
                id="time-input"
                type="time"
                name="time"
                value={bookingData.time}
                onChange={handleInputChange}
                required
            />
        </section>
        <section className="col-12">
            <label htmlFor="preference-input" className="form-label">
                Preference:
            </label>
            <select
                className="form-select"
                id="preference-input"
                name="preferences"
                value={bookingData.preferences}
                onChange={handleInputChange}
                required
            >
                <option value="" className="form-control">Select an option</option>
                <option value="Indoor" className="form-control">Indoor</option>
                <option value="Outdoor" className="form-control">Outdoor</option>
            </select>
        </section>
        <section className="col-12">
            <label className="control-label" htmlFor="email">
                Email:
            </label>
            <input
                id="email"
                className="form-control"
                type="email"
                name="email"
                value={bookingData.email}
                onChange={handleInputChange}
                required
            />
        </section>
        <section className="col-12">
            <label className="form-label" htmlFor="guests">
                Number of Guests:
                <input
                    className="form-control"
                    id="guests"
                    type="number"
                    name="numberOfGuests"
                    value={bookingData.numberOfGuests}
                    onChange={handleInputChange}
                    required
                />
            </label>
        </section>
        <button type="submit" className="btn lemon-button">Book Table</button>
    </form>
)
}


export default BookingForm;