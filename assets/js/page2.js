// Event listener for page 2 Go Back button
$('.gobackbtn').on("click", function() {
      window.location.href = 'index.html';
    })
    
    //Variables for page 2
    var stateName = '';
    var flowerName;
    var butterflyName;
    var birdName;
    var mammalName;
    var treeName;
    var capitalName;
    var nickName;
    var index = 0;
    var imageNumber = 0;
    var noOfSymbols = 7;
    var factImage = [];
    var noOfImages = 5;
    var stateFlowerEl = document.querySelector(".state-flower");
    var stateButterflyEl = document.querySelector(".state-butterfly");
    var stateBirdEl = document.querySelector(".state-bird");
    var stateCapitalEl = document.querySelector(".state-capital");
    var stateMammalEl = document.querySelector(".state-mammal");
    var stateTreeEl = document.querySelector(".state-tree");
    var stateNickNameEl = document.querySelector(".state-nickname");
    
    var symbols = [
      "List_of_U.S._state_and_territory_flowers",
      "List_of_U.S._state_insects",
      "List_of_U.S._state_birds",
      "List_of_U.S._state_mammals",
      "List_of_U.S._state_and_territory_trees",
      "List_of_capitals_in_the_United_States",
      "List_of_U.S._state_and_territory_nicknames",
    ];
    
    // Calling functions to run on page load
    getInfo();
    
    // Functions for page 2 -
    function startCollectingData() {
      stateName = localStorage.getItem("stateVisited");
      console.log(stateName);
      getInfo(stateName, symbols[index]);
    }
    
    
    function getInfo() {
      var stateName = localStorage.getItem('stateVisited');
      getStateFlower(stateName, symbols[0]);
      getStateButterfly(stateName, symbols[1]);
      getStateBird(stateName, symbols[2]);
      getStateMammal(stateName, symbols[3]);
      getStateTree(stateName, symbols[4]);
      getStateCapital(stateName, symbols[5]);
      getStateNickName(stateName, symbols[6]);
      getStateSummary(stateName);
      //can add donnas || mine getImage funtion and api key from here
    }
    
    function getStateSummary(){
      stateName = localStorage.getItem("stateVisited");
    // this fetch pulls in the data for the title (i.e. state name) and the general information about the state and displays it on page 2.
      url = "http://en.wikipedia.org/w/api.php?action=query&list=search&srsearch="+stateName+"&format=json&origin=*";
      fetch(url)
          .then(function (response) {
              return response.json();
          })
          .then(function (data) {
            console.log(data);
            var title = data.query.search[0].title;
            var pageId = data.query.search[0].pageid;
            fetch('http://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles='+title+'&exintro=1&origin=*')
    
            .then(function (responseAgain) {
              return responseAgain.json();
            })
            .then(function (dataAgain) {
              $('.info').append(dataAgain.query.pages[pageId].extract);
              $('.header').text(title)
            })
          })
    
      // set the next URL based on the state selected on the first page.
      const url2 = `https://pixabay.com/api?q=${stateName}&key=21438663-60940dce2a3b8f288719617da&lang=en&image_type=all&orientation=horizontal&safesearch=true&per_page=5&category=backgrounds,nature,science,education,places,animals,sports,buildings`;
    
      // this fetch pulls in images from pixabay.com/api.
      fetch(url2)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          const statePictureListEl = document.getElementById('statePictureList');
          if (data.hits.length > 0) {
            removeAllChildNodes(statePictureListEl);
            for (let i = 0; i < data.hits.length; i++) {
              const imgEl = document.createElement('img');
              imgEl.setAttribute('src', data.hits[i].webformatURL);
              imgEl.setAttribute('alt', `State of ${stateName} picture`);
              imgEl.setAttribute('uk-cover', '');
              const listItemEl = document.createElement('li');
              listItemEl.appendChild(imgEl);
              statePictureListEl.appendChild(listItemEl);
            }
          }
        });
    }
    
    // DC - https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
    function removeAllChildNodes(parent) {
      while (parent.firstChild) {
          parent.removeChild(parent.firstChild);
      }
    }
    
    
    
    // // functions for fun facts on page 2
    function getStateFlower(stateName, fact) {
      fetch(`http://en.wikipedia.org/w/api.php?action=parse&page=${fact}&format=json&origin=*`)
        .then(function (response) {
          if (response.status === 200) {
            return response.json();
          } else {
            alert("Error: " + response.statusText);
          }
        })
        .then(function (data) {
          console.log(data);
          const parser = new DOMParser();
          const htmlString = data.parse.text["*"];
          const doc1 = parser.parseFromString(htmlString, "text/html");
          var wikiEl = doc1.querySelector(".wikitable");
          var rows = wikiEl.querySelectorAll("tr");
          for (i = 1; i < rows.length; i++) {
            if (rows[i].cells[0].textContent.trim() === stateName) {
              flowerName = rows[i].cells[1].textContent;
              stateFlowerEl.textContent = flowerName;
            }
          }
        });
    }
    
    function getStateButterfly(stateName, fact) {
      fetch(`http://en.wikipedia.org/w/api.php?action=parse&page=${fact}&format=json&origin=*`)
        .then(function (response) {
          if (response.status === 200) {
            return response.json();
          } else {
            alert("Error: " + response.statusText);
          }
        })
        .then(function (data) {
          const parser = new DOMParser();
          const htmlString = data.parse.text["*"];
          const doc1 = parser.parseFromString(htmlString, "text/html");
          var wikiEl = doc1.querySelector(".wikitable");
          var rows = wikiEl.querySelectorAll("tr");
          for (i = 1; i < rows.length; i++) {
            if (rows[i].cells[0].textContent.trim() === stateName) {
              butterflyName = rows[i].cells[1].textContent;
              stateButterflyEl.textContent = butterflyName;
            }
          }
        });
    }
    
    function getStateBird(stateName, fact) {
      fetch(`http://en.wikipedia.org/w/api.php?action=parse&page=${fact}&format=json&origin=*`)
        .then(function (response) {
          if (response.status === 200) {
            return response.json();
          } else {
            alert("Error: " + response.statusText);
          }
        })
        .then(function (data) {
          const parser = new DOMParser();
          const htmlString = data.parse.text["*"];
          const doc1 = parser.parseFromString(htmlString, "text/html");
          var wikiEl = doc1.querySelector(".wikitable");
          var rows = wikiEl.querySelectorAll("tr");
          for (i = 1; i < rows.length; i++) {
            if (rows[i].cells[0].textContent.trim() === stateName) {
              birdName = rows[i].cells[1].textContent;
              stateBirdEl.textContent = birdName;
            }
          }
        });
    }
    
    function getStateMammal(stateName, fact) {
      fetch(`http://en.wikipedia.org/w/api.php?action=parse&page=${fact}&format=json&origin=*`)
        .then(function (response) {
          if (response.status === 200) {
            return response.json();
          } else {
            alert("Error: " + response.statusText);
          }
        })
        .then(function (data) {
          const parser = new DOMParser();
          const htmlString = data.parse.text["*"];
          const doc1 = parser.parseFromString(htmlString, "text/html");
          var wikiEl = doc1.querySelector(".wikitable");
          var rows = wikiEl.querySelectorAll("tr");
          for (i = 1; i < rows.length; i++) {
            if (rows[i].cells[0].textContent.trim() === stateName) {
              if (rows[i].cells[1].textContent) {
                mammalName = rows[i].cells[1].textContent;
              } else if (rows[i].cells[2].textContent) {
                mammalName = rows[i].cells[2].textContent;
              } else if (rows[i].cells[3].textContent) {
                mammalName = rows[i].cells[3].textContent;
              } else {
                mammalName = "Dont have State Mammal";
              }
              stateMammalEl.textContent = mammalName;
            }
          }
        });
    }
    
    function getStateTree(stateName, fact) {
      fetch(`http://en.wikipedia.org/w/api.php?action=parse&page=${fact}&format=json&origin=*`)
        .then(function (response) {
          if (response.status === 200) {
            return response.json();
          } else {
            alert("Error: " + response.statusText);
          }
        })
        .then(function (data) {
          const parser = new DOMParser();
          const htmlString = data.parse.text["*"];
          const doc1 = parser.parseFromString(htmlString, "text/html");
          var wikiEl = doc1.querySelector(".wikitable");
          var rows = wikiEl.querySelectorAll("tr");
          for (i = 1; i < rows.length; i++) {
            if (rows[i].cells[0].textContent.trim() === stateName) {
              treeName = rows[i].cells[1].textContent;
              stateTreeEl.textContent = treeName;
            }
          }
        });
    }
    
    function getStateCapital(stateName, fact) {
      fetch(
        `http://en.wikipedia.org/w/api.php?action=parse&page=${fact}&format=json&origin=*`
      )
        .then(function (response) {
          if (response.status === 200) {
            return response.json();
          } else {
            alert("Error: " + response.statusText);
          }
        })
        .then(function (data) {
          const parser = new DOMParser();
          const htmlString = data.parse.text["*"];
          const doc1 = parser.parseFromString(htmlString, "text/html");
          var wikiEl = doc1.querySelector("body > div > table.wikitable.plainrowheaders.sortable");
          console.log(wikiEl);
          var rows = wikiEl.querySelectorAll("tr");
          for (i = 1; i < rows.length; i++) {
            if (rows[i].cells[0].textContent.trim() === stateName)
              capitalName = rows[i].cells[1].textContent;
              stateCapitalEl.textContent = capitalName;
              weather(capitalName);
            }
          })
        };
    
    function getStateNickName(stateName, fact) {
      fetch(
        `http://en.wikipedia.org/w/api.php?action=parse&page=${fact}&format=json&origin=*`
      )
        .then(function (response) {
          if (response.status === 200) {
            return response.json();
          } else {
            alert("Error: " + response.statusText);
          }
        })
        .then(function (data) {
          const parser = new DOMParser();
          const htmlString = data.parse.text["*"];
          const doc1 = parser.parseFromString(htmlString, "text/html");
          var wikiEl = doc1.querySelector(".wikitable");
          var rows = wikiEl.querySelectorAll("tr");
          for (i = 1; i < rows.length; i++) {
            if (rows[i].cells[0].textContent.trim() === stateName) {
              var listItemOne = doc1.querySelector(
                `tbody > tr:nth-child(${i}) > td:nth-child(2) > ul > li:nth-child(1)`
              );
              nickName = listItemOne.textContent;
              stateNickNameEl.textContent = nickName;
            }
          }
        });
    }
    // weather data for page 2

