//set variable for the json datas
let sandwich = JSON.parse(sandwiches);
let kalorien = JSON.parse(fries);
// console.log(sandwich);

document.getElementById("demo").innerHTML = 
    `<div>
         <p>
            My favorite sandwich is a ${sandwich.sandwich} which has approximately ${sandwich.calories} calories, along with it I enjoy eating ${kalorien.fries_size} which have about ${kalorien.calories} calories.
         </p>
    </div>`
