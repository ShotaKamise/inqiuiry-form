import dayjs, { Dayjs } from "dayjs";

const FORMAT_TIME = "HH:mm";
const FORMAT_YYYYMMDD = "YYYY/MM/DD";
const FORMAT_FULLDATETIME = `${FORMAT_YYYYMMDD} ${FORMAT_TIME}`;

export const formatFullDateTime = (
  // eslint-disable-next-line prettier/prettier
  value: Dayjs | Date | string | null | undefined
): string =>
  value != null ? dayjs(value).format(FORMAT_FULLDATETIME) : "Invalid Date";
