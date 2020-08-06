export const grab = (endpoint, options = {}) =>
  new Promise(async (resolve, reject) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
    if (response.ok) {
      resolve(response.json());
      return;
    }

    reject(response);
  });
