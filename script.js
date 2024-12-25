// Function to show the popup
function showPopup() {
    document.getElementById('popup').style.display = 'block';
}

// Function to close the popup and redirect
function closePopup() {
    document.getElementById('popup').style.display = 'none';
    window.location.href = "https://gifft.me/o/xb/lcdfpouxg88zbjbot41imsk7"; // Replace with your desired URL
}

// Add event listener for clicks to show the popup
document.body.addEventListener('click', showPopup);

// Detect device type and adjust popup styles
function adjustPopupForDevice() {
    const width = window.innerWidth;
    const popup = document.getElementById('popup');

    // For smaller devices (like phones), reduce the size of the popup
    if (width <= 768) {
        popup.style.width = '90%'; // 90% width for smaller devices
        popup.style.padding = '20px'; // Reduce padding for smaller screens
    } else {
        popup.style.width = '60%'; // Larger width for desktops or tablets
        popup.style.padding = '40px';
    }
}

// Run adjustPopupForDevice when the window is resized or on initial load
window.addEventListener('resize', adjustPopupForDevice);
window.addEventListener('load', adjustPopupForDevice);

// Optionally, we can also detect mobile devices using the user agent
function isMobileDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    return /iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);
}

// Show or hide elements based on device type
function adjustForMobile() {
    if (isMobileDevice()) {
        // Add any specific mobile adjustments here
        document.body.style.fontSize = '16px'; // Adjust font size for mobile devices
        // Example: Hide elements that aren't mobile-friendly
        document.querySelector('.christmas-tree').style.display = 'none'; // Example: Hide tree animation on mobile
    }
}

// Run adjustments when the page loads
window.addEventListener('load', adjustForMobile);
