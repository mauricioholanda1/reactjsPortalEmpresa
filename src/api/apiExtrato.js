import axios from "axios";

const request = axios.create({
  timeout: 20000
});

export function getExtrato() {
  return request.get("http://www.mocky.io/v2/5e3ed50f330000a5638b0ab0");
}
