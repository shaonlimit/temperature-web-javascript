// http://api.weatherapi.com/v1/current.json?key=b25a6ce55a494c388d3101913223011&q=dhaka&aqi=no


//fetch data function
const fetchResults = async (location) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=b25a6ce55a494c388d3101913223011&q=${location}&aqi=no`
    const res = await fetch(url)
    const data = await res.json()
    const locationName = data.location.name
    const temperature = data.current.temp_c
    const condition = data.current.condition.text
   const conditionIcon = data.current.condition.icon
   loadData(locationName, condition, temperature, conditionIcon);
   
}

//load Data function
const loadData = (locationName, condition, temperature, conditionIcon) => {
    document.getElementById('location-name').innerText = locationName;
    document.getElementById('condition').innerText = condition;
    document.getElementById('temperature').innerText = temperature;
    document.getElementById('condition-icon').src = conditionIcon;
}

//default function call
fetchResults('dhaka');


//search button handler
document.getElementById('search-btn').addEventListener('click',function(){
    const locationName = document.getElementById('search-box').value;
    if (locationName != ''){
        fetchResults(locationName);
    }
    else {
        alert('Please enter a city name.')
    }
})

document.getElementById('search-box').addEventListener('keypress',function(event){
   
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("search-btn").click();
      }
})




