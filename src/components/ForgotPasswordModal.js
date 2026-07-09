import Modal from "./Modal";
import useForm from "../hooks/useForm";
import { useModal } from "../context/ModalContext";

function ForgotPasswordModal() {

    const { openModal, closeModal } = useModal();

    const { values, handleChange, reset } = useForm({
        email: "",
        password: ""
    });

    const handleSubmit = (e) => {

        e.preventDefault();

        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            alert("No account found.");
            return;
        }

        if (user.email !== values.email) {
            alert("Email not found.");
            return;
        }

        const updatedUser = {
            ...user,
            password: values.password
        };

        localStorage.setItem("user", JSON.stringify(updatedUser));

        alert("Password Updated Successfully!");

        reset();

        closeModal();

        setTimeout(() => {
            openModal("login");
        }, 200);

    };

    return (

        <Modal>

            <h2>Forgot Password</h2>

            <form onSubmit={handleSubmit}>

                <div className="form-group">

                    <label>Email</label>

                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        placeholder="Enter Registered Email"
                    />

                </div>

                <div className="form-group">

                    <label>New Password</label>

                    <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        placeholder="Enter New Password"
                    />

                </div>

                <button
                    className="modal-btn"
                    type="submit"
                >
                    Reset Password
                </button>

            </form>

            <div className="modal-link">

                Remember Password?

                <span onClick={() => openModal("login")}>

                    Login

                </span>

            </div>

        </Modal>

    );

}

export default ForgotPasswordModal;