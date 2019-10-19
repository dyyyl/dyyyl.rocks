import { utcToZonedTime, format } from 'date-fns-tz';

const getToday = () => {
  const timeZone = 'Europe/Berlin';
  return format(
    utcToZonedTime(new Date(), timeZone),
    'dd/MM/yyyy HH:mma',
    timeZone,
  );
};
export default getToday;
