const container = document.querySelector('.container');

const career =['YouTube',"web-Developer","Freelancer","Instructor"];

let careerIndex = 0;

let charIndex =0;

updateText();

function updateText(){
    // first increment
    charIndex++;
    // then show
    container.innerHTML =`<h1>I am ${career[careerIndex].slice(0,1) === 'I'? "an":"a"} ${career[careerIndex].slice(0,charIndex)}</h1>` ;

    // and then check it
    // when charIndex  rich to  it's end 
    if(charIndex === career[careerIndex].length){
        careerIndex++
        charIndex = 0;
    }
    if(careerIndex === career.length)careerIndex=0
    // and use it
    setTimeout(updateText,100)
}

