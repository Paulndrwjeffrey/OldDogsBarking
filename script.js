function generatePassword() {
  var L = prompt ('How many characters?');
  var password = '';
  var charSet = 'abcdefghijklmnopqrstuvwxyz';
  var charSetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numSet = '0123456789';
  var spSet = '~!@#$%^&*';
  
  for (i=0; i<L; i++) {
    var Y = Math.floor(Math.random()*charSet.length);
    password += charSet.charAt(Y); 
  }
  return password;
}

console.log(generatePassword());

