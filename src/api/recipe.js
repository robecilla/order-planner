import { grab } from "./utils";

export default class RecipeAPI {
  static all() {
    return grab(`/recipe`);
  }

  static get(id) {
    return grab(`/recipe/${id}`);
  }

  static create(payload) {
    return grab(`/recipe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  }

  static delete(id) {
    return grab(`/recipe/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  static addMeasures(id, measures) {
    return grab(`/recipe/${id}`, {
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
    return grab(`/recipe/${id}`, {
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
