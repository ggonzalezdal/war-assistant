# WAR Assistant · WhatsApp Reservation Assistant

<p align="center">
  <a href="https://ggonzalezdal.github.io/war-assistant/">
    <img src="https://img.shields.io/badge/demo-online-4dd6b9?style=for-the-badge&logo=github&logoColor=white" />
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-4dd6b9?style=for-the-badge" />
  </a>
  <img src="https://img.shields.io/badge/status-MVP%20prototype-0b1120?style=for-the-badge" />
  <img src="https://img.shields.io/badge/built_with-HTML5%20·%20CSS3%20·%20JS-111827?style=for-the-badge" />
</p>

---

**WAR Assistant** is a lightweight prototype of a WhatsApp-driven reservation assistant for small restaurants. It is part of an Entrepreneurship project at the **UOC (Universitat Oberta de Catalunya)** and demonstrates how a simple web app can help turn chaotic WhatsApp bookings into structured, usable reservation data.

Live demo:  
https://ggonzalezdal.github.io/war-assistant/

---

## Concept

Small, time-poor restaurants often receive most of their bookings through **WhatsApp** instead of formal booking platforms. WAR Assistant explores how to:

- Parse WhatsApp-style messages into a clean reservation draft
- Confirm the booking and generate a consistent reply
- Keep today’s reservations visible in one place
- Stay simple and low-friction for real restaurant workflows

This is a **high-fidelity MVP / clickable prototype**, not a production system.

---

## Features (MVP)

### Dashboard / Landing page

- Greeting the floor manager
- Quick stats: total bookings, terrace requests, capacity at 21:00
- Shortcut to start a new reservation from WhatsApp

### New reservation from WhatsApp

- WhatsApp-style conversation card
- Parsed reservation draft (name, pax, date, time, area preference, notes)
- Button to preview the confirmation message

### Confirmation screen

- Full reservation summary
- Suggested WhatsApp reply including terrace request
- “Mark as confirmed” button
- Modal popup: “Reservation confirmed”

### Today’s reservations

- Table of 5 reservations (demo data)
- Last confirmed reservation highlighted
- Columns: time, guest, phone, pax, area, source, notes

### Navigation

- Sidebar navigation
- Header logo → Dashboard
- Venue name → Today’s reservations

### Footer

- WAR Assistant branding
- Venue name (Ànima Mediterrània — Prototype)
- Social icons: LinkedIn, Instagram, X, GitHub

---

## Tech Stack

**Frontend**

- HTML5
- CSS3 (custom, no frameworks)
- Vanilla JavaScript

**Hosting**

- GitHub Pages

**Design goals**

- Modern dashboard UI
- Teal accent color `#4dd6b9`
- Readable typography for real restaurant use

---

## Project Structure

```text
war-assistant/
├─ css/
│  └─ styles.css
├─ images/
│  ├─ favicons/
│  ├─ icons/
│  └─ logos/
├─ js/
│  └─ app.js
├─ index.html
├─ .gitignore
└─ README.md
```

---

## Running the Project Locally

1. Clone the repository:
   git clone https://github.com/ggonzalezdal/war-assistant.git  
   cd war-assistant

2. Open `index.html` directly  
   OR run a lightweight local server:
   python -m http.server 8000  
   Then visit: http://localhost:8000

---

## Deployment (GitHub Pages)

1. Go to **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **main**
4. Folder: **root**

Live URL:  
https://ggonzalezdal.github.io/war-assistant/

---

## Limitations (MVP)

- No real WhatsApp integration (messages are mocked)
- No backend or database
- No authentication or persistence
- Hard-coded example data from the low-fidelity MVP

Purpose: demonstrate UX flow and concept value.

---

## Author

**Gonzalo González**  
GitHub: https://github.com/ggonzalezdal

---

## License

Released under the **MIT License**. See the LICENSE file for details.
