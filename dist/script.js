document.addEventListener('DOMContentLoaded', function() {
    console.log("Document is ready");
});
document.querySelector('.nav-toggle').addEventListener('click', function () {
    document.querySelector('nav ul').classList.toggle('active');
});
document.querySelector('.nav-toggle').addEventListener('click', function () {
    document.querySelector('nav ul').classList.toggle('active');
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    if (name === '' || email === '' || message === '') {
        event.preventDefault();
        alert('すべてのフィールドを入力してください。');
    }
});
