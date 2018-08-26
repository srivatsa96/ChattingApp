/*
 * Specifications of User Object
 * {
 * 	userId:
 * 	userName: 
 * 	emailId:
 *  dateOfBirth:
 *  mobileNo: 
 *  password: 
 *  active: 
 * 	...
 * }
 */

//TODO : Just Mock data to be removed

mockUser = {
	"userId": 1,
  	"userName": "Srivatsa",
  	"emailId": "srivatsasinha@gmail.com",
    "dateOfBirth": "1997-08-17",
    "mobileNo": 9955959684,
    "password": "XYZ",
    "active": 	true 	
}

currentUser = {
	"userId": 2,
  	"userName": "Aman",
  	"emailId": "aman@gmail.com",
    "dateOfBirth": "1997-08-19",
    "mobileNo": 9955959684,
    "password": "XDZ",
    "active": 	true 	
}


currentOpenedChatGroup = {
		"chatGroupId" : 1,
		"chatGroupName" : "ABC",
		"chatGroupMembers" : [mockUser],
		"chatGroupAdmins": [currentUser]
}

function GroupManagement() {

	var groupManagementDao = new GroupManagementDao();
	
	var users = [];

	var init = function() {
		attachListners();
	}
	
	var attachListners = function() {
		// All listeners attached to a any element goes here
		$(".contact-profile").click(loadGroupDetails);
		$("#addNew").on('click',loadCreateGroupModal);
		$("#nameSearchBar").attr({
			'onkeyup' : searchByNameForAddingMembers
		});
		
	}
	
	var createGroup = function() {
		
		var newGroupData = {}
		// Assuming that value of list corresponds to index in users
		newGroupData['groupName'] = $("#groupName").val();
		newGroupData['groupMemebers'] = [];
		newGroupData["creator"] = currentUser;
		$("#memebersToBeAddedToGroup li").each(function(i,x) {
			if(i!=0) {
				newGroupData['groupMemebers'].push($(this).attr("data-memberId"));
			}
		})
		//newGroupData['groupMemebers'] = JSON.stringify(newGroupData['groupMemebers']);
		console.log(newGroupData);
		groupManagementDao.createGroup(newGroupData);
	}
	

	var loadCreateGroupModal = function(selectedMemebersToBeAddedToTheGroup) {
		$("#modalContent").load('html/new_group.html', function() {
			/* 
			 * After Loading Create New Group Modal
			 * We attach handlers specific to that page
			*/
			
			if(!Array.isArray(selectedMemebersToBeAddedToTheGroup)) {
				 selectedMemebersToBeAddedToTheGroup = []
				 selectedMemebersToBeAddedToTheGroup.push(currentUser/*getCurrentChatUserAttribute();*/)
			}
			
			
			
			selectedMemebersToBeAddedToTheGroup = getSelectedMemeberToAddToGroup(selectedMemebersToBeAddedToTheGroup);
			
            $.each(selectedMemebersToBeAddedToTheGroup, function(idx,member){
				$("#memebersToBeAddedToGroup").append('<li class="list-group-item" data-memberId='+member["userId"]+'>'+member["userName"]+'</li>')
			})

			
			$("#btnAddMemeber").click(function() {
				/*
				 * After Clicking ADD Members Button
				 */
				
				$("#modalContent").load("html/add_members.html",function(){
					/*
					 * After opening add_member modal
					 */
					$("#btnAddSelectedMemberToList").click(function() {
						
						selectedMemebersToBeAddedToTheGroup = getSelectedMemeberToAddToGroup(selectedMemebersToBeAddedToTheGroup);
						console.log(selectedMemebersToBeAddedToTheGroup);
						loadCreateGroupModal(selectedMemebersToBeAddedToTheGroup);
					
					});
					
					/* Populate the list of Users which can be added */
					loadUserList();
			})});
			
			$("#btnCreateGroup").on('click',createGroup)

		});
	};
	
	var loadGroupDetails = function() {
		
		/*
		 * I am taking the information of current group from Danish
		 * "currentOpenedChatGroup"
		 */
		
		$("#modalContent").load("html/view_group_info.html", function() {
			
			var currentChatGroup = currentOpenedChatGroup;
			
			$("#group_name").text(currentChatGroup["chatGroupName"]);
			
			$('#profile_pic').attr('src', 'images/profile_pic.png');
			
			$("#groupNameChange").click(function() {
				// groupManagementDao.changeGroupName();
			});
			
			$('#group_name').bind('dblclick', function() {
				$(this).attr('contentEditable', true);
			});
			
			displayMemebersForCurrentGroup(currentChatGroup["chatGroupMembers"]);
			
			$('#btnExitGroup').on('click',function(){
				groupManagementDao.deleteContactById(currentOpenedChatGroup["chatGroupId"],currentUser["userId"]);
			})
			
			$("#btnDeleteGroup").on('click',function() {
				groupManagementDao.deleteCurrentOpenedGroupById(currentOpenedChatGroup["chatGroupId"]);
			})
			
			/* Access to Admin Controls */
			if(isCurrentUserAdmin()) {
				$(".admin").show()
			} else {
				$(".admin").hide()
			}
			
		})
	}

	var searchByNameForAddingMembers = function() {
		var input, filter, ul, li, a, i;
		input = document.getElementById("name");
		filter = input.value.toUpperCase();
		ul = document.getElementById("listOfUser");
		li = ul.getElementsByTagName("li");
		for (i = 0; i < li.length; i++) {
			a = li[i].getElementsByTagName("a")[0];
			if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
				li[i].style.display = "";
			} else {
				li[i].style.display = "none";
			}
		}
	}

	var displayMemebersForCurrentGroup = function(members) {
		
		var membersObj = document.getElementById("members");
		var innerHtmlString = "";
		for (var i = 0; i < members.length; i++) {
			innerHtmlString += "<tr><td>" + members[i]["userName"] + "</td>";
			innerHtmlString += "<td>" + members[i]["emailId"] + "</td>";
			innerHtmlString += "<td><button type='button' class='btn btn-danger admin' onclick='groupManagement.deleteContact("+i+")'>Delete</button></td></tr>"
		}
		
		membersObj.innerHTML = innerHtmlString;
	}

	var deleteContact = function(idx) {
		var status = confirm("You want to delete the member?");
		var memberToBeDeleted = currentOpenedChatGroup["chatGroupMembers"][idx]
		if (status) {
			groupManagementDao.deleteContactById(currentOpenedChatGroup["chatGroupId"],memberToBeDeleted["userId"]);
		}
		loadGroupDetails();
	}

	var loadUserList = function() {
		groupManagementDao.getAllUsers().then((returnedUsers)=>{
			users = returnedUsers;
			$.each(users,function(i, x) {
				$("#listOfUser").append('<li><a href="#">'+ users[i]["userName"]+ '<div class="wrapper"><input type="checkbox" class="cr" name="include" value='	+ i + '></div></li>');
				$("#divAddMembers").show();
			});
		});
		
	}
	
	var getSelectedMemeberToAddToGroup = function(selectedMemebers) {
		$.each($("input[name='include']:checked"), function() {
			selectedMemebers.push(users[$(this).val()]);
		});
		return selectedMemebers;
	}
	
	var isCurrentUserAdmin = function() {
		if(currentUser["userId"] == currentOpenedChatGroup["chatGroupAdmins"][0]["userId"]) {
			return true
		} else {
			return false;
		}
	}

	return {
		init : init,
		deleteContact : deleteContact,
	};
}

