const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', function ()
{
    console.log("Clicked")
    const searchField = document.getElementById('input-field');
    const inputText = searchField.value;
    searchField.value = '';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputText + '&appid=4f505fbfc39a0370bcde8d6c349e55ea')
        .then(res => res.json())
        .then(data =>
        {
            console.log(data);
            const cityName = data.name;
            const tem = data.main.temp;
            const temp = tem - 273.15;
            const description = data.weather[0].description;

            document.getElementById('image').src = `icon/${ data.weather[0].icon }.png`;
            document.getElementById('city').innerText = cityName;
            document.getElementById('tem').innerText = temp.toFixed(2);
            document.getElementById('des').innerText = description;
        })
        .catch(res => alert('Please Type Right City Name'))
})