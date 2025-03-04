document.addEventListener("DOMContentLoaded", function() {
    var htmlContent = `
    <div class="contact-container"> 
        <form action="https://api.web3forms.com/submit" method="POST" class="contact-left"> 
        <div class="contact-left-title"> 
        <h2>Get in touch</h2> 
        <hr> 
        </div> 
        <input type="hidden" name="access_key" value="6ae82029-8b9f-493e-b755-47c942182a0d">
        <input type="text" name="name" placeholder="Your Name" class="contact-inputs" required> 
        <input type="email" name="email" placeholder="Your Email" class="contact-inputs" required> 
        <textarea name="message" placeholder="Your Message" class="contact-inputs" required></textarea>
        <button type="submit">Submit <img src="/assets/arrow_icon.png" alt=""> </button>
        </form> 
        <div class="contact-right"> 
            <img src="/assets/right_img.png" alt="">
        </div> 
    </div>`;
    document.body.innerHTML = htmlContent;

    // Disable right-click
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // Disable keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && (e.key === 'u' || e.key === 's' || e.key === 'a' || e.key === 'c' || e.key === 'x' || e.key === 'i' || e.key === 'j' || e.key === 'k' || e.key === 'l')) {
            e.preventDefault();
        }
    });

    // Disable text selection
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
    });
});