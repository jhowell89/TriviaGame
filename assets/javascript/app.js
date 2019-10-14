
var intervalID;

function startTimer(duration, display) {
  
    var timer = duration;
    var minutes;
    var seconds;
    
    intervalID=setInterval(function () {
        console.log(intervalID);
       
        if (timer < 0) {
            console.log(intervalID);
            clearInterval(intervalID);
            console.log(timer);
            timer = duration;
            console.log(duration);
            alert("Sorry you lost, try again!");
        
           
        } else {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
            console.log(timer);
        }

        timer--;
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 3,
        display = document.querySelector("#time");
    startTimer(fiveMinutes, display);
};



var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    [ "Who was the first actor as James Bond?", "Daniel Craig", "Pierce Brosnan", "Sean Connery", "c" ],
    [ "Which state was founded first?", "New York", "California", "Delaware", "C" ],
    [ "What was the name of the first airline?", "Delag", "American West", "Spirit", "A" ],
    [ "How many states have a city named Nashville?", "3","6", "8", "C" ],
    [ "Who invented donuts?", "Clark Dunkin", "Hanson Gregory", "Reinmann family", "B" ],
    [ "What is the most common coffee chain?", "Tim Hortons", "Caribou Coffee", "Starbucks?", "C" ],
    [ "How many letters are in the spanish alphabet?", "24", "27", "21", "B" ],
    [ "How Many time zones are in the world?", "4", "17", "more than 24", "C" ],
    [ "Where is the Statue Of Liberty located?", "New York", "New Jersey", "Ellis Island", "c" ],
    [ "What is the name of a baby eagle?", "foal", "bird", "fledgling", "C" ],
           
];

function _(x){
    return document.getElementById(x);
}

function renderQuestion(){
    test = _("test");
    if(pos >= questions.length){
        test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
        _("test_status").innerHTML = "Test Completed";
        pos = 0;
        correct = 0;
        return fales; 
    }
    _("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    test.innerHTML = "<h3>"+question+"</h3>";
    test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
    test.innerHTML += "<button onclick='checkAnswer() '>Submit Answer</button>";
}

function checkAnswer(){
   choices = document.getElementsByName("choices");
   for(var i=0; i<choices.length; i++){
       if(choices[i].checked){
           choice = choices[i].value;
       }
   }
   if(choice == questions[pos][4]){
       correct++;
   }
   pos++;
   renderQuestion();
}

window.addEventListener("load", renderQuestion, false);
