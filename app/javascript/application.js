// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('td[data-technician-id]').forEach(td => {
      td.addEventListener('click', () => {
        const technicianId = td.dataset.technicianId;
        const hour = parseInt(td.dataset.hour, 10);
        
        let prevEndTime = null;
        let nextStartTime = null;
  
        document.querySelectorAll(`td[data-technician-id="${technicianId}"] div`).forEach(div => {
          const duration = parseInt(div.querySelector('p:nth-child(3)').textContent.split(' ')[1], 10);
          const Time = div.querySelector('p:nth-child(2)').textContent.split(' ')[1];
  
          const startTime = new Date(`2024-10-01T${Time}`);
          const endTime = new Date(startTime.getTime() + duration * 60000);
  
          if (startTime.getHours() < hour && (!prevEndTime || prevEndTime < endTime)) {
            prevEndTime = endTime;
          }
          if (startTime.getHours() > hour && (!nextStartTime || nextStartTime > startTime)) {
            nextStartTime = startTime;
          }
        });
  
        const availableTime = prevEndTime && nextStartTime ? (nextStartTime - prevEndTime) / 60000 : 'unknown';
        if (availableTime == "unknown") {
          alert(`This time is not in between appointments.`);
        } else{
          alert(`Available time: ${availableTime} minutes`);
        }
        
      });
    });
  });