const axios = require("axios");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer 6f79257a-062b-363e-a6c7-a8caef6972cb"
};

const data = {
  deviceIDs: ["862473031481696"]
};
axios
  .post(
    "https://49.236.205.62:8243/api/device-mgt/android/v1.0/admin/devices/ring",
    data,
    headers
  )
  .then(res => console.log(res.data))
  .catch(err => console.log(err.response));
