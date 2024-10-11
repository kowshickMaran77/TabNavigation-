// Select all tab buttons
const tabButtons = document.querySelectorAll('.tab-button');

// Select all tab contents
const tabContents = document.querySelectorAll('.tab-content');

// Add click event to each tab button
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add 'active' class to the clicked button
        button.classList.add('active');

        // Hide all tab contents
        tabContents.forEach(content => {
            content.classList.remove('active-content');
        });

        // Show content related to the clicked tab
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active-content');
    });
});
