/** 
* -----------------------------------------------------
* Document Ready Function
* -----------------------------------------------------
*/
$(document).ready(function() {
    allUsers();
})

/** 
* -----------------------------------------------------
* All User Function
* -----------------------------------------------------
*/
function allUsers() {
    let url = '/all-users';
    fetch(url)
    .then(response => response.text())
    .then(userTable => {
        $('#user-table').html(userTable);
    });
}

/** 
* -----------------------------------------------------
* Store User Function
* -----------------------------------------------------
*/
function storeUser() {
    let name = $('#create-name').val();
    let email = $('#create-email').val();

    $.ajax({
        url: '/users',
        type: "POST",
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf_token"]').attr('content')},
        data: {
            name,
            email,
        },
        dataType: "json",
        success: function () {
            $('#create-user-modal').modal('hide');
            allUsers();
        },
        error: function (response) {
            if(response.responseJSON.errors.name) {
                $('#create-name').addClass('is-invalid');
                $('#create-name-error').text(response.responseJSON.errors.name);
            }

            if(response.responseJSON.errors.email) {
                $('#create-email').addClass('is-invalid');
                $('#create-email-error').text(response.responseJSON.errors.email);
            }
        }
    });
}

/** 
*-----------------------------------------------------
* Get Edit User Function
*-----------------------------------------------------
*/
function editUser(el) {
    let id  = $(el).attr('data-id');
    $("#edit-user-id").val(id);

    $.ajax({
        url: `/users/${id}/edit`,
        type: "GET",
        success: function(response) {
            $("#edit-name").val(response.name);
            $("#edit-email").val(response.email); 
        }
    });
}

/** 
*-----------------------------------------------------
* Update User Function
*-----------------------------------------------------
*/
function updateUser() {
    let id  = $('#edit-user-id').val();
    let name = $('#edit-name').val();
    let email = $('#edit-email').val();

    $.ajax({
        url: `/users/${id}`,
        type: "PUT",
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf_token"]').attr('content')},
        data: {
            name,
            email,
        },
        dataType: "json",
        success: function () {
            allUsers();
            $('#edit-user-modal').modal('hide');
        },
        error: function (response) {
            if(response.responseJSON.errors.name) {
                $('#edit-name').addClass('is-invalid');
                $('#edit-name-error').text(response.responseJSON.errors.name);
            }

            if(response.responseJSON.errors.email) {
                $('#edit-email').addClass('is-invalid')
                $('#edit-email-error').text(response.responseJSON.errors.email);
            }
        }
    });
}

/** 
*-----------------------------------------------------
* Get Delete User Function
*-----------------------------------------------------
*/
function getDeleteUser(el) {
    let id  = $(el).attr('data-id');
    $('#delete-user-id').val(id);
}

/** 
*-----------------------------------------------------
* Destroy User Function
*-----------------------------------------------------
*/
function destroyUser() {
    let id = $('#delete-user-id').val();

    $.ajax({
        url: `/users/${id}`,
        type: 'DELETE',
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf_token"]').attr('content')},
        success: function(response) {
            allUsers();
            $('#delete-user-modal').modal('hide');
        }
    });
}

/** 
*-----------------------------------------------------
* Search User Function
*-----------------------------------------------------
*/
function searchUser() {
    let url = '/all-users?search_user=' + $('#search-user').val();
    fetch(url)
    .then(response => response.text())
    .then(userTable => {
        console.log(userTable)
        $('#user-table').html(userTable);
    });
}

/** 
*-----------------------------------------------------
* Close Create Modal
*-----------------------------------------------------
*/
$('#create-user-modal').on('hidden.bs.modal', function () {
    $('#create-name').val('');
    $('#create-email').val('');
    $('#create-name').removeClass('is-invalid');
    $('#create-email').removeClass('is-invalid');
});

/** 
*-----------------------------------------------------
* Close Edit Modal
*-----------------------------------------------------
*/
$('#edit-user-modal').on('hidden.bs.modal', function () {
    $('#edit-name').val('');
    $('#edit-email').val('');
    $('#edit-name').removeClass('is-invalid');
    $('#edit-email').removeClass('is-invalid');
});
