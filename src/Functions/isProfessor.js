import { useSelector } from "react-redux";
const isProfessor = () => {
  const userReducer = useSelector((state) => state?.User);
  const myProfile = userReducer?.myProfile;
  return myProfile?.data?.role === "professor";
};
export default isProfessor;
