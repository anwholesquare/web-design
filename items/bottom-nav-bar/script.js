function SwitchToHome() {
    const home = document.getElementById('Home');
    const search = document.getElementById('Search');
    const profile = document.getElementById('Profile');

    home.classList.add('active');
    search.classList.remove('active');
    profile.classList.remove('active');
}

function SwitchToSearch() {
    const home = document.getElementById('Home');
    const search = document.getElementById('Search');
    const profile = document.getElementById('Profile');

    search  .classList.add('active');
    home.classList.remove('active');
    profile.classList.remove('active');
}

function SwitchToProfile() {
    const home = document.getElementById('Home');
    const search = document.getElementById('Search');
    const profile = document.getElementById('Profile');

    profile.classList.add('active');
    search.classList.remove('active');
    home.classList.remove('active');
}