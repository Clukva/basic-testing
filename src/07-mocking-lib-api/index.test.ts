import axios from 'axios';
import { throttledGetDataFromApi } from './index';

const responseData = { data: 'data' };

const posts = '/posts';

jest.useFakeTimers();

describe('throttledGetDataFromApi', () => {
  afterAll(() => {
    jest.useRealTimers();
  });

  test('should create instance with provided base url', async () => {
    const spy = jest.spyOn(axios, 'create');

    await throttledGetDataFromApi(posts);

    jest.runAllTimers();
    expect(spy).toHaveBeenCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('should perform request to correct provided url', async () => {
    const spyOnGet = jest.spyOn(axios.Axios.prototype, 'get');

    await throttledGetDataFromApi(posts);

    jest.runAllTimers();
    expect(spyOnGet).toHaveBeenCalledTimes(1);
    expect(spyOnGet).toHaveBeenCalledWith(posts);
  });

  test('should return response data', async () => {
    jest
      .spyOn(axios.Axios.prototype, 'get')
      .mockResolvedValueOnce({ data: responseData });

    const response = await throttledGetDataFromApi(posts);

    expect(response).toBe(responseData);
  });
});