function GroupManagementDao() {
	
	
	var changeGroupName = function() {
		alert('Changing Name');
		// AJAX call to change user name
	}

	var getAllUsers = function() {
		alert('getting all users');
		return new Promise((resolve,reject)=>{
			$.ajax({
				  type: "GET",
				  url: '/search/chatuser/all',
				  data: dataToSend,
				  success: function(data) { 
					  resolve(data)
				  },
				  error: function() { 
					  alert('Could not fetch list of users');
				  },
				  dataType: "json"
			});
		});
		// AJAX for all users (Needs to be handled through Promises or Callback)
		/*users = [mockUser]
		return users*/
	}
	
	var createGroup = function(groupData) {
		alert('creating group');
		console.log(groupData);
		$.ajax({
			  type: "POST",
			  contentType : 'application/json; charset=utf-8',
			  dataType : 'json',
			  url: 'group/createGroup',
			  data: JSON.stringify(groupData),
			  success: function() { alert('Group Successfully Made'); },
			  error: function() { alert('Could not create the group'); },
		});
	}
	
	var deleteContactById = function(currentGroupChatId, memberIdForDeleting) {
		
		dataToSend = {
				"groupId": currentGroupChatId,
				"chatUserId" : memberIdForDeleting
		}
		
		$.ajax({
			  type: "POST",
			  url: 'group/deleteContactById',
			  data: dataToSend,
			  success: function() { alert('Contact Successfully Deleted'); },
			  error: function() { alert('Contact Deletion Failed'); },
			  dataType: "json"
		});
		
		getGroupById(currentOpenedChatGroup["chatGroupId"]).then((group)=>{
			currentOpenedChatGroup = group;
		});
		
	}
	
	var deleteCurrentOpenedGroupById = function(id) {
		
		dataToSend = {
			"groupId": id
		}
		
		$.ajax({
			  type: "POST",
			  url: 'group/deleteCurrentOpenedGroupById',
			  data: dataToSend,
			  success: function() { alert('Group Successfully Deleted'); },
			  error: function() { alert('Failed to delete'); },
			  dataType: "json"
		});
	}
	
	var getGroupById = function(id) {
		
		dataToSend = {
				"groupId": id
		}
		
		return new Promise((resolve,reject)=>{
			$.ajax({
				  type: "POST",
				  url: 'group/getGroupById',
				  data: dataToSend,
				  success: function(data) { 
					  resolve(data)
					  alert('Got the group data'); 
				  },
				  error: function() { alert('Failed to get'); },
				  dataType: "json"
			});
		});
	}
	
	return {
		deleteContactById : deleteContactById,
		deleteCurrentOpenedGroupById : deleteCurrentOpenedGroupById,
		getGroupById : getGroupById,
		getAllUsers : getAllUsers,
		changeGroupName : changeGroupName,
		createGroup : createGroup
	};
}

var groupManagement = new GroupManagement();

$(document).ready(function() {
	$("#groupChat").on('click',groupManagement.init);
});
