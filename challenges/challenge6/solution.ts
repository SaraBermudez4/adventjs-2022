function createCube(size: number) {
  let cube: string = '';

  for (let i = 0; i < size; i++) {
    let top: string = ' '.repeat(i);
    top += '/\\'.repeat(size - i);
    top += '_\\'.repeat(size);
    top += '\n';
    let bottom: string = ' '.repeat(i);
    bottom += '\\/'.repeat(size - i);
    bottom += '_/'.repeat(size);
    bottom += '\n';
    cube = top + cube + bottom;
  }
  cube = cube.substring(0, cube.length - 1);
  return cube;
}
