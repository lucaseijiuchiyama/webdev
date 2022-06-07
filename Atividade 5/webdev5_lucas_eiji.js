var d_mode = false;

function dark_mode(){
    if(d_mode == false){
        document.getElementById("apresentacao").style.backgroundColor = "DimGray";
        document.getElementById("primeira_aula").style.backgroundColor = "DimGray";
        document.getElementById("segunda_aula").style.backgroundColor = "DimGray";
        document.getElementById("terceira_aula").style.backgroundColor = "DimGray";
        document.getElementById("quarta_aula").style.backgroundColor = "DimGray";
        document.getElementById("quinta_aula").style.backgroundColor = "DimGray";
        document.getElementById("menu_lateral").style.backgroundColor = "Gray";

        document.getElementById("apresentacao").style.color = "White";
        document.getElementById("primeira_aula").style.color = "White";
        document.getElementById("segunda_aula").style.color = "White";
        document.getElementById("terceira_aula").style.color = "White";
        document.getElementById("quarta_aula").style.color = "White";
        document.getElementById("quinta_aula").style.color = "White";
        document.getElementById("menu_lateral").style.color = "White";
        for(i=0; i<6; i++){
            document.getElementsByClassName("menu_lateral_link")[i].style.color = "White";
        }
        d_mode = true;
        
    } else{
        document.getElementById("apresentacao").style.backgroundColor = "rgb(200, 200, 255)";
        document.getElementById("primeira_aula").style.backgroundColor = "rgb(255, 200, 200)";
        document.getElementById("segunda_aula").style.backgroundColor = "rgb(200, 255, 200)";
        document.getElementById("terceira_aula").style.backgroundColor = "Bisque";
        document.getElementById("quarta_aula").style.backgroundColor = "Pink";
        document.getElementById("quinta_aula").style.backgroundColor = "Gold";
        document.getElementById("menu_lateral").style.backgroundColor = "Aqua";

        document.getElementById("apresentacao").style.color = "Black";
        document.getElementById("primeira_aula").style.color = "Black";
        document.getElementById("segunda_aula").style.color = "Black";
        document.getElementById("terceira_aula").style.color = "Black";
        document.getElementById("quarta_aula").style.color = "Black";
        document.getElementById("quinta_aula").style.color = "Black";
        document.getElementById("menu_lateral").style.color = "Black";
        for(i=0; i<6; i++){
            document.getElementsByClassName("menu_lateral_link")[i].style.color = "Black";
        }
        d_mode = false;
    }
}