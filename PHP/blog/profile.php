<?php

include_once './init.php';

if (!isset($_SESSION['auth'])) {
  redirect('login.php');
}


?>

<?php include './header.php' ?>

<?php include './navbar.php' ?>

<div class="container">
  <div class="row justify-content-center mt-5">
    <div class="col-6">
      <div class="card">
        <div class="card-body p-0">
          <ul class="list-group">
            <li class="list-group-item">
              Name: <?php echo $_SESSION['auth']['name'] ?>
            </li>
            <li class="list-group-item">
              Email: <?php echo $_SESSION['auth']['email'] ?>
            </li>
          </ul>
        </div>
        <div class="card-footer">
          <a href="/profile-edit.php" class="btn btn-success">Edit</a>
        </div>
      </div>
    </div>
  </div>
</div>

<?php include './footer.php' ?>