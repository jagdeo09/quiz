/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var q4Result = $("#question4").val();
        var totalScore;
        totalScore = findQues1(q1Result);
        totalScore = totalScore + findQues2(q2Result);
        totalScore = totalScore + findQues3(q3Result);
        totalScore = totalScore + findQues4(q4Result);
        console.log(totalScore);
        placement(totalScore, name);
    });
        function findQues1(q1Result){
            if (q1Result === "red"){
                return 2;
            }
            else if (q1Result === "blue"){
                return 3
            }
        }
        function findQues2(q2Result){
            if (q2Result === "burger"){
                return 3;
            }
            else if (q2Result === "pizza"){
                return 4;
            }
        }
        function findQues3(q3Result){
            if (q3Result === "the avengers"){
                return 3;
            }
            else if (q3Result === "creed"){
                return 5;
            }
        }
        function findQues4(q4Result){
            if (q4Result === "tattoo"){
                return 4;
            }
            else if (q4Result === "eyes closed"){
                return 2;
            }
        }
     function placement(totalScore, name) {
        var techplacement;
        var imgSrc;
        if (totalScore > 20) {
            techplacement = "Brady Tutton";
            imgSrc="https://media.giphy.com/media/oeH2Qj4fLoZy0/giphy.gif";
        }
        else if (totalScore >16 && totalScore <= 20) {
            techplacement = "Chance Perez";
            imgSrc="https://media.giphy.com/media/l41lX2yEwhnD6QrLi/giphy.gif";
        }
        else if (totalScore > 11 && totalScore <= 16) {
            techplacement = "Michael Conor";
            imgSrc="https://media.giphy.com/media/zWyv9xtsEfXQQ/giphy.gif";
        }
        else if (totalScore > 8 && totalScore <= 11) {
            techplacement = "Drew Ramos";
            imgSrc="https://media.giphy.com/media/RUvPszdoBXWIU/giphy.gif";
        }
         else if (totalScore == 8) {
            techplacement = "Sergio Calderon";
            imgSrc="https://media.giphy.com/media/xUPGcmrdRkCaZ5qZ2M/giphy.gif";
        }
        displayPlacement(name, techplacement, imgSrc);
    }
    function displayPlacement(name, person, image){
        $(".result").html("<div>Hi</div>");
    }


});
