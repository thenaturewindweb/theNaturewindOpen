$('#file-upload').change(function() {
	var i = $(this).prev('p').clone();
	var file = $('#file-upload')[0].files[0].name;
	$(this).prev('p').text(file);
  });