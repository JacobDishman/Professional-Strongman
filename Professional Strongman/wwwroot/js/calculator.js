// calculator logic using jquery
$(document).ready(function () {

    // when the calculate button is clicked
    $("#calculateBtn").click(function () {
        // grab the value from the hours input
        var hoursInput = $("#hours").val();

        // clear any previous error
        $("#errorMsg").text("");
        $("#total").val("");

        // check if empty
        if (hoursInput === "" || hoursInput === null) {
            $("#errorMsg").text("Please enter a number of hours.");
            return;
        }

        // convert to number and validate
        var hours = parseFloat(hoursInput);

        // make sure its actually a number and positive
        if (isNaN(hours) || hours <= 0) {
            $("#errorMsg").text("Please enter a positive number.");
            return;
        }

        // get the rate and calculate total
        var rate = parseFloat($("#rate").val());
        var total = hours * rate;

        // show the total
        $("#total").val(total.toFixed(2));
    });
});
