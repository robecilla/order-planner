import { grab } from "./utils";

export default class IngredientAPI {
  static all() {
    return grab(`/ingredient`);
  }

  static create(payload) {
    return grab(`/ingredient`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  }

  static delete(ingredientIds) {
    return grab(`/ingredient`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ingredient_ids: ingredientIds,
      }),
    });
  }
}
