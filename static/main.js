$(function() {
    console.log("Le DOM est prêt !");
    var image = document.getElementById("img");
    var texte = document.getElementById("titre");

    setInterval(function(){ 
        $.ajax({
            type: "get",
            url: "/",
            contentType : "application/json",
            data : {
                ping : "new",
            },
            success: function(responce){
                console.log(responce[0])

                image.src = responce[1]
                texte.textContent = responce[0]
            }
        });
    },5000);
});
