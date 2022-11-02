// Flood Fill


// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

// You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

// Return the modified image after performing the flood fill.

 
// Example 1:

// Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
// Output: [[2,2,2],[2,2,0],[2,0,1]]
// Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
// Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.
// Example 2:

// Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
// Output: [[0,0,0],[0,0,0]]
// Explanation: The starting pixel is already colored 0, so no changes are made to the image. 

// Constraints:

// m == image.length
// n == image[i].length
// 1 <= m, n <= 50
// 0 <= image[i][j], color < 216
// 0 <= sr < m
// 0 <= sc < n

// Solution 1: Recursion
// Time Complexity: O(n)
// Space Complexity: O(n)
// function floodFill(image, sr, sc, newColor) {
//     const oldColor = image[sr][sc];
//     if (oldColor === newColor) return image;
//     const dfs = (i, j) => {
//         if (i < 0 || i >= image.length || j < 0 || j >= image[0].length || image[i][j] !== oldColor) return;
//         image[i][j] = newColor;
//         dfs(i + 1, j);
//         dfs(i - 1, j);
//         dfs(i, j + 1);
//         dfs(i, j - 1);
//     }
//     dfs(sr, sc);
//     console.log(image);
//     return image;
// }

// Solution 2: Iteration
// Time Complexity: O(n)
// Space Complexity: O(n)
function floodFill(image, sr, sc, color) {
    let originalColor = image[sr][sc];
    if (originalColor === newColor ) return image;
    dps(image,sr,sc,originalColor,newColor);
    return image;
 };
 var dps = function(image,i,j,originalColor, newColor)
 {
    if (i < 0 || i >= image.length || j < 0 || j>=image[i].length ||      image[i][j] !== originalColor)
    return;
    if (image[i][j] === originalColor)
      image[i][j] = newColor;
  
    dps(image,i-1, j,originalColor,newColor);
    dps(image,i+1, j,originalColor,newColor);
    dps(image,i, j-1,originalColor,newColor);
    dps(image,i, j+1,originalColor,newColor);
 }
// examples
floodFill([[1,1,1],[1,1,0],[1,0,1]])// 1, 1, 2
floodFill([[0,0,0],[0,0,0]])// 0, 0, 0

