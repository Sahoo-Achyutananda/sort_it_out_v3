function merge(arr, l, mid, r, history, stats) {
  let array_1 = arr.slice(l, mid + 1);
  let array_2 = arr.slice(mid + 1, r + 1);

  let i = 0,
    j = 0,
    k = l;

  history.push({
    arrayState: [...arr],
    swaps: stats.swaps,
    comparisons: stats.comparisons,
    comparedIndices: Array.from({ length: r - l + 1 }, (_, idx) => l + idx),
    description: `Merging subarrays [${l}...${mid}] and [${mid + 1}...${r}]`,
  });

  while (i < array_1.length && j < array_2.length) {
    const compLeft = array_1[i];
    const compRight = array_2[j];

    stats.comparisons++;
    history.push({
      arrayState: [...arr],
      swaps: stats.swaps,
      comparisons: stats.comparisons,
      comparedIndices: Array.from({ length: r - l + 1 }, (_, idx) => l + idx),
      description: `Comparing ${compLeft} and ${compRight}`,
    });

    if (compLeft <= compRight) {
      arr[k] = compLeft;
      stats.swaps++;
      history.push({
        arrayState: [...arr],
        swaps: stats.swaps,
        comparisons: stats.comparisons,
        comparedIndices: Array.from({ length: r - l + 1 }, (_, idx) => l + idx),
        description: `Placed ${compLeft} at index ${k}`,
      });
      i++;
    } else {
      arr[k] = compRight;
      stats.swaps++;
      history.push({
        arrayState: [...arr],
        swaps: stats.swaps,
        comparisons: stats.comparisons,
        comparedIndices: Array.from({ length: r - l + 1 }, (_, idx) => l + idx),
        description: `Placed ${compRight} at index ${k}`,
      });
      j++;
    }

    k++;
  }

  while (i < array_1.length) {
    arr[k] = array_1[i];
    stats.swaps++;
    history.push({
      arrayState: [...arr],
      swaps: stats.swaps,
      comparisons: stats.comparisons,
      comparedIndices: Array.from({ length: r - l + 1 }, (_, idx) => l + idx),
      description: `Inserting remaining ${array_1[i]} at index ${k}`,
    });
    i++;
    k++;
  }

  while (j < array_2.length) {
    arr[k] = array_2[j];
    stats.swaps++;
    history.push({
      arrayState: [...arr],
      swaps: stats.swaps,
      comparisons: stats.comparisons,
      comparedIndices: Array.from({ length: r - l + 1 }, (_, idx) => l + idx),
      description: `Inserting remaining ${array_2[j]} at index ${k}`,
    });
    j++;
    k++;
  }
}

function mergeSort(arr, left, right, history, stats) {
  if (left >= right) return;

  let mid = Math.floor((left + right) / 2);

  mergeSort(arr, left, mid, history, stats);
  mergeSort(arr, mid + 1, right, history, stats);
  merge(arr, left, mid, right, history, stats);
}

function performMergeSort(arr) {
  const array = [...arr]; // work on a copy
  const history = [];
  const stats = { swaps: 0, comparisons: 0 };

  mergeSort(array, 0, array.length - 1, history, stats);

  return history; // return the entire history for visualization
}

export default performMergeSort;
