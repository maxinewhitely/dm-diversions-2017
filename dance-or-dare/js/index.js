var truthArray = new Array("Sprinkler", "Macarena", "Dab", "Bernie", "Stanky Leg", "Pop, Lock, and Drop It","Whip", "Cat Daddy", "Charleston", "Cupid Shuffle", "Electric Slide", "The Worm", "Two Step", "The Foxtrot", "Jersey Turnpike", "White Boy Rave", "Spoon-then-Fork", "Steamboat Willie", "Quadricopter", "Twerk", "Moon Walk", "Jazz Square", "Jazz Hands", "Soulja Boy", "Running Man", "Grapevine", "Square Dance", "PARTNER: Dip", "Gangnam Style", "Shimmy", "Nae Nae", "Whip AND Nae Nae", "PARTNER: Slow Dance", "Your Mom's moves", "Your Dad's moves", "Hoedown Throwdown", "Wobble");
var dareArray = new Array("Lick the floor","Do the macarena for the next three songs","Do a cartwheel","Yodel the entire next song", "Wear all your clothes inside out","Wear your current pair of socks for the rest of the 30 hours", "Leave", "Leave", "Refuse to do anything but burpees in the middle of a dance circle", "Request \'Cotton Eye Joe\'", "Rush the emcee stage", "Switch sweatbands with someone", "Go up to a random group of random dancers and dance with them fpr an entire song");

$('.truth').click(function() {
  $('.ans').slideUp("medium", function() {
    var trulen = truthArray.length;
    var randNum = Math.random();
    var arrNum = Math.round(trulen * randNum) - 1;
    var str = truthArray[arrNum];
    $('.ans p').html( str );
    $('.ans').slideDown();
  });
});

$('.dare').click(function() {
  $('.ans').slideUp("medium", function() {
    var darlen = dareArray.length;
    var randNum = Math.random();
    var arrNum = Math.round(darlen * randNum) - 1;
    var str = dareArray[arrNum];
    $('.ans p').html( str );
    $('.ans').slideDown();
  });
});

$(".rand").click(function() {
  $('.ans').slideUp("medium", function() {
    var darlen = dareArray.length;
    var randNum = Math.random();
    var arrNum = Math.round(darlen * randNum) - 1;
    var dar = dareArray[arrNum];
    var trulen = truthArray.length;
    var randNum = Math.random();
    var arrNum = Math.round(trulen * randNum) - 1;
    var tru = truthArray[arrNum];
    var rps = Math.random();
    if( rps < 0.5 ){
      $('.ans p').html( tru );
      $('.ans').slideDown();
    }else{
      $('.ans p').html( dar );
      $('.ans').slideDown();  
    }
  });
});