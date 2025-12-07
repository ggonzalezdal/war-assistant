# WAR Assistant · WhatsApp Reservation Assistant

**WAR Assistant** is a lightweight prototype of a WhatsApp-driven reservation assistant for small restaurants.  
It is part of an Entrepreneurship project at the **UOC (Universitat Oberta de Catalunya)** and demonstrates how a simple web app can help turn chaotic WhatsApp bookings into structured, usable reservation data.

Live demo: **(coming soon / or)**  
`https://github.com/ggonzalezdal/war-assistant/`

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

- **Dashboard / Landing page**

  - Greeting the floor manager (e.g. _“Welcome, Alejo Werner”_)
  - Quick stats: total bookings, terrace requests, capacity at 21:00
  - Shortcut to start a new reservation from WhatsApp

- **New reservation from WhatsApp**

  - WhatsApp-style conversation card with the guest (e.g. _Anna López_)
  - Parsed reservation draft with:
    - Guest name
    - Party size
    - Date & time
    - Area preference (e.g. _Terrace (if possible)_)
    - Notes
  - Button to **preview the confirmation message**

- **Confirmation screen**

  - Reservation summary for staff to review
  - Suggested WhatsApp reply message, including:
    - Acknowledgement
    - Date, time, party size
    - Venue name (_Ànima Mediterrània_)
    - Terrace request confirmation (“if possible”)
  - Button: **“Mark as confirmed & go to today’s reservations”**
  - After confirming, a modal pops up: **“Reservation confirmed”**

- **Today’s reservations view**

  - Table with today’s 5 reservations (based on the low-fidelity MVP)
  - Last confirmed reservation (Anna López) lightly highlighted
  - Basic info: time, guest, phone, pax, area, source, notes

- **Navigation**

  - Sidebar navigation:
    - Dashboard
    - New reservation
    - Today’s reservations
  - Clickable header:
    - Click **logo + title** → Dashboard
    - Click **venue name** → Today’s reservations

- **Footer**
  - Fixed footer with:
    - WAR Assistant branding
    - Venue name (_Ànima Mediterrània (Prototype)_)
    - Social icons (LinkedIn, Instagram, X, GitHub)
  - Icons tinted with WAR Assistant’s accent color

---

## Tech Stack

- **Frontend:**

  - HTML5
  - CSS3 (custom, no framework)
  - Vanilla JavaScript (no frameworks)

- **Hosting:**

  - GitHub Pages

- **Design goals:**
  - Dark, modern dashboard look
  - Teal accent color (`#4dd6b9`)
  - Clear typography suitable for POS / floor usage

---

## Project Structure

```text
war-assistant/
├─ css/
│  └─ styles.css          # Main stylesheet for the whole MVP
├─ images/
│  ├─ favicons/           # Favicon and app icons
│  ├─ icons/              # Social + UI icons (SVG)
│  └─ logos/              # WAR Assistant logo(s)
├─ js/
│  └─ app.js              # View handling, modal logic, navigation
├─ index.html             # Main entry point (single-page style)
├─ .gitignore
└─ README.md

---

## Running the Project Locally

1. Clone the repo:
   git clone https://github.com/ggonzalezdal/war-assistant.git
   cd war-assistant

2. Open index.html in a browser
   OR run a lightweight server:

   python -m http.server 8000
   Visit http://localhost:8000

---

## Deployment (GitHub Pages)

1. Open Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: main
4. Folder: root

Your live URL will be:
https://ggonzalezdal.github.io/war-assistant/

---

## Limitations (MVP Disclaimer)

• No real WhatsApp integration (messages are mocked)
• No backend or database
• No user accounts or persistence
• Hard-coded data based on the low-fidelity MVP

Purpose: illustrate the reservation workflow concept and UI design.

---

## Author

**Gonzalo González**
GitHub: https://github.com/ggonzalezdal

---

```
