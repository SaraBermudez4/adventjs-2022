function getFilesToBackup(lastBackup: number, changes: number[][]) {
  let ids: number[] = changes
    .filter((change) => change[1] > lastBackup)
    .map((change) => change[0]);

  ids = ids
    .filter((item, index) => ids.indexOf(item) === index)
    .sort((a, b) => a - b);
  return ids;
}
