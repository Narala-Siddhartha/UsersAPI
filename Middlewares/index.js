const fs = require('fs');

function getFormattedDateTime() {
    const now = new Date();
  
    const pad = (num) => num.toString().padStart(2, '0');
  
    const day = pad(now.getDate());
    const month = pad(now.getMonth() + 1); // Months are 0-based
    const year = now.getFullYear();
  
    const hours = pad(now.getHours());
    const minutes = pad(now.getMinutes());
  
    const date = `${day}/${month}/${year}`;
    const time = `${hours}:${minutes}`;
  
    return { date, time };
}

function logTheDetails(request,fileName)
{
    const {date,time} = getFormattedDateTime();
    var logData = `Date : ${date} | Time : ${time} | Method : ${request.method} | URL : ${request.url} | IP Address : ${request.socket.remoteAddress}\n`;
    fs.appendFile(fileName,logData,(data,error)=>{
        if(error) console.log("Error Writing logs");
    });
}

module.exports = {
    logTheDetails,
};