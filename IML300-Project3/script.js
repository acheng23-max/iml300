$(document).ready(function () {

  // 1. Street: click on objects

  $(".object").click(function () {

    let message = $(this).attr("data-message");

    $("#street-text").hide();
    $("#street-text").text(message);
    $("#street-text").fadeIn(300);

  });


  // 2. Choice: choose a direction

  $(".choice").click(function () {

    let message = $(this).attr("data-message");

    $(".choice").removeClass("selected");
    $(this).addClass("selected");

    $("#choice-text").text(message);

    $("#choice-next").removeClass("hidden");

  });


  // 3. Cage: try to escape

  let clicks = 0;

  $("#escape-button").click(function () {

    clicks = clicks + 1;

    if (clicks === 1) {

      $("#cage-text").text("I want to leave.");

    } else if (clicks === 2) {

      $("#cage-text").text("Why can't I leave?");

    } else if (clicks >= 3) {

      $("#cage-text").text(
        "I used to choose where to go. Now I cannot."
      );

      $("#escape-button").text("You have no choice");
      $("#escape-button").prop("disabled", true);

      $("#cage-next").removeClass("hidden");

    }

  });


  // 4. Ending: choose a care action

  $(".care-button").click(function () {

    let message = $(this).attr("data-message");

    $("#care-text").text(message);

  });


  // 5. Copy the website link

  $("#share-button").click(function () {

    let link = new URL("index.html", window.location.href).href;

    if (navigator.clipboard && window.isSecureContext) {

      navigator.clipboard.writeText(link).then(function () {

        $("#share-text").text("Link copied!");

      }).catch(function () {

        window.prompt("Copy this link:", link);

      });

    } else {

      window.prompt("Copy this link:", link);

    }

  });

});