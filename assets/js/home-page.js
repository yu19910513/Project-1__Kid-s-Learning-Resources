// Event listeners for homepage (index.html).
  //flag buttons
  $('.eventBtn').on("click", function(event) {
    var stateName = event.target.value;
    console.log(event.target.text);
    localStorage.setItem('stateVisited', stateName);
    localStorage.setItem(stateName, stateName);
    window.location.href = 'page2.html';
  })

  //dropdown list
  $('a').on("click", function(event) {
    var stateName = event.target.text;
    console.log(event.target.text);
    localStorage.setItem('stateVisited', stateName);
    localStorage.setItem(stateName, stateName);
  });


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
    "Georgia",
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
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
    ];

  for (let i = 0; i < stateArray.length; i++) {

    if (stateArray[i] == localStorage.getItem(stateArray[i])) {
      $('.passport').append($('<div>').text(stateArray[i]))
    }


  }
