import fooDefault, { banana } from '../src/banana'
jest.mock('../src/banana', () => {
  return {
    __esModule: true,
    default: jest.fn(() => 'mock后的defalt'),
    banana: jest.fn(() => 'mock后的export foo'),
  }
});
describe('learn mock module', () => {
  test('mock modules', () => {
    console.log(4444,banana());
    expect(fooDefault()).toBe('mock后的defalt');
    expect(banana()).toBe('mock后的export foo');
  })
})