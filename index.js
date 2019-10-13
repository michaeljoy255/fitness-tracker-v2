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

// Use this to dynamically create the form elements!
$(document).ready(function(){
    var test = "INSERTED TEXT!"; // temp - for testing text insertion

    $("#chest").after(`
        <h6>Smith Flat Bench Press</h6>
        ${test}
        <div class="form-row mb-3">
            <div class="col-6">
                <input
                    type="number"
                    class="form-control form-control-sm"
                    placeholder="Weight 110 lbs"
                    id="chest-1-weight"
                />
            </div>
            <div class="col-3">
                <input
                    type="number"
                    class="form-control form-control-sm"
                    placeholder="Reps 10"
                    id="chest-1-reps"
                />
            </div>
            <div class="col-3">
                <input
                    type="number"
                    class="form-control form-control-sm"
                    placeholder="Sets 4"
                    id="chest-1-sets"
                />
            </div>
        </div>
    `);
});