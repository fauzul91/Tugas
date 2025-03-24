function validateForm() {
    let nama = document.getElementById("nama").value.trim();
    let usia = document.getElementById("usia").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    if (nama === "" || usia === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Semua kolom harus diisi!");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Password dan konfirmasi password tidak cocok!");
        return false;
    }

    if (usia < 1) {
        alert("Usia harus lebih dari 0!");
        return false;
    }

    alert("Registrasi berhasil!");
    return true;
}
