import axios from "axios";
import { popUpActions } from "./pop-up-slice";
import { mailBoxActions } from "./mail-box-slice";


//getting data from firebase

export const getData = () => {
  return async (dispatch) => {
    let email = localStorage.getItem("email");
    if (email) {
      email = email.replace("@", "").replace(".", "");
      let url = `https://data-collect-233ba-default-rtdb.firebaseio.com/mails.json`;

      try {
        const res = await axios(url);
        if (res.data) {
          const mailBox = {
            allMailData: res.data,
            current: res.data[email],
          };
          dispatch(mailBoxActions.replaceMailBox(mailBox));
        }
      } catch (error) {
        dispatch(
          popUpActions.popUpAlertHandler({
            message: "Fetching data failed!",
            severity: "error",
          })
        );
      }
    }
  };
};

export const putData = (mailBox) => {
  return async (dispatch) => {
    let email = localStorage.getItem("email");

    if (email) {
      email = email.replace("@", "").replace(".", "");
      let requestBody = { ...mailBox.allMailData };
      requestBody[email] = {
        inbox: mailBox.inbox,
        sent: mailBox.sent,
        recycle: mailBox.recycle,
        totalUnread: mailBox.totalUnread,
      };

      let url = `https://data-collect-233ba-default-rtdb.firebaseio.com/mails.json`;

      try {
        await axios.put(url, requestBody);
        dispatch(
          popUpActions.popUpAlertHandler({
            message: "Request successful",
            severity: "success",
          })
        );
      } catch (error) {
        dispatch(
          popUpActions.popUpAlertHandler({
            message: "Request sent failed!",
            severity: "error",
          })
        );
      }
    }
  };
};
