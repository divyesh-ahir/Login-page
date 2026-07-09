import Modal from "./Modal";
import useForm from "../hooks/useForm";
import useToggle from "../hooks/useToggle";
import { useModal } from "../context/ModalContext";

function LoginModal() {

    const { openModal, closeModal } = useModal();

    const { values, handleChange, reset } = useForm({
        email: "",
        password: ""
    });

    const [showPassword, togglePassword] = useToggle(false);

    const handleSubmit = (e) => {

        e.preventDefault();

        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            alert("No account found. Please Signup first.");
            openModal("signup");
            return;
        }

        if (
            values.email === user.email &&
            values.password === user.password
        ) {

            alert("Login Successful!");

            localStorage.setItem("isLoggedIn", "true");
            window.location.reload();

            reset();

            closeModal();

        } else {

            alert("Invalid Email or Password");

        }

    };

    return (

        <Modal>

            <h2>Login</h2>

            <form onSubmit={handleSubmit}>

                <div className="form-group">

                    <label>Email</label>

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={values.email}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div className="form-group">

                    <label>Password</label>

                    <div className="password-box">

                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter Password"
                            value={values.password}
                            onChange={handleChange}
                            required
                        />

                        <span
                            className="eye"
                            onClick={togglePassword}
                        >
                            {showPassword ? "🙈" : "👁"}
                        </span>

                    </div>

                </div>

                <button
                    className="modal-btn"
                    type="submit"
                >
                    Login
                </button>

            </form>

            <div className="modal-link">

                <p>

                    Forgot Password?

                    <span
                        onClick={() => openModal("forgot")}
                    >
                        {" "}Click Here
                    </span>

                </p>

            </div>

            <div className="modal-link">

                <p>

                    Don't have an account?

                    <span
                        onClick={() => openModal("signup")}
                    >
                        {" "}Signup
                    </span>

                </p>

            </div>

        </Modal>

    );

}

export default LoginModal;