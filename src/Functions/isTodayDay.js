import moment from "moment";
const isTodayDay = (date) => {
  return (
    moment().utc().format("DD/MM/YYYY").toString() ===
    moment(date).utc().format("DD/MM/YYYY").toString()
  );
};

export default isTodayDay;
