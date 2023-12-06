import _ from 'lodash';
export const printMe = () => {
  console.error('I get called from print.js!', _.join(['Hello', 'webpack'], ' '));
}