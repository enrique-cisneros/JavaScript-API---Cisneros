
function Leer() {
    const city = document.getElementById("input").value;
    //obtain an apikey on this web
    //http://www.omdbapi.com/apikey.aspx
    const key='014d6aa36402f5f2062afd2ba2f8b61e';
    buscar2(city,key);
}


const buscar2=async(city,key)=>{

    const api_url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    const respuesta= await fetch(api_url);
    const data= await respuesta.json();
    const Search = await data.main;

    console.log(Search);

    if(Search!=null)
    {   document.getElementById("lista").innerHTML='';
        
                document.getElementById("lista").innerHTML+=`<div style="width:30;">
                    <br>
                    <h2>Nombre: ${data.name} </h2>
                    <br>
                    <h2>Temperatura: ${Search.temp}° </h2>
                    <h2>Máxima: ${Search.temp_max}° </h2>
                    <h2>Mínima: ${Search.temp_min}° </h2>
                    </div>`;
                    

    }

}    


