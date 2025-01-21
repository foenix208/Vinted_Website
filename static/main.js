// $(function() {
//     console.log("Le DOM est prêt !");
//     var image = document.getElementById("img");
//     var texte = document.getElementById("titre");

//     setInterval(function(){ 
//         $.ajax({
//             type: "get",
//             url: "/",
//             contentType : "application/json",
//             data : {
//                 ping : "new",
//             },
//             success: function(responce){
//                 console.log(responce[0])

//                 image.src = responce[1]
//                 texte.textContent = responce[0]
//             }
//         });
//     },5000);
// });

// var time_loop_sc = 5
// console.log("JavaScript start")

// for (let pas = 0; pas < 4; pas ++){
    
//     let contenu = `
//     <div>
//         <div class="card">
//             <div>
//                 <div class="img-card"></div>
//             </div>
//             <div class="info">
//                 <div>
//                     <p>marque ${pas}</p>
//                     <h2>Titre de l'article</h2>
//                 </div>
//                 <div class="dealer">
//                     <div class="dealer-icon"></div>
//                     <p>Nom du vendeur</p>
//                 </div>
//                 <h2>2.00 € <span>(ttc 2.60)</span></h2>
                
//                 <div>
//                     <a href="">Details</a>
//                 </div>
//             </div>
//         </div>
//     </div>
//     `
//     document.getElementById("items").innerHTML+=contenu

// };



$(function() {
    //console.log("requests")
    setInterval(function() {
        $.ajax({
            type: "get",
            url: "/",
            contentType : "application/json",
            data : {
                ping : "api_requests_vinted",
            },
            success: function(response) {
                // console.log(response);
                //console.log(response[0]["title"])
                document.querySelectorAll('div#card').forEach(div => div.remove());
                for (let pas = 0; pas < 5;pas++){
                    console.log(response[pas]["title"])
                    let contenu = `
                        <div id="card">
                            <div class="card">
                                <div>
                                    <div class="img-card">
                                        <div class="img-card"> <img src="${response[pas]["photo"]["url"]}" alt=""></div>
                                    </div>
                                </div>
                                <div class="info">
                                    <div>
                                        <p>${response[pas]["brand_title"]}</p>
                                        <h2>${response[pas]["title"]}</h2>
                                    </div>
                                    <div class="dealer">
                                        <div class="dealer-icon"><img src="${response[pas]["user"]["photo"]["thumbnails"][0]["url"]}" alt=""></div>
                                        <p>${response[pas]["user"]["login"]}</p>
                                    </div>
                                    <h2>${response[pas]["price"]["amount"]} €<span>(ttc ${response[pas]["total_item_price"]["amount"]}€)</span></h2>
                                    
                                    <div>
                                        <a href="">Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                    document.getElementById("items").innerHTML+=contenu
                };
            },
        });
    }, 5000);
})
