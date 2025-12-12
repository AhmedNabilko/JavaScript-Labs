function getCookie(cookieName) {
    let cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        let parts = cookies[i].split("=");
        if (parts[0] == cookieName) {
            return parts[1];
        }
    }
    return null;
}

document.addEventListener('DOMContentLoaded', function () {
    var raw = getCookie('registration');
    var msg = document.getElementById('message');
    var stored = document.getElementById('stored');

    if (raw) {
        var data;
        try {
            data = JSON.parse(raw);
        } catch (e) {
            stored.textContent = 'Could not parse saved data.';
            return;
        }

        msg.textContent = 'Thank you, ' + data.fullName + ' for registering in our website';
        stored.innerHTML = '<strong>Saved data:</strong><br>Email: ' + data.email + '<br>City: ' + data.city;
    } else {
        msg.textContent = 'No registration data found.';
    }

    var demo = document.getElementById('demo');
    var it = document.getElementById('it');
    var tc = document.getElementById('tc');
    if (demo && it && tc) {
        it.textContent = 'innerText: ' + demo.innerText;
        tc.textContent = 'textContent: ' + demo.textContent;
    }
});
