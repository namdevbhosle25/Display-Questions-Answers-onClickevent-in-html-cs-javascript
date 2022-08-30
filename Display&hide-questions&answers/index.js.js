// //Assignment 1 Start
// //Get html elements to add and events and data binding

//Create Question Array
var questions = [
    {
        question: "<h4>1. Get two inputs from the user and do arithmetic operations (Addition, Subtraction, Multiplication, Division)</h4>",
        functionName: "assignmentOne(0)",
        answer: `<div> <br>
        <label for="">Num 1 = 45 </label>
        <label for="">Num 2 = 25 </label>
        <p>
            <b>Addition</b> - 70 , 
            <b>Substraction</b> - 20 , 
            <b>Multiplication</b> - 1125 , 
            <b>Division</b> - 1.8 , 
            <b>Modulus</b> - 20 , 
        </p>
    </div>`
    },
    {
        question: "<h4>2. Get two inputs from the user and get the average of the No's.</h4>",
        functionName: "assignmentTwo(1)",
        answer: `<div> <br>
        <label for="">Num 3 = 78 </label>
        <label for="">Num 4 = 24 </label>

        <p>Average - 51</p>
    </div>`
    },
    {
        question: "<h4>3. Get input from the user and find is it even or odd with a function call.</h4>",
        functionName: "assignmentThree(2)",
        answer: `<div> <br>
        <label for="">Num 5 = 67 </label>
        <label for="">Num 6 = 34 </label>

        <p>Even No. - 34 <br> Odd No. - 67</p>
    </div>`
    },
    {
        question: "<h4>4. Find the largest no from two no's which are getting from the user</h4>",
        functionName: "assignmentFour(3)",
        answer: `<div> <br>
        <label for="">arrayItems = ["67", "34", "56", "87"] </label>
        
        <p>Largest No. - 87</p>
    </div>`
    },
    {
        question: "<h4>5. Get two float No's from the user and print multiplication of these no. (print with only 2 decimal points)</h4>",
        functionName: "assignmentFive(4)",
        answer: `<div> <br>
        <label for="">Num 7 = 12.48 </label>
        <label for="">Num 8 = 54.98 </label>      

        <p>Product of 2 float number's - 686.1504</p>
    </div>`
    },
    {
        question: "<h4>6. Get no from the user and find the factorial of the number </h4>",
        functionName: "assignmentSix(5)",
        answer: `<div> <br>
        <label for="">Num 9 = 24 </label>

        <p>Factorial of the Number - 3628800</p>
    </div>`
    },
    {
        question: "<h4>7. Get no from the user and find is it prime no or not </h4>",
        functionName: "assignmentSeven(6)",
        answer: `<div> <br>
        <label for="">array = ["8", "5", "11", "4", "15"]; </label>      

        <p>Prime Numbers - 5,11</p>
    </div>`
    },
    {
        question: "<h4>8. Find the square and cube of a number</h4>",
        functionName: "assignmentEight(7)",
        answer: `<div> <br>
        <label for="">Num 10 = 45 </label>     

        <p>Square - 2025 <br> Cube - 91125</p>
    </div>`
    },
    {
        question: "<h4>9. Get no from the user and find is it positive or negative </h4>",
        functionName: "assignmentNine(8)",
        answer: `<div> <br>
        <label for="">numbers = ["7", "14", "-3", "25", "-65", "57", "-11"] </label>      

        <p>Positive Number = 7,14,25,57 <br> Negative Number = -3,-65,-11 </p>
    </div>`
    },
    {
        question: "<h4>10. Print the multiplication table of 2-10. </h4>",
        functionName: "assignmentTen(9)",
        answer: `<div> <br>
        <label for="">Num 11 = 2 </label>     

        <p>Multiplication table - <br> 2 <br> 4 <br> 6 <br> 8 <br> 10 <br> 12 <br> 14 <br> 16 <br> 18 <br> 20 </p>
    </div>`
    }
];

var html = '';
for (var i = 0; i < questions.length; i++) {
    // console.log(questions[i]);
    html += '<div>' +
        questions[i].question +
        '</div >' +
        '<button ' + 'class = float-end' + 'border-1' + 'bg-info' + 'border-dark' + 'shadow' + ' style = border-radius: 5px;' + ' id = assignmentBtn' + (i + 1) + ' onclick=' + questions[i].functionName + '>Show Answer</button>' +
        '<div ' + 'id = assignmentAns' + (i + 1) + '> </div>';
        
}

document.getElementById('questionList').innerHTML += html;

function assignmentOne(index) {
    var assignmentAnsDiv = document.getElementById('assignmentAns1');
    var assignmentBtn = document.getElementById('assignmentBtn1');

    assignmentBtn.addEventListener('click', function () {
        if (assignmentAnsDiv.style.display == '' || assignmentAnsDiv.style.display == "block") {
            assignmentAnsDiv.style.display = "none";
            assignmentBtn.innerHTML = "Show Answer"
        } else {
            assignmentAnsDiv.innerHTML = questions[index].answer;
            assignmentAnsDiv.style.display = 'block';
            assignmentBtn.innerHTML = "Hide Answer"
        }
    })
}


function assignmentTwo(index) {
    var assignmentAnsDiv = document.getElementById('assignmentAns2');
    var assignmentBtn = document.getElementById('assignmentBtn2');

    assignmentBtn.addEventListener('click', function () {
        if (assignmentAnsDiv.style.display == '' || assignmentAnsDiv.style.display == "block") {
            assignmentAnsDiv.style.display = "none";
            assignmentBtn.innerHTML = "Show Answer"
        } else {
            console.log("index: ", index);
            assignmentAnsDiv.innerHTML = questions[index].answer;
            assignmentAnsDiv.style.display = 'block';
            assignmentBtn.innerHTML = "Hide Answer"
        }
    })
}

