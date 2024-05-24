// * NOTE: that is the format date AAAAMMDDHHMMSS example: 20210812200256
export const formatDate = (date: Date): string => {
  // the months in JavaScript are 0 to 11, for that reason we need the pad function
  const year: string = date.getFullYear().toString();
  //The months in JavaScript are 0 to 11, for that reason, we need to add 1 to it to be the 12 months of the year
  const month: string = pad(date.getMonth() + 1);
  const day: string = pad(date.getDate());
  const hour: string = pad(date.getHours());
  const minute: string = pad(date.getMinutes());
  const second: string = pad(date.getSeconds());

  //     AAAA    MM     DD    HH       MM       SS
  return year + month + day + hour + minute + second;
};

// that function is to add Zero in the left if is necessary
// example: 01 = January, 02 = February, etc...
export const pad = (number: number): string =>
  number < 10 ? "0" + number : number.toString();

export const getSevenDaysLater = (date: Date) => {
  const sevenDaysLater: Date = new Date(
    date.getTime() + 7 * 24 * 60 * 60 * 1000
  );
  const dateSevenDaysLater: string = formatDate(sevenDaysLater);

  return dateSevenDaysLater;
};

// that function is the oposite of "formatDate"
export const parseDate = (dateString: string): Date => {
  if (dateString.length !== 14) {
    throw new Error(
      "The format valid should have 14 characters, AAAAMMDDHHMMSS"
    );
  }

  const year: number = parseInt(dateString.substring(0, 4), 10);
  const month: number = parseInt(dateString.substring(4, 6), 10) - 1;
  const day: number = parseInt(dateString.substring(6, 8), 10);
  const hour: number = parseInt(dateString.substring(8, 10), 10);
  const minute: number = parseInt(dateString.substring(10, 12), 10);
  const second: number = parseInt(dateString.substring(12, 14), 10);

  // we need to create a new Date object
  return new Date(year, month, day, hour, minute, second);
};
