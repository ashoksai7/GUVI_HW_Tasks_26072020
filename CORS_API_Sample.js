var request = new XMLHttpRequest()

// Need a cors-anywhere proxy to access the data as the browser would block the request

var url_string = 'https://cors-anywhere.herokuapp.com/https://api.domainsdb.info/v1/domains/search?domain=facebook&zonecom'; 

// Open a new connection, using the GET request on the URL endpoint

request.open('GET',url_string , true)

request.send();

request.onload = function() {

  // Begin accessing JSON data here

var data = JSON.parse(this.response)
console.log(data);

}




