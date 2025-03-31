import delay from '../../utils/delay';
import APIError from '../../errors/APIError';

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  get(endpoint, options) {
    return this.makeRequest(endpoint, {
      method: 'GET',
      headers: options?.headers,
    });
  }

  post(endpoint, options) {
    return this.makeRequest(endpoint, {
      method: 'POST',
      body: options?.body,
      headers: options?.headers,
    });
  }

  async makeRequest(endpoint, options) {
    await delay(500);

    const headers = new Headers();

    if (options.body) {
      headers.append('Content-Type', 'application/json');
    }

    if (options.headers) {
      Object.entries(options.headers).forEach(([name, value]) => {
        headers.append(name, value);
      });
    }

    const response = await fetch(`${this.baseURL}${endpoint}`, {
      method: options.method,
      body: JSON.stringify(options.body),
      headers,
    });

    const contentType = response.headers.get('Content-Type');

    let responseBody = null;
    if (contentType.includes('application/json')) {
      responseBody = await response.json();
    }

    if (response.ok) {
      return responseBody;
    }

    throw new APIError(response, responseBody);
  }
}

export default HttpClient;
