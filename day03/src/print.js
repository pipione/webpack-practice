export const printMe = () => {
  import('lodash').then(({ default: _ }) => {
    console.error('I get called from print.js!', _.join(['Hello', 'webpack'], ' '));
  })
}