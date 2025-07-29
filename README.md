# 🛒 Shopping List App

A simple and interactive shopping list app built with React and `json-server`. This application allows users to add, delete, and mark items as bought or unbought. Users can also upload local images and toggle between light and dark modes.

## 🚀 Features

- Add new shopping list items with name, price, and an image from your machine
- View all items with their status
- Toggle an item as "bought" or "not bought"
- Delete unwanted items
- Light/Dark mode toggle
- Live updates without needing to reload the page

## 🛠️ Technologies Used

- React
- json-server (mock backend)
- CSS for styling (with dark/light mode support)
- Git & GitHub for version control


## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Bethwelkipruto/shopping-list-app.git
   cd shopping-list-app
Install dependencies:

npm install
Start the backend (json-server):
Make sure json-server is installed globally:


npm install -g json-server
Start the server:

json-server --watch db.json --port 3001
Start the frontend React app:
npm start
Access the app:

Open your browser and go to:
http://localhost:3000

🗃️ Folder Structure (Simplified)
pgsql
Copy
Edit
shopping-list-app/
├── public/
├── src/
│   ├── components/
│   │   ├── AddItemForm.jsx
│   │   ├── ShoppingItem.jsx
│   │   ├── ShoppingList.jsx
│   │   ├── NavBar.jsx
│   │   ├── About.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── api.js
├── db.json
├── README.md
🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

📄 License
This project is licensed under the MIT License.

👤 Author
Bethwel Kipruto,Timothy Odhiambo,Tasha Kuria,Carlton Ndungu
GitHub: @Bethwelkipruto