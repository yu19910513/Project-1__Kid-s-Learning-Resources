var stateName;
var flowerName;
var butterflyName;
var birdName;
var mammalName;
var treeName;
var capitalName;
var nickName;
var index = 0;
var imageNumber = 0;
var noOfsymbols = 7;
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

function getInfo(stateName, fact) {
  getStateFlower(stateName, symbols[0]);
  getStateButterfly(stateName, symbols[1]);
  getStateBird(stateName, symbols[2]);
  getStateMammal(stateName, symbols[3]);
  getStateTree(stateName, symbols[4]);
  getStateCapital(stateName, symbols[5]);
  getStateNickName(stateName, symbols[6]);
  getStateHistory(stateName);
  //can add donnas || mine getImage funtion and api key from here
}

function getStateFlower(stateName, fact) {
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
      console.log(data);
      const parser = new DOMParser();
      const htmlString = data.parse.text["*"];
      const doc1 = parser.parseFromString(htmlString, "text/html");
      var wikiEl = doc1.querySelector(".wikitable");
      var rows = wikiEl.querySelectorAll("tr");
      for (i = 1; i < rows.length; i++) {
        if (rows[i].cells[0].textContent.trim() === stateName) {
          console.log("#########################################");
          flowerName = rows[i].cells[1].textContent;
          stateFlowerEl.textContent = flowerName;
          console.log("flower Name", flowerName);
        }
      }
    });
}

function getStateButterfly(stateName, fact) {
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
          console.log("#########################################");
          butterflyName = rows[i].cells[1].textContent;
          stateButterflyEl.textContent = butterflyName;
          console.log("butterfly", butterflyName);
        }
      }
    });
}

function getStateBird(stateName, fact) {
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
          console.log("#########################################");
          birdName = rows[i].cells[1].textContent;
          stateBirdEl.textContent = birdName;
          console.log("bird", birdName);
        }
      }
    });
}

function getStateMammal(stateName, fact) {
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
          console.log("#########################################");
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
          console.log("#########################################");
          treeName = rows[i].cells[1].textContent;
          stateTreeEl.textContent = treeName;
          console.log("trees", treeName);
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
      var wikiEl = doc1.querySelector(
        "body > div > table.wikitable.plainrowheaders.sortable"
      );
      console.log(wikiEl);
      var rows = wikiEl.querySelectorAll("tr");
      for (i = 1; i < rows.length; i++) {
        if (rows[i].cells[0].textContent.trim() === stateName) {
          console.log("#########################################");
          capitalName = rows[i].cells[1].textContent;
          stateCapitalEl.textContent = capitalName;
          console.log("Capital", capitalName);
        }
      }
    });
}

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
          //   var nickName = nickName.replace(/\([^()]*\)/g, "");
          var regex = "(\\[.*\\])|(\".*\")|('.*')|(\\(.*\\))";
          var output = RegEx.replace(nickName, regex, "");
          console.log(output);
          stateNickNameEl.textContent = nickName;
          console.log("NickName", nickName);
        }
      }
    });
}

// function getImages(statename) {
//   mystring = statename + " monuments";
//   fetch(
//     "https://pixabay.com/api/?key=&q=" +
//       encodeURIComponent(mystring) +
//       "&image_type=photo"
//   )
//     .then(function (response) {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         alert("Error: " + response.statusText);
//       }
//     })
//     .then(function (data) {
//       console.log(data);
//       //   var photoEl = document.querySelector(".photo");
//       var loopCounter = 0;
//       if (parseInt(data.totalHits) > 0) {
//         if (parseInt(data.totalHits) < 5) {
//           loopCounter = parseInt(data.totalHits);
//         } else {
//           loopCounter = noOfImages;
//         }
//         console.log("loopCounter val", loopCounter);
//         for (var i = 0; i < loopCounter; i++) {
//           var image1 = document.createElement("img");
//           imageUrl = data.hits[i].webformatURL;
//           image1.setAttribute("src", imageUrl);
//           photoEl.append(image1);
//           var text = data.hits[i].tags;
//           console.log(text);
//         }
//       } else {
//         console.log("No hits");
//       }
//     });
// }

function getStateHistory(stateName) {
  //   var country = localStorage.getItem("StateVisited");
  url =
    "http://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" +
    stateNAME +
    "&format=json&origin=*";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var title = data.query.search[0].title;
      var pageId = data.query.search[0].pageid;
      fetch(
        "http://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=" +
          title +
          "&exintro=1&origin=*"
      )
        .then(function (responseAgain) {
          return responseAgain.json();
        })
        .then(function (dataAgain) {
          $(".info").append(dataAgain.query.pages[pageId].extract);
          $("#header").text(title);
        });
    });
}

function startCollectingData() {
  console.log("here on second page");
  stateName = localStorage.getItem("StateVisited");
  console.log("@@@@@@@@@@@@@@@@@@", stateName);
  getInfo(stateName, symbols[index]);
}

startCollectingData();

var container = document.querySelector(".container");

container.addEventListener("click", function (event) {
  var element = event.target;

  if (element.matches(".box")) {
    var state = element.getAttribute("data-state");

    // Use an if statement to conditionally render the number on the card
    if (state === "hidden") {
      // If the card is clicked while the state is "hidden", we set .textContent to the number
      element.textContent = element.dataset.number;
      // Using the dataset property, we change the state to visible because the user can now see the number
      element.dataset.state = "visible";
    } else {
      // 'Hide' the number by setting .textContent to an empty string
      element.textContent = "";
      // Use .setAttribute() method
      element.setAttribute("data-state", "hidden");
    }
  }
});
