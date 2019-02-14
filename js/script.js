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
                return 7;
            }
            else if (q1Result === "blue"){
                return 5;
            }
        }
        function findQues2(q2Result){
            if (q2Result === "burger"){
                return 8;
            }
            else if (q2Result === "pizza"){
                return 4;
            }
        }
        function findQues3(q3Result){
            if (q3Result === "the avengers"){
                return 9;
            }
            else if (q3Result === "creed"){
                return 5;
            }
        }
        function findQues4(q4Result){
            if (q4Result === "tattoo"){
                return 3;
            }
            else if (q4Result === "eyes closed"){
                return 6;
            }
        }
     function placement(totalScore, name) {
        var techplacement;
        var imgSrc;
        if (totalScore > 20) {
            techplacement = "Brady Tutton";
            imgSrc="https://m.media-amazon.com/images/M/MV5BMjNkYzg5NGItYzA2Yi00ODA1LTk5NGItMzEwYzdhMDViZjQ5XkEyXkFqcGdeQXVyMjM3NTI1Nzg@._V1_SY1000_CR0,0,666,1000_AL_.jpg";
        }
        else if (totalScore >16 && totalScore <= 20) {
            techplacement = "Chance Perez";
            imgSrc="https://pbs.twimg.com/media/DBQDIEUV0AEbaNS.jpg";
        }
        else if (totalScore > 11 && totalScore <= 16) {
            techplacement = "Michael Conor";
            imgSrc="https://pbs.twimg.com/media/DICyAvXVYAAK24z.jpg";
        }
        else if (totalScore > 8 && totalScore <= 11) {
            techplacement = "Drew Ramos";
            imgSrc="https://cdn1.edgedatg.com/aws/v2/abc/BoyBand/person/2048461/133031f8182422898ce2047c6b1fa78d/320x180-Q90_133031f8182422898ce2047c6b1fa78d.jpg";
        }
         else if (totalScore <= 8) {
            techplacement = "Sergio Calderon";
            imgSrc="https://cdn1.edgedatg.com/aws/v2/abc/BoyBand/person/2048472/6661dff68891e0878a442d09b92a7365/320x180-Q90_6661dff68891e0878a442d09b92a7365.jpg";
        }
        displayPlacement(name, techplacement, imgSrc);
    }
    function displayPlacement(name, person, imgSrc){
        $(".result").html("<h1>Congrats " + name + " you end up with " + person + "<img src= " + imgSrc + ">" + "</h1>");
        $(".result").css("height", "20%");
        $(".result").css("width", "20%");
    }


});
