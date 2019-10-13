// Returns mm/dd/yyyy date string
function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return month + "/" + day + "/" + year; 
};
document.getElementById("currentDate").innerHTML = getCurrentDate();

function dataToClipboard() {
    /* Get the text field */
    const copyText = document.getElementById("dataResults");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
};

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});