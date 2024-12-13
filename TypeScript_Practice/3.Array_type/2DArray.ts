/* Create a 2D array (matrix) called grid with the values:
  [
    [3, 10, 20],
    [1, 5, 17],
    [37, 13, 19]
  ]

  Update the value at position 13, 5 and 10 to 33, 55 and 100 and log the entire matrix.
*/


const grid: number [][] =   [
    [3, 10, 20],
    [1, 5, 17],
    [37, 13, 19]
  ];


for (let i = 0 ; i < grid.length; i++){
    for (let j = 0; j < grid[i].length; j++) {
if (grid[i][j] === 13) {
    grid[i][j] = 33;
}

if (grid[i][j] === 5) {
    grid[i][j] = 55;
}


if (grid[i][j] === 10) {
    grid[i][j] = 100;
}

    }

}


  console.log(grid);