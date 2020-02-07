import axios from "axios";

const request = axios.create({
  timeout: 20000
});

export function getLista() {
  return request.get("http://www.mocky.io/v2/5e3df16b33000063008b091f");
}
