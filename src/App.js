import { useState } from "react";
import "./App.css";
import Header from "./components/header/index";
import Sidebar from "./components/sidebar/index";
function App() {
    const [user, setUser] = useState({
        displayName: "Shivendra Jat",
        email: "shivendrajat8004@gmail.com",
        emailVarified: true,
        phoneNumber: null,
        photoURL:
            "https://media.licdn.com/dms/image/C4D03AQG8Hh-jEAahKQ/profile-displayphoto-shrink_800_800/0/1662066004321?e=2147483647&v=beta&t=bOHAhDsneeZ5f6UO1bIk5aEUoFjuPoVGy528NZiV7OI",
    });

    // Authentication
    return (
        <div className="App">
            <Header userPhoto={user.photoURL} />
            <Sidebar />
            {/* If Authentication is true
Header
sidebar
filesView
Sideicon
*/}
            {/* 
Authentication isfalse
Login
*/}
        </div>
    );
}

export default App;
