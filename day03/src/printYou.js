export const printYou = () => {
  import('lodash').then(({ default: _ }) => {
    console.log('printYou', _.join(['You', 'are', 'so', 'beautiful'], ' '));
  })
}