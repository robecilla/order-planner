import { grab } from "./utils";

export default class IngredientAPI {
  static all() {
    return grab(`${process.env.API_BASE_URL}/ingredient`);
  }

  static create(payload) {
    return grab(`${process.env.API_BASE_URL}/ingredient`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  }

  static delete(ingredientIds) {
    return grab(`${process.env.API_BASE_URL}/ingredient`, {
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
