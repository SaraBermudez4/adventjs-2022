function selectSleigh(
  distance: number,
  sleighs: {
    name: string;
    consumption: number;
  }[]
) {
  let trineo: any = sleighs
    .reverse()
    .find((trineo) => trineo.consumption * distance <= 20);

  return trineo?.name || null;
}
