import { format } from 'date-fns';
import { de } from 'date-fns/locale/de';

const getToday = () => format(new Date(), 'MM/DD/YYYY HH:mma', { locale: de });

export default getToday;
