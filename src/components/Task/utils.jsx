import { formatDistanceToNow } from 'date-fns';

const timeFormater = (createdAt) => formatDistanceToNow(new Date(createdAt), { includeSeconds: true });

export default timeFormater;
