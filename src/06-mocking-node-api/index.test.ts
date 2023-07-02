// Uncomment the code below and write your tests
import path from 'node:path';
import { readFileAsynchronously, doStuffByTimeout, doStuffByInterval } from '.';
import fs from 'node:fs';

describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });
  beforeEach(() => {
    jest.spyOn(global, 'setTimeout');
  });

  test('should set timeout with provided callback and timeout', () => {
    const mockFunct = jest.fn();
    const timeout = 1000;
    doStuffByTimeout(mockFunct, timeout);
    expect(setTimeout).toHaveBeenCalledWith(mockFunct, timeout);
  });

  test('should call callback only after timeout', () => {
    const mockFunct = jest.fn();
    const timeout = 1000;
    doStuffByTimeout(mockFunct, timeout);
    jest.advanceTimersByTime(timeout);
    expect(mockFunct).toHaveBeenCalledTimes(1);
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });
  beforeEach(() => {
    jest.spyOn(global, 'setInterval');
  });

  test('should set interval with provided callback and timeout', () => {
    const mockFunct = jest.fn();
    const interval = 100;
    doStuffByInterval(mockFunct, interval);
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), interval);
  });

  test('should call callback multiple times after multiple intervals', () => {
    const mockFunct = jest.fn();
    const interval = 2000;
    doStuffByInterval(mockFunct, interval);
    expect(mockFunct).not.toHaveBeenCalled();
    jest.advanceTimersByTime(interval);
    expect(mockFunct).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(interval);
    expect(mockFunct).toHaveBeenCalledTimes(2);
    jest.advanceTimersByTime(interval);
    expect(mockFunct).toHaveBeenCalledTimes(3);
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    const spy = jest.spyOn(path, 'join');
    await readFileAsynchronously('file.txt');

    expect(spy).toHaveBeenCalled();
  });

  test('should return null if file does not exist', async () => {
    const pathToFile = 'Abra-Cadabra.txt';
    const result = await readFileAsynchronously(pathToFile);

    expect(result).toBeNull();
  });

  test('should return file content if file exists', async () => {
    const fileContent = 'Abra-Cadabra!';
    jest.spyOn(fs, 'existsSync').mockReturnValue(true);
    jest.spyOn(fs.promises, 'readFile').mockResolvedValue(fileContent);

    const result = await readFileAsynchronously('file.txt');
    expect(result).toBe(fileContent);
  });
});
