describe("测试mock funtion", () => {
  let timer;
  beforeAll(() => {
    jest.useFakeTimers();
  })
  afterEach(() => {
    clearTimeout(timer);
  })
  test('简单模拟，不实现', (done) => {
    const fn = jest.fn();
    timer = setTimeout(() => {
      fn();
      done();
    }, 2000);
    jest.runAllTimers();
    expect(fn).toBeCalledTimes(1);

    // expect(fn.mock.calls.length).toBe(1);
  })

  test('test instance', () => {
    const myMock = jest.fn();
    const a = new myMock();
    const b = {};
    const bound = myMock.bind(b);
    bound();

    console.log(myMock.mock.instances);
  })

  test('test instance', () => {
    const myMock = jest.fn();
    myMock.mockReturnValue(1).mockRejectedValueOnce(2)
    console.log(myMock(),myMock());
  })
})