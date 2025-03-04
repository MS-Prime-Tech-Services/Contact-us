# Contact us

This repository contains a modern and responsive contact form built using **HTML**, **CSS**, and **JavaScript**. The form is integrated with **Web3Forms** for seamless message submission and includes additional security features to protect the content.

## 🛠️ Features

- **Responsive Design:** Adapts seamlessly to different screen sizes, including mobile devices.
- **Web3Forms Integration:** Sends form data securely using Web3Forms API.
- **Security Enhancements:**
  - Disables right-click to prevent content copying.
  - Blocks common keyboard shortcuts like "View Source" and "Inspect Element".
  - Disables text selection to protect content.
- **Modern UI:** Uses a clean and professional interface with smooth gradients and user-friendly form inputs.

## 📁 Project Structure

```
├── index.html      # Main HTML structure
├── style.css       # Styling and responsiveness
└── script.js       # JavaScript functionalities and security
└── assets/         # Folder for images
    ├── arrow_icon.png    # Arrow icon used in the submit button
    └── right_img.png     # Right-side image in the contact form
```

## 🚀 Usage

1. Clone this repository:

   ```bash
   git clone https://github.com/MS-Prime-Tech-Services/Contact-us.git
   cd contact-form
   ```

2. Open `index.html` in your browser to view the contact form.

## 📊 Form Integration

The form is connected to **Web3Forms** via an `access_key`. Ensure to replace the placeholder key with your own for proper functionality.

```html
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
```

You can obtain your access key from [Web3Forms](https://web3forms.com).

## 🖼️ Adding Images

Ensure the following images are located in the `assets` folder:

1. **arrow\_icon.png** – Displayed on the submit button.
2. **right\_img.png** – Displayed on the right side of the form.

If your images are missing or you want to update them, place the correct image files in the `assets` directory and ensure the paths in the `index.html` are correct:

```html
<button type="submit">Submit <img src="/assets/arrow_icon.png" alt="Submit"> </button>

<div class="contact-right"> 
    <img src="/assets/right_img.png" alt="Contact Image">
</div>
```

## 📷 Screenshots

![Contact Form Screenshot](assets/contact_form_screenshot.png)

## 📣 About Us

This project is developed and maintained by **MS Prime Tech Services**.

- **Founder & CEO:** Muhammad Saad
- **Co-Founder:** Ali Raza Wattoo

For inquiries, visit our [website](https://msprimetechservices.com) or contact us through the provided form.

## 📜 License

This project is licensed under the **MIT License**. Feel free to use and customize it for your needs.

