// Event listeners for homepage (index.html).

//flag buttons
$('.eventBtn').on("click", function(event) {
  var stateName = event.target.value;
  if (!stateName){
    return
  }
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

  var stateArray = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];
  var flagArray =
["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Alabama.svg/2560px-Flag_of_Alabama.svg.png",
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
"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Wyoming.svg/2560px-Flag_of_Wyoming.svg.png"];

  for (let i = 0; i < stateArray.length; i++) {

    if (stateArray[i] == localStorage.getItem(stateArray[i])) {
      var stateContainer = $('#searchHistory')
      .append(
          ($('<div>').addClass('passport').addClass('uk-display-inline'))
        .append(
          ($('<p>').text(stateArray[i]).addClass('passportItem'))
        )
        .append(
          $('<img>').attr('src', flagArray[i]).addClass('uk-border-pill')
        )
      )
    };
  }

  $('.clearBtn').on('click', clearFunction);
  function clearFunction (){
    localStorage.clear();
    $('.passport').children().remove();
    // location.reload()
  }
