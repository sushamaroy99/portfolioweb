// JavaScript for handling the sidebar toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    const cross = document.querySelector('.cross');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            sidebar.classList.toggle('sidebarGo');
            // Toggle the sidebar visibility
            if (sidebar.classList.contains('sidebarGo')) {
                sidebar.style.transform = 'translateX(0)';
            } else {
                sidebar.style.transform = 'translateX(-100%)';
            }
        });
    }

    if (cross) {
        cross.addEventListener('click', function() {
            sidebar.classList.remove('sidebarGo');
            sidebar.style.transform = 'translateX(-100%)';
        });
    }
});
