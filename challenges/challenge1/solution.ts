function wrapping(gifts: string[]): string[] {
  let regalos: string[] = [];
  let string1: string = '*';

  gifts.map((gift: string) => {
    regalos.push(
      `${string1.repeat(gift.length + 2)}\n*${gift}*\n${string1.repeat(
        gift.length + 2
      )}`
    );
  });
  return regalos;
}
