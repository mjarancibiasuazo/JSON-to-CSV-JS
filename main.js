

//REFERENCIA DE LOS ELEMENTOS HTML
const jsonForm = document.querySelector("#jsonform");//textarea
const cvsForm  = document.querySelector("#csvform");//textarea
const bConvert = document.querySelector("#bConvert");//botón convertir

//Botón convertir
bConvert.addEventListener('click', (e) => {
    convertJSONtoCSV();
});

function convertJSONtoCSV(){
    let json;
    let keys = []; //guardamos todos los nombres de las propiedades.
    let values = [];//guardamos todos los valores.

    //si no es el formato de .JSON vendra el error
    try{
        json = JSON.parse(jsonForm.value);
    }catch (error){
        console.log('Formato incorrecto JSON', error);
        alert('Formato incorrecto JSON');
        return;
    }

    if (Array.isArray(json)){
        //algoritmo del arreglo de objetos
        json.forEach((item) => {
            const nkeys = Object.keys(item);//vamos a obtener las propiedades del objeto para la cabeera

            //validamos
            if(keys.length === 0){
                keys = [...nkeys];//primera vez iterando
            }else{
                if(nkeys.length != keys.length){//si el nuevo arreglo de nkeys es diferente al arreglo de keys
                    throw new Error('Number of keys are different');//si no tengo keys se termina.
                    
                }else{
                    console.log("OK", nkeys);//mostramos las propiedades
                }
            }
            //definimos filas y extraemos los valores
            const row = keys.map(k  => {
                return item[k];
            });
            values.push([...row]);
        });

        console.log(keys, values);
        values.unshift(keys);
        const text = values.map((v) => v.join(',')).join('\n');
        csvform.value = text;

    }else {
        alert('No es un arreglo de objetos');
    }
}