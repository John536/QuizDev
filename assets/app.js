
    $(document).ready(function() {


// ***********************************************************
// QUESTION OBJECT
// ***********************************************************

        $("#aniMe").on('click', function () {
            console.log("push it")
            $("#animateTest").animate({height: '300px', opacity: '0.4'}, "slow");

        });




        var obj = [{
                "user": "tester",
                "day": "day1",
                "question": "What is 2 + 2?",
                "answ1": "4",
                "answ2": "5",
                "answ3": "3",
                "answ4": "1",
                "answ5": "6",
                "corrAnsw": "1"
            },

            {
                "user": "tester",
                "day": "day1",
                "question": "What is 2 + 100?",
                "answ1": "4",
                "answ2": "5",
                "answ3": "2",
                "answ4": "1",
                "answ5": "6",
                "corrAnsw": "2"
            },

            {
                "user": "tester",
                "day": "day1",
                "question": "What is 3 BILLION?",
                "answ1": "4",
                "answ2": "5",
                "answ3": "3",
                "answ4": "1",
                "answ5": "6",
                "corrAnsw": "3"
            },

             {
                "user": "tester",
                "day": "day1",
                "question": "What is 4 BILLION?",
                "answ1": "4",
                "answ2": "5",
                "answ3": "3",
                "answ4": "1",
                "answ5": "6",
                "corrAnsw": "4"
            },

            {
                "user": "tester",
                "day": "day1",
                "question": "What is 5 BILLION?",
                "answ1": "4",
                "answ2": "5",
                "answ3": "3",
                "answ4": "1",
                "answ5": "6",
                "corrAnsw": "5"
            }

        ];

        var studentAnswer1 = "";
        var studentAnswer2 = "";
        var studentAnswer3 = "";
        var studentAnswer4 = "";
        var studentAnswer5 = "";

// *********************************************************************
// Question 1 Jquery
// *********************************************************************
            // other questions begin hidden
            $("#containerQuestion2").hide();
            $("#containerQuestion3").hide();
            $("#containerQuestion4").hide();
            $("#containerQuestion5").hide();
            $("#containerDone").hide();

            $("#question1").html("<h1>" + obj[0].question + "</h1>");
            $("#q1Answ1").html("<h4>" + obj[0].answ1 + "</h4>");
            $("#q1Answ2").html("<h4>" + obj[0].answ2 + "</h4>");
            $("#q1Answ3").html("<h4>" + obj[0].answ3 + "</h4>");
            $("#q1Answ4").html("<h4>" + obj[0].answ4 + "</h4>");
            $("#q1Answ5").html("<h4>" + obj[0].answ5 + "</h4>");

            var correctAnswer1 = obj[0].corrAnsw

            $(".question1AnswerClss").on('click', function() {

                studentAnswer1 = $(this).text();

                if (studentAnswer1 == correctAnswer1) {
                    console.log('Q1 RIGHT!')
                    $("#containerQuestion1").toggle();
                    // ADD PUSH CODE TO DB
                    // ADD $ TO SCORE
                    // ADD ANIMATION & POSSIBLE DELAY
                    $("#containerQuestion2").toggle();
                    functQ2();                 
                    
                } else {
                    console.log('Q1 WRONG')
                }

                   

            });


// *********************************************************************
// Question 2 Jquery
// *********************************************************************
      function functQ2 () {
            $("#question2").html("<h1>" + obj[1].question + "</h1>");
            $("#q2Answ1").html("<h4>" + obj[1].answ1 + "</h4>");
            $("#q2Answ2").html("<h4>" + obj[1].answ2 + "</h4>");
            $("#q2Answ3").html("<h4>" + obj[1].answ3 + "</h4>");
            $("#q2Answ4").html("<h4>" + obj[1].answ4 + "</h4>");
            $("#q2Answ5").html("<h4>" + obj[1].answ5 + "</h4>");

            var correctAnswer2 = obj[1].corrAnsw

            $(".question2AnswerClss").on('click', function() {

                studentAnswer2 = $(this).text();

                if (studentAnswer2 == correctAnswer2) {
                    console.log('Q2 RIGHT!')
                    $("#containerQuestion2").toggle();
                    // ADD PUSH CODE TO DB
                    // ADD $ TO SCORE
                    // ADD ANIMATION & POSSIBLE DELAY                    
                    $("#containerQuestion3").toggle();
                    functQ3();
                } else {
                    console.log('Q2 WRONG')
                }
                
            });
                }
// *********************************************************************
// Question 3 Jquery
// *********************************************************************
        function functQ3 () {
            $("#question3").html("<h1>" + obj[2].question + "</h1>");
            $("#q3Answ1").html("<h4>" + obj[2].answ1 + "</h4>");
            $("#q3Answ2").html("<h4>" + obj[2].answ2 + "</h4>");
            $("#q3Answ3").html("<h4>" + obj[2].answ3 + "</h4>");
            $("#q3Answ4").html("<h4>" + obj[2].answ4 + "</h4>");
            $("#q3Answ5").html("<h4>" + obj[2].answ5 + "</h4>");

            var correctAnswer3 = obj[2].corrAnsw

            $(".question3AnswerClss").on('click', function() {

                studentAnswer3 = $(this).text();

                if (studentAnswer3 == correctAnswer3) {
                    console.log('Q3 RIGHT!')
                    $("#containerQuestion3").toggle();
                    // ADD PUSH CODE TO DB
                    // ADD $ TO SCORE
                    // ADD ANIMATION & POSSIBLE DELAY
                    $("#containerQuestion4").toggle();
                    functQ4();                   
                    
                } else {
                    console.log('Q3 WRONG')
                }           

            });
                }
// *********************************************************************
// Question 4 Jquery
// *********************************************************************
            function functQ4 () {
            $("#question4").html("<h1>" + obj[3].question + "</h1>");
            $("#q4Answ1").html("<h4>" + obj[3].answ1 + "</h4>");
            $("#q4Answ2").html("<h4>" + obj[3].answ2 + "</h4>");
            $("#q4Answ3").html("<h4>" + obj[3].answ3 + "</h4>");
            $("#q4Answ4").html("<h4>" + obj[3].answ4 + "</h4>");
            $("#q4Answ5").html("<h4>" + obj[3].answ5 + "</h4>");

            var correctAnswer4 = obj[3].corrAnsw

            $(".question4AnswerClss").on('click', function() {

                studentAnswer4 = $(this).text();

                if (studentAnswer4 == correctAnswer4) {
                    console.log('Q4 RIGHT!')
                    $("#containerQuestion4").toggle();
                    // ADD PUSH CODE TO DB
                    // ADD $ TO SCORE
                    // ADD ANIMATION & POSSIBLE DELAY
                    $("#containerQuestion5").toggle();
                    functQ5();                   
                    
                } else {
                    console.log('Q4 WRONG')
                }
                
            });
                }
// *********************************************************************
// Question 5 Jquery
// *********************************************************************
            function functQ5 () {
            $("#question5").html("<h1>" + obj[4].question + "</h1>");
            $("#q5Answ1").html("<h4>" + obj[4].answ1 + "</h4>");
            $("#q5Answ2").html("<h4>" + obj[4].answ2 + "</h4>");
            $("#q5Answ3").html("<h4>" + obj[4].answ3 + "</h4>");
            $("#q5Answ4").html("<h4>" + obj[4].answ4 + "</h4>");
            $("#q5Answ5").html("<h4>" + obj[4].answ5 + "</h4>");

            var correctAnswer5 = obj[4].corrAnsw

            $(".question5AnswerClss").on('click', function() {

                studentAnswer5 = $(this).text();

                if (studentAnswer5 == correctAnswer5) {
                    console.log('Q5 RIGHT!')
                    $("#containerQuestion5").toggle();
                    // ADD PUSH CODE TO DB
                    // ADD $ TO SCORE
                    // ADD ANIMATION & POSSIBLE DELAY
                    $("#containerDone").toggle();
                
                    function zoo () {

                var animalNum = Math.floor((Math.random() * 10) + 1);    
                var animal;
                
                    if (animalNum === 1) {
                        animal = "assets/puppy-1.jpg";
                    } else if (animalNum === 2) {
                        animal = "assets/puppy-2.jpg";
                    } else if (animalNum === 3) {
                        animal = "assets/puppy-3.jpg";
                    } else if (animalNum === 4) {
                        animal = "assets/puppy-4.jpg";
                    } else if (animalNum === 5) {
                        animal = "assets/puppy-5.jpg";
                    } else if (animalNum === 6) {
                        animal = "assets/puppy-6.jpg";
                    } else if (animalNum === 7) {
                        animal = "assets/puppy-7.jpg";
                    } else if (animalNum === 8) {
                        animal = "assets/puppy-8.jpg";
                    } else if (animalNum === 9) {
                        animal = "assets/puppy-9.jpg";
                    } else if (animalNum === 10) {
                        animal = "assets/puppy-10.jpg";
                    }

                    $("#animalPic").html("<img src='" + animal + "'>")
            }
                zoo();

                } else {
                    console.log('Q5 WRONG')
                }
            });

}






      // closes document ready function
    });
  

// another thing to think about is the date (I know you have day1, but what if they fail to do it on the day you send, 
// then they would be doing Day1 questions on Auust 2 or later)