var rain = '🌧';
var sun = '☀️';
var cloud = '🌥';
var snow = '🌨';



function weather() {
        var url = 'https://api.openweathermap.org/data/2.5/weather?q='+capitalName+ '&appid=c24b1e69b12182932011de7f1b2d7c83';
        fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
        generalInfo(data);
        });

};

function generalInfo(data) {
        var temp = Math.round(data.main.temp-273.15);
        var tempF = Math.round((data.main.temp-273.15)*1.8 + 32);
        $('.name').text(data.name);
        $('.temp').text("Temperature: " + temp + "\xB0C/ " + tempF + "\xB0F");
        var rex = data.weather[0].description.toString().split(' ');
        if (rex.includes('rain')) {
            $('.condition').text(data.weather[0].description + rain);
        } else if (rex.includes('clear')) {
            $('.condition').text(data.weather[0].description + sun);
        } else if (rex.includes('snow')) {
            $('.condition').text(data.weather[0].description + snow);
        } else if (rex.includes('clouds')) {
            $('.condition').text(data.weather[0].description + cloud);
        } else {
            $('.condition').text(data.weather[0].description)
        };
};

//time
var cityArray = ['America/New_York', 'America/Los_Angeles', 'America/Phoenix', 'America/Boise', 'America/Kentucky/Louisville', 'America/Anchorage', 'Pacific/Honolulu']
var cT = ["Alabama","Illinois" , "Iowa","Minnesota","Mississippi" ,"Oklahoma" ,"Texas" ,"Missouri" ,"South Dakota" , "Wisconsin" ,"Kansas","Kentucky","Louisiana","Nebraska","North Dakota"];
var mT = ["Colorado" ,"Idaho","Montana", "Nevada",  "Wyoming" ,"New Mexico" ,"Utah" ,];
var eT = ["Arkansas","Connecticut","Delaware" ,"Ohio","Florida" , "Pennsylvania" ,"Georgia (U.S. state)","Indiana" ,"Maine" ,"Maryland","West Virginia","Massachusetts","Vermont" ,"Virginia" ,"Michigan", "New Hampshire","New Jersey" ,"New York" ,"Rhode Island" ,"South Carolina","Tennessee","North Carolina",]
var pST = ["California","Oregon" , "Washington (state)" ]
function time(){
  var d = new Date();
  for (let j = 0; j < cT.length; j++) {
  for (let k = 0; k < mT.length; k++) {
  for (let l = 0; l < eT.length; l++) {
  for (let p = 0; p < pST.length; p++) {
  if (localStorage.getItem('stateVisited') === 'Arizona' ){
  $('.currenttime').text(d.toLocaleString('en-US', { timeZone: cityArray[2] }))}
  if (localStorage.getItem('stateVisited') === cT[j]){
  $('.currenttime').text(d.toLocaleString('en-US', { timeZone: cityArray[4] }))}
  if (localStorage.getItem('stateVisited') === mT[k]){
    $('.currenttime').text(d.toLocaleString('en-US', { timeZone: cityArray[3] }))}
  if (localStorage.getItem('stateVisited') === eT[l]){
    $('.currenttime').text(d.toLocaleString('en-US', { timeZone: cityArray[0] }))}
  if (localStorage.getItem('stateVisited') === pST[p]){
    $('.currenttime').text(d.toLocaleString('en-US', { timeZone: cityArray[1] }))}
  if(localStorage.getItem('stateVisited') === 'Hawaii'){
    $('.currenttime').text(d.toLocaleString('en-US', { timeZone: cityArray[6] }))}
 if (localStorage.getItem('stateVisited') === 'Alaska'){
    $('.currenttime').text(d.toLocaleString('en-US', { timeZone: cityArray[5] }))}
  }
  }
  }
  }

};

setInterval(time, 1000);

  

      
    
