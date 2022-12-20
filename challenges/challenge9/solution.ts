function countTime(leds: number[]) {
  let seg = 0;

  while (leds.some((led) => led !== 1)) {
    leds = leds.map((led, index) => {
      if (index === 0 && leds[leds.length - 1] === 1) led = 1;
      if (led === 0 && leds[index - 1] === 1) led = 1;
      return led;
    });
    seg += 7;
  }

  return seg;
}
