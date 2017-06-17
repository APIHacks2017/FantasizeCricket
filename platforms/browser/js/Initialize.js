 var myFunction = function(){
                document.body.innerHTML = "hello world";
            }
			
var authorize = function(){
    var request = new XMLHttpRequest();
    request.open("GET", "http://52.36.211.72:5555/invoke/pub.apigateway.oauth2/authorize?response_type=code&client_id=2eefdc70-63d3-408a-8f4f-1394ede68ca4&redirect_uri=https://hackathon.sagapicloud.com:443/abs/apiportalext/v1/oauth2/callback&scope=read", true);
    request.onreadystatechange = function() {//Call a function when the state changes.
        if (request.readyState == 4) {
            if (request.status == 200 || request.status == 0) {
                var matches = JSON.parse(request.responseText);
				authToken();
            }
        }
    }
    request.send();
}

var authToken = function(){
    var request = new XMLHttpRequest();
    request.open("GET", "var authorize = function(){
    var request = new XMLHttpRequest();
    request.open("GET","https://hackathon.sagapicloud.com:443/abs/apiportalext/v1/oauth2/callback", true);
    request.onreadystatechange = function() {//Call a function when the state changes.
        if (request.readyState == 4) {
            if (request.status == 200 || request.status == 0) {
                var matches = JSON.parse(request.responseText);
            }
        }
    }
    request.send();
}", true);
    request.onreadystatechange = function() {//Call a function when the state changes.
        if (request.readyState == 4) {
            if (request.status == 200 || request.status == 0) {
                var matches = JSON.parse(request.responseText);
            }
        }
    }
    request.send();
}

var accessToken = function(){
    var request = new XMLHttpRequest();
    request.open("GET", "http://localhost:5555/invoke/pub.apigateway.oauth2/getAccessToken?key=f789552a-d69a-4be1-a822-325814165355", true);
    request.onreadystatechange = function() {//Call a function when the state changes.
        if (request.readyState == 4) {
            if (request.status == 200 || request.status == 0) {
		        var matches = JSON.parse(request.responseText);
            }
        }
    }
    request.send();
}
	
			
function loadMatches() {
    var request = new XMLHttpRequest();
    request.open("GET", "http://52.36.211.72:5555/gateway/Cricket%20API/1.0/matches?key=f789552a-d69a-4be1-a822-325814165355", true);
    request.onreadystatechange = function() {//Call a function when the state changes.
        if (request.readyState == 4) {
            if (request.status == 200 || request.status == 0) {
                var matches = JSON.parse(request.responseText);
            }
        }
    }
    console.log("asking for tweets");
    request.send();
}