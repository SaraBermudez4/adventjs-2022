function sortToys(toys: string[], positions: number[]) {
  let toysOrder: string[] = [];
  toys.forEach((toy, index) => {
    toysOrder[positions[index]] = toy;
  });

  return toysOrder.filter(Boolean);
}
