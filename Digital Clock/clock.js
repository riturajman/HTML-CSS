
function getTime(){
const a = new Date()
var nhour = a.getHours()
var nmin = a.getMinutes()
var nsec = a.getSeconds()



const showtime = document.getElementById('show_time')
   return  showtime.innerHTML = `The time is ${nhour}: ${nmin}: ${nsec}`
}

setInterval(getTime, 1000)


