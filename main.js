$(document).ready(function(){
  var quote;
  var author;

  function getNewQuote(){
    $.ajax({
      url: "http:api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType:"jsonp",
      data:{
        method:"getQuote",
        lang: "en",
        format: "jsonp",
      },
      success: function (response){
        quote = response.quoteText;
        author = response.quoteAuthor;
        if (author){
          $("#author").text(+ author)
        }else{
          $("#author").text("anonymous")
        };
        $("#quote").text(quote);
      }
    });
  };


  getNewQuote();

  $(".get-quote").on("click", function(event){
    event.preventDefault();
    getNewQuote();
    function setColor(el) {
    el.colorIdx = el.colorIdx || 0;
    el.style.backgroundColor = backCol[el.colorIdx++ % backCol.length];
}
  });

  $(".share-quote").on("click", function(even){
    event.preventDefault();
    window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote+" - "+author));
  });
});
