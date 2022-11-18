const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const minutes = Array.from(Array(60).keys());
const minutesStep5 = Array.from({ length: 12 }, (_, i) => i * 5);
const amPm = ['AM', 'PM'];

export { hours, minutes, minutesStep5, amPm };
