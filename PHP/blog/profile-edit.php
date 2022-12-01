<?php

include_once './init.php';

$id = $_SESSION['auth']['id'];
$sql = "SELECT * FROM users WHERE id='$id'";
$result =  mysqli_query($conn, $sql);

$user = mysqli_fetch_assoc($result);

$errors = [];

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $name = $_POST['name'];
  $password = $_POST['password'];

  if (!$name) {
    $errors['name'] = 'The name is required';
  } 


  if (count($errors) == 0) {
    $sql = "UPDATE users SET `name`='$name', `password`='$password' where `id`='$id'";
    $result = mysqli_query($conn, $sql);

    redirect('profile-edit.php');
  }

}

?>

<?php include './header.php' ?>

<?php include './navbar.php' ?>

<div class="container">
  <div class="row justify-content-center mt-5">
    <div class="col-6">
      <div class="card">
        <div class="card-body">
          <form action="" method="POST">
            <div class="form-group">
              <div class="mt-3">
                <label for="name" class="form-label">Name</label>
                <input type="name" name="name" class="form-control <?php if (isset($errors['name'])) : ?> is-invalid <?php endif; ?>" placeholder="Enter name"  value="<?php echo $user['name'] ?>">
                <?php if (isset($errors['name'])) : ?>
                  <div class="invalid-feedback"><?php echo $errors['name']; ?></div>
                <?php endif; ?>
              </div>
              <div class="mt-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" name="password" class="form-control <?php if (isset($errors['password'])) : ?> is-invalid <?php endif; ?>" placeholder="Enter password">
                <?php if (isset($errors['password'])) : ?>
                  <div class="invalid-feedback"><?php echo $errors['password']; ?></div>
                <?php endif; ?>
              </div>
              <div class="mt-4 d-flex justify-content-between">
                <button type="submit" class="btn btn-primary">Update</button>
                <a href="/profile.php" class="btn btn-secondary">Cancel</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

<?php include './footer.php' ?>