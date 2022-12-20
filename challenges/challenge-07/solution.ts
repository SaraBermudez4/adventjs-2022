function getGiftsToRefill(a1: string[], a2: string[], a3: string[]) {
  let gifts: string[] = [
    ...a1.filter((item, index) => a1.indexOf(item) === index),
    ...a2.filter((item, index) => a2.indexOf(item) === index),
    ...a3.filter((item, index) => a3.indexOf(item) === index),
  ];

  let giftsToRefill: string[] = [];

  gifts.forEach((gift1) => {
    let repite = 0;
    gifts.forEach((gift2) => {
      gift1 === gift2 && repite++;
    });
    repite === 1 && giftsToRefill.push(gift1);
  });

  return giftsToRefill;
}
