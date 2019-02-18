/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var triangle = 0,
      _ = preferences;
  for (var i = 0; i < preferences.length; i++) {
    if ( _[_[_[i]-1]-1]-1 === i && _[_[i]-1] !== _[i]) {
      triangle++;
    } 
  }
  return triangle/3;
};
