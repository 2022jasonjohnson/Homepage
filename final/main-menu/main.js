function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM'; // Determine AM or PM

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle 0 hours (midnight) as 12

    // Pad with leading zeros for single-digit numbers
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Update the HTML elements
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('ampm').textContent = ampm;
}

// Update the clock every second
setInterval(updateClock, 1000); 

// Call it once to display the time immediately on load
updateClock(); 

$(".campaign-btn").click(
    function(){
        $(".campaign").addClass("active");
        $(".abstract-btn").addClass("hidden");
        $(".about-btn").addClass("hidden");
        $(".absrtact-btn").addClass("hidden");
        $(".settings-btn").addClass("hidden");
        $(".selectionbackground").addClass("active");

});

$(".selectionbackground").click(
    function(){
        $(".selectionbackground").removeClass("active");
        $(".campaign").removeClass("active");
        $(".main-menu").removeClass("hidden");
        $(".abstract").removeClass("active");
        $(".about").removeClass("active");
        $(".settings").removeClass("active");
        $(".exit").removeClass("active");
                $(".campaign-btn").removeClass("hidden");
        $(".abstract-btn").removeClass("hidden");
        $(".about-btn").removeClass("hidden");
        $(".settings-btn").removeClass("hidden");
    }
)



$(".abstract-btn").click(
    function(){
        $(".abstract").addClass("active");
        $(".campaign-btn").addClass("hidden");
        $(".about-btn").addClass("hidden");
        $(".settings-btn").addClass("hidden");
        $(".selectionbackground").addClass("active");
        
});

$(".about-btn").click(
    function(){
        $(".about").addClass("active");
        $(".abstract-btn").addClass("hidden");
        $(".campaign-btn").addClass("hidden");
        $(".absrtact-btn").addClass("hidden");
        $(".settings-btn").addClass("hidden");
        $(".selectionbackground").addClass("active");

});

$(".settings-btn").click(
    function(){
        $(".abstract-btn").addClass("hidden");
        $(".campaign-btn").addClass("hidden");
        $(".abstract-btn").addClass("hidden");
        $(".about-btn").addClass("hidden");
        $(".settings").addClass("active");
        $(".selectionbackground").addClass("active");


});

$(".exit-btn").click(
    function(){
        $(".exit").addClass("active");
        $(".main-menu").addClass("hidden");
});

$(document).ready(function () {
  $(".threedmodel-btn").click(function () {
    $(".threedmodel").addClass("active");
    $(".main-menu").addClass("hidden");
  });
});
