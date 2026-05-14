# Homix – Smart Light Control System using ESP8266

## 📌 Project Overview

**Homix** is an IoT-based Smart Light Control System that allows users to control electrical devices (such as lights) remotely through a web interface.

The project is built using:

- **Frontend:** HTML, CSS, JavaScript
- **Backend API:** Node.js, Express.js
- **Database:** MongoDB
- **Hardware:** Wemos D1 Mini / ESP8266
- **IDE:** Arduino IDE

The system works by connecting the ESP8266 module to WiFi. The microcontroller continuously fetches the latest device status from the backend API and controls the connected LED/light accordingly.

---

# 📂 Project Structure
abcd

```bash
Homix/
│
├── Homix_API/                  # Backend API using Node.js & Express
│
├── Homix_Frontend/             # Frontend web interface
│
├── Wemos_ESP8266_Automation/   # Arduino/ESP8266 code
│
├── documentation.txt           # Project explanation
│
└── README.md
```

---

# 🚀 Features

- Smart light/device control
- REST API integration
- ESP8266 automation
- MongoDB database storage
- Frontend dashboard
- Real-time status updates
- Device ON/OFF switching
- IoT communication using HTTP requests

---

# ⚙️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML | Frontend structure |
| CSS | Styling |
| JavaScript | Frontend logic |
| Node.js | Backend runtime |
| Express.js | API framework |
| MongoDB | Database |
| Mongoose | MongoDB ODM |
| ESP8266 | Hardware controller |
| Arduino IDE | Programming ESP8266 |

---

# 🧠 System Working

## Step-by-Step Flow

1. User opens the frontend interface.
2. User clicks ON/OFF button.
3. Frontend sends API request to backend.
4. Backend updates device status in MongoDB.
5. ESP8266 continuously checks API every 2 seconds.
6. ESP8266 reads JSON response.
7. If status is `"ON"` → LED turns ON.
8. If status is `"OFF"` → LED turns OFF.

---

# 🔌 Backend API (Homix_API)

## 📦 Installed Packages

```bash
npm install express mongoose cors dotenv nodemon
```

## 📁 Backend Structure

```bash
Homix_API/
│
├── controllers/
├── models/
├── routes/
├── server.js
├── package.json
└── .env
```

---

# ▶️ Run Backend Server

## 1️⃣ Install Dependencies

```bash
npm install
```

## 2️⃣ Create `.env` File

```env
MONGO_URI=your_mongodb_connection_string
```

## 3️⃣ Start Server

```bash
npm start
```

or

```bash
npm run dev
```

---

# 🌐 API Routes

Base URL:

```bash
http://localhost:5000/api/devices
```

| Method | Route | Description |
|---|---|---|
| GET | `/` | Get all devices |
| GET | `/:id` | Get single device |
| POST | `/` | Create device |
| PUT | `/:id` | Update device |
| DELETE | `/:id` | Delete device |

---

# 📄 Device Model

```js
{
  deviceName: String,
  model: String,
  status: "ON" | "OFF"
}
```

---

# 💻 Frontend (Homix_Frontend)

The frontend provides a simple user interface where users can:

- View device status
- Turn devices ON/OFF
- Send API requests
- Control smart lighting remotely

Frontend technologies used:

- HTML
- CSS
- JavaScript

---

# 📡 ESP8266 Automation

## Working Logic

The ESP8266:

- Connects to WiFi
- Sends GET request every 2 seconds
- Reads device status from API
- Controls LED/light automatically

## Example Logic

```cpp
If status == "ON"
    Turn LED ON

If status == "OFF"
    Turn LED OFF
```

---

# 🔄 Data Flow Diagram

```text
Frontend UI
     ↓
Backend API
     ↓
MongoDB Database
     ↓
ESP8266 Fetches Status
     ↓
LED / Light Control
```

---

# 🛠 Hardware Requirements

- Wemos D1 Mini / ESP8266
- LED or Relay Module
- Breadboard
- Jumper Wires
- USB Cable
- WiFi Connection

---

# 📷 Future Improvements

- Mobile application support
- Authentication system
- Multiple device support
- Voice assistant integration
- Real-time WebSocket communication
- Energy monitoring dashboard

---

# 🎯 Learning Outcomes

This project helps in understanding:

- REST APIs
- IoT communication
- ESP8266 programming
- MongoDB integration
- Full-stack development
- Hardware + software integration

---

# 👨‍💻 Author

Developed as an IoT Smart Automation Project using ESP8266, Node.js, MongoDB, and Web Technologies.

---

# 📜 License

This project is open-source and available for educational purposes.
