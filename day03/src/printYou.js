export const printYou = () => {

  import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
    console.log('printYou', _.join(['You', 'are', 'so', 'beautiful'], ' '));
  })
}