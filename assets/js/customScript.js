document.addEventListener("DOMContentLoaded",function(){
    typeSentence("Rajan Jha","#feature-text");

    async function typeSentence(sentence, eleRef, delay = 200) {
        const letters = sentence.split("");
        let i = 0;
        while(i < letters.length) {
          await waitForMs(delay);
          $(eleRef).append(letters[i]);
          i++
        }
        return;
      }
});
function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }