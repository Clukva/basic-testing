import axios from 'axios';
import { throttle } from 'lodash';

export const THROTTLE_TIME = 5000;

const getDataFromApi = async (relativePath: string) => {
  const axiosClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
  });

  const response = await axiosClient.get(relativePath);
  return response.data;
};

export const throttledGetDataFromApi = throttle(getDataFromApi, THROTTLE_TIME);

/* import axios from 'axios';
import { throttledGetDataFromApi } from './index';

jest.useFakeTimers();

describe('throttledGetDataFromApi', () => {
  afterAll(() => {
    jest.useRealTimers();
  });

  test('should create instance with provided base url', async () => {
    const spyCreate = jest.spyOn(axios, 'create');

    await throttledGetDataFromApi('/posts');

    jest.runAllTimers();
    expect(spyCreate).toHaveBeenCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('should perform request to correct provided url', async () => {
    const spyGet = jest.spyOn(axios.Axios.prototype, 'get');

    await throttledGetDataFromApi('/posts');

    jest.runAllTimers();
    expect(spyGet).toHaveBeenCalledTimes(1);
    expect(spyGet).toHaveBeenCalledWith('/posts');
  });

  test('should return response data', async () => {
    const responseData = { data: 'data' };
    jest
      .spyOn(axios.Axios.prototype, 'get')
      .mockResolvedValueOnce({ data: responseData });

    const response = await throttledGetDataFromApi('/posts');

    expect(response).toBe(responseData);
  });
}); */
