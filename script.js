document.addEventListener('DOMContentLoaded', function() {
    function updateClock() {
        const clock = document.getElementById('time');
        const now = new Date();
        let hours = String(now.getHours()).padStart(2,'0');
        const minutes = String(now.getMinutes()).padStart(2,'0');
        const seconds = String(now.getSeconds()).padStart(2,'0');
        const isAM = hours < 12;
        const ampm = isAM ? 'AM' : 'PM';
        
        hours = hours % 12;
        hours = hours ? hours : 12;     // if hours % 12 = 0 it changes into 12

        const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
        clock.textContent = timeString;
    }

    updateClock();
    setInterval(updateClock, 1000);
})
  