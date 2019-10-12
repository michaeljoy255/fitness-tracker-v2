// Get Month / Day / Year for navbar -------------------------------------------
function getCurrentDate(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    return month + "/" + day + "/" + year; 
};
document.getElementById("currentDate").innerHTML = getCurrentDate();
