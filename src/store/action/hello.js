import fetch from 'isomorphic-fetch'


export default {
  async getAA() {
    const res = await fetch('//localhost:3000/hello', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET',
      // body: JSON.stringify(param),
      credentials: 'include'
    })
    const resJSON = await res.json()
    return resJSON
  }
}