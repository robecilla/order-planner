import { grab } from "./utils";

export default class UnitAPI {
  static all() {
    return grab(`${process.env.API_BASE_URL}/unit`);
  }

  static create(payload) {
    return grab(`${process.env.API_BASE_URL}/unit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  }

  static delete(unitIds) {
    return grab(`${process.env.API_BASE_URL}/unit`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        unitIds,
      }),
    });
  }
}
