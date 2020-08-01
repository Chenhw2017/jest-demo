const axios = Object.create(null);

const users = {
  1: {
    name: 'chw',
    age: 25
  },
  2: {
    name: 'linux',
    age: 60
  }
}

axios.get = function (url, data) {
  return new Promise((resolve, reject) => {
    if (url === '/user') {
      resolve(users[data.params.id]);
    }
  })
}

export default axios;