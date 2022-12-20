function checkPart(part: string) {
  const partBackwards: string = part.split('').reverse().join('');

  if (partBackwards === part) return true;
  else {
    return [...part].some((_, index) => {
      let newWord: string = partBackwards.substring(0, index);
      newWord += partBackwards.substring(index + 1);
      const newWordBackwards: string = newWord.split('').reverse().join('');
      return newWord === newWordBackwards;
    });
  }
}
