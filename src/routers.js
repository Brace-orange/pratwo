import route from "./router";

const routerList = [
  'hello', 'hi'
]

const routerArr = routerList.map(item => {
  return {
    path: `/${item}`,
    name: item,
    component: async () => await import(`./views/${item}/index`)
  }
})
console.log(routerArr)
export default [
  ...routerArr
]