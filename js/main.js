$(document).ready(function() {

  $("a").on("click", function() {
    if(this.hash) {
      var hash = this.hash.substr(1);
      var $toElement = $("a[name="+hash+"]");
      var toPosition = $toElement.position().top - 59;
      $("html,body").animate({
        scrollTop : toPosition
      }, 1000);
      return false;
    }
  });

  if(location.hash) {
    var hash = location.hash;
    window.scroll(0,0);
    $("a[href="+hash+"]").click();
  }
  
});