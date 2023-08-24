import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import { BsGithub, BsTelephone, BsEnvelope } from "react-icons/bs";

interface FormData {
  email: string;
  name: string;
  message: string;
}

const Contact = (): JSX.Element => {
  const lambdaFuncEP: any = process.env.NEXT_PUBLIC_API_KEY;
  const [fromSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
    message: "",
  });

  const sendMail = async (mail: FormData) => {
    console.log(mail.email)
    try {
      console.log(lambdaFuncEP)
     const res = await fetch(lambdaFuncEP, {
      mode: 'cors',  
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
        body: JSON.stringify({
          fromEmail: mail.email,
          name: mail.name,
          message: mail.message,
        }),
      }).then((res) => console.log(res))

    } catch (Error) {
      console.log(Error);
    } finally {
      setFormSubmitted(true);
      setTimeout(() => {
        window.location.href = "/";
      }, 5000);
    }
  };


  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      sendMail(formData);
    } catch (err) {
      console.error(err);
    } finally {
      setFormData({
        email: "",
        name: "",
        message: "",
      });
      window.location.href = "/#contact";
    }
  };

  const windowStyle: object = {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <>
      <div
        style={{
          ...windowStyle,
        }}
        className="h-screen"
      >
        <br />
        <h2 id="contact" className={styles.componenth2darkbg}>
          Contact Me
        </h2>
        <br />
        <br />
        {fromSubmitted ? (
          <div>
            <h2 className={styles.componenth2darkbg}>
              <br />
              <br />
              Message Sent! Thank you for reaching out. I will be in contact
              shortly!
            </h2>
          </div>
        ) : (
          <div className="relative flex flex-col overflow-hidden">
            <div className="w-full p-6 m-auto border rounded-md lg:max-w-xl mt-0">
              <br />
              <div className={styles.contact}>
                <div>
                  <Link href="https://github.com/Micklitodev" target="_blank">
                    <BsGithub className={styles.favicon} size={30} />
                  </Link>
                </div>

                <div>
                  <Link href="tel:4708314159">
                    <BsTelephone className={styles.favicon} size={30} />
                  </Link>
                </div>

                <div>
                  <Link href="mailto: micklito.dev@gmail.com">
                    <BsEnvelope className={styles.favicon} size={30} />
                  </Link>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="mt-8">
                <div className="mb-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-zinc-500 text-center"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    name="email"
                    onChange={handleInputChange}
                    value={formData.email}
                    required
                    className="block bg-zinc-800 w-full px-4 py-2 mt-2 text-zinc-200 border rounded-md focus:border-zinc-600 focus:ring-zinc-700 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mb-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-zinc-500 text-center"
                  >
                    Name
                  </label>
                  <input
                    type="name"
                    placeholder="Your Name"
                    name="name"
                    onChange={handleInputChange}
                    value={formData.name}
                    required
                    className="block bg-zinc-800 w-full px-4 py-2 mt-2 text-zinc-200 border rounded-md focus:border-zinc-600 focus:ring-zinc-700 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mb-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-zinc-500 text-center"
                  >
                    Message
                  </label>
                  <input
                    type="message"
                    placeholder="Message"
                    name="message"
                    onChange={handleInputChange}
                    value={formData.message}
                    required
                    className="block bg-zinc-800 w-full px-4 py-2 mt-2 text-zinc-200 border rounded-md focus:border-zinc-600 focus:ring-zinc-700 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-6">
                  <button
                    className="w-full 
                  px-4 
                  py-2 
                  tracking-wide 
                  bg-zinc-800
                  text-zinc-100
                  font-medium
                  text-sm
                  uppercase
                  rounded
                  shadow-md
                  hover:text-white
                  hover:bg-zinc-900
                  focus:outline-none
                  focus:ring-0
                  active:shadow-lg
                  transition
                  duration-150
                  ease-in-out"
                    disabled={!formData.email}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Contact;
