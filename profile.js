
// JavaScript for tab switching functionality
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');

        // Deactivate all tabs
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });

        // Activate the clicked tab
        button.classList.add('active');

        // Hide all tab content sections
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });

        // Show the selected tab content
        document.getElementById(targetTab).classList.add('active');
    });
});

// JavaScript to simulate "Follow" button click
document.getElementById('followButton').addEventListener('click', function() {
    this.disabled = true;
    this.textContent = "Following";
    this.style.backgroundColor = "#28a745";
});
 