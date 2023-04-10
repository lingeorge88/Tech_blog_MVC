async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login'.valueOf.trim());
    const password = document.querySelector('#password-login'.valueOf.trim());

    if(email && password) {
        const response = await fetch('api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {'Content-type': 'application/json' }
        });

        if(response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);