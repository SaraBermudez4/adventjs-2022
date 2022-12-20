function getMaxGifts(
  giftsCities: number[],
  maxGifts: number,
  maxCities: number
) {
  let highestAmountGifts: number = 0;

  let combinations: number[][] = giftsCities.reduce(
    (previousValue: any, currentValue: number) =>
      previousValue.concat(
        previousValue.map((data: number) => [currentValue].concat(data))
      ),
    [[]]
  );

  let totalGifts: number[] = combinations.map((combinacion: number[]) => {
    let gifts: number = 0;
    combinacion.forEach((giftsCity: number, index: number) => {
      gifts += giftsCity;
    });
    return gifts;
  });

  totalGifts.forEach((regalo: number, index: number) => {
    if (
      regalo > highestAmountGifts &&
      regalo <= maxGifts &&
      combinations[index].length <= maxCities
    ) {
      highestAmountGifts = regalo;
    }
  });

  return highestAmountGifts;
}
