function dryNumber(dry: number, numbers: number) {
  let codigos: number[] = [];
  for (let i = 1; i <= numbers; i++) {
    i.toString().includes(dry.toString()) && codigos.push(i);
  }
  return codigos;
}
