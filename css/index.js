


$(".form-check-input").click(function() {
    var lol= $("html").attr("data-bs-theme");
    if(lol==="dark"){
        $("html").attr("data-bs-theme","white");
       
        $(".form-check-label1").text("𝙳𝚊𝚛𝚔")
        $(".form-check-input").css("color","black")
        $(".form-check-input").css("background-color","white")

    }
    else{
        $("html").attr("data-bs-theme","dark");
        $(".form-check-label1").text("𝙻𝚒𝚐𝚑𝚝")
        $(".form-check-input").css("color","white")
        $(".form-check-input").css("background-color","black")
    }
    
    
  });
