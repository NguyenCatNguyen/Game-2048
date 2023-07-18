var board;
var score = 0;
var row= 4;
var col= 4;

// When the page loads we call this set game funtion
window.onload = function() {
    setGame();
}

// This function sets the game up
function setGame() {
    board = [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,8,2,0]
    ]
    for (let r = 0; r < row; r++){
        for (let c = 0; c < col; c++){
            // <div id="0-0" class="tile"></div>
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            let num = board[r][c];
            updateTile(tile, num); //update the tile content
            document.getElementById("board").append(tile);


        }
    }
 
}

// This function updates the tile
function updateTile(tile, num) {
    tile.innerText = ""; // set the text to empty before we update it
    tile.classList.value = ""; //clear the classlist
    tile.classList.add("tile"); //add the tile class back
    if (num > 0){
        tile.innerText = num;
        if (num <= 4096) {
            tile.classList.add("x" + num.toString());
        }else{
            tile.classList.add("x8192")
        }
    }
}

document.addEventListener("keyup", (e)=> {
    if (e.code == "ArrowLeft"){
        slideLeft();
    }
}) 


/*
Plan for slide
1. Clear the zeros [2,2,2,0] => [2,2,2]
2. Merge the tiles [2,2,2] => [4,0,2]
3. Clear the zeros [4,0,2] => [4,2]
4. Put the zeros back [4,2] => [4,2,0,0]
*/

// This function clears the zeros
function filterZero(row) {
    // filter() method uses a function to test each element in an array.
    return row.filter(num => num !=0); //create a new array without zeroes
}


function slide(row) {
    //1. Clear the zeros
    row = filterZero(row);
    // 
    for(let i=0; i<row.length-1; i++){
        if(row[i] == row[i+1]){
            row[i] *= 2;
            row[i+1] = 0;
            score += row[i];
        }
    }
    
}




function slideLeft() {
    for (let r = 0; r < row; r++){
        let row = board[r];
        row = slide(row);
        board[r]= row;
         
    }

}