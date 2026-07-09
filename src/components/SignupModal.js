import Modal from "./Modal";
import useForm from "../hooks/useForm";
import useToggle from "../hooks/useToggle";
import { useModal } from "../context/ModalContext";

function SignupModal() {

    const { openModal, closeModal } = useModal();

    const { values, handleChange, reset } = useForm({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [showPassword, togglePassword] = useToggle(false);

    const handleSubmit = (e) => {

        e.preventDefault();

        if (
            values.name === "" ||
            values.email === "" ||
            values.password === "" ||
            values.confirmPassword === ""
        ) {
            alert("Please fill all fields");
            return;
        }

        if (values.password !== values.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const user = {
            name: values.name,
            email: values.email,
            password: values.password
        };

        localStorage.setItem("user", JSON.stringify(user));

        alert("Signup Successful!");

        reset();

        closeModal();

        setTimeout(() => {
            openModal("login");
        }, 200);

    };

    return (

        <Modal>

            <h2>Create Account</h2>

            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>Name</label>

                    <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        placeholder="Enter Name"
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>

                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        placeholder="Enter Email"
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>

                    <div className="password-box">

                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            placeholder="Enter Password"
                        />

                        <span
                            className="eye"
                            onClick={togglePassword}
                        >
                            {showPassword ? "🙈" : "👁"}
                        </span>

                    </div>

                </div>

                <div className="form-group">
                    <label>Confirm Password</label>

                    <input
                        type="password"
                        name="confirmPassword"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                    />
                </div>

                <button
                    className="modal-btn"
                    type="submit"
                >
                    Signup
                </button>

            </form>

            <div className="modal-link">

                Already have an account?

                <span onClick={() => openModal("login")}>

                    Login

                </span>

            </div>

        </Modal>

    );

}

export default SignupModal;