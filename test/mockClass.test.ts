import Person from '../src/Person'

// 方式1
// jest.mock('../src/Person', () => {
//   return function () {
//     return {
//       getsayHelloWords: jest.fn(),
//     }
//   }
// })

// 方式2
// jest.mock('../src/Person');
// // @ts-ignore
// Person.mockImplementation(() => {
//   return {
//     getsayHelloWords: jest.fn(),
//   }
// })

describe('mockclass', () => {
  // it('origin no mock', () => {
  //   const name = 'chw';
  //   const p = new Person();
  //   // expect(p.getsayHelloWords(name)).toBe(`hello,${name}!`)
  // })

  it('origin no mock222', () => {
    const name = 'chw';
    const p = new Person();
    expect(p.getsayHelloWords(name)).toBeUndefined();
  })
});