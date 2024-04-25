document.addEventListener('DOMContentLoaded', function() {
    var hobbiesLink = document.getElementById('hobbies-link');
    var dropdownContent = document.getElementById('dropdown-content');
    var dropdownVisible = false;  // Track visibility of dropdown

    hobbiesLink.addEventListener('click', function(event) {
        // Prevent the default link behavior on the first click
        if (!dropdownVisible) {
            event.preventDefault();
            // Show the dropdown menu
            dropdownContent.style.display = 'block';
            dropdownVisible = true;
        } else {
            // Allow navigation to the hobbies page on the second click
            dropdownContent.style.display = 'none';
            dropdownVisible = false;
        }
    });
});