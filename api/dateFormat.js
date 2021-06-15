export const dateToString = date => {
  let year = date.getFullYear();
  let month = ('0' + (1 + date.getMonth())).slice(-2);
  let day = ('0' + date.getDate()).slice(-2);
  return year + '-' + month + '-' + day;
};

export default dateToString;

export const stringToDate = date_str => {
  let yyyyMMdd = String(date_str);
  let sYear = yyyyMMdd.substring(0, 4);
  let sMonth = yyyyMMdd.substring(5, 7);
  let sDate = yyyyMMdd.substring(8, 10);

  return new Date(Number(sYear), Number(sMonth) - 1, Number(sDate));
};

export const stringDateToKorean = dateStr => {
  let year = dateStr.substring(0, 4) + '. ';
  let month = dateStr.substring(5, 7) + '. ';
  let day = dateStr.substring(8, 10) + '. ';
  return year + month + day;
};

export const year = date => {
  if (
    date.getDate() < firstMonday(date.getFullYear(), date.getMonth()).getDate()
  ) {
    const newDate = new Date(
      date.getFullYear(),
      date.getMonth() - 1,
      date.getDate(),
    );
    return newDate.getFullYear();
  }

  return date.getFullYear();
};

export const month = date => {
  if (
    date.getDate() < firstMonday(date.getFullYear(), date.getMonth()).getDate()
  ) {
    const newDate = new Date(
      date.getFullYear(),
      date.getMonth() - 1,
      date.getDate(),
    );
    return newDate.getMonth() + 1;
  }

  return date.getMonth() + 1;
};

export const week = date => {
  if (
    date.getDate() < firstMonday(date.getFullYear(), date.getMonth()).getDate()
  ) {
    return lastWeekOfPreviousMonth(date);
  }

  const diff =
    date.getDate() - firstMonday(date.getFullYear(), date.getMonth()).getDate();
  return Number.parseInt(diff / 7, 10) + 1;
};

export const firstDate = (year, month, week) => {
  const first = firstMonday(year, month - 1);
  const result = new Date(
    first.getFullYear(),
    first.getMonth(),
    first.getDate() + 7 * (week - 1),
  );
  return result;
};

export const lastDate = (year, month, week) => {
  const first = firstMonday(year, month - 1);
  const result = new Date(
    first.getFullYear(),
    first.getMonth(),
    first.getDate() + 7 * (week - 1) + 6,
  );
  return result;
};

const lastWeekOfPreviousMonth = date => {
  const firstDate = new Date(date.getFullYear(), date.getMonth(), 1);
  firstDate.setMonth(date.getMonth() - 1);
  const diff =
    lastMonday(firstDate.getFullYear(), firstDate.getMonth()).getDate() -
    firstMonday(firstDate.getFullYear(), firstDate.getMonth()).getDate();
  return Number.parseInt(diff / 7, 10) + 1;
};

const firstMonday = (year, month) => {
  const date = new Date(year, month, 1);
  return new Date(year, month, date.getDate() + adjustPlusDay(date.getDay()));
};

const lastMonday = (year, month) => {
  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const date = new Date(year, month, days[month]);
  return new Date(year, month, date.getDate() - adjustMinusDay(date.getDay()));
};

const adjustPlusDay = day => {
  return day == 1 ? 0 : day == 0 ? 1 : 8 - day;
};

const adjustMinusDay = day => {
  return day == 1 ? 0 : day == 0 ? 6 : day - 1;
};
