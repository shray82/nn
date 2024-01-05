var i = 0;
var txt1 =
  "Hey jay  <<               Now I wan't to say something really special to you. <<<                So , Please read everything carefully...!                                                                           > I know i am really silly sometimes actually all the time < You'r always a most Special person to me.  <<                  As the days goes < i am falling deeper n deeper for you....! <<                           I don't know the reason why your thoughts always resonates inside my mind 24x7...!                                                     > Everything about you is always special for me...!                     << I feel really scared just thinking that you will get angry with me or get upset or Sometimes you get angry and stop talking to me.
...!                                                     > i will never hurt you not even in dreams i promise i will always stand by your side no matter what....!                    << Now You are the only person whom I love the most in the world ....!                                                             >I Love U <SweetHeart.....! |                  <<<<    by your wife";
var speed = 55;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
