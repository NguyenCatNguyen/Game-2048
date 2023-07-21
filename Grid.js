
const grid_size = 4;
const cell_size = 20;
const cell_gap = 2;


export default class Grid {
    constructor(gridElement){
        gridElement.setProperty("--grid-size", grid_size);
        gridElement.setProperty("--cell-size", `${cell_size}vmin`);
        gridElement.setProperty("--cell-gap", `${cell_gap}vmin`)
    }
}