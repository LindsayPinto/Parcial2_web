import "bootstrap/dist/css/bootstrap.min.css";
import './login.css'
import { FormattedMessage } from "react-intl";

function Login(props) {
    return (

        <div className="container w-75 mt-5 rounded shadow" >
            <div className="row">
                {/* <div className="col imagenLogin">
                
                </div> */}
                <div className="col">

                    {/* <p class="fs-1">.fs-1 text</p> */}

                    <h1 className=" text-white fw-bold text-start py-3 "> Logo</h1>
                    <h3 className=" text-white fw-bold text-start py-2 "><FormattedMessage id="login.account"/></h3>


                    <form action="#">
                        <div className="mb-4">
                            <label for="email" className=" text-white form-label"><FormattedMessage id="login.username"/></label>
                            <input type="email" className="form-control" name="users"></input>
                        </div>
                        <div className="mb-4">
                            <label for="password" className="text-white form-label"><FormattedMessage id="login.password"/></label>
                            <input type="password" className="form-control" name="password"></input>
                        </div>
                        {/* <div class="text-end">Forgot your password?</div> */}

                        <div className="text-center my-5">
                            <button type="submit" className="btn btn-primary"><FormattedMessage id="login.login"/></button>
                        </div>


                    </form>


                </div>



            </div>


            <div className="text-white text-center my-3">
                <span>
                    <a href="#"> <FormattedMessage id="login.cant"/> </a>
                </span>
            </div>

            <div className="text-white text-center my-3">
            <span className=" text-white fw-bold text-center py-2 "><FormattedMessage id="login.terms"/></span>
            </div>

           


           
        </div>

    )
}

export default Login;