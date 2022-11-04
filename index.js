// var pic_array = [];
// var i = 0;

// var roll_num = 1;

// document.getElementById("counter");

// function setImage() {

//     for (var i = 1; i <= length; i++) {
//         pic_array.push(i);
//     }

    
// }

// function changeRoll(num) {
//     roll_num = num;
//     img.src = "images/roll " + roll_num + "/image" + pic_array[1] + ".JPG";

// }

var pic_array = [1, 2, 3];
var i = 0;
var roll_num = 1;

function setCounter() {
    document.getElementById("counter").textContent = pic_array[i] + "/" + pic_array[pic_array.length - 1];
}



function changeRoll (num) {
    roll_num = num;
    if (roll_num == 1) {
        pic_array = [1, 2, 3];
    }

    if (roll_num == 2) {
        pic_array = [1]
    }
    img.src = "images/roll " + roll_num + "/image" + pic_array[1] + ".JPG";


}

function leftClick() {
    var img = document.getElementById("current-pic");
    i--;
    if (i < 0) {
        i = pic_array.length - 1;
    }
    img.src = "images/roll " + roll_num + "/image" + pic_array[i] + ".JPG";
    document.getElementById("counter").textContent = pic_array[i] + "/" + pic_array[pic_array.length - 1]
1

    
}

function rightClick() {
    var img = document.getElementById("current-pic");
    i++;
    if (i >= pic_array.length) {
        i = 0;
    }
    img.src = "images/roll " + roll_num + "/image" + pic_array[i] + ".JPG";
    document.getElementById("counter").textContent = pic_array[i] + "/" + pic_array[pic_array.length - 1]

    
}
