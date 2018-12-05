// day/month/year hrs:min:sec

//https://stackoverflow.com/questions/3605214/javascript-add-leading-zeroes-to-date

var today = new Date();
document.getElementById("day").innerHTML = ('0' + today.getDate()).slice(-2);
document.getElementById("month").innerHTML = ('0' + today.getMonth()).slice(-2);
document.getElementById("year").innerHTML = today.getFullYear();

document.getElementById("hours").innerHTML = ('0' + today.getHours()).slice(-2);
document.getElementById("minutes").innerHTML = ('0' + today.getMinutes()).slice(-2);
document.getElementById("seconds").innerHTML = ('0' + today.getSeconds()).slice(-2);
