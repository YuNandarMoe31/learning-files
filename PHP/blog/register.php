<?php

include_once './init.php';

$errors = [];


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    if (!$name) {
        $errors['name'] = 'The name is required';
    }
    if (!$email) {
        $errors['email'] = 'The email is required';
    }
    if (!$password) {
        $errors['password'] = 'The password is required';
    }

    if (count($errors) == 0) {
        $sql = "INSERT INTO users (`name`, `email`, `password`) VALUES ('$name', '$email', '$password')";
        $result = mysqli_query($conn, $sql);

        if ($result) {
            redirect('login.php');
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
                    Register
                </div>
                <div class="card-body">
                    <form action="" method="POST">
                        <div class="form-group">
                            <div class="mt-3">
                                <label for="name" class="form-label">name</label>
                                <input type="name" name="name" class="form-control <?php if (isset($errors['name'])) : ?> is-invalid <?php endif; ?>" placeholder="Enter name">
                                <?php if (isset($errors['name'])) : ?>
                                    <div class="invalid-feedback"><?php echo $errors['name']; ?></div>
                                <?php endif; ?>
                            </div>
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
                                <button type="submit" class="w-100 btn btn-primary">register</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<?php include './footer.php' ?>