let Navbar_flag=true;
let header_seacrh_flag=true;

window.onscroll = function(event) {
    if(window.scrollY>150){
    
    document.getElementById("btn_header_menu").style.height="90px";
    document.getElementById("logo_img").style.width="8%";
    }
    else{
        document.getElementById("btn_header_menu").style.height="111px";
        document.getElementById("logo_img").style.width="10%";
    }

};

function scroll_func(){
    console.log("hello");
}

function header_Navbar(){
    if(Navbar_flag==true){
document.getElementById("navbar_div").style.display="block";
    }
    else{
        document.getElementById("navbar_div").style.display="none";
    }
    Navbar_flag=!Navbar_flag;
}

function header_search(){
    if(header_seacrh_flag==true){
    document.getElementById("search_button").style.backgroundColor="#286cc1";
    document.getElementById("search_button").style.color="white";
    document.getElementById("header_search_div").style.display="block";
}
    else{
        document.getElementById("header_search_div").style.display="none";
        document.getElementById("search_button").style.backgroundColor="white";
        document.getElementById("search_button").style.color="#286cc1";
    }
    header_seacrh_flag=!header_seacrh_flag;
}