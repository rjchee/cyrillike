TABLE = {
  'a': '\u0430',
  'e': '\u0435',
  'o': '\u043E',
  'p': '\u0440',
  'c': '\u0441',
  'y': '\u0443',
  'x': '\u0445',
  's': '\u0455',
  'i': '\u0456',
  'j': '\u0458',
  'd': '\u0501',
  'A': '\u0410',
  'B': '\u0412',
  'E': '\u0415',
  'K': '\u041A',
  'M': '\u041C',
  'H': '\u041D',
  'O': '\u041E',
  'P': '\u0420',
  'C': '\u0421',
  'T': '\u0422',
  'X': '\u0425',
  'S': '\u0405',
  'I': '\u0406',
  'J': '\u0408',
  'Y': '\u04AE'
};

function convert(s) {
  var result = "";
  for (var i = 0; i < s.length; i++) {
    var ch = s.charAt(i);
    if (ch in TABLE) {
      result += TABLE[ch];
    } else {
      result += ch;
    }
  }
  console.log(result);
  return result;
}

document.addEventListener("DOMContentLoaded", function(event) {
  var form = document.getElementById("form");
  var output = document.getElementById("output");
  form.onsubmit = function (e) {
    var input = document.getElementById("input");
    output.value = convert(input.value);

    return false;
  };
  output.onclick = function(e) {
    this.select();
  };
  var outputForm = document.getElementById("output-form");
  outputForm.onsubmit = function (e) {
    output.select();
    document.execCommand('copy');
    return false;
  }
});
