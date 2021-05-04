// Event listeners for homepage (index.html).
  //flag buttons
  $('.eventBtn').on("click", function(event) {
    var stateName = event.target.value;
    console.log(event.target.text);
    localStorage.setItem('stateVisited', stateName)
    window.location.href = 'page2.html';
  })

  //dropdown list
  $('a').on("click", function(event) {
    var stateName = event.target.text;
    console.log(event.target.text);
    localStorage.setItem('stateVisited', stateName)
  });