function distributeGifts(packOfGifts: string[], reindeers: string[]) {
  let totalWeightPackOfGifts: number = 0;
  let totalWeightReinders: number = 0;

  packOfGifts.forEach((gift: string) => {
    totalWeightPackOfGifts += gift.length;
  });

  reindeers.forEach((reindeer: string) => {
    totalWeightReinders += reindeer.length * 2;
  });

  return Math.floor(totalWeightReinders / totalWeightPackOfGifts);
}
