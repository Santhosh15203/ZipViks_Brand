const axios = require("axios");

axios.get("https://api64.ipify.org?format=json")
  .then(res => console.log("Your public IP is:", res.data.ip))
  .catch(console.error);
