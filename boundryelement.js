function printBoundaryElements(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
  
    for (let i = 0; i < m; i++) {
      console.log(matrix[0][i]);
    }
  
    for (let i = 0; i < m; i++) {
      console.log(matrix[n - 1][i]);
    }
  
    for (let i = 0; i < n; i++) {
      console.log(matrix[i][0]);
    }
  
    for (let i = 0; i < n; i++) {
      console.log(matrix[i][m - 1]);
    }
  }
  
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [3, 2, 1]
  ];
  
  printBoundaryElements(matrix);
  