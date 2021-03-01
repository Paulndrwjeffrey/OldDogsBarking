var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var charSet = '';
  var lowers = 'abcdefghijklmnopqrstuvwxyz';
  var uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numSet = '0123456789';
  var spSet = '!"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';
  var password = '';
  var L = prompt ('How many characters?');
  if (L < 8 || L > 128 ) {
    alert ('Sorry between 8 and 128 characters only');
    return generatePassword();
  } 
  var I = prompt ('Lower-case letters? \n y/n?')
    if (I == 'y' ) {
      charSet.concat(charSet += lowers);
    }
  var T = prompt ('Upper-case letters? \n y/n?')
    if (T == 'y') {
      charSet.concat(charSet += uppers);
    }
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
    if (I == 'n' && T == 'n' && u == '')

      for (i=0; i<L; i++) {
      var Y = Math.floor(Math.random()*charSet.length);
      password += charSet.charAt(Y); 
      }
      console.log(charSet);
      return password;
}

generateBtn.addEventListener("click", writePassword);


