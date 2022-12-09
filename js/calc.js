// var equation=document.getElementsByClassName('box2')[0];
var ans = [];
var question = [];

// var historyDiv = document.getElementById('history');
function setval(name) {
    // alert();
    if (document.getElementsByClassName('box2')[0].value == 0)
        document.getElementsByClassName('box2')[0].value = name;
    else
        document.getElementsByClassName('box2')[0].value += name;
}
function clr() {
    document.getElementsByClassName('box1')[0].value = "";
    document.getElementsByClassName('box2')[0].value = 0;
    

}

function getAns() {
    showval();
    question.push(document.getElementsByClassName('box2')[0].value + " = ")
    console.log("Questions", question)
    document.getElementsByClassName('box2')[0].value = eval(document.getElementsByClassName('box2')[0].value);

    // ans.push(eval(document.getElementsByClassName('box2')[0].value));
    // console.log("Answers : ".ans);
    // console.log(document.getElementsByClassName('box2')[0].value);
    ans.push(document.getElementsByClassName('box2')[0].value)
    console.log("answers", ans)
}

function showval() {
    document.getElementsByClassName('box1')[0].value = document.getElementsByClassName('box2')[0].value + " = "
}


function showHistory() {


    if(document.getElementById('history').style.visibility=='hidden'){
        document.getElementById('history').style.visibility='visible'
    }
    else{
        document.getElementById('history').style.visibility='hidden'
    }
    document.getElementById('his').innerHTML = "";
    // document.getElementById('his').innerHTML += '<div class="head">' + "History" + '</div>'
    for (let i = 0; i < ans.length; i++) {
        // document.getElementById('history').innerText=ans[i] 
        document.getElementById('his').innerHTML += '<div class="qts"> ' + question[i] + + ans[i] + ' </div>';
        // '<div class="qts1">'+ ans[i] + '</div>'
        // document.getElementById('his').innerHTML+='<div class="qts1">'+ ans[i] + '</div>'
        console.log(question[i], ans[i])

    }
}

function clearHistory() {
    var status = confirm("Are You Sure You Want To Delete History");
    if (status) {
        document.getElementById('his').innerHTML = "";
        ans = [];
        question = [];
    }
    else
    {}
}
