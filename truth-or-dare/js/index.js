var truthArray = new Array("When was the last time you brushed your teeth?","When was the last time you took a shower?","Have you ever gone for more than two days without showering and when?", "Where was the strangest place you~ve had to pee?", "What would be the title of your memoir?", "How much of your $400 is from your parents?", "What's your preferred deodorant?", "Describe your ideal shower's architecture");
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