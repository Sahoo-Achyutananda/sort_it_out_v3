function selectionSort(arr) {
  const array = [...arr];
  const n = array.length;
  let history = [];
  let comparisons = 0,
    swaps = 0;

  for (let i = 0; i < n; i++) {
    let min_index = i;

    for (let j = i + 1; j < n; j++) {
      comparisons++;
      history.push({
        arrayState: [...array],
        comparisons: comparisons,
        swaps: swaps,
        comparedIndices: [min_index, j],
        description: `Searching for index with the Minimum Value ... `,
      });

      if (array[min_index] > array[j] && min_index != j) {
        min_index = j;
        history.push({
          arrayState: [...array],
          comparisons: comparisons,
          swaps: swaps,
          comparedIndices: [min_index, j],
          description: `Found new index with Minimum Value - ${min_index} with value ${array[min_index]}`,
        });
      }
    }

    if (min_index !== i) {
      [array[min_index], array[i]] = [array[i], array[min_index]];
      comparisons++;
      history.push({
        arrayState: [...array],
        comparisons: comparisons,
        swaps: swaps,
        comparedIndices: [min_index, i],
        description: `Swapped arr[${min_index}](${array[min_index]}) and arr[${i}](${array[i]})`,
      });
    }
  }

  return history;
}

export default selectionSort;
