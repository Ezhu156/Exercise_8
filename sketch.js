// With a partner, do the following:
// take a story from https://www.gutenberg.org/ebooks/search/?sort_order=downloads
// bring the text into P5 as a string
// Use at least 3 expressions to parse the string of text.
// use http://regexr.com/ as guide to formulate your expressions

//For homework finish the above individually to also include:

// visualize your data in some interesting way.
// extra points for movement, procedural aspects or interactivity 
var rawTxt; //
var joined; //
var parsedStory; //
var story; //
var f;
var word;

var beginNum, endNum; //

function preload() {
  rawTxt = loadStrings("data/Fred.txt");
}

function setup() {
  createCanvas(400, 400);
  background(255);
  joined = join(rawTxt, " ");
  beginNum = joined.indexOf("heavy burdens, and griev");
  console.log(beginNum);
  var end = "THE END"
  endNum = joined.indexOf(end);
  console.log(endNum);

  story5 = joined.substring(1400, 66855); //Chpater 1-5
  story7 = joined.substring(22400, 87855); //Chapter 5-7
  story10 = joined.substring(87530, 152985); //Chapter 7-10
  storyapp = joined.substring(152985, 218440); //Chapter 10-Appendix
  storyend = joined.substring(218440, 225133); //Appendix-End

  var cleaner5 = story5.replace(/_/g, '');
  var cleaner7 = story7.replace(/_/g, '');
  var cleaner10 = story10.replace(/_/g, '');
  var cleanerapp = storyapp.replace(/_/g, '');
  var cleanerend = storyend.replace(/_/g, '');
  //console.log(cleaner5);
  //console.log(cleaner7);
  //console.log(cleaner10);
  //console.log(cleanerapp);
  //console.log(cleanerend);

  var fiv = cleaner5.replace(/--/g, '');
  var sev = cleaner7.replace(/--/g, '');
  var ten = cleaner10.replace(/--/g, '');
  var app = cleanerapp.replace(/--/g, '');
  var ending = cleanerend.replace(/--/g, '');

  f = fiv.replace(/,/g, '#');
  var s = sev.replace(/,/g, '#');
  var t = ten.replace(/,/g, '#');
  var a = app.replace(/,/g, '#');
  var e = ending.replace(/,/g, '#');


  console.log(f);
  console.log(s);
  console.log(t);
  console.log(a);
  console.log(e);

  wordf = f.match(/Douglass/g);
  words = s.match(/Douglass/g);
  wordt = t.match(/The/g);
  worda = a.match(/Douglass/g);
  //console.log(wordf)



} //end setup

function draw() {
  noStroke();
  fill(183, 124, 167);
  for (var i = 0; i <= wordf.length; i++) {
    ellipse(random(width), i*25, 10, 10);
  } //end for five
  fill(130, 184, 167);
  for (var j = 0; j <= words.length; j++) {
    ellipse(random(width), j*30, 15, 15);
  } //end for seven
  fill(50, 174, 217);
  for (var k = 0; k <= wordt.length; k++) {
    ellipse(random(width), k*35, 20, 20);
  } //end for ten
  fill(70, 92, 110);
  for (var l = 0; l <= worda.length; l++) {
    ellipse(random(width), l*40, 25, 25);
  } //end for appendix

  
    noLoop();

} //end draw
