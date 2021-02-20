
function generatePassword() {
  var charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numSet = '0123456789';
  var spSet = '~!@#$%^&*';
  var password = '';
  var L = prompt ('How many characters?');
  var U = prompt ('want some numbers? \n y/n?')
    if (U == 'y') {
      charSet.concat(charSet += numSet);
      console.log(charSet);
    }
  var V = prompt ('Special Characters? \n y/n?')
    if (V == 'y') {
      charSet.concat(charSet += spSet);
      console.log(charSet);
    } 
      for (i=0; i<L; i++) {
      var Y = Math.floor(Math.random()*charSet.length);
      password += charSet.charAt(Y); 
      }
      console.log(charSet);
      return password;
}

console.log(generatePassword());

