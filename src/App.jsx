import { useState } from 'react';
import './App.css';

function App() {
  const [opacity, setOpacity] = useState('none');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const doctors = [
    { id: "0", name: "Book Clinic", speciality: "all" },
    { id: "1", name: "Doctor 1", speciality: "abcd" },
    { id: "2", name: "Doctor 2", speciality: "dcba" },
    {id:"3",name:"Doctor 3", speciality:"none"},
    //add more doc here
  ];

  const totaldocs = doctors.length - 1;
  const initialTimeSlots = [
    { time: "10:00", count: 0, avadoc: totaldocs, bookedDoctors: []},
    { time: "10:30", count: 0, avadoc: totaldocs,bookedDoctors: [] },
    { time: "11:00", count: 0, avadoc: totaldocs,bookedDoctors: [] },
    { time: "11:30", count: 0, avadoc: totaldocs,bookedDoctors: [] },
    { time: "12:00", count: 0, avadoc: totaldocs,bookedDoctors: [] },
    { time: "12:30", count: 0, avadoc: totaldocs,bookedDoctors: [] },
    { time: "13:00", count: 0, avadoc: totaldocs ,bookedDoctors: []},
    { time: "13:30", count: 0, avadoc: totaldocs ,bookedDoctors: []},
    { time: "14:00", count: 0, avadoc: totaldocs ,bookedDoctors: []},
    { time: "14:30", count: 0, avadoc: totaldocs ,bookedDoctors: []},
    { time: "15:00", count: 0, avadoc: totaldocs,bookedDoctors: [] },
    { time: "15:30", count: 0, avadoc: totaldocs,bookedDoctors: [] },
    { time: "16:00", count: 0, avadoc: totaldocs,bookedDoctors: [] },
    { time: "16:30", count: 0, avadoc: totaldocs,bookedDoctors: [] },
    { time: "17:00", count: 0, avadoc: totaldocs,bookedDoctors: [] },
    { time: "17:30", count: 0, avadoc: totaldocs,bookedDoctors: [] },
    { time: "18:00", count: 0, avadoc: totaldocs,bookedDoctors: [] },
    { time: "18:30", count: 0, avadoc: totaldocs,bookedDoctors: [] },

    // Add more slots as needed
  ];

  const [timeSlots, setTimeSlots] = useState(initialTimeSlots);

  function timeSlotHandler(event) {
    const id = event.target.id;
    setSelectedDoctor(id);
    setOpacity('flex');
  }

  function closeForm() {
    setOpacity('none');
  }

  function bookSlot() {
    if (selectedTimeSlot) {
      setTimeSlots(prevSlots =>
        prevSlots.map(slot => {
          if (slot.time === selectedTimeSlot) {
            if (selectedDoctor === "Book Clinic") {
              if (slot.count < slot.avadoc) {
                return {
                  ...slot,
                  count: slot.count + 1,
                  
                };
              }
            } else {
              if (!slot.bookedDoctors.includes(selectedDoctor) && slot.count < slot.avadoc) {
                return {
                  ...slot,
                  count: slot.count + 1,
                  bookedDoctors: [...slot.bookedDoctors, selectedDoctor],
                };
              }
            }
          }
          
          return slot;
        })
      );
      closeForm();
    }
  }


  return (
    <>
      <nav>
        <a className="white" href="#"><h1>better<span className='greencolor'>way</span></h1></a>
      </nav>
      <main className="contentContainer">
        <div className='timingform' style={{ display: opacity, transition: 'opacity 0.5s ease' }}>
          <div className="makemesmall">
            <h2>Book Your Slot</h2>
            <div className="timing">
              {timeSlots.map((slot) => (
                <a
                  href="#"
                  onClick={() => setSelectedTimeSlot(slot.time)}
                  className='timebuttons'
                  key={slot.time}
                >
                  {slot.time}
                </a>
              ))}
            </div>
            <button className='bookingButton' onClick={bookSlot}>Book Now</button>
            <button className='closeButton' onClick={closeForm}>Close</button>
          </div>
        </div>
        <div className="gridContainer">
          <div className="forDoctors">
            {doctors.map(doctor => (
              <a
                href="#"
                onClick={timeSlotHandler}
                id={doctor.name}
                key={doctor.id}
                className='buttons'
              >
                {doctor.name}
              </a>
            ))}
          </div>
          <div className="forSlots" id='slotsAddition'>
          {timeSlots.map(slot => (
              <p key={slot.time}>
                Time: {slot.time}, Bookings: {slot.count}, Available Doctors: {slot.avadoc}
              </p>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;