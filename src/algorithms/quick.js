function partition(arr, l, r, history, stats) {
  let pivot = arr[r];
  let i = l - 1;

  for (let j = l; j < r; j++) {
    stats.comparisons++;
    history.push({
      arrayState: [...arr],
      comparisons: stats.comparisons,
      swaps: stats.swaps,
      comparedIndices: [r, j],
      description: `Comparing arr[${r}](${arr[r]}) & arr[${j}](${arr[j]})`,
    });
    if (arr[j] <= pivot && i != j) {
      i++;
      stats.swaps++;

      [arr[i], arr[j]] = [arr[j], arr[i]];
      history.push({
        arrayState: [...arr],
        comparisons: stats.comparisons,
        swaps: stats.swaps,
        comparedIndices: [i, j],
        description: `Swapped arr[${i}](${arr[i]}) & arr[${j}](${arr[j]})`,
      });
    }
  }

  stats.swaps++;
  [arr[i + 1], arr[r]] = [arr[r], arr[i + 1]];
  history.push({
    arrayState: [...arr],
    comparisons: stats.comparisons,
    swaps: stats.swaps,
    comparedIndices: [i + 1, r],
    description: `Swapped arr[${i + 1}](${arr[i + 1]}) & arr[${r}](${arr[r]})`,
  });

  return i + 1;
}

function quickSort(arr, low, high, history, stats) {
  if (low < high) {
    let pi = partition(arr, low, high, history, stats);

    quickSort(arr, low, pi - 1, history, stats);
    quickSort(arr, pi + 1, high, history, stats);
  }
}
function performQuickSort(arr) {
  const history = [];
  const stats = { comparisons: 0, swaps: 0 };
  quickSort(arr, 0, arr.length - 1, history, stats);

  return history;
}

export default performQuickSort;
