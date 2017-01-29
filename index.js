//DOM redy event 


$(function() {
  $('#btn').click(function(e){
    e.preventDefault();
    var str = $('#inpt').val();
    var res = str.split(' ').reverse().join(' ');
    $('#result').html(res);
    $('p').addClass('done');
  })
 /* btn.addEventListener('click', function(e) {
    e.preventDefault(); // prevent form submission
    var str = inpt.value; // read value from input with id="str"
    var res = str.split(' ').reverse().join(' '); // reverse symbols in a string
    result.innerHTML = res; // write result to span with is="result"
  });*/
})
