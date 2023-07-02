// Uncomment the code below and write your tests
/* import axios, { AxiosResponse } from 'axios';
import { throttledGetDataFromApi } from './index'; */

jest.mock('axios');

describe('throttledGetDataFromApi', () => {
  /*  test('should create instance with provided base url', async () => {
    const url = 'https://jsonplaceholder.typicode.com';
    const example = await throttledGetDataFromApi(url);
    expect(example).toBeDefined();
    if (example) {
      expect(example.default.baseURL).toBe(url);
    }
  }); */
  /*  test('should perform request to correct provided url', async () => {
    const url = 'www.linkedin.com/';
    const expectedData = { message: 'Success' };
    (axios.get as jest.Mock).mockResolvedValueOnce({
      data: expectedData,
    } as AxiosResponse);

    const result = await throttledGetDataFromApi(url);

    expect(result).toBeDefined();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(url);
  }); */
  /*   test('should return response data', async () => {
    const url = 'www.linkedin.com/';
    const expectedData = { message: 'Success' };
    (axios.get as jest.Mock).mockResolvedValueOnce({
      data: expectedData,
    } as AxiosResponse);

    const result = await throttledGetDataFromApi(url);
    expect(result).toBeDefined();
    const responseData = await result.get('/data');
    expect(responseData).toEqual(expectedData);
  }); */
});
