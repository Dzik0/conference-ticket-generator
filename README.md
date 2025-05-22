# 🎟️ Conference Registration Form – React Component

This is a responsive React component for registering users to **Coding Conf 2025**. It features a modern UI, form validation, and avatar upload functionality with drag-and-drop support.

## 🚀 Features

- 🖼️ Avatar upload with file size validation (max 500KB, JPG/PNG)
- 🧲 Drag-and-drop or click-to-upload image
- 📤 File preview and image reset options
- 📩 User input for:

  - Full Name
  - Email Address
  - GitHub Username

- 🧠 Built using React hooks (`useState`, `useRef`)
- 🎨 Clean, modern styling (Tailwind CSS-ready)

## 📷 Screenshot

![Conference ticket generator screenshot](./screenshot.jpg)

LIVE: https://dzik0.github.io/conference-ticket-generator/

## 🛠️ Technologies Used

- React
- Tailwind CSS (or other utility-based styling system)
- JavaScript (ES6+)
- SVG assets

## 🧪 Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/conf-registration-form.git
   ```

2. Navigate to the project directory:

   ```bash
   cd conf-registration-form
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   or

   ```bash
   npm start
   ```

## ⚙️ Props & Usage

This component expects two functions as props:

```js
<Form setDetails={setDetailsFunction} setRegistered={setRegisteredFunction} />
```

- `setDetails`: callback function to store form values
- `setRegistered`: callback to trigger registration state

## 📁 Assets

Ensure the following assets are included in your `/assets` folder:

- `logo-full.svg`
- `icon-upload.svg`
- `icon-info.svg`

## ⚠️ Validation Rules

- Image file types: `.png`, `.jpg`, `.jpeg`
- Max file size: 500 KB
- All form fields are required

## 👨‍💻 Author

**Piotr Głazowski**

## 🔗 Acknowledgments

- Inspired by modern conference registration flows
- Icons and logos are placeholders and should be replaced with actual branding
