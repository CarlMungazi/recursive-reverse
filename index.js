module.exports = function recursiveReverse(str) {
  if (str === '') return ''; // base and terminal case
  return recursiveReverse(str.substr(1)) + str[0];
}