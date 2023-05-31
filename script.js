
function alertEx(){
    alert("Hello World");
}

function promptEx(){
    let name= prompt('Enter your name');
}

function confirmEx(){
    let save= confirm("Save this to your file?");
}


function ifEx(){
    let age= prompt("Enter your age");

    if (age < 18) {
        alert('You are teenager');
    }
}

function ifElseEx(){

    let age= prompt("Enter your age");

    if (age < 18) {
        alert('You are still young');

}
    else{
        alert("You are in legal age");
    }
}


function ifElseIfElseEx(){

    let age= prompt("Enter your age");

    if (age < 18) {
        alert('You are still young');

}
    else if(age > 18 && age < 30){
        alert("You are a teenager")
    }

    else{
        alert("You are an adult");
    }


}


function forLoop(){
    let x= 1;

    for (x; x < 5; x++){
        alert(x);
    }
}

function whileLoop(){
    let x= 1;

    while (x < 5){
        alert(x);
        x++;
    } 
}

function doWhileLoop(){
    let x= 1;

    do {
        alert(x);
        x++;
    } while(x< 4);

}

function push(){
    let blackpink = ['Lisa', 'Jennie', 'Jisoo', 'Rosie'];
    blackpink.push("Lisa");
    document.getElementById("output").innerHTML = blackpink;
}

function pop(){
    let blackpink = ['Lisa', 'Jennie', 'Jisoo', 'Rosie'];
    blackpink.pop();
    document.getElementById("output").innerHTML = blackpink;
}
function shift(){
    let blackpink = ['Lisa', 'Jennie', 'Jisoo', 'Rosie'];
    blackpink.shift();
    document.getElementById("output").innerHTML = blackpink;
}
   
function unshift(){
    let blackpink = ['Lisa', 'Jennie', 'Jisoo', 'Rosie'];
    blackpink.unshift("Lisa");
    document.getElementById("output").innerHTML = blackpink;
    
}

let students = [];


function add(){
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    students.push([name, age]);
    display();
}
function pushbutton(){
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    students.push([name, age]);
    display();
}


function popbutton(){
    students.pop();
    display();
}

function unshiftbutton(){
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    students.unshift([name, age]);
    display();
}

function shiftbutton(){
    students.shift();
    display();
}


 function display(){
    let uList = document.querySelector("#studentsList");
    uList.innerHTML = "";
    for (let i = 0; i < students.length; i++) {
        if(i < 10){
        let newList = document.createElement('li');
        newList.appendChild(document.createTextNode(students[i]));
        uList.appendChild(newList);
        }else{
            alert("You Reach The Limit")
        }
    }
}