import { getShoufu, fetchData } from '../src/index';

describe('Asynchronous Code', () => {
  test('200w need pay 60w', () => {
    return getShoufu(2000000).then(res => {
      expect(res).toBe(600000);
    })
  });

  test('必须返回一个promise，否则会立刻执行完成通过并不会等待回调执行', () => {
    getShoufu(2000000).then(res => {
      // 执行这里的时候，这个测试用例已经通过了
      expect(res).toBe('乱写也会通过');
    })
  })

  test('await/async', async () => {
    expect.assertions(0); // expect断言调用次数
    try {
      await getShoufu(2000000);
    } catch (e) {
      expect(e).toMatch('error');
    }
  });


  test('.resolves/.rejects 方式 同样要把promise返回', () => {
    return expect(getShoufu(2000000)).resolves.toBe(600000);
  });

  test('回调方式的异步', (done) => {
    const callback = jest.fn((done) => done());
    // function callback(res) {
    //   try {
    //     expect(res).toBeUndefined();
    //     done(); // Jest will wait until the done callback is called before finishing the test
    //   } catch (error) {
    //     done(error)
    //   }
    // }

    fetchData(callback(done));
    expect(callback).toBeCalledTimes(1);
  });

  // test.only('本组用例只有执行我一个,其他都被忽略', async () => {
  //   const res = await getShoufu(2000000);
  //   expect(res).toBe(600000);
  // })
});