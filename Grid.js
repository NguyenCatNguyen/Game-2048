
const GRID_SIZE = 4
const CELL_SIZE = 20
const CELL_GAP = 2


export default class Grid {
    constructor(gridElement){
        gridElement.setProperty("--grid-size",GRID_SIZE);
        gridElement.setProperty("--cell-size",`${CELL_SIZE}vmin`);
        gridElement.setProperty("--cell-gap",`${CELL_GAP}vmin`);
        createCellElements(gridElement);
    }
}
function createCellElements(gridElement){
    
}
