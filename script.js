// Navbar Dark Mode Toggle
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});

// Navbar Menu Toggle
const menuItems = document.querySelectorAll('.menu ul a');
menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        const checkbox = document.getElementById('check');
        checkbox.checked = false;
    });
});

// Scroll to Top
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});

// Events Filter
const eventFilters = document.querySelectorAll('.events_filter li');
const eventsWrapper = document.querySelector('.events_wrapper');

eventFilters.forEach(eventFilter => {
    eventFilter.addEventListener('click', function() {
        eventFilters.forEach(filter => {
            filter.classList.remove('events_filter_active');
        });
        this.classList.add('events_filter_active');
        const filterValue = this.getAttribute('data-filter');
        document.body.classList.remove('upcoming', 'past');
        document.body.classList.add(filterValue);
    });
});

document.querySelector('[data-filter="upcoming"]').click();

function toggleEvents() {
    const activeFilter = document.body.classList.value;
    const events = eventsWrapper.querySelectorAll('.events');
    events.forEach(event => {
        event.classList.add('hidden');
    });
}

window.addEventListener('load', toggleEvents);
window.addEventListener('resize', toggleEvents);

// Swiper for Events Slider
var swiper = new Swiper('.events-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
        invert: false,
    },
    pagination: {
        el: '.events-slider__pagination',
        clickable: true,
    }
});

// Projects Filter
$(document).on('click', '.projects_filter li', function() {
    $(this).addClass('projects_filter_active').siblings().removeClass('projects_filter_active');
});

$(document).ready(function() {
    $('.projects_list').click(function() {
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.projects_box').show('1000');
        } else {
            $('.projects_box').not('.' + value).hide('1000');
            $('.projects_box').filter('.' + value).show('1000');
        }
    });
});

// Contact Form Submission
$(document).ready(function() {
    $('#contact-form').submit(function(event) {
        event.preventDefault();
        var form = $(this);
        var url = form.attr('action');
        $('#loading').show();
        $.ajax({
            type: 'POST',
            data: {
                "full_name": document.getElementsByName('full_name')[0].value,
                "email": document.getElementsByName('email')[0].value,
                "message": document.getElementsByName('message')[0].value
            },
            url: 'form.php',
            success: function(response) {
                console.log(response);
                alert('Form submitted successfully!');
                document.getElementById("contact-form").reset();
                $('#loading').hide();
            },
            error: function(xhr, textStatus, errorThrown) {
                console.error(xhr.responseText);
                alert('Form submission failed. Please try again.');
                $('#loading').hide();
            }
        });
    });
});

// AOS Initialization
AOS.init({
    offset: 100,
});

// TYping ANima

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text"); // Target the <p> element
    const text = "ACM-XIM Chapter is a leading technical student chapter in XIM University, committed to inspiring young tech enthusiasts to explore the limitless potential of technology. With the support of the Association for Computing Machinery (ACM), the chapter has organized a range of exciting events in web development, IoT, AI, ML, Cloud Computing, and more. The chapter has quickly become a hub for innovation and learning in technology, attracting some of the brightest and most talented students from across the university."; // Your text
    let index = 0;

    function typeText() {
        if (index < text.length) {
            textElement.innerHTML = text.slice(0, index + 1) + '<span class="cursor">|</span>'; // Add cursor
            index++;
            setTimeout(typeText, 50); // Speed of typing (adjust if needed)
        } else {
            document.querySelector(".cursor").style.display = "none"; // Hide cursor when done
        }
    }

    typeText();
});
