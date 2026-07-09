import ProfileCard from "../components/ProfileCard";

import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";
import ForgotPasswordModal from "../components/ForgotPasswordModal";

import { useModal } from "../context/ModalContext";

import "../styles/Profile.css";

function Profile() {

    const { activeModal } = useModal();

    return (

        <div className="profile-page">

            <ProfileCard />

            {activeModal === "login" && <LoginModal />}

            {activeModal === "signup" && <SignupModal />}

            {activeModal === "forgot" && <ForgotPasswordModal />}

        </div>

    )

}

export default Profile;