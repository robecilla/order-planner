import { grab } from "./utils";

export default class RecipeAPI {
  static all() {
    return grab(`${process.env.API_BASE_URL}/recipe`);
  }

  static get(id) {
    return grab(`${process.env.API_BASE_URL}/recipe/${id}`);
  }

  static create(payload) {
    return grab(`${process.env.API_BASE_URL}/recipe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  }

  static delete(id) {
    return grab(`${process.env.API_BASE_URL}/recipe/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  static addMeasures(id, measures) {
    return grab(`${process.env.API_BASE_URL}/recipe/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        measures,
        operation: "add",
      }),
    });
  }

  static deleteMeasures(id, measureIds) {
    return grab(`${process.env.API_BASE_URL}/recipe/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        measures: measureIds,
        operation: "delete",
      }),
    });
  }
}
