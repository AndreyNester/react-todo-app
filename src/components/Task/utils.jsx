import { format, formatDistanceToNow } from 'date-fns';

export const timeFormater = (createdAt) => formatDistanceToNow(new Date(createdAt), { includeSeconds: true });
export const cDTimerFormater = (finishAt) => format(new Date(finishAt - new Date().getTime()), 'mm:ss');
