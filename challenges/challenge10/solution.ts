function checkJump(heights: number[]) {
  let top = Math.max(...heights);
  let topIndex: number = heights.indexOf(top);

  return (
    heights[heights.length - 1] !== top &&
    heights[0] !== top &&
    heights
      .slice(1, topIndex + 1)
      .every((height, index) => height >= heights[index]) &&
    heights
      .slice(topIndex + 1, heights.length + 1)
      .every((height, index) => height <= heights[index + topIndex])
  );
}
