let ville = "Tokyo";

recevoirTemperature(ville);


let changerVille = document.querySelector('#changer').addEventListener('click', () => {
    let VilleChoisie = prompt("Choissiez votre ville : ");
    recevoirTemperature(VilleChoisie);
});

function recevoirTemperature(ville) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=75bd0ad270cb377b04af57de00721059&units=metric`;

    let requete = new XMLHttpRequest();

    requete.open("GET", url);

    requete.responseType = "json";
    requete.send();


    requete.onload = function () {

        if(requete.readyState === XMLHttpRequest.DONE){
            if(requete.status === 200){
                let reponse = requete.response;
                let city = reponse.name;
                let temperature = reponse.main.temp;

                document.querySelector('#ville').textContent = city;
                document.querySelector("#temperature_label").textContent = temperature;
                
            }else{
                    alert("Une erreur est survenue, veuillez réessayer plus tard.");   
            }
        }
    }
    console.log(url);

}

