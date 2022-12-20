function fitsInOneBox(boxes: { l: number; w: number; h: number }[]) {
  const boxesOrdered = boxes.sort((a, b) => a.l - b.l);

  for (let i = 0; i < boxesOrdered.length - 1; i++) {
    const box = boxesOrdered[i];
    const nextBox = boxesOrdered[i + 1];
    if (box.l >= nextBox.l || box.w >= nextBox.w || box.h >= nextBox.h)
      return false;
  }

  return true;
}
