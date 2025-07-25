# 🍔 Munch – Food Delivery Web App

**Munch** is a full-stack food delivery platform, where users can browse food items, add them to their cart, make payments and place orders. It was built with the MERN stack.

---

## Features:
- Browse food items
- Login/Sign up functionality
- Add to cart functionality
- Order placement and tracking
- Stripe payment integration
- Secure user authentication (JWT)
- Admin panel to manage users, items and orders
- Mobile-responsive design

---

## Built with:
- Frontend: React.js, Axios, CSS
- Backend: Node.js, Express.js, MongoDB
- Authentication: JWT
- Payments: Stripe API

---

## How to get started locally:
### 1. Clone the repository

```bash
git clone https://github.com/spiriiito/Munch-Food-Delivery.git
cd Munch-Food-Delivery
```

### 2. Inside /backend folder, create a .env file:

```bash
cd backend
touch .env
```

Then paste the following (replace with your actual secret keys):
```bash
JWT_SECRET=your_jwt_secret_here
STRIPE_SECRET_KEY=your_stripe_secret_key_here
MONGO_URI=your_mongodb_connection_string
```

### 3. Install dependencies
Install backend dependencies:
```bash
cd ../backend
npm install
```

Install frontend dependencies:
```bash
cd ../frontend
npm install
```

Install admin panel dependencies:
```bash
cd ../admin
npm install
```

### 4. Run the app
In separate terminals, run each part of the app:
- Terminal 1: Start backend
```bash
cd backend
npm start
```

- Terminal 2: Start frontend
```bash
cd frontend
npm run dev
```

- Terminal 3: Start admin panel
```bash
cd admin
npm start
```

## Screenshots
<img width="1825" height="853" alt="Снимок экрана 2025-02-11 031547" src="https://github.com/user-attachments/assets/097b0638-5fa4-437b-9030-76cadc9329e9" />
<img width="1885" height="890" alt="Снимок экрана 2025-02-11 031429" src="https://github.com/user-attachments/assets/a4b67540-668e-46bf-98a5-799fff9a1f4e" />
<img width="1873" height="790" alt="Снимок экрана 2025-02-11 031245" src="https://github.com/user-attachments/assets/56de4d8c-4796-4e86-a719-80ec0747327b" />
<img width="1896" height="908" alt="Снимок экрана 2025-02-11 031119" src="https://github.com/user-attachments/assets/a408778d-e4b6-4ed8-a787-2b281b310f2a" />
<img width="1886" height="899" alt="Снимок экрана 2025-02-11 030759" src="https://github.com/user-attachments/assets/d579ed2f-db4b-4bb9-b129-c7181e7fbe3f" />
<img width="1902" height="909" alt="Снимок экрана 2025-02-11 004157" src="https://github.com/user-attachments/assets/6af51a31-f4ad-4643-9afd-ee26a0bfe754" />

## Contact

**Kseniia Starodubtseva**
[LinkedIn](www.linkedin.com/in/kseniia-starodubtseva-85872027b)
GitHub: [spiriiito](https://github.com/spiriiito)

If you like this project, drop a ⭐ on the repo!
