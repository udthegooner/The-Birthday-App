$('input').keydown(function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();
		var x = document.getElementById("formid");
		var data = {data: x.elements[0].value};
		var template = $("#form-template").html();
		var html = Mustache.render(template, data);
		$("#formid").append(html);
		$('#date_field').focus();
        return false;
    }
});

$("#formid").submit(function(event) {

	// stop form from submitting normally
	event.preventDefault();
	
	// get the action attribute from the <form action=""> element 
	var $form = $( this ),
		url = $form.attr( 'action' );
	// Send the data using post with element id name and name2
	var posting = $.post( url, { name: $('#name_field').val(), date: $('#date_field').val() } );

	// Alerts the results
	posting.done(function( data ) {
		$('.form').html("<h1>Success!</h1>");
	});
});
