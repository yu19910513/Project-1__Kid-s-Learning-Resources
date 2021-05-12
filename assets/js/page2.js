const key = [
    "4f3fa4ee51b57a31dc240195cd979ba1",
    "1522b7bd712aa3fcccd430112139b31a",
    "7e7cded75b6a5d1f862b806445fcdb8d",
    "c5be3c45e5c1817e08df7b85bde33f8f",
    "0ed5b024fd86bbe5a3c6c3309a286f6d",
    "404537c8760e2e7f80c1b34a2acb6068",
    "d7f7c2c1ba064f157eaee8448656ff33",
    "9ca49688ce7c1f16cee367b0c71e4a3f",
    "f336774a2e3724c443c558b879f4e3b9",
    "2d91c3e3ea90f1082db08374e4aaaeac"
  ];
  const random = Math.floor(Math.random() * key.length);



  // Event listener for page 2 Go Back button
$(".gobackbtn").on("click", function () {
    window.location.href = "index.html";
  });

  //Variables for page 2
  var stateName = "";
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
  var timeInterval;

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
  startCollectingData();

  // Functions for page 2 -
  function startCollectingData() {
    stateName = localStorage.getItem("stateVisited");
    if (!stateName) {
      window.location.href = "index.html";
    }
    getInfo(stateName, symbols[index]);
  }

  function getInfo() {
    stateName = localStorage.getItem("stateVisited");
    getStateCapital(stateName, symbols[5]);
    getStateFlower(stateName, symbols[0]);
    getStateButterfly(stateName, symbols[1]);
    getStateBird(stateName, symbols[2]);
    getStateMammal(stateName, symbols[3]);
    getStateTree(stateName, symbols[4]);
    getStateNickName(stateName, symbols[6]);
    getStateSummary(stateName);
    getStateImages(stateName);
  }

  function getStateSummary() {
    stateName = localStorage.getItem("stateVisited");
    if (stateName == "Washington") {
      url =
        "http://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Washington(state)&format=json&origin=*";
      fetch(url)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          var title = data.query.search[0].title;
          var pageId = data.query.search[0].pageid;
          fetch(
            "http://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts|pageimages&iilimit=50&titles=" +
              title +
              "&exintro=1&origin=*"
          )
            .then(function (responseAgain) {
              return responseAgain.json();
            })
            .then(function (dataAgain) {
              var paragraph1 = dataAgain.query.pages[pageId].extract;
              var n = paragraph1.search(/z* is/);
              paragraph1= stateName + paragraph1.substring(n);
              $(".info").append(paragraph1);
              $(".header").text(title.split("(state)").join(" "));
            });
        });
    } else if (stateName == "Georgia") {
      url =
        "http://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Georgia(U.S.state)&format=json&origin=*";
      fetch(url)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          var title = data.query.search[0].title;
          var pageId = data.query.search[0].pageid;
          fetch(
            "http://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts|pageimages&iilimit=50&titles=" +
              title +
              "&exintro=1&origin=*"
          )
            .then(function (responseAgain) {
              return responseAgain.json();
            })
            .then(function (dataAgain) {
              var paragraph1 = dataAgain.query.pages[pageId].extract;
              var n = paragraph1.search(/z* is/);
              paragraph1= stateName + paragraph1.substring(n);
              $(".info").append(paragraph1);
              $(".header").text(title.split("(U.S. state)").join(" "));
            });
        });
    } else if (stateName == "New York") {
        url =
        "http://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=NewYork(state)&format=json&origin=*";
      fetch(url)
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
        var title = data.query.search[0].title;
        var pageId = data.query.search[0].pageid;
        fetch(
          "http://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts|pageimages&iilimit=50&titles=" +
          title +
          "&exintro=1&origin=*"
        )
        .then(function (responseAgain) {
          return responseAgain.json();
        })
        .then(function (dataAgain) {
          var paragraph1 = dataAgain.query.pages[pageId].extract;
          var n = paragraph1.search(/z* is/);
          paragraph1= stateName + paragraph1.substring(n);
          $(".info").append(paragraph1);
          $(".header").text(title.split("(state)").join(" "));
        });
      });
    } else {
      url =
        "http://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" +
        stateName +
        "&format=json&origin=*";
      fetch(url)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          var title = data.query.search[0].title;
          var pageId = data.query.search[0].pageid;
          fetch(
            "http://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts|pageimages&iilimit=50&titles=" +
              title +
              "&exintro=1&origin=*"
          )
            .then(function (responseAgain) {
              return responseAgain.json();
            })
            .then(function (dataAgain) {
                var paragraph1 = dataAgain.query.pages[pageId].extract;
                var n = paragraph1.search(/z* is/);
                paragraph1= stateName + paragraph1.substring(n);
                $(".info").append(paragraph1);
                $(".header").text(title);

            });
        });
    }
  }

  function getStateImages() {
    const url2 = `https://pixabay.com/api?q=${stateName + "+-jones+-michael+-flag+-map+-oz"}&key=21438663-60940dce2a3b8f288719617da&lang=en&image_type=all&orientation=horizontal&safesearch=true&per_page=10&category=nature,science,education,places,animals,sports,buildings`;

    // this fetch pulls in images from pixabay.com/api.
    fetch(url2)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const statePictureListEl = document.getElementById("statePictureList");
        if (data.hits.length > 0) {
          removeAllChildNodes(statePictureListEl);
          for (let i = 0; i < data.hits.length; i++) {
            const imgEl = document.createElement("img");
            imgEl.setAttribute("src", data.hits[i].webformatURL);
            imgEl.setAttribute("alt", `State of ${stateName} picture`);
            imgEl.setAttribute("uk-cover", "");
            const listItemEl = document.createElement("li");
            listItemEl.appendChild(imgEl);
            statePictureListEl.appendChild(listItemEl);
          }
        }
      });
  }

  // https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  // functions for fun facts on page 2
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
        const parser = new DOMParser();
        const htmlString = data.parse.text["*"];
        const doc1 = parser.parseFromString(htmlString, "text/html");
        var wikiEl = doc1.querySelector(".wikitable");
        var rows = wikiEl.querySelectorAll("tr");
        for (i = 1; i < rows.length; i++) {
          if (rows[i].cells[0].textContent.trim() === stateName) {
            flowerName = rows[i].cells[1].textContent;
            var regex = new RegExp("(\\[.*\\])|(\".*\")|('.*')|(\\(.*\\))", "g");
            flowerName = flowerName.replace(regex, "");
            stateFlowerEl.textContent = flowerName;
            return;
          }
        }
        stateFlowerEl.textContent = "This state does not have a state flower";
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
            butterflyName = rows[i].cells[1].textContent;
            var regex = new RegExp("(\\[.*\\])|(\".*\")|('.*')|(\\(.*\\))", "g");
            butterflyName = butterflyName.replace(regex, "");
            stateButterflyEl.textContent = butterflyName;
            return;
          }
        }
        stateButterflyEl.textContent = "This state does not have a state butterfly";
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
            birdName = rows[i].cells[1].textContent;
            var regex = new RegExp("(\\[.*\\])|(\".*\")|('.*')|(\\(.*\\))");
            birdName = birdName.replace(regex, "");
            stateBirdEl.textContent = birdName;
            return;
          }
        }
        stateBirdEl.textContent = "This state does not have a state bird";
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
            if (rows[i].cells[1].textContent) {
              mammalName = rows[i].cells[1].textContent;
            } else if (rows[i].cells[2].textContent) {
              mammalName = rows[i].cells[2].textContent;
            } else if (rows[i].cells[3].textContent) {
              mammalName = rows[i].cells[3].textContent;
            } else {
              mammalName = "This state does not have a state mammal";
            }
            var regex = new RegExp("(\\[.*\\])|(\".*\")|('.*')|(\\(.*\\))", "g");
            mammalName = mammalName.replace(regex, "");
            stateMammalEl.textContent = mammalName;
            return;
          }
        }
        stateMammalEl.textContent = "This state does not have a state mammal";
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
            treeName = rows[i].cells[1].textContent;
            var regex = new RegExp("(\\[.*\\])|(\".*\")|('.*')|(\\(.*\\))", "g");
            treeName = treeName.replace(regex, "");
            stateTreeEl.textContent = treeName;
            return;
          }
        }
        stateTreeEl.textContent = "This state does not have a state tree";
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
        var rows = wikiEl.querySelectorAll("tr");
        for (i = 1; i < rows.length; i++) {
          if (rows[i].cells[0].textContent.trim() === stateName) {
            capitalName = rows[i].cells[1].textContent;
            stateCapitalEl.textContent = capitalName;
          }
          if (stateName == "Maine") {
            weatherZip('04330');
          } else if (stateName == "Kentucky") {
            weatherZip('40603');
          } else if (stateName == "New Mexico") {
            weatherZip('87501');
          }
          else if (stateName == "New Mexico") {
            weatherZip('87501');
          }
      }
      weather(capitalName);
      getTimeZone(capitalName);
    });
  }

  function weatherZip(zipcode) {
    var url = "https://api.openweathermap.org/data/2.5/weather?zip="+zipcode+",us&appid=" + key[random];
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        generalInfo(data);
        var timeZone = data.timezone;
        getTime(timeZone);
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
          var regex = new RegExp("(\\[.*\\])|(\".*\")|('.*')|(\\(.*\\))");
          var stateNameWithoutSubscript = rows[i].cells[0].textContent
            .trim()
            .replace(regex, "");
          if (stateNameWithoutSubscript === stateName) {
            var listItemOne = doc1.querySelector(
              `tbody > tr:nth-child(${
                i + 1
              }) > td:nth-child(2) > ul > li:nth-child(1)`
            );
            nickName = listItemOne.textContent;
            var regex = new RegExp("(\\[.*\\])|(\".*\")|('.*')|(\\(.*\\))", "g");
            nickName = nickName.replace(regex, "");
            stateNickNameEl.textContent = nickName;
            return;
          }
        }
        stateNickNameEl.textContent = "This state does not have a state nickname";
      });
  }

  // weather data for page 2

  var rain = "🌧";
  var sun = "☀️";
  var cloud = "🌥";
  var snow = "🌨";

  function weather() {

    var url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    capitalName +
    "&appid=" + key[random];
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        generalInfo(data);
      });
  }

  function generalInfo(data) {
    var temp = Math.round(data.main.temp - 273.15);
    var tempF = Math.round((data.main.temp - 273.15) * 1.8 + 32);
    $(".name").text(data.name);
    $(".temp").text(temp + "\xB0C/ " + tempF + "\xB0F");
    var rex = data.weather[0].description.toString().split(" ");
    if (rex.includes("rain")) {
      $(".condition").text(data.weather[0].description + rain);
      $(".weatherEl").css("background-image", "url('assets/images/rain.gif')");
    } else if (rex.includes("clear")) {
      $(".condition").text(data.weather[0].description + sun);
      $(".weatherEl").css("background-image", "url('assets/images/sun.gif')");
    } else if (rex.includes("snow")) {
      $(".condition").text(data.weather[0].description + snow);
      $(".weatherEl").css("background-image", "url('assets/images/snow.gif')");
    } else if (rex.includes("clouds")) {
      $(".condition").text(data.weather[0].description + cloud);
      $(".weatherEl").css("background-image", "url('assets/images/Clouds.gif')");
    } else {
      $(".condition").text(data.weather[0].description);
    }
  }

  //time

  function getTimeZone(capitalName) {
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + capitalName + '&appid=' + key[random];
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        generalInfo(data);
        var timeZone = data.timezone;
        getTime(timeZone);
    if (timeInterval) {
        clearInterval(timeInterval);
      }
      timeInterval = setInterval(function() {
        getTime(timeZone);
      }, 30 * 1000);
      });
  }

  function getTime(timeZone) {
    if (timeZone == "-18000") {
      var utc = -5; //"America/Chicago/central daylight"
      var currentTime = moment().utcOffset(utc).format("MMMM Do YYYY, h:mm a");
      $(".currenttime").text(currentTime);
    }
    if (timeZone == "-21600") {
      var utc = -6; //"America/Denver/mountain daylight
      var currentTime = moment().utcOffset(utc).format("MMMM Do YYYY, h:mm a");
      $(".currenttime").text(currentTime);
    }
    if (timeZone == "-25200") {
      var utc = -7; //"America/Los_Angeles/pacific daylight
      var currentTime = moment().utcOffset(utc).format("MMMM Do YYYY, h:mm a");
      $(".currenttime").text(currentTime);
    }
    if (timeZone == "-14400") {
      var utc = -4; //"America/New_York/eastern daylight
      var currentTime = moment().utcOffset(utc).format("MMMM Do YYYY, h:mm a");
      $(".currenttime").text(currentTime);
    }
    if (timeZone == "-36000") {
      var utc = -10; //Pacific/Honolulu/standard
      var currentTime = moment().utcOffset(utc).format("MMMM Do YYYY, h:mm a");
      $(".currenttime").text(currentTime);
    }
    if (timeZone == "-28800") {
      var utc = -8; //America/Anchorage/alaska daylight
      var currentTime = moment().utcOffset(utc).format("MMMM Do YYYY, h:mm a");
      $(".currenttime").text(currentTime);
    }
  }

  // https://www.w3schools.com/graphics/canvas_clock_start.asp
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var radius = canvas.height / 2;
  ctx.translate(radius, radius);
  radius = radius * 0.9;
  setInterval(drawClock, 1000);

  function drawClock() {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
  }

  function drawFace(ctx, radius) {
    var grad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "skyblue";
    ctx.fill();
    grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, "#333");
    grad.addColorStop(0.5, "white");
    grad.addColorStop(1, "#333");
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius * 0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
  }

  function drawNumbers(ctx, radius) {
    var ang;
    var num;
    ctx.font = radius * 0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (num = 1; num < 13; num++) {
      ang = (num * Math.PI) / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius * 0.85);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius * 0.85);
      ctx.rotate(-ang);
    }
  }

  function drawTime(ctx, radius) {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour = hour % 12;
    hour =
      (hour * Math.PI) / 6 +
      (minute * Math.PI) / (6 * 60) +
      (second * Math.PI) / (360 * 60);
    drawHand(ctx, hour, radius * 0.5, radius * 0.07);
    //minute
    minute = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60);
    drawHand(ctx, minute, radius * 0.8, radius * 0.07);
    // second
    second = (second * Math.PI) / 30;
    drawHand(ctx, second, radius * 0.9, radius * 0.02);
  }

  function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
  }

    var flagArray = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Alabama.svg/2560px-Flag_of_Alabama.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Alaska.svg/2560px-Flag_of_Alaska.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arizona.svg/2560px-Flag_of_Arizona.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arkansas.svg/2560px-Flag_of_Arkansas.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_California.svg/2560px-Flag_of_California.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Flag_of_Colorado.svg/2560px-Flag_of_Colorado.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Flag_of_Connecticut.svg/1920px-Flag_of_Connecticut.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Flag_of_Delaware.svg/2560px-Flag_of_Delaware.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Florida.svg/2560px-Flag_of_Florida.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Georgia_%28U.S._state%29.svg/2560px-Flag_of_Georgia_%28U.S._state%29.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Hawaii.svg/2880px-Flag_of_Hawaii.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Idaho.svg/1920px-Flag_of_Idaho.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Illinois.svg/2560px-Flag_of_Illinois.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Flag_of_Indiana.svg/2560px-Flag_of_Indiana.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Iowa.svg/2560px-Flag_of_Iowa.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Kansas.svg/2560px-Flag_of_Kansas.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Flag_of_Kentucky.svg/2880px-Flag_of_Kentucky.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Flag_of_Louisiana.svg/2560px-Flag_of_Louisiana.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Flag_of_Maine.svg/1920px-Flag_of_Maine.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Maryland.svg/2560px-Flag_of_Maryland.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Massachusetts.svg/2560px-Flag_of_Massachusetts.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Flag_of_Michigan.svg/2560px-Flag_of_Michigan.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Minnesota.svg/2560px-Flag_of_Minnesota.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_Mississippi.svg/2560px-Flag_of_Mississippi.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Flag_of_Missouri.svg/2560px-Flag_of_Missouri.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_Montana.svg/2560px-Flag_of_Montana.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Flag_of_Nebraska.svg/2560px-Flag_of_Nebraska.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Flag_of_Nevada.svg/2560px-Flag_of_Nevada.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_New_Hampshire.svg/2560px-Flag_of_New_Hampshire.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_New_Jersey.svg/2560px-Flag_of_New_Jersey.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_New_Mexico.svg/2560px-Flag_of_New_Mexico.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_New_York.svg/2880px-Flag_of_New_York.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Flag_of_North_Carolina.svg/2560px-Flag_of_North_Carolina.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Flag_of_North_Dakota.svg/1920px-Flag_of_North_Dakota.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Ohio.svg/2560px-Flag_of_Ohio.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Flag_of_Oklahoma.svg/2560px-Flag_of_Oklahoma.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Oregon.svg/2560px-Flag_of_Oregon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Pennsylvania.svg/2560px-Flag_of_Pennsylvania.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Rhode_Island.svg/1920px-Flag_of_Rhode_Island.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Flag_of_South_Carolina.svg/2560px-Flag_of_South_Carolina.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_South_Dakota.svg/2560px-Flag_of_South_Dakota.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Tennessee.svg/2560px-Flag_of_Tennessee.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Texas.svg/2560px-Flag_of_Texas.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Utah.svg/2560px-Flag_of_Utah.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Vermont.svg/2560px-Flag_of_Vermont.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Virginia.svg/2560px-Flag_of_Virginia.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Washington.svg/2560px-Flag_of_Washington.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Flag_of_West_Virginia.svg/2880px-Flag_of_West_Virginia.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Flag_of_Wisconsin.svg/2560px-Flag_of_Wisconsin.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Wyoming.svg/2560px-Flag_of_Wyoming.svg.png",
  ];

  var stateArray = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia (U.S. state)",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington (state)",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];
  for (let a = 0; a < stateArray.length; a++) {
    if (localStorage.getItem("stateVisited") == stateArray[a]) {
    $(".flagImage").attr("src", flagArray[a]);
    } else if (localStorage.getItem("stateVisited") == "Washington") {
      $(".flagImage").attr("src", flagArray[46]);
    } else if (localStorage.getItem("stateVisited") == "Georgia") {
      $(".flagImage").attr("src", flagArray[9]);
    } else if (localStorage.getItem("stateVisited") == "Maine") {
      $(".flagImage").attr("src",flagArray[19]);
    }
    }
