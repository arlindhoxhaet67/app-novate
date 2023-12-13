/*
Filename: ComplexCode.js

Description: This complex JavaScript code demonstrates an efficient implementation of a dynamic programming algorithm called the Longest Common Subsequence (LCS). The LCS algorithm finds the longest subsequence that is common to two given strings. It utilizes memoization and recursion to optimize the process, resulting in a highly sophisticated solution.

By: [Your Name]
Date: [Current Date]
*/

// Lengthy strings for testing
const string1 = "XMJYAUZ";
const string2 = "MZJAWXU";

// Utility function to find the longest common subsequence
function findLCS(string1, string2) {
  const m = string1.length;
  const n = string2.length;

  // Create the memoization table
  const memo = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

  // Compute the LCS using memoization and recursion
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (string1[i - 1] === string2[j - 1]) {
        memo[i][j] = memo[i - 1][j - 1] + 1;
      } else {
        memo[i][j] = Math.max(memo[i - 1][j], memo[i][j - 1]);
      }
    }
  }

  // Backtrack to find the actual LCS
  let lcs = "";
  let i = m, j = n;
  while (i > 0 && j > 0) {
    if (string1[i - 1] === string2[j - 1]) {
      lcs = string1[i - 1] + lcs;
      i--;
      j--;
    } else if (memo[i - 1][j] > memo[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  return lcs;
}

// Find LCS and print the result
console.log("Longest Common Subsequence: " + findLCS(string1, string2));
console.log("Done!");