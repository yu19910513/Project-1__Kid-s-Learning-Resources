function onChange() {
localStorage.setItem('item', $('.selector').val());
window.location.href = 'page2.html';
};

input();

function input (){
    var country = localStorage.getItem('item');
    url = "http://en.wikipedia.org/w/api.php?action=query&list=search&srsearch="+country+"&format=json&origin=*";
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
            $('#header').text(title)
          })
        })
}


        $('button').on("click", function() {
            localStorage.setItem('item', $(this).val())
            console.log($(this).val());
            window.location.href = 'page2.html';
        })
