import { useState } from "react";
import Container from "../Container";
import Logo from "../Logo";
import Modal from "../Modal";
import SignInForm from "../../SingInFrom/SingInFrom";
import SignUpForm from "../../SingUpForm/SingUpFrom";

const Navbar = () => {
    const [openModal, setOpenModal] = useState(false);
  const [isSingUpPage, setIsSingUpPage] = useState(true);
  const handleOpenModal = () => {
setOpenModal(true)
  };
    const closeModal = () => {
setOpenModal(false);
    };
  return (
    <Container>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Logo />
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="form-control relative">
            <input
              type="text"
              placeholder="Search for your favorite groups in ATG"
              className=" input pl-8 rounded-full bg-[#F2F2F2] w-[360px] h-[42px]"
            />
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              className="absolute top-3 left-2 flex items-center"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_817)">
                <path
                  d="M14.2083 12.8333H13.4842L13.2275 12.5858C14.1258 11.5408 14.6667 10.1842 14.6667 8.70833C14.6667 5.4175 11.9992 2.75 8.70833 2.75C5.4175 2.75 2.75 5.4175 2.75 8.70833C2.75 11.9992 5.4175 14.6667 8.70833 14.6667C10.1842 14.6667 11.5408 14.1258 12.5858 13.2275L12.8333 13.4842V14.2083L17.4167 18.7825L18.7825 17.4167L14.2083 12.8333ZM8.70833 12.8333C6.42583 12.8333 4.58333 10.9908 4.58333 8.70833C4.58333 6.42583 6.42583 4.58333 8.70833 4.58333C10.9908 4.58333 12.8333 6.42583 12.8333 8.70833C12.8333 10.9908 10.9908 12.8333 8.70833 12.8333Z"
                  fill="#7A7A7A"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_817">
                  <rect width="22" height="22" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="navbar-end gap-1">
          <div className="hidden md:flex gap-2 items-center">
            <button
              onClick={handleOpenModal}
              className="text-base text-[#2E2E2E] font-medium  block"
            >
              Create account.
              <span className="link text-blue-500 text-md">It’s free!</span>
            </button>
            <svg
              width="10"
              height="5"
              viewBox="0 0 10 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0L5 5L10 0H0Z" fill="#2E2E2E" />
            </svg>
          </div>
          <button className="btn  md:btn-md md:hidden bg-white rounded-xxl">
            Join Group
          </button>
        </div>
      </div>
      <Modal isOpen={openModal} onClose={closeModal}>
        {isSingUpPage ? (
          <SignUpForm setIsSingUpPage={setIsSingUpPage} />
        ) : (
          <SignInForm setIsSingUpPage={setIsSingUpPage} />
        )}
      </Modal>
    </Container>
  );
};

export default Navbar;
