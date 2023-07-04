/*Establishing a for loop that prints numbers from 1 to 100 in console

for (let i = 1; i <= 100; i++){
    console.log(i)
}
*/

/*Establishing a for loop that print numbers from 1 to 100 in console, checks for 3 or 
* multiples of 3 and then prints "Fizz", then checks for 5 or multiples of 5 and then prints
* "Buzz" and checks for multiples of 3 AND 5 and then prints "BuzzFizz"

for (let i = 1; i <= 100; i++){
    if (i % 3===0 && i % 5===0){
        console.log(`FizzBuzz`);
    }
    else if (i % 3===0){
        console.log(`Fizz`);
    }
    else if (i % 5===0){
        console.log(`Buzz`);
    }
    else{
        console.log(i);
    }
}
*/

//Declaring const body to assign HTML's body the custom var for backgroundcolor expressed
//in CSS file.
const body = document.querySelector("body");
    body.style.backgroundColor = "var(--body-bg-color)";

//Declaring const container, for where I'm going to add html elements in.
const container = document.querySelector(".container");

//Adding the html heading into .container.
let heading = document.createElement("h1");
    heading.classList.add("text-center", "text-white", "fw-bold", "mb-5");
    heading.innerHTML = "FizzBuzzDOM";
    container.append(heading);

//Adding the html box for the numbers' div into .container AFTER the before added heading.
let fizzBox = document.createElement("div");
    fizzBox.classList.add("d-flex", "flex-wrap", "align-items-center", "justify-content-center", "g-4", "p-2", "text-center");
    fizzBox.style.gap = "1.5rem"    
    container.append(fizzBox);

//Establishing loop to add in the before added box the numbers' boxes.
for (let i = 1; i <= 100; i++){
    //Here I create all the numbers' boxes with their classes and CSS styles and add them
    //into the numbers' container.
    let number = document.createElement("div");
        number.classList.add("d-flex", "align-items-center", "justify-content-center", "fs-2", "fw-bold")
        number.style.width = "calc((100% / 7) - 1.5rem)";
        number.style.aspectRatio = "1/1";
        number.style.cursor = "pointer";
        number.innerHTML = i.toString();
        fizzBox.append(number);

    //Here I establish the if loop to get all the numbers printed inside their
    //boxes, I check if a number is divisible by 3 or by 5 or by both of them
    //and I substitute it with the corresponding innerHTML text.
    //Then I assign the backgroundcolor for the Fizz, Buzz and FizzBuzz boxes respectively.
    if (i % 3===0 && i % 5===0){
        console.log(`FizzBuzz`);
        number.innerHTML = (`FizzBuzz`);
        number.style.backgroundColor = "rgb(240, 70, 111)";
    }
    else if (i % 3===0){
        console.log(`Fizz`);
        number.innerHTML = (`Fizz`);
        number.style.backgroundColor = "rgb(12, 214, 161)";
    }
    else if (i % 5===0){
        console.log(`Buzz`);
        number.innerHTML = (`Buzz`);
        number.style.backgroundColor = "rgb(255, 209, 102)";
    }
    else{
        console.log(i);
        number.style.backgroundColor = "rgb(19, 137, 178)";
    }
}