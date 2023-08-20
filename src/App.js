import { useState } from "react";
import "./App.css";
import Header from "./components/header/index";
import Sidebar from "./components/sidebar/index";
import FilesView from "./components/filesView/FilesView";
import SideIcons from "./components/sideIcons/SideIcons";
import GDriveIcon from "./media/gdriveIcon.png";
import { auth, provider } from "./firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
function App() {
    const [state, setState] = useState(false);
    const [user, setUser] = useState();
    const handleLogin = () => {
        if (!user) {
            signInWithPopup(auth, provider)
                .then((result) => {
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential.accessToken;
                    setUser(result.user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    const email = error.customData.email;
                    const credential = GoogleAuthProvider.credentialFromError(error);
                    // ...
                });
        }
    };
    // Authentication
    return (
        <div className="App">
            {user ? (
                <>
                    <Header userPhoto={user.photoURL} />
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
