export const formatToCustomTime = (inputDate: string) => {
  const date = new Date(inputDate);

  const timeFormatter = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
  const timeString = timeFormatter.format(date);

  const timeZoneOffset = date.getTimezoneOffset();
  const sign = timeZoneOffset > 0 ? '-' : '+';
  const hours = Math.floor(Math.abs(timeZoneOffset) / 60);
  const minutes = Math.abs(timeZoneOffset) % 60;
  const timeZoneString = `GMT${sign}${hours < 10 ? '0' : ''}${hours}:${
    minutes < 10 ? '0' : ''
  }${minutes}`;

  return `${timeString} (${timeZoneString})`;
};
