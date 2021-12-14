import Toast from "react-native-toast-message";
const toasterMessage = (message, type) => {
  return Toast.show({
    type: "my_custom_type",
    position: "bottom",
    text1: message,
    visibilityTime: type === "error" ? 10000 : 5000,
    autoHide: true,
    props: { hideToast, type: type, message: message },
  });
};

const hideToast = () => {
  Toast.hide();
};
export default toasterMessage;
