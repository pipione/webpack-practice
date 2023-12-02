function testThisAlert(date) {
  return util.dateFormater(date, 'yyyy-MM-dd hh:mm:ss');
}
let v = testThisAlert(new Date());
console.log(v);
