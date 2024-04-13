
import illustrationImage from "../../assets/images/singUpImg.png";
import facebook from "../../assets/icon/facebook.png";
import google from "../../assets/icon/google.png";
import Modal from "../../components/Shared/Modal";

const SignInForm = () => {
  return (
    <Modal>
      <div className="relative bg-white border max-w-[750px] rounded-lg mx-auto my-20">
        <button className=" btn btn-sm btn-circle absolute -right-5 -top-10">
          ✕
        </button>
        <div className="bg-[#EFFFF4] text-center py-5">
          <p className="text-[#008A45]">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </p>
        </div>
        <div className="flex justify-center items-center ">
          <div className="p-8 flex-1">
            <h2 className="text-2xl font-bold mb-6">Sign In</h2>
            <form>
              <div className="">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 border border-b-0 border-[#D9D9DB]  focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="w-full px-3 py-2 border border-[#D9D9DB] focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                  />
                  <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                        clipRule="evenodd"
                      />
                      <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.585A8 8 0 0014.438 14.44l-1.984 2.24z" />
                    </svg>
                  </span>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 mb-4"
              >
                Sign In
              </button>
              <div className="flex justify-center gap-2 flex-col mb-4">
                <button className="flex items-center justify-center w-full btn bg-white border-2 ">
                  <img src={facebook} alt="" />
                  Sign in with Facebook
                </button>
                <button className="flex items-center justify-center w-full btn  bg-white border-2 ">
                  <img src={google} alt="" /> Sign in with Google
                </button>
              </div>
              <a href="#" className="font-medium text-center block">
                Forgot Password?
              </a>
            </form>
          </div>
          <div className="ml-8 flex-1">
            <div>
              <a href="" className="text-sm">
                Don’t have an account yet?{" "}
                <span className="link text-blue-500">Create new for free!</span>
              </a>
            </div>
            <img
              src={illustrationImage}
              alt="Illustration"
              className="max-w-none"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SignInForm;