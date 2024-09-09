const timer  = document.getElementById('time');
console.log(timer);
console.log(timer);
setInterval(()=>{
    let date =  new Date().toLocaleTimeString();
    timer.innerHTML = date;
},1000)