
$(function () {

  $("#divResetPassword").hide();
  $("#divConfirmPassword").hide();

  $("#btnUpdateProfile").click(function () {
    var confirmation = confirm("Do you want to update the profile");
    if (confirmation == true) {
      console.log("profile updated");
    }
    else {
      console.log("profile not updated");
    }
  });

  $("#btnResetPassword").click(function () {
    $("#divResetPassword").show();
    $("#divConfirmPassword").hide();
  });

  $("#btnDeactivateProfile").click(function () {
    $("#divConfirmPassword").show();
    $("#divResetPassword").hide();
  });

  $("#btnDeleteProfile").click(function () {
    $("#divConfirmPassword").show();
    $("#divResetPassword").hide();
  });

  $("#submitNewPassword").click(function () {
    var confirmation = confirm("Do you want to update the password?");
    if (confirmation == true) {
      console.log("password updated");
      $("#divResetPassword").hide();
      location.href = "chatapp.jsp";

    }
    else {
      console.log("password not updated");
    }
  });

  $("#submitConfirmPassword").click(function () {
    var confirmation = confirm("Do you confirm?");
    if (confirmation == true) {
      console.log("password updated");
      $("#divConfirmPassword").hide();
      location.href = "login.jsp";

    }
    else {
      console.log("password not updated");
    }
  });

  $("#btnClose").click(function () {
    location.href = "chatapp.jsp";
  });

  $("#btnMyProfile").click(function () {
    $("#modalContent").load("html/profile.html", function () {

    	  $("#btnUpdateProfile").click(function () {
    		    var confirmation = confirm("Do you want to update the profile");
    		    if (confirmation == true) {
    		      console.log("profile updated");
    		    }
    		    else {
    		      console.log("profile not updated");
    		    }
    		  });

    		  $("#btnResetPassword").click(function () {
    		    $("#divResetPassword").show();
    		    $("#divConfirmPassword").hide();
    		  });

    		  $("#btnDeactivateProfile").click(function () {
    		    $("#divConfirmPassword").show();
    		    $("#divResetPassword").hide();
    		  });

    		  $("#btnDeleteProfile").click(function () {
    		    $("#divConfirmPassword").show();
    		    $("#divResetPassword").hide();
    		  });

    		  $("#submitNewPassword").click(function () {
    		    var confirmation = confirm("Do you want to update the password?");
    		    if (confirmation == true) {
    		      console.log("password updated");
    		      $("#divResetPassword").hide();
    		      location.href = "chatapp.jsp";

    		    }
    		    else {
    		      console.log("password not updated");
    		    }
    		  });

    		  $("#submitConfirmPassword").click(function () {
    		    var confirmation = confirm("Do you confirm?");
    		    if (confirmation == true) {
    		      console.log("password updated");
    		      $("#divConfirmPassword").hide();
    		      location.href = "login.jsp";

    		    }
    		    else {
    		      console.log("password not updated");
    		    }
    		  });
	
    	
    	
      $("#divEditProfile").show();
      $("#divResetPassword").hide();
      $("#divConfirmPassword").hide();
      $("#user_name").attr('contenteditable', 'true');
      $("#phone").removeAttr('disabled');
      $("#dob").removeAttr('disabled');
      $("#gender").removeAttr('disabled');

      $("#user_name").text("Nishith");
      $("#email").text("abc@xyz.com");
      $("#phone").val("7042335885");
      $("#dob").val("1996-04-09");
      $("#gender").val("male");
      $('#profile_pic').attr('src', 'images/profile_pic.png');

    });
  });
  // .then(function () {

  //   $("#divEditProfile").show();
  //   $("#divResetPassword").hide();
  //   $("#divConfirmPassword").hide();
  //   $("#user_name").attr('contenteditable', 'true');
  //   $("#phone").removeAttr('disabled');
  //   $("#dob").removeAttr('disabled');
  //   $("#gender").removeAttr('disabled');

  //   $("#user_name").text("Nishith");
  //   $("#email").text("abc@xyz.com");
  //   $("#phone").val("7042335885");
  //   $("#dob").val("1996-04-09");
  //   $("#gender").val("male");
  //   $('#profile_pic').attr('src', 'images/profile_pic.png');

  // }).fail(function() {
  //   console.log( 'I fire if one or more requests failed.' );
  // });
  
  $("#divContactProfile").click(function () {
	    $("#modalContent").load("html/profile.html", function (response, status, xhr) {
	    	if (status == "error") {
	    	    var msg = "There was an error: ";
	    	    alert(msg + xhr.status + " " + xhr.statusText);
	    	  }
	      $("#divEditProfile").hide();
	      $("#divResetPassword").hide();
	      $("#divConfirmPassword").hide();
	      $("#user_name").attr('contenteditable', 'false');
	      $("#phone").attr('disabled', 'disabled');
	      $("#dob").attr('disabled', 'disabled');
	      $("#gender").attr('disabled', 'disabled');

	      $("#user_name").text("Kalash");
	      $("#email").text("iii@xyz.com");
	      $("#phone").val("9999999999");
	      $("#dob").val("1998-04-03");
	      $("#gender").val("male");
	      $('#profile_pic').attr('src', 'images/profile_pic.png');

	    });

	  });
  
  $("#btnOtherProfile").click(function () {
    $("#modalContent").load("html/profile.html", function (response, status, xhr) {
    	if (status == "error") {
    	    var msg = "There was an error: ";
    	    alert(msg + xhr.status + " " + xhr.statusText);
    	  }
      $("#divEditProfile").hide();
      $("#divResetPassword").hide();
      $("#divConfirmPassword").hide();
      $("#user_name").attr('contenteditable', 'false');
      $("#phone").attr('disabled', 'disabled');
      $("#dob").attr('disabled', 'disabled');
      $("#gender").attr('disabled', 'disabled');

      $("#user_name").text("Kalash");
      $("#email").text("iii@xyz.com");
      $("#phone").val("9999999999");
      $("#dob").val("1998-04-03");
      $("#gender").val("male");
      $('#profile_pic').attr('src', 'images/profile_pic.png');

    });

  });

  $("#btnLogout").click(function () {
    location.href = "login.html";
  });

  $("#btnLogin").click(function () {
    location.href = "chatapp.jsp";
  });

  $("#btnSignUp").click(function () {
	  console.log("btn click");
    $("#modalContent").load("html/register.html", function (response, status, xhr) {
    	console.log("loaded");
    	if (status == "error") {
    	    var msg = "There was an error: ";
    	    alert(msg + xhr.status + " " + xhr.statusText);
    	  }
    	
    });
  });

  
});


