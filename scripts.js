var board;
var score = 0;
var row= 4;
var col= 4;

// When the page loads we call this set game funtion
window.onload = function() {
    board = [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ]


    for (let r = 0; r < row; r++){
        for (let c = 0; c < col; c++){
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            
        }
    }



}