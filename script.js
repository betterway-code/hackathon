const slots = [
    "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
    "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
    "06:00 PM", "06:30 PM"  
];

const bookingsList = document.getElementById("bookings-list");

const bookings = {}; 

document.addEventListener("DOMContentLoaded", () => {
    populateSlots();
    document.getElementById("bookBtn").addEventListener("click", bookSlot);
    document.getElementById("clearBtn").addEventListener("click", clearBookings); 
});

function populateSlots() {
    const slotSelect = document.getElementById("slot");
    slots.forEach(slot => {
        const option = document.createElement("option");
        option.value = slot;
        option.textContent = slot;
        slotSelect.appendChild(option);
    });
}

function bookSlot() {
    const selectedSlot = document.getElementById("slot").value;
    const bookingType = document.getElementById("bookingType").value;

    if (!bookings[selectedSlot]) {
        bookings[selectedSlot] = { doctor1: false, doctor2: false, clinic: false, totalBookings: 0 };
    }

    const slotInfo = bookings[selectedSlot];

    if (slotInfo.totalBookings >= 2) {
        alert("The selected time slot is fully booked.");
        return;
    }

    if (bookingType === 'clinic') {
        if (slotInfo.clinic || slotInfo.totalBookings > 0) {
            alert("Cannot book. The slot already has a clinic booking or is fully booked.");
            return;
        }
        slotInfo.clinic = true;
    } else {
        if (slotInfo[bookingType]) {
            alert(`Doctor ${bookingType === 'doctor1' ? '1' : '2'} is already booked for this slot.`);
            return;
        }
        slotInfo[bookingType] = true;
    }

    slotInfo.totalBookings++;

    updateBookingStatus();
    updateSlotAvailability();
}


function clearBookings() {
    for (let slot in bookings) {
        bookings[slot] = { doctor1: false, doctor2: false, clinic: false, totalBookings: 0 };
    }
    bookingsList.innerHTML = '';
    updateBookingStatus();
    updateSlotAvailability();
}

function updateBookingStatus() {
    
    bookingsList.innerHTML = ''; 

    Object.keys(bookings).forEach(slot => {
        const listItem = document.createElement("li");
        const slotInfo = bookings[slot];
        const bookedTypes = [];

        if (slotInfo.clinic) bookedTypes.push("Clinic");
        if (slotInfo.doctor1) bookedTypes.push("Doctor 1");
        if (slotInfo.doctor2) bookedTypes.push("Doctor 2");

        listItem.textContent = `${slot}: ${bookedTypes.join(", ")}`;
        bookingsList.appendChild(listItem);
    });
}

function updateSlotAvailability() {
    const slotSelect = document.getElementById("slot");
    slotSelect.innerHTML = ''; 

    slots.forEach(slot => {
        const option = document.createElement("option");
        option.value = slot;
        option.textContent = slot;


        if (bookings[slot] && bookings[slot].totalBookings >= 2) {
            option.disabled = true;
            option.textContent += " (Fully Booked)";
        }

        slotSelect.appendChild(option);
    });
}
