import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [opacity, setOpacity] = useState("none");
  let id = undefined;
  function timeSlotshandeler(event) {
    id = event.target.id;

    setOpacity("flex");
  }
  function closeform() {
    setOpacity("none");
  }

  const doctors = [
    {
      id: "0",
      name: "Book Clinic",
      speciality: "all"
    },
    {
      id: "1",
      name: "Doctor 1",
      speciality: "xysj"
    },
    {
      id: "2",
      name: "Doctor 2",
      speciality: "iduh"
    }
    
  ];

  const totaldocs = doctors.length - 1;
  const timeSlots = [
    {
      "10:00": 0,
      ashish: totaldocs
    },
    {
      "10:30": 0, ashish: totaldocs
    }, {
      "11:00": 0,
      ashish :totaldocs
    }, {
      "11:30": 0, ashish: totaldocs
    }, {
      "12:00": 0,
      ashish: totaldocs
    }, {
      "12:30": 0, ashish: totaldocs
    },
    {
      "13:00": 0, ashish: totaldocs
    },
    {
      "13:30": 0, ashish: totaldocs
    },
    {
      "14:00": 0, ashish: totaldocs
    },
    {
      "14:30": 0, ashish: totaldocs
    },
    {
      "15:00": 0, ashish: totaldocs
    },
    {
      "15:30": 0, ashish: totaldocs
    },
    {
      "16:00": 0, ashish: totaldocs
    },
    {
      "16:30": 0, ashish: totaldocs
    },
    {
      "17:00": 0, ashish: totaldocs
    },
    {
      "17:30": 0, ashish: totaldocs
    },
    {
      "18:00": 0, ashish: totaldocs
    },
    {
      "18:30": 0, ashish: totaldocs
    },
    
  ]
  function booker(event) {
    let newtime = event.target.id;
    timeSlots[newtime]++;
    console.log(timeSlots[newtime]);
    console.log(newtime);
    closeform();
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
              {timeSlots.map((items) => <a href="#" onClick={booker} className='timebuttons' id={items.time}>{itemstime}</a>)}
            </div>
            <button className='bookingButton'>Book Now</button>
            <button className='closeButton' onClick={closeform}>Close</button>
          </div>
        </div>
        <div className="gridContainer">
          <div className="forDoctors">
            {doctors.map(items => <a href="#" onClick={timeSlotshandeler} id={items.name} className='buttons'>{items.name}</a>)}
          </div>
          <div className="forSlots">
            <p className='centerMe'>no slots at present</p>

          </div>
        </div>

      </main>
    </>
  )
}



export default App;

