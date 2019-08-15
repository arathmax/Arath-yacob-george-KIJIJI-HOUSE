if(document.querySelector("#loginHtml")){
    document.querySelector("#loginHtml").addEventListener('click',function(event){
        event.preventDefault();
        var username = document.querySelector("#username").value;
        var existingUsername = localStorage.getItem("username");
        if(existingUsername === username || username == "arath"){
            localStorage.setItem("username", username);
            window.location.href="hotels.html";
        } else {
            document.querySelector('.error').style.opacity="1";
            // $(".error").html("Sorry, wrong username or password.");
            return;
        }

    });
}

if(document.querySelector("#signup")){
    document.querySelector("#signup").addEventListener('click',function(event){
        event.preventDefault();
        var username = document.querySelector("#intial-name").value;
        localStorage.setItem("username", username);
        window.location.href="hotels.html";
    });
}
if(document.querySelector("#location")){
    document.querySelector("#location").addEventListener('change',function(event){
        event.preventDefault();
        var display="";
       var selectValue= document.querySelector("#location");
        var selectedElement = selectValue.options[selectValue.selectedIndex];
        console.log(selectedElement.value);
        if(selectedElement.value == "Select Location"){
            display="flex";
        }else{
            display="none";
        }
        document.querySelectorAll(".cards").forEach(function(value,index){
            value.style.display=display;
        });
        if(selectedElement.value != "Select Location"){
            document.querySelector("#"+selectedElement.value).style.display="flex";
        }




    });
}
if(document.querySelector("#editUsername")){
    document.querySelector("#editUsername").value=localStorage.getItem("username");
}

if(document.querySelector("#logout")){
    document.querySelector("#logout").addEventListener('click',function(event){
        event.preventDefault();
       localStorage.clear();
        window.location.href="login.html";
    });
}


