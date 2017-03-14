var lines = [
  "SEEN: A Bro tank",
  "SEEN: Gatorade consumption via a beer funnel",
  "SEEN: Strange fruit",
  "SEEN: One dancer with 3+ bandages",
  "HEARD: Someone bickering with DM staff",
  "SONG: \'Closer\'",
  "SEEN: A swimsuit-only outfit",
  "SEEN: Vomit",
  "SMELLED: Vomit",
  "SEEN/DANCE: Dab",
  "SONG: \'Mr. Brightside\'",
  "SEEN: Dancer hiding under the stage",
  "HEARD: A consistent complainer (6+ per hour)",
  "DO IT: Get photo'd by Justin Barbin",
  "SEEN: Unknown celebrity on screen",
  "SONG: \'Mr. Brightside\' played 2x",
  "SONG: \'Mr. Brightside\' played 3x",
  "SEEN: Morty Schapiro dancing",
  "SMELLED: Sweaty socks",
  "SEEN: Dance floor kiss",
  "SEEN: GoPro mounted on head",
  "SEEN: GoPro mounted on chest",
  "DO IT: Sweat",
  "DO IT: Touch someone else's sweat",
  "SEEN: Tears",
  "SEEN/DANCE: Macarena",
  "SEEN/DANCE: Jersey Turnpike",
  "SEEN/DANCE: Cartwheel",
  "SONG: \'The National Anthem\'",
  "HEARD: \'I knew this band before they were cool\'",
  "DO IT: Lose your water bottle",
  "DO IT: Return a lost water bottle to its correct owner",
  "EAT: A dozen Twizzlers",
  "EAT: At least one serving of every snack offered",
  "DO IT: Steal more snacks than allotted serving",
  "DO IT: Have a guest bring you contraband",
  "HEARD: \'I literally can't even\'",
  "SEEN: Adult dabbing"
];
var shuffle = function(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
};

var insertToCard = function(array) {
  var slot = 25;
  while (slot) {
    $("label:nth-child(" + slot + ") .mark span").text(array[slot + 1]);
    slot--;
  }
};

$(document).ready(function() {
  var shuffledLines = shuffle(lines);
  insertToCard(shuffledLines); // #hellaswag
  $("#seed").text(Math.floor(Math.random() * 100000000)); // TODO
});


var bingo = document.body;

localStorage.setItem('board', JSON.stringify(bingo));

var board = JSON.parse(localStorage.getItem('board'));