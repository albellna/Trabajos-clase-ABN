function CambioImg(){
    if (document.getElementById("foto1").src == "https://images-cdn.9gag.com/photo/2819519_700b.jpg"){
        document.getElementById("foto1").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR89T_U0h-VZhmWsQ8WdeIEloe2DzcpacJsSQ&usqp=CAU";
    } else {
        document.getElementById("foto1").src = "https://images-cdn.9gag.com/photo/2819519_700b.jpg";
    }
}

function ejercicio1(){
    document.title = "Ahora trabajando con DOM dinámico";
}

function ejercicio2(){
    const secciones = document.getElementsByTagName('section');
    const arraySecciones = [...secciones];
    arraySecciones.forEach((seccion, index)=> seccion.id = "seccion-" + index);
}

function ejercicio3(){
    const paragrafos = document.getElementsByTagName('p');
    const arrayParagrafos = [...paragrafos];
    arrayParagrafos.forEach(paragrafo => paragrafo.style.fontsize = '0.5rem');
}

function ejercicio4(){
    const enlaces = document.getElementsByTagName('a');
    const arrayEnlaces = [...enlaces];
    arrayEnlaces.forEach(enlace => enlace.style.textDecoration = 'none');
}

function ejercicio5(){
    function crearCheckBox(){
        const divCont = document.getElementById("divCont");    
        const checkbox = document.createElement('input'); 

        checkbox.type = "checkbox"; 
        checkbox.name = "name"; 
        checkbox.value = "value"; 
        checkbox.id = "id"; 
        checkbox.onchange = function(){
            if(document.getElementById('boton').disabled == !this.checked){
                document.getElementById('boton').disabled = this.checked
            } else {
                document.getElementById('boton').disabled = !this.checked
            }
        }
            
        const label = document.createElement('label'); 
             
        label.htmlFor = "id"; 
            
        label.appendChild(document.createTextNode('Seleccionar imagen.')); 
            
        divCont.appendChild(checkbox); 
        divCont.appendChild(label);
    }
    crearCheckBox();
}

function ejercicio6(){
    const boton = document.getElementById('boton');
    
}