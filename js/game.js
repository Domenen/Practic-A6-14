const numDivs = 36;
const maxHits = 10;
const btn = $('.btn');
let hits = 0;
let firstHitTime = 0;




$('.btn').click(init)
 




function round() {
      let divSelector = randomDivId();
      $(divSelector).addClass("target");
      $('.target').text(hits)
      $('.row').removeClass('d-none')
      $('#infoGame').addClass('d-none')
  if (hits === maxHits) {
    endGame();
  }
}

times = {
  firstHitTime: null,
  start() {
      this.firstHitTime = Date.now();
  },
  end() {
      return Math.floor(Date.now() - this.firstHitTime)
  },
}

function endGame() {
  let totalPlayedMillis = times.end();
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $("#total-time-played").text(totalPlayedSeconds);
  $("#win-message").removeClass("d-none");
  $('.row').addClass('d-none');
  $('.btn').text('В начало')
}

function handleClick(event) {
  if ($(event.target).hasClass("target")) {
    hits = hits + 1;
    $('.target').text('')
    $('.target').removeClass("target")
    $(".miss").removeClass("miss");
    round();
  } else {
    $(event.target).addClass("miss")
    hits = hits - 1; 
    round();
  }
  }
  
function init() {
  times.start()
  round();
  $(".game-field").click(handleClick);
  $(".btn").click(function() {
    location.reload();
  })
}

// $(document).ready(init); 
