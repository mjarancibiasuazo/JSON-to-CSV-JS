

//REFERENCIA DE LOS ELEMENTOS HTML
const jsonform = document.querySelector("#jsonform");
const cvsform  = document.querySelector("#cvsform");
const bConvert = document.querySelector("#bConvert");

//Botón convertir

bConvert.addEventListener('click', e => {
    convertJSONtoCSV();
});

function convertJSONtoCSV(){
    let json;
    let keys = [];
    let vañues = [];

    //si no es el formato de .JSON vendra el error
    try{
        json = JSON.parse(jsonForm.value);
    }catch (error){
        console.log('Formato incorrecto JSON', error);
        alert('Formato incorrecto JSON');
    }

    if (Array.isArray(json)){

        
        //algoritmo
    }else {
        alert('No es un arreglo de objetos');
    }
}