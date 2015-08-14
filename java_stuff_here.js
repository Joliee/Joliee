Master_array = [
  ["The Egyptians came up with the idea of a toilet seat",false],
  ["The amount of blood a mosquito takes in an average bite could fill a water bottle",true],
  ["Cat's urine glows under a blacklight",false],
  ["Burps are contagious",false],
  ["A hippo can open its mouth wide enough to fit a 4 foot tall child inside",true],
  ["A toothpick is the object most often choked on by Americans",true],
  ["It takes a lobster approximately seven years to grow to be one pound",true],
  ["A woman once gave birth to a baby with naturally blue hair",false],
  ["Toilet water is usually mint flavored",false],
  ["Reindeer like to eat bananas",true],
  ["A jellyfish is 95 percent water",true],
  ["An ostrich's eye is bigger than its brain",true],
  ["A cow produces 200 times more gas a day than a person",true],
  ["Chewing gum while peeling onions will keep you from crying",true],
  ["The only sound that doesn't echo is a duck's quack",true],
  ["The dinosaurs were killed off by a series of aliens attacking the earth",false],
  ["Chocolate never goes bad",false],
  ["During your lifetime, you'll eat about 60,000 pounds of food",true],
  ["12 newborns will be given to the wrong parents daily",true],
  ["Cat fur is an ice cream flavor in China",false],
  ["A fossil, believed to be of a unicorn was discovered in Scotland around 1950",false],
  ["Eating cupcakes burns calories",false],
  ["The oldest person to ever live was a cyborg Japanese woman who lived to be 160 years old",false],
  ["A jumbo jet uses 4,000 gallons of fuel to take off",true],
  ["Humans have 4 distinct zones on their tongue to perceive bitter, sour, salty, and sweet flavor",false],
  ["When the Cubs last won the world series, women did not have the right to vote in the United States",true],
  ["A penny dropped from a skyscraper could crack a skull",false],
  ["Men think about sex every 7-10 minutes",false],
  ["People swallow an average of 8 spiders a year in their sleep",false],
  ["Earth would be uninhabitable if it shifted 1 foot closer to the sun",false],
  ["The closest US state to Africa is Maine",true],
  ["Gum takes 7 years to pass through your body",false],
  ["Humans only use 10% of their brain",false],
  ["Pineapples grow from plants out of the ground",true]

  
]
//console.log(thing);
var rand = Master_array[Math.floor(Math.random() * Master_array.length)];
console.log(rand);

$(document).ready(function(){
   var quotes = Master_array,
       randno = quotes[Math.floor( Math.random() * quotes.length )];
 
  $('.starttext').text((rand[0]));
  console.log(rand[1]);
   if (rand[1]===true){
     $("#truebutton a").attr("href","correct.html")
     $("#falsebutton a").attr("href","final_project/bad_page.html")
   }
   else{
     $("#truebutton a").attr("href","final_project/bad_page.html")
     $("#falsebutton a").attr("href","correct.html")
  }
    
});