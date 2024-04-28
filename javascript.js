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




document.addEventListener('DOMContentLoaded', function() {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    var slideIndex = 1; // Start with the first slide
    var slideInterval;

    // Function to show a specific slide
    function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  // If n is greater than the number of slides, wrap around to the first slide
  if (n > slides.length) {slideIndex = 1;}
  // If n is less than 1, wrap around to the last slide
  if (n < 1) {slideIndex = slides.length;}

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // Remove "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and mark the dot as active
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

    // Auto cycling function
    function autoSlide() {
        slideInterval = setInterval(function() {
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1;}  // Ensure the slideIndex wraps correctly
            showSlides(slideIndex);
        }, 10000); // Change image every 3000 milliseconds (3 seconds)
    }

    // Button and dot controls for manual slide navigation
    function plusSlides(n) {
        clearInterval(slideInterval); // Stop auto-cycling when user clicks next/prev
        showSlides(slideIndex += n);
        autoSlide(); // Restart auto-cycling
    }

    function currentSlide(n) {
        clearInterval(slideInterval); // Stop auto-cycling when user selects a specific dot
        showSlides(slideIndex = n);
        autoSlide(); // Restart auto-cycling
    }

    // Expose the controls globally if needed
    window.plusSlides = plusSlides;
    window.currentSlide = currentSlide;

    // Initialize the slideshow
    showSlides(slideIndex);
    autoSlide();

    // Dropdown Menu Functionality
    var hobbiesLink = document.getElementById('hobbies-link');
    var dropdownContent = document.getElementById('dropdown-content');
    var dropdownVisible = false;

    hobbiesLink.addEventListener('click', function(event) {
        if (!dropdownVisible) {
            event.preventDefault();
            dropdownContent.style.display = 'block';
            dropdownVisible = true;
        } else {
            dropdownContent.style.display = 'none';
            dropdownVisible = false;
        }
    });
});