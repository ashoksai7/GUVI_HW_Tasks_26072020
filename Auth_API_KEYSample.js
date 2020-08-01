var request = new XMLHttpRequest()

//4822dd660fdd5d96710f16d612cc5843

var url_string = 'http://api.openweathermap.org/data/2.5/weather?q=Hyderabad,pk&appid=4822dd660fdd5d96710f16d612cc5843'; // Auth key(given after "appid =") is generated from authenticated login into the openweathermap website. Hence it 

// Open a new connection, using the GET request on the URL endpoint

request.open('GET',url_string , true)

request.send();

request.onload = function() {

  // Begin accessing JSON data here

var data = JSON.parse(this.response)
console.log(data);

}



