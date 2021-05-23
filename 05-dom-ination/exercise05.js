/**
 * Given the HTML below, please make the following changes with javascript – don't change any HTML!:
 *
 * 1. Any time someone clicks on the title at the top "feed template,"
 *    make the color of the "feed template" text change from black to red
 *    and then from red to black when clicked again.
 *
 * 2. The links on the side of the page – "your name," "section 1," "section 2," etc. –
 *    hide every odd-numbered link in the menu.
 *
 * 3. Change every instance of the word "bacon" on the page to be "LASER VISION"
 *
 * 4. Delete the last two posts in the middle section (they have a CSS class "post")
 *
 * 5. Remove the images in the right column
 *
 * BONUS: add a special surprise inside!
 *    
 */

(function () {
    let heading = document.querySelector("h1");

    // Function #1 changing heading from black to red.
    heading.addEventListener("click", function() {
        console.log("heading clicked");
        
        if(heading.style.color !== "red"){
          heading.style.color="red";
        } else if (heading.style.color === "red"){
          heading.style.color="black";
        }
      });


})();