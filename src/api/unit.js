import { grab } from "./utils";

export default class UnitAPI {
  static all() {
    return grab(`/unit`);
  }

  static create(payload) {
    return grab(`/unit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  }

  static delete(unitIds) {
    return grab(`/unit`, {
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
