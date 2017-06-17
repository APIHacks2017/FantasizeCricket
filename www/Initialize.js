var matches;
function loadMatches() {
    var request = new XMLHttpRequest();
	
    request.open("GET", "http://52.36.211.72:5555/gateway/Cricket%20API/1.0/matches?apikey=0CWPTXYxJmaPWm0eJMGwsrlqR9K2", true);
	request.setRequestHeader("x-Gateway-APIKey", "f789552a-d69a-4be1-a822-325814165355");
    request.onreadystatechange = function() {//Call a function when the state changes.
        if (request.readyState == 4) {
            if (request.status == 200 || request.status == 0) {
                matches = JSON.parse(request.responseText);
				matches = matches.matches;
				var tableBody = document.getElementById("matches-table");

				// Reset the table
				tableBody.innerHTML = "";

				for (var i=0; i < matches.length; i++) {
					newRow = document.createElement("tr");
					tableBody.appendChild(newRow);

						newCell = document.createElement("td");
						newCell.textContent = matches[i]["date"];
						newRow.appendChild(newCell);

						newCell = document.createElement("td");
						newCell.textContent = matches[i]["team-1"] + " vs " + matches[i]["team-2"];
						newRow.appendChild(newCell);

						newCell = document.createElement("td");
						newCell.textContent = matches[i]["matchStarted"];
						newRow.appendChild(newCell);
						
						newCell = document.createElement("td");
						var link = document.createElement("a");
						link.setAttribute("href", "chooseplayers.html")
						link.innerText = "Join";
						link.onClick = "getMatchUniqueId(this)";
						newCell.appendChild(link);
						newRow.appendChild(newCell);
						
						newCell = document.createElement("td");
						newCell.style = "display:none;";
						newCell.textContent = matches[i]["unique_id"];
						newRow.appendChild(newCell);
						
						
				}
				
				console.log(matches);
            }
        }
    }
    console.log("asking for tweets");
    request.send();
}

function getMatchUniqueId(element){
	console.log("Match unique id");
}

function loadPlayers() {
	console.log("Loading players!");
}