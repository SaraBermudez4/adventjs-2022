function decorateTree(base: string) {
  let tree: string[] = [base.replace(/ /g, '')];
  while (tree[0].length !== 1) {
    let line = '';
    for (let i = 0; i < tree[0].length; i++) {
      if (tree[0][i] === 'B' && tree[0][i + 1] === 'B') line += 'B';
      if (tree[0][i] === 'R' && tree[0][i + 1] === 'R') line += 'R';
      if (tree[0][i] === 'P' && tree[0][i + 1] === 'P') line += 'P';

      if (tree[0][i] === 'B' && tree[0][i + 1] === 'P') line += 'R';
      if (tree[0][i] === 'R' && tree[0][i + 1] === 'P') line += 'B';
      if (tree[0][i] === 'B' && tree[0][i + 1] === 'R') line += 'P';

      if (tree[0][i] === 'P' && tree[0][i + 1] === 'B') line += 'R';
      if (tree[0][i] === 'P' && tree[0][i + 1] === 'R') line += 'B';
      if (tree[0][i] === 'R' && tree[0][i + 1] === 'B') line += 'P';
    }
    tree.unshift(line);
  }

  tree = tree.map((palabra, index) => {
    let palabraNew = palabra[0];
    for (let i = 1; i < palabra.length; i++) {
      palabraNew += ' ' + palabra[i];
    }
    return palabraNew;
  });

  return tree;
}
