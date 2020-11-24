//Inicio Evento cargar contenido del DOM.
document.addEventListener("DOMContentLoaded", () => {
    const continuarBoton = document.getElementById("continuarBoton");
    const atrasBoton = document.getElementById("atrasBoton");
    const aceptarBoton = document.getElementById("aceptarBoton");
    const volverBoton = document.getElementById("volverBoton");
    const sectionPag1 = document.getElementById("sectionPag1");
    const sectionPag2 = document.getElementById("sectionPag2");
    const sectionPag3 = document.getElementById("sectionPag3");
    const sectionPag4 = document.getElementById("sectionPag4");
})
//Fin Evento cargar contenido del DOM.

//Inicio declaración variables globales.
const pErrores = [
    "errorNomApePag2",
    "errorNacPag2",
    "errorCpPag2",
    "errorProvPag2",
    "errorMunPag2"
    ];
let urlFormPag1 = "";
let form3 = "";
//Fin declaración variables globales.

//Inicio Objeto Formulario 3.
function form3Obj(nombre, fechNac, dir, cp, prov, mun) {
    this.nombre = document.getElementById(nombre).value;
    this.fechNac = document.getElementById(fechNac).value;
    this.dir = document.getElementById(dir).value;
    this.cp = document.getElementById(cp).value;
    this.prov = document.getElementById(prov).value;
    this.mun = document.getElementById(mun).value;
}
//Fin Objeto Formulario 3.

//Inicio Funciones 
function errorFormat(element){
    const errorP = document.getElementById(element);
    document.getElementById("headerErrorTitle").classList.remove("elementHide");
    errorP.textContent = "Introduzca el dato.";
    errorP.classList.add("classError");
}

function errorHeaderForm2(element){
    document.getElementById("headerErrorTitle").classList.remove("elementHide");
    if(element == "headerError1"){
        document.getElementById("headerError1").textContent = "Nombre y apellido";
        document.getElementById("headerError1").classList.remove("elementHide");
    }

    if(element == "headerError2"){
        document.getElementById("headerError2").textContent = "Fecha de nacimiento";
        document.getElementById("headerError2").classList.remove("elementHide");
    }

    if(element == "headerError3"){
        document.getElementById("headerError3").textContent = "Código postal";
        document.getElementById("headerError3").classList.remove("elementHide");
    }

    if(element == "headerError4"){
        document.getElementById("headerError4").textContent = "Provincia";
        document.getElementById("headerError4").classList.remove("elementHide");
    }
    
    if(element == "headerError5"){
        document.getElementById("headerError5").textContent = "Municipio";
        document.getElementById("headerError5").classList.remove("elementHide");
    }
}

function remErrorFormat(element){
    const errorP = document.getElementById(element);
    errorP.textContent = "";
    errorP.classList.remove("classError");
}

function remErrorHeaderForm2(element){
    document.getElementById(element).textContent = "";
    document.getElementById(element).classList.add("elementHide");
}

function remAllErrorHeader(){
    document.getElementById("headerErrorTitle").classList.add("elementHide");
    for(i=1; i<=5; i++){
        document.getElementById("headerError"+[i]).classList.add("elementHide");
        document.getElementById("headerError"+[i]).textContent = "";
    }
}

function hideShowSections(element){
    const sectionsHTML = document.getElementsByTagName("section");
    const arraySectionsHTML = [...sectionsHTML];
    arraySectionsHTML.forEach(element => element.classList.add("elementHide"));
    element.classList.remove("elementHide");
}

//Función de la primera página. 
function primeraPag() {
    remAllErrorHeader();
    hideShowSections(sectionPag1);
    atrasBoton.classList.toggle("elementHide");
    continuarBoton.setAttribute("onclick","validacionToPag2()");
}

