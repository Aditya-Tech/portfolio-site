var i = 1;
const roles = ["\xa0developer\xa0\xa0", "\xa0designer\xa0\xa0\xa0", "entrepreneur"];

$(document).ready(function() {

  setInterval(function() {
    $("#role").fadeOut(function() {
      $(this).text(roles[i]);
      i++;
      if (i === 3) {
        i = 0;
      }
    }).fadeIn();
  }, 2000)

});
