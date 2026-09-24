function selectGuest(count){

    document.getElementById("home").style.display = "none";
    document.getElementById("map").style.display = "block";

    // いったん全席を表示
    const seats = document.querySelectorAll(".seat");

    seats.forEach(seat=>{
        seat.style.display = "flex";
    });

    // 2名以下なら4名席を非表示
    if(count <= 2){

        document.getElementById("seat4").style.display = "none";
        document.getElementById("seat5").style.display = "none";

    }

}

function selectSeat(number){

    document.getElementById("map").style.display="none";
    document.getElementById("result").style.display="block";

    document.getElementById("seatNumber").innerHTML =
        "⑦".replace("⑦","") + number + "番席です";

    setTimeout(function(){

        location.reload();

    },5000);

}