//Validación que hace la página 1 cuando haces click en "Continuar".
function validacionToPag2() {
    const errorP = "errorUrlPag1";
    if(document.getElementById("textBoxPag1").value == ""){
        errorFormat(errorP);
        document.getElementById("headerError1").textContent = "URL";
        document.getElementById("headerError1").classList.remove("elementHide");
    } else {
        remErrorFormat(errorP);
        document.getElementById("headerErrorTitle").classList.add("elementHide");
        document.getElementById("headerError1").textContent = "";
        document.getElementById("headerError1").classList.add("elementHide");
        urlFormPag1 = document.getElementById("textBoxPag1").value;
        segundaPag();
    }
}

//Función de la página 2.
function segundaPag(){
    hideShowSections(sectionPag2);
    pErrores.forEach(element => remErrorFormat(element));
    document.getElementById("formPag1").reset();
    document.getElementById("formPag2").reset();
    atrasBoton.setAttribute("onclick", "primeraPag()");
    continuarBoton.setAttribute("onclick","validacionToPag3()");
    atrasBoton.classList.remove("elementHide");
    continuarBoton.classList.remove("elementHide");
}

//Validación que hace la página 2 cuando haces click en "Continuar".
function validacionToPag3(){

    if(document.getElementById("nomApeFormPag2").value == ""){
        document.getElementById("headerErrorTitle").classList.remove("elementHide");
        errorHeaderForm2("headerError1");
        errorFormat(pErrores[0]);
    } else {
        remErrorHeaderForm2("headerError1");
        remErrorFormat(pErrores[0]);
    }

    if(document.getElementById("nacFormPag2").value == ""){
        document.getElementById("headerErrorTitle").classList.remove("elementHide");
        errorHeaderForm2("headerError2");
        errorFormat(pErrores[1]);
    } else {
        remErrorHeaderForm2("headerError2");
        remErrorFormat(pErrores[1]);
    }

    if(document.getElementById("cpFormPag2").value == ""){
        document.getElementById("headerErrorTitle").classList.remove("elementHide");
        errorHeaderForm2("headerError3");
        errorFormat(pErrores[2]);
    } else {
        remErrorHeaderForm2("headerError3");
        remErrorFormat(pErrores[2]);
    }

    if(document.getElementById("provFormPag2").value == "default"){
        document.getElementById("headerErrorTitle").classList.remove("elementHide");
        errorHeaderForm2("headerError4");
        errorFormat(pErrores[3]);
    } else {
        remErrorHeaderForm2("headerError4");
        remErrorFormat(pErrores[3]);
    }

    if(document.getElementById("munFormPag2").value == ""){
        document.getElementById("headerErrorTitle").classList.remove("elementHide");
        errorHeaderForm2("headerError5");
        errorFormat(pErrores[4]);
    } else {
        remErrorHeaderForm2("headerError5");
        remErrorFormat(pErrores[4]);
    }

    const classError = document.getElementsByClassName("classError");
    const countError = [...classError];

    if(countError.length == 0){
        form3 = new form3Obj("nomApeFormPag2","nacFormPag2","dirFormPag2","cpFormPag2","provFormPag2","munFormPag2");
        document.getElementById("headerErrorTitle").classList.add("elementHide");
        terceraPag();
    }
}

//Función de la página 3.
function terceraPag(){
    document.getElementById("mostrarNomApePag3").textContent = form3.nombre;
    document.getElementById("mostrarNacPag3").textContent = form3.fechNac;
    document.getElementById("mostrarDirPag3").textContent = form3.dir;
    document.getElementById("mostrarCpPag3").textContent = form3.cp;
    document.getElementById("mostrarProvPag3").textContent = form3.prov;
    document.getElementById("mostrarMunPag3").textContent = form3.mun;
    hideShowSections(sectionPag3);
    document.getElementById("formPag2").reset();
    atrasBoton.classList.add("elementHide");
    continuarBoton.classList.add("elementHide");
    aceptarBoton.classList.remove("elementHide");
    volverBoton.classList.remove("elementHide");
    aceptarBoton.setAttribute("onclick","cuartaPag()");
    volverBoton.setAttribute("onclick","segundaPag()");
}

//Función de la página 4.
function cuartaPag(){
    hideShowSections(sectionPag4);
    terminarBoton.classList.remove("elementHide");
    terminarBoton.setAttribute("onclick","location.href='" + urlFormPag1 + "'");
}