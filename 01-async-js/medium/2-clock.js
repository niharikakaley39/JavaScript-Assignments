// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function updateClock() {
    const now = new Date();

    // 24 Hour Format
    const hours24 = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const time24 = `${hours24}:${minutes}:${seconds}`;

    // 12 Hour Format
    let hours12 = now.getHours();
    const ampm = hours12 >= 12 ? 'PM' : 'AM';
    hours12 = hours12 % 12;
    hours12 = hours12 ? hours12 : 12; // the hour '0' should be '12'
    const strHours12 = String(hours12).padStart(2, '0');
    const time12 = `${strHours12}:${minutes}:${seconds} ${ampm}`;

    console.clear(); // Optional: clears console for cleaner effect
    console.log("24-Hour Format:", time24);
    console.log("12-Hour Format:", time12);
}

setInterval(updateClock, 1000);
