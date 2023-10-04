import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date().getTime(); // Convert current date to milliseconds
  const createdAtMillis = createdAt.getTime(); // Convert createdAt date to milliseconds
  const timeDifference = now - createdAtMillis;

  const minuteInMillis = 60 * 1000;
  const hourInMillis = 60 * minuteInMillis;
  const dayInMillis = 24 * hourInMillis;
  const weekInMillis = 7 * dayInMillis;
  const monthInMillis = 30 * dayInMillis;
  const yearInMillis = 365 * dayInMillis;

  if (timeDifference < minuteInMillis) {
    const seconds = Math.floor(timeDifference / 1000);
    return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
  } else if (timeDifference < hourInMillis) {
    const minutes = Math.floor(timeDifference / minuteInMillis);
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  } else if (timeDifference < dayInMillis) {
    const hours = Math.floor(timeDifference / hourInMillis);
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  } else if (timeDifference < weekInMillis) {
    const days = Math.floor(timeDifference / dayInMillis);
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  } else if (timeDifference < monthInMillis) {
    const weeks = Math.floor(timeDifference / weekInMillis);
    return `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
  } else if (timeDifference < yearInMillis) {
    const months = Math.floor(timeDifference / monthInMillis);
    return `${months} month${months !== 1 ? 's' : ''} ago`;
  } else {
    const years = Math.floor(timeDifference / yearInMillis);
    return `${years} year${years !== 1 ? 's' : ''} ago`;
  }
};

export const formatNumberWithExtension = (number: number): string => {
  if (number >= 1000000) {
    const millions = (number / 1000000).toFixed(2);
    return `${millions}M`;
  } else if (number >= 1000) {
    const thousands = (number / 1000).toFixed(2);
    return `${thousands}K`;
  } else {
    return `${number}`;
  }
};




