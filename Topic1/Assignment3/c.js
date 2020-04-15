const fs = require('fs');

const secondsInYear = 365*24*60*60;
const secondInCentury = secondsInYear*100;

const data = "Seconds in a Year : " + secondsInYear + " and Seconds in a Century : "+secondInCentury;

fs.writeFile('Time.txt',data,()=>{
    console.log("Written");
})