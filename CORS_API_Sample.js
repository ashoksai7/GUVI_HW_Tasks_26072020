var request = new XMLHttpRequest()

var url_string = 'https://api.domainsdb.info/v1/domains/search?domain=facebook&zonecom'; // Anyone with the Tokens following '?' can access the data

// Open a new connection, using the GET request on the URL endpoint

request.open('GET',url_string , true)

request.send();

request.onload = function() {

  // Begin accessing JSON data here

var data = JSON.parse(this.response)

}


console.log(data);

}