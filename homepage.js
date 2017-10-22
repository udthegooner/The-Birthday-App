/* attach a submit handler to the form */
$("#formid").submit(function(event) {

  /* stop form from submitting normally */
  event.preventDefault();

  /* get the action attribute from the <form action=""> element */
  var $form = $( this ),
      url = $form.attr( 'action' );
  /* Send the data using post with element id name and name2*/
  var posting = $.post( url, { name: $('#namespace').val() } );

  /* Alerts the results */
  posting.done(function( data ) {
	var added = "<h3> When is " + data + "'s birthday?"
   document.getElementById("innerForm").innerHTML = added;
  });
});