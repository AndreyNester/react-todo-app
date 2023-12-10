import { format, formatDistanceToNow } from 'date-fns';

export const timeFormater = (createdAt) => formatDistanceToNow(new Date(createdAt), { includeSeconds: true });
export const cDTimerFormater = (difference) => format(new Date(difference), 'mm:ss');
