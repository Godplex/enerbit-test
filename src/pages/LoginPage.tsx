import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { errorAlert } from "../alerts";
import { AuthContext } from "../context";
import { IUser } from "../interfaces";

export const LoginPage = () => {

    const { loginUser } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm<IUser>();

    const onLoginUser: SubmitHandler<IUser> = async (formData) => {
        const isValidLogin = loginUser(formData);
        if (!isValidLogin) {
            errorAlert("Invalid email or password.");
            return;
        }
    };

    return (
        <div className="min-vh-100 d-flex justify-content-center align-items-center">
            <div className="card col-xl-3 col-lg-4 col-md-6 col-9">
                <div className="card-body">
                    <img src="https://enerbit.co/img/mainLogo.bea5a270.svg" className="w-100" alt="logo" />
                    <form
                        className="p-4"
                        onSubmit={handleSubmit(onLoginUser)}
                        noValidate
                    >
                        <div className="form-group mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                            <input
                                type="text"
                                className={`form-control ${errors.username && 'is-invalid'}`}
                                id="exampleInputEmail1"
                                {...register("username", {
                                    required: "Este campo es requerido.",
                                })}
                            />
                            {
                                errors.username
                                &&
                                <div className="invalid-feedback">
                                    {errors.username?.message}
                                </div>
                            }
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input
                                type="password"
                                className={`form-control ${errors.password && 'is-invalid'}`}
                                id="exampleInputPassword1"
                                {...register("password", {
                                    required: "Este campo es requerido.",
                                })}
                            />
                            {
                                errors.password
                                &&
                                <div className="invalid-feedback">
                                    {errors.password?.message}
                                </div>
                            }
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
