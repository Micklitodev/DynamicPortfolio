import styles from "@/styles/login.module.css";
import Link from "next/link";

const Login = (): JSX.Element => {
  function handleClick() {
    const emailInput = document.getElementById("emailval") as HTMLInputElement;
    const passwordInput = document.getElementById(
      "passwordval"
    ) as HTMLInputElement;
    const email: string = emailInput.value;
    const password: string = passwordInput.value;

    const fetchData = async () => {
      try {
        const response = await fetch("/api/loginroute", {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });
        const data = await response.json();

        if (response.ok) {
          console.log(data.loggedIn);
          sessionStorage.setItem("logstate", data.loggedIn);
          window.location.href = `/`;
        } else {
          console.error(data);
          alert("Internal Err");
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
            <h1 className="text-white text-3xl">Log In!</h1>
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
              Login!
            </button>
          </div>
          <div className={styles.signupoption}>
            <br />
            <p className="text-white">Dont have an profile?</p>
            <br />
            <Link className={styles.signuplink} href="/signup">
              Sign Up!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
