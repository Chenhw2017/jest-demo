

describe('learn timer', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  })

  // ! if time is more than 5s, pass the third param to test
  test('real timer will spend much time to test', (done) => {
    const timerGame = require('../src/timer');
    const cb = jest.fn(done => done());
    timerGame(cb.bind(undefined, done));
    jest.runAllTimers();
    // expect(cb).toBeCalledTimes(1);
    // expect(setTimeout).toHaveBeenCalledTimes(1);
    // expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);
  }, 10000);

  // ! if test runs more than 5s, use  jest.setTimeout();
  test('jest.setTimeout() to overwrite the default setTimeout value', (done) => {
    jest.setTimeout(20000);
    const timerGame = require('../src/timer');
    const cb = jest.fn(done => done());
    timerGame(cb.bind(undefined, done));
    // jest.runAllTimers();
    // expect(cb).toBeCalledTimes(1);
    // expect(setTimeout).toHaveBeenCalledTimes(1);
    // expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);
  }, 10000);

  // ! fakerTimer use
  test('use fake timer is much useful', () => {
    jest.useFakeTimers();
    const timerGame = require('../src/timer');
    const cb = jest.fn();
    timerGame(cb);
    jest.runAllTimers();
    expect(cb).toBeCalled();
  });

  // fast-forward by certern time 
  test('advanceTimersByTime', () => {
    jest.useFakeTimers();
    const timerGame = require('../src/timer');
    const cb = jest.fn();
    timerGame(cb);
    jest.advanceTimersByTime(4000);
    // expect(cb).toBeCalled();
    expect(cb).not.toBeCalled();
    jest.advanceTimersByTime(1000);
    expect(cb).toBeCalled();
  })
});