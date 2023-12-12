fetch("http://api.weatherstack.com/current?access_key=ae8622f419ac51f4d9987fd1de4d66e8&query=Niort")
.then((response) => {
 return response.json();
 })
 .then((data) => {
console.log(data)
    document.querySelector("#ville").innerHTML = data.location.name;
    console.log(data.location.name);
    document.querySelector("#heure").innerHTML = data.current.observation_time;
    console.log(data.current.observation_time);
    document.querySelector("#temperature").innerHTML = data.current.temperature + "°C" ;
    console.log(data.current.temperature);
    document.querySelector("#humidite").innerHTML = data.current.humidity +"%";
    console.log(data.current.humidity);
 })