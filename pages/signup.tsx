import styles from "@/styles/signup.module.css";
import Link from "next/link";

const Signup = (): JSX.Element => {
  function handleClick() {
    const emailInput = document.getElementById("emailval") as HTMLInputElement;
    const usernameInput = document.getElementById(
      "usernameval"
    ) as HTMLInputElement;
    const passwordInput = document.getElementById(
      "passwordval"
    ) as HTMLInputElement;

    const email: string = emailInput.value;
    const username: string = usernameInput.value;
    const password: string = passwordInput.value;

    console.log(email, password, username);

    const fetchData = async () => {
      try {
        const response = await fetch("/api/signuproute", {
          method: "POST",
          body: JSON.stringify({
            username: username,
            email: email,
            password: password,
          }),
        });
        if (response.status === 200) {
          window.location.href = "/#reviews";
        } else {
          alert("Email Already exists. Please try again");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }

  return (
    <>
      <br />
      <br />
      <br />
      <div style={{ padding: "20px" }}>
        <div
          className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
          style={{ backgroundColor: "rgba(35, 35, 37, 1)" }}
        >
          <div className="flex justify-center items-center">
            <h1 className="text-white text-3xl">Sign up!</h1>
          </div>
          <br />
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="Email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="emailval"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="usernameval"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
              id="passwordval"
              type="password"
              placeholder="******************"
            />
            <p className="text-red text-xs italic">Please choose a password.</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={handleClick}
              className={`
              w-full
              px-6
              py-2.5
              bg-stone-200
              text-zinc-800
              font-medium
              text-xs
              leading-tight
              uppercase
              rounded
              shadow-md
              hover:text-white
              hover:bg-black
              focus:outline-none
              focus:ring-0
              active:shadow-lg
              transition
              duration-150
              ease-in-out
            `}
            >
              Sign Up
            </button>
          </div>
          <div className={styles.loginoption}>
            <br />
            <p className="text-white">Already Have a Profile?</p>
            <br />
            <Link className={styles.loginlink} href="/login">
              Log in!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
