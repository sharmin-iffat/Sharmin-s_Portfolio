# Sharmin Iffat's Portfolio

A modern, responsive personal portfolio website built with **React** and **Vite**, styled using **Tailwind CSS**. This portfolio showcases Sharmin Iffat's skills, projects, education, and experience, and includes a contact form powered by EmailJS.

---

## Features

- **Responsive Design:** Looks great on all devices.
- **Animated UI:** Uses parallax tilt, blur blobs, and gradients for a modern look.
- **Projects Showcase:** Modal-based project details with code links.
- **Skills Section:** Categorized, logo-based skill display with tilt animation.
- **Experience & Education Timeline:** Visual timeline with logos and details.
- **Contact Form:** EmailJS-powered form with toast notifications.
- **Social Links:** GitHub, LinkedIn, Facebook, Instagram.
- **Smooth Navigation:** Scrolls to sections with animated navbar.

---

## Tech Stack

- **Frontend:** React, Vite
- **Styling:** Tailwind CSS, custom CSS, react-parallax-tilt
- **Icons:** react-icons
- **Email:** @emailjs/browser, react-toastify
- **Linting:** ESLint

---

## Project Structure

```
src
├── assets
│   ├── blobs
│   ├── cv
│   └── projects
├── components
│   ├── Contact
│   ├── Experience
│   ├── Footer
│   ├── Header
│   ├── Hero
│   ├── Loader
│   ├── Navbar
│   ├── Projects
│   └── Skills
├── hooks
│   └── useForm
├── App.jsx
├── index.css
└── main.jsx
```

- **`assets/`**: Contains images, CV, and project thumbnails.
- **`components/`**: Reusable components for the website.
- **`hooks/`**: Custom React hooks, like `useForm` for the contact form.
- **`App.jsx`**: Main app component, sets up routes and context providers.
- **`index.css`**: Global styles and Tailwind CSS imports.
- **`main.jsx`**: Entry point, renders the app.

---

## Getting Started

1. **Clone the repo**

   ```bash
   git clone https://github.com/sharminiffat/sharminiffat.github.io.git
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**

   Navigate to `http://localhost:5173` to see your portfolio in action.

---

## Deployment

This project is deployed on GitHub Pages. To deploy your own version:

1. Create a new repository on GitHub.
2. Push your local repository to GitHub.
3. Configure GitHub Pages in the repository settings, set the source to the `gh-pages` branch.

---

## Acknowledgements

- Inspired by modern design trends.
- Built using **React** and **Vite** for a fast, interactive experience.
- Styled with **Tailwind CSS** for a clean, responsive design.
- Icons from **react-icons**.
- EmailJS for contact form functionality.

---

## Contact

- **Email:** sharmin.iffat@example.com
- **LinkedIn:** [Sharmin Iffat](https://www.linkedin.com/in/sharminiffat)
- **GitHub:** [sharminiffat](https://github.com/sharminiffat)
- **Facebook:** [Sharmin Iffat](https://www.facebook.com/sharminiffat)
- **Instagram:** [@sharminiffat](https://www.instagram.com/sharminiffat)

---

Feel free to reach out for collaborations, internships, or just a friendly chat!
