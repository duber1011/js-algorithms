/*
Challenge name: Merge Intervals
Description: 
Given a collection of intervals, merge all overlapping intervals.

Example 1:
Input: [1,3],[2,6],[8,10],[15,18]

Output: [1,6],[8,10],[15,18]

Example 2:
Input: [1,3],[4,10],[6,12][11,18]
Output:  [1,3],[4,18]
*/

function mergeIntervals(intervals) {
  if (intervals.length === 0) return [];

  // Step 1: Sort intervals by the start time
  intervals.sort((a, b) => a[0] - b[0]);

  // Step 2: Merge intervals
  const merged = [];
  for (let i = 0; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const lastMergedInterval = merged[merged.length - 1];

    if (!lastMergedInterval || lastMergedInterval[1] < currentInterval[0]) {
      merged.push(currentInterval);
    } else {
      lastMergedInterval[1] = Math.max(
        lastMergedInterval[1],
        currentInterval[1]
      );
    }
  }

  return merged;
}

// Test cases
console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
console.log(
  mergeIntervals([
    [1, 3],
    [4, 10],
    [6, 12],
    [11, 18],
  ])
);
console.log(
  mergeIntervals([
    [1, 4],
    [4, 5],
  ])
);
console.log(mergeIntervals([[1, 3]]));
console.log(mergeIntervals([]));

module.exports = mergeIntervals;
