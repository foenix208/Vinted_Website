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
                document.querySelectorAll('div#card').forEach(div => div.remove());
                for (let pas = 0; pas < 5;pas++){
                    
                    var dealer_img = "https://marketplace-web-assets.vinted.com/assets/no-photo/user-empty-state.svg"
                    if (response[pas]["user"]["photo"] != null){
                        dealer_img = response[pas]["user"]["photo"]["url"]
                    }

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
                                        <div class="dealer-icon"><img src="${dealer_img}" alt=""></div>
                                        <p>${response[pas]["user"]["login"]}</p>
                                    </div>
                                    <h2>${response[pas]["price"]["amount"]} €<span> (ttc ${response[pas]["total_item_price"]["amount"]}€)</span></h2>
                                    
                                    <div>
                                        <a href="${response[pas]["url"]}">Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                    document.getElementById("items").innerHTML+=contenu
                };
            },
        });
    }, 3000);
})
