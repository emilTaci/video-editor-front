export const api = {
  fetchData: async ({
    url,
    method = "GET",
    headers = { "Content-Type": "application/json" },
  }) => {
    try {
      const response = await fetch(url, {
        method,
        // headers,
      });

      if (response.ok) {
        return {
          isOk: true,
          data: await response.json(),
        };
      } else {
        throw {
          status: response.status,
          statusText: response.statusText,
          error: await response.json(),
        };
      }
    } catch (error) {
      return {
        isOk: false,
        error,
      };
    }
  },
  sendWithBody: async ({
    url,
    body,
    method = "POST",
    headers = { "Content-Type": "application/json" },
  }) => {
    try {
      const response = await fetch(url, {
        method,
        headers,
        body: JSON.stringify(body),
      });

      if (response.ok) {
        return {
          isOk: true,
          data: await response.json(),
        };
      } else {
        throw {
          status: response.status,
          statusText: response.statusText,
          error: await response.json(),
        };
      }
    } catch (error) {
      return {
        isOk: false,
        error,
      };
    }
  },
};
