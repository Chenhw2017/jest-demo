

export const getShoufu = function (money: number): Promise<number> {
  return new Promise((resolve, reject) => {
    try {
      const timer = setTimeout(() => {
        resolve(money * 0.3);
        clearTimeout(timer);
      }, 1000);
    } catch (error) {
      reject(error);
    }

  })
}

export const fetchData = (cb) => {
  const timer = setTimeout(() => {
    cb && cb();
    clearTimeout(timer);
  }, 500);
}