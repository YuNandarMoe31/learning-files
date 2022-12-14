<?php

include_once './init.php';

$errors = [];

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $email = $_POST['email'];
    $password = $_POST['password'];

    if (!$email) {
        $errors['email'] = 'The email is required';
    }
    if (!$password) {
        $errors['password'] = 'The password is required';
    }

    if (count($errors) == 0) {
        $sql = "SELECT * FROM users WHERE `email`='$email' and `password`='$password'";
        $result = mysqli_query($conn, $sql);

        if ($user = mysqli_fetch_assoc($result)) {
            $_SESSION['auth'] = [
                'id' => $user['id'],
                'name' => $user['name'],
                'email' => $user['email'],
            ];
            redirect('index.php');
        }
    }
}



?>

<?php include './header.php' ?>
<div class="container">
    <div class="row justify-content-center mt-5">
        <div class="col-6">
            <div class="card">
                <div class="card-header">
                    Login
                </div>
                <div class="card-body">
                    <form action="" method="POST">
                        <div class="form-group">
                            <div class="mt-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" name="email" class="form-control <?php if (isset($errors['email'])) : ?> is-invalid <?php endif; ?>" placeholder="Enter email">
                                <?php if (isset($errors['email'])) : ?>
                                    <div class="invalid-feedback"><?php echo $errors['email']; ?></div>
                                <?php endif; ?>
                            </div>
                            <div class="mt-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" name="password" class="form-control <?php if (isset($errors['password'])) : ?> is-invalid <?php endif; ?>" placeholder="Enter password">
                                <?php if (isset($errors['password'])) : ?>
                                    <div class="invalid-feedback"><?php echo $errors['password']; ?></div>
                                <?php endif; ?>
                            </div>
                            <div class="mt-4">
                                <button type="submit" class="w-100 btn btn-primary">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<?php include './footer.php' ?>