function assignmentThree(index) {
    var assignmentAnsDiv = document.getElementById('assignmentAns3');
    var assignmentBtn = document.getElementById('assignmentBtn3');

    assignmentBtn.addEventListener('click', function () {
        if (assignmentAnsDiv.style.display == '' || assignmentAnsDiv.style.display == "block") {
            assignmentAnsDiv.style.display = "none";
            assignmentBtn.innerHTML = "Show Answer"
        } else {
            assignmentAnsDiv.innerHTML = questions[index].answer;
            assignmentAnsDiv.style.display = 'block';
            assignmentBtn.innerHTML = "Hide Answer"
        }
    })
}

function assignmentFour(index) {
    var assignmentAnsDiv = document.getElementById('assignmentAns4');
    var assignmentBtn = document.getElementById('assignmentBtn4');

    assignmentBtn.addEventListener('click', function () {
        if (assignmentAnsDiv.style.display == '' || assignmentAnsDiv.style.display == "block") {
            assignmentAnsDiv.style.display = "none";
            assignmentBtn.innerHTML = "Show Answer"
        } else {
            assignmentAnsDiv.innerHTML = questions[index].answer;
            assignmentAnsDiv.style.display = 'block';
            assignmentBtn.innerHTML = "Hide Answer"
        }
    })
}

function assignmentFive(index) {
    var assignmentAnsDiv = document.getElementById('assignmentAns5');
    var assignmentBtn = document.getElementById('assignmentBtn5');

    assignmentBtn.addEventListener('click', function () {
        if (assignmentAnsDiv.style.display == '' || assignmentAnsDiv.style.display == "block") {
            assignmentAnsDiv.style.display = "none";
            assignmentBtn.innerHTML = "Show Answer"
        } else {
            assignmentAnsDiv.innerHTML = questions[index].answer;
            assignmentAnsDiv.style.display = 'block';
            assignmentBtn.innerHTML = "Hide Answer"
        }
    })
}

function assignmentSix(index) {
    var assignmentAnsDiv = document.getElementById('assignmentAns6');
    var assignmentBtn = document.getElementById('assignmentBtn6');

    assignmentBtn.addEventListener('click', function () {
        if (assignmentAnsDiv.style.display == '' || assignmentAnsDiv.style.display == "block") {
            assignmentAnsDiv.style.display = "none";
            assignmentBtn.innerHTML = "Show Answer"
        } else {
            assignmentAnsDiv.innerHTML = questions[index].answer;
            assignmentAnsDiv.style.display = 'block';
            assignmentBtn.innerHTML = "Hide Answer"
        }
    })
}

function assignmentSeven(index) {
    var assignmentAnsDiv = document.getElementById('assignmentAns7');
    var assignmentBtn = document.getElementById('assignmentBtn7');

    assignmentBtn.addEventListener('click', function () {
        if (assignmentAnsDiv.style.display == '' || assignmentAnsDiv.style.display == "block") {
            assignmentAnsDiv.style.display = "none";
            assignmentBtn.innerHTML = "Show Answer"
        } else {
            assignmentAnsDiv.innerHTML = questions[index].answer;
            assignmentAnsDiv.style.display = 'block';
            assignmentBtn.innerHTML = "Hide Answer"
        }
    })
}

function assignmentEight(index) {
    var assignmentAnsDiv = document.getElementById('assignmentAns8');
    var assignmentBtn = document.getElementById('assignmentBtn8');

    assignmentBtn.addEventListener('click', function () {
        if (assignmentAnsDiv.style.display == '' || assignmentAnsDiv.style.display == "block") {
            assignmentAnsDiv.style.display = "none";
            assignmentBtn.innerHTML = "Show Answer"
        } else {
            assignmentAnsDiv.innerHTML = questions[index].answer;
            assignmentAnsDiv.style.display = 'block';
            assignmentBtn.innerHTML = "Hide Answer"
        }
    })
}

function assignmentNine(index) {
    var assignmentAnsDiv = document.getElementById('assignmentAns9');
    var assignmentBtn = document.getElementById('assignmentBtn9');

    assignmentBtn.addEventListener('click', function () {
        if (assignmentAnsDiv.style.display == '' || assignmentAnsDiv.style.display == "block") {
            assignmentAnsDiv.style.display = "none";
            assignmentBtn.innerHTML = "Show Answer"
        } else {
            assignmentAnsDiv.innerHTML = questions[index].answer;
            assignmentAnsDiv.style.display = 'block';
            assignmentBtn.innerHTML = "Hide Answer"
        }
    })
}

function assignmentTen(index) {
    var assignmentAnsDiv = document.getElementById('assignmentAns10');
    var assignmentBtn = document.getElementById('assignmentBtn10');

    assignmentBtn.addEventListener('click', function () {
        if (assignmentAnsDiv.style.display == '' || assignmentAnsDiv.style.display == "block") {
            assignmentAnsDiv.style.display = "none";
            assignmentBtn.innerHTML = "Show Answer"
        } else {
            assignmentAnsDiv.innerHTML = questions[index].answer;
            assignmentAnsDiv.style.display = 'block';
            assignmentBtn.innerHTML = "Hide Answer"
        }
    })
}