/**
 * The code below adds an image to the page, sorta.
 * That image doesn't look right on the page.
 *
 * Look at the code in scramble.js and use your knowledge
 * of arrays to rebuild the array before writeAscii() 
 * is called.
 */

(function() {

  console.log(typeof artArray);
    for (let i=0; i < artArray.length; i++){
      
      if (artArray[i] === 'lol'.repeat(40)){
        artArray.splice(i, 3)
        console.log(artArray[i]);
      }
    }

    writeAscii(artArray);

})();


