btn.addEventListener('click', function(e) {
  var str = inpt.value;  // read value from input with id="str"
  var res = str.split('').reverse().join(''); // reverse symbols in a string
  result.innerHTML = res; // write result to span with is="result"
  e.preventDefault(); // prevent form submission
});
