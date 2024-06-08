// Define the desired number of questions
const desiredNumberOfQuestions = 10; // Change this to the desired number of questions

// Selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// If startQuiz button clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}

// If exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}

// If continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuestions(); //calling showQuestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function
}

let timeValue = 15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
let usedQuestions = []; // Array to keep track of used question indices

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// If restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    usedQuestions = []; // Reset used questions
    showQuestions(); //calling showQuestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}

// If quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// If Next Que button clicked
next_btn.onclick = ()=>{
    if(usedQuestions.length < questions.length){ //if used questions are less than total questions
        que_numb++; //increment the que_numb value
        showQuestions(); //calling showQuestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue); //calling startTimerLine function
        timeText.textContent = "Time Left"; //change the timeText to Time Left
        next_btn.classList.remove("show"); //hide the next button
    }else{
        clearInterval(counter); //clear counter
        clearInterval(counterLine); //clear counterLine
        showResult(); //calling showResult function
    }
}

// Getting questions and options from array
function showQuestions() {
    const que_text = document.querySelector(".que_text");
    
    // Check if all questions have been used
    if (usedQuestions.length === questions.length) {
        usedQuestions = []; // Reset the array if all questions have been used
    }

    // Generate a random index that hasn't been used
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * questions.length);
    } while (usedQuestions.includes(randomIndex));

    
    // Add the random index to the list of used questions
    usedQuestions.push(randomIndex);

    // Get the selected question
    const selectedQuestion = questions[randomIndex];

    // Create HTML elements for the selected question and options
    let que_tag = '<span>' + que_numb + ". " + selectedQuestion.question + '</span>';
    
    // If the question includes an image, add it to the question
    if (selectedQuestion.imgSrc) {
        que_tag += '<div class="question-image"><img src="' + selectedQuestion.imgSrc + '" alt="Question Image" class="question-image"></div>';
    }

    let option_tag = '<div class="option"><span>' + selectedQuestion.options[0] + '</span></div>'
        + '<div class="option"><span>' + selectedQuestion.options[1] + '</span></div>'
        + '<div class="option"><span>' + selectedQuestion.options[2] + '</span></div>'
        + '<div class="option"><span>' + selectedQuestion.options[3] + '</span></div>';

    que_text.innerHTML = que_tag; // Adding new span tag inside que_tag
    option_list.innerHTML = option_tag; // Adding new div tag inside option_tag
    
    const option = option_list.querySelectorAll(".option");
    

    // Set onclick attribute to all available options
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
    
}

// Creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

// If user clicked on option
function optionSelected(answer){
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[usedQuestions[usedQuestions.length - 1]].answer; //getting correct answer from array
    const allOptions = option_list.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(let i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(let i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>You Score <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span>You Score <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>You Score only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}



function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}

function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time; // changing the value of timeCount with time value
        time--; // decrement the time value
        if (time < 9) { // if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; // add a 0 before time value
        }
        if (time < 0) { // if timer is less than 0
            clearInterval(counter); // clear counter
            timeText.textContent = "Time Off"; // change the time text to time off
            const allOptions = option_list.children.length; // getting all option items
            let correcAns = questions[usedQuestions[usedQuestions.length - 1]].answer; // getting correct answer from array
            for (let i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent == correcAns) { // if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); // adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); // adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for (let i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled"); // once user selects an option then disable all options
            }
            next_btn.classList.add("show"); // show the next button if user selected any option
        }
    }
}

function updateDateTime() {
    const now = new Date();

    // Format the date
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = now.toLocaleDateString(undefined, dateOptions);

    // Format the time in 12-hour format
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;

    const time = hours + ':' + minutesStr + ' ' + ampm;

    // Display the date and time
    document.getElementById('date').textContent = date;
    document.getElementById('time').textContent = time;
}

// Update the date and time every minute
setInterval(updateDateTime, 60000);
// Initial call to display immediately on load
updateDateTime();






document.addEventListener('keydown', function(event) {
    // Disable F12
    if (event.keyCode == 123) {
        event.preventDefault();
    }
    // Disable Ctrl+Shift+I
    if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
        event.preventDefault();
    }
    // Disable Ctrl+Shift+J
    if (event.ctrlKey && event.shiftKey && event.keyCode == 74) {
        event.preventDefault();
    }
    // Disable Ctrl+U
    if (event.ctrlKey && event.keyCode == 85) {
        event.preventDefault();
    }
});