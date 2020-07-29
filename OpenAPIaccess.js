var request = new XMLHttpRequest()

var url_string = 'https://restcountries.eu/rest/v2/all';

// Open a new connection, using the GET request on the URL endpoint

request.open('GET',url_string , true)

request.send();

request.onload = function() {

  // Begin accessing JSON data here

var data = JSON.parse(this.response)

for(let i = 0; i<data.length ; i++){

	data[i].id = i;
}


console.log(data);

}