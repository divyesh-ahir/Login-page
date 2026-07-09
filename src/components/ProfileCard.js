import { useEffect, useState } from "react";
import { useModal } from "../context/ModalContext";

function ProfileCard() {

    const { openModal } = useModal();

    const [user, setUser] = useState(null);

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {

        const storedUser = JSON.parse(localStorage.getItem("user"));

        const isLoggedIn = localStorage.getItem("isLoggedIn");

        if (storedUser && isLoggedIn === "true") {

            setUser(storedUser);

            setLoggedIn(true);

        }

    }, []);

    const handleLogout = () => {

        localStorage.removeItem("isLoggedIn");

        window.location.reload();

    }

    return (

        <div className="profile-card">

           <div className="profile-avatar">
    {loggedIn ? user.name.charAt(0).toUpperCase() : "U"}
</div>

            {

                loggedIn ? (

                    <>

                        <h2>{user.name}</h2>

                        <p>{user.email}</p>

                        <button
                            className="logout-btn"
                            onClick={handleLogout}
                        >

                            Sign Out

                        </button>

                    </>

                ) : (

                    <>

                        <h2>Welcome User</h2>

                        <p>

                            Login or Signup to access your profile.

                        </p>

                        <div className="btn-group">

                            <button
                                className="login-btn"
                                onClick={() => openModal("login")}
                            >

                                Login

                            </button>

                            <button
                                className="signup-btn"
                                onClick={() => openModal("signup")}
                            >

                                Signup

                            </button>

                        </div>

                    </>

                )

            }

        </div>

    );

}

export default ProfileCard;