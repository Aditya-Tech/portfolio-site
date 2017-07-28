var i = 1;
var current;
const roles = ["\xa0Developer\xa0\xa0", "\xa0Designer\xa0\xa0\xa0", "Entrepreneur"];

$(document).ready(function() {

  //document.onkeydown = getKey;

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
//
// function getKey(e) {
//
//     e = e || window.event;
//
//     if (e.keyCode == '82') {
//         alert("R pressed")
//     }
//
//
// }


function hideSidePanel(cur) {
  console.log("Closed")
  $('#' + cur).fadeOut(function() {
    $('#' + cur + "-panel").slideUp();
  })
}

function showCoursework() {
  current = "#coursework";
  $("#coursework-panel").slideDown(function() {
    $("#coursework").fadeIn();
  });
}

function showAllscriptsInfo() {
  current = "#allscripts";
  $("#allscripts-panel").slideDown(function() {
    $("#allscripts").fadeIn();
  });
}

function showFridaydInfo() {
  current = "#fridayd";
  $("#fridayd-panel").slideDown(function() {
    $("#fridayd").fadeIn();
  });
}

function showProj1() {
  current = "#theglobalredirect";
  $("#theglobalredirect-panel").slideDown(function() {
    $("#theglobalredirect").fadeIn();
  });
}

function showProj2() {
  current = "#knowyouropenings";
  $("#knowyouropenings-panel").slideDown(function() {
    $("#knowyouropenings").fadeIn();
  });
}
