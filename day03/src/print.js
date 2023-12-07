
export const printMe = () => {
  import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
    console.error('I get called from print.js!', _.join(['Hello', 'webpack'], ' '));
  })
}