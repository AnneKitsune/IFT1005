// day/month/year hrs:min:sec

var today = new Date();
document.getElementById("day").innerHTML = today.getDate();
document.getElementById("month").innerHTML = today.getMonth();
document.getElementById("year").innerHTML = today.getFullYear();

document.getElementById("hours").innerHTML = today.getHours();
document.getElementById("minutes").innerHTML = today.getMinutes();
document.getElementById("seconds").innerHTML = today.getSeconds();
