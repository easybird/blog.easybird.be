import moment from "moment";

const DEFAULT_DATE_FORMAT = "DD/MM/YYYY HH:mm Z";
const DEFAULT_DISPLAY_DATE = "DD/MM/YYYY";

export const parseDate = (dateAsString, dateFormat) =>
  moment(dateAsString, dateFormat || DEFAULT_DATE_FORMAT);

export const formatDate = (dateAsMoment, displayDate) => {
  const duration = moment.duration(dateAsMoment.diff(moment()));
  if (duration.asHours() > -49) {
    return duration.humanize(true);
  }
  return dateAsMoment.format(displayDate || DEFAULT_DISPLAY_DATE);
};
