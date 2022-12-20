function countHours(year: number, holidays: string[]): number {
  let hoursExtra: number = 0;
  holidays.forEach((day) => {
    let date: Date = new Date(`${year}/${day}`);
    date.getDay() !== 0 && date.getDay() !== 6 && (hoursExtra += 2);
  });
  return hoursExtra;
}
