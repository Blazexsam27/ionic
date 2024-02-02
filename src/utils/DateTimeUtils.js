class DateTimeUtils {
  getUnixTimeStamp = () => {
    return Math.floor(new Date().getTime() / 1000);
  };
}

export default new DateTimeUtils();
