export const grab = (url, options = {}) =>
  new Promise(async (resolve, reject) => {
    const response = await fetch(url, options);
    if (response.ok) {
      resolve(response.json());
      return;
    }

    reject(response);
  });
