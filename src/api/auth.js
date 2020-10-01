import { grab } from "./utils";

export default class AuthAPI {
  static login(payload) {
    return grab("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  }
}
