import axios from 'axios';
export const printMe = () => {
  axios.get('/api/user').then(res => {
    console.log('printMe', res);
  }).catch(err => {
    console.log('printMe', err);
  })
  import('lodash').then(({ default: _ }) => {
    console.error('I get called from print.js!', _.join(['Hello', 'webpack'], ' '));
  })
}