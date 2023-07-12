// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  test('should generate linked list from values 1', () => {
    const values = [1];
    const expList = {
      value: 1,
      next: { value: null, next: null },
    };
    const linkList = generateLinkedList(values);
    expect(linkList).toStrictEqual(expList);
  });

  test('should generate linked list from values 2', () => {
    const values = [1, 2];
    const linkList = generateLinkedList(values);
    expect(linkList).toMatchSnapshot();
  });
});
