function carryGifts(gifts: string[], maxWeight: number) {
  let carry: string[] = [];

  for (let i = 0; i < gifts.length; i++) {
    let text: string = '';
    let spaces: number = 0;
    for (let j = i; j < gifts.length; j++) {
      if (gifts[j].length + text.length - spaces <= maxWeight) {
        text += `${gifts[j]} `;
        spaces++;
      } else break;
    }
    spaces > 1 && (i += spaces - 1);
    text !== '' && carry.push(text.substring(0, text.length - 1));
  }

  return carry;
}
