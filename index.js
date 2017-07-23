var i = 1;
var current = "#intro"
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

function hideCurrent(cb) {
  $(current).fadeOut(cb);
}

function hideSidePanel() {
  $("#side-panel").slideUp(function() {
    $("#closed-side-panel").show();
  });
}

function openSidePanel() {
  $("#closed-side-panel").fadeOut(function() {
    $("#side-panel").show();
  });
}

function showCoursework() {
  hideCurrent(function() {
    current = "#coursework";
    $(current).fadeIn();
  })
}

function showAllscriptsInfo() {
  hideCurrent(function() {
    current = "#allscripts";
    $(current).fadeIn();
  })
}

function showFridaydInfo() {
  hideCurrent(function() {
    current = "#fridayd";
    $(current).fadeIn();
  })
}

function showIntro() {
  hideCurrent(function() {
    current = "#intro";
    $(current).fadeIn();
  })
}

function showProj1() {
  hideCurrent(function() {
    current = "#theglobalredirect";
    $(current).fadeIn();
  })
}

function showProj2() {
  hideCurrent(function() {
    current = "#knowyouropenings";
    $(current).fadeIn();
  })
}
