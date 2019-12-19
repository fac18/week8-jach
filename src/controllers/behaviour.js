module.exports = array => {
  const totalGoodPoints = array.reduce((acc, currNum) => {
    return acc + parseInt(currNum);
  }, 0);
  return totalGoodPoints;
};
