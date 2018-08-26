$(".messages").animate({
	scrollTop : $(document).height()
}, "fast");

$("#profile-img").click(function() {
	$("#status-options").toggleClass("active");
});

$(".expand-button").click(function() {
	$("#profile").toggleClass("expanded");
	$("#contacts").toggleClass("expanded");
});

$("#status-options ul li").click(function() {
	$("#profile-img").removeClass();
	$("#status-online").removeClass("active");
	$("#status-away").removeClass("active");
	$("#status-busy").removeClass("active");
	$("#status-offline").removeClass("active");
	$(this).addClass("active");

	if ($("#status-online").hasClass("active")) {
		$("#profile-img").addClass("online");
	} else if ($("#status-away").hasClass("active")) {
		$("#profile-img").addClass("away");
	} else if ($("#status-busy").hasClass("active")) {
		$("#profile-img").addClass("busy");
	} else if ($("#status-offline").hasClass("active")) {
		$("#profile-img").addClass("offline");
	} else {
		$("#profile-img").removeClass();
	}
	;

	$("#status-options").removeClass("active");
});
$('#select').click(function() {
	$("#sentBox").show();
});
function fetchdata() {
	$
			.ajax({
				url : 'https://reqres.in/api/users/2',
				type : 'get',
				success : function(response) {
					// Perform operation on the return value
					$(
							'<li class="replies"><img src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" /><p>'
									+ response
									+ '</p></li> <input type="checkbox" class="chk" style="display:none";>')
							.appendTo($('.messages ul'));
					$('.contact.active .preview').html(
							'<span>You: </span>' + response);
					$(".messages").animate({
						scrollTop : $(document).height()
					}, "fast");
					// alert(response);
				}
			});
}

$(document).ready(function() {
	setInterval(fetchdata, 5000);
});
function newMessage() {
	message = $(".message-input input").val();
	if ($.trim(message) == '') {
		return false;
	}
	$(
			'<li class="sent"><img src="http://emilcarlsson.se/assets/mikeross.png" alt="" /><p>'
					+ message
					+ '</p></li> <input type="checkbox" class="chk" style="display:none";>')
			.appendTo($('.messages ul'));
	$('.message-input input').val(null);
	$('.contact.active .preview').html('<span>You: </span>' + message);
	// $(".messages").animate({ scrollTop: $(document).height() }, "fast");
	$(".messages").animate({
		scrollTop : $(document).height()
	}, "fast");
};

$('.submit').click(function() {
	newMessage();
});

$(window).on('keydown', function(e) {
	if (e.which == 13) {
		newMessage();
		return false;
	}
});
$(document).ready(
		function() {

			$(".chk").hide();
			$("#toggleDone").css('display', 'none');

			$("#toggle").click(function() {
				$(".chk").toggle();

				$("#toggleDone").toggle();
			});

			var span = document.getElementsByClassName("close")[0];

			$("#toggleDone").click(
					function() {
						$("#modalContent").load(
								"html/forward.html",
								function(response, status, xhr) {
									if (status == "error") {
										var msg = "There was an error: ";
										alert(msg + xhr.status + " "
												+ xhr.statusText);
										
									}
									$("#buttonClass").click(function() {
										console.log("buttonclassclicked");
										getValueUsingClass();
									});

								});
					});
		});


function getValueUsingClass() {
	/* declare an checkbox array */
	var chkArray = [];

	/*
	 * look for all checkboes that have a class 'chk' attached to it and check
	 * if it was checked
	 */
	$(".chk:checked").each(function() {
		chkArray.push($(this).val());
	});

	/* we join the array separated by the comma */
	var selected;
	selected = chkArray.join(',');
	copyToClip(selected);
	/*
	 * check if there is selected checkboxes, by default the length is 1 as it
	 * contains one single comma
	 */
	if (selected.length > 0) {
		alert("You have selected " + selected);
	} else {
		alert("Please at least check one of the checkbox");
	}
}
function CopyToClipboard(containerid) {
	if (document.selection) {
		var range = document.body.createTextRange();
		range.moveToElementText(document.getElementById(containerid));
		range.select().createTextRange();
		document.execCommand("copy");

	} else if (window.getSelection) {
		var range = document.createRange();
		range.selectNode(document.getElementById(containerid));
		window.getSelection().addRange(range);
		document.execCommand("copy");
		alert("text copied")
	}
}
function copyToClip(str) {
	function listener(e) {
		e.clipboardData.setData("text/html", str);
		e.clipboardData.setData("text/plain", str);
		e.preventDefault();
	}
	document.addEventListener("copy", listener);
	document.execCommand("copy");
	document.removeEventListener("copy", listener);
};
// # sourceURL=pen.js
