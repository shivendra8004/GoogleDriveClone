import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/index";
import FilesView from "./components/filesView/FilesView";
import SideIcons from "./components/sideIcons/SideIcons";
import GDriveIcon from "./media/gdriveIcon.png";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { message } from "antd";
function App() {
    const [state, setState] = useState(false);
    const [userInfo, setUserInfo] = useState(false);
    const [user, setUser] = useState(null);
    const handleLogin = () => {
        if (!user) {
            signInWithPopup(auth, provider)
                .then((result) => {
                    const userInfo = result.user;
                    const requiredInfo = {
                        photoURL: userInfo.photoURL,
                        email: userInfo.email,
                    };
                    localStorage.setItem("user", JSON.stringify(requiredInfo));
                    setUser(JSON.parse(localStorage.getItem("user")));
                    message.success("Successfully Logined");
                })
                .catch((error) => {
                    message.error("There is an error in Login");
                    console.error(error);
                });
        }
    };
    useEffect(() => {
        const item = JSON.parse(localStorage.getItem("user"));
        setUser(item);
    }, []);
    // Authentication
    return (
        <div className="App">
            {user ? (
                <>
                    <Header user={user} setUser={setUser} />
                    <div style={{ display: "flex" }}>
                        <Sidebar state={state} setState={setState} />
                        <FilesView state={state} />
                        <SideIcons />
                    </div>
                </>
            ) : (
                <>
                    <div className="app_login">
                        <img src={GDriveIcon} alt="Google Drive" />
                        <button onClick={handleLogin}>Log in to Google Drive</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default App;
