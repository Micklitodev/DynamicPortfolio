import Image from "next/image";
import styles from "@/styles/Home.module.css";

const Contact = (): JSX.Element => {
  const sendMail = async (mail: any) => {
    try {
      await fetch("https://joboffers-b3340-default-rtdb.firebaseio.com/.json", {
        method: "POST",
        body: JSON.stringify({
          email: mail[1],
          name: mail[0],
          message: mail[2],
        }),
      });
    } catch (Error) {
      console.log(Error);
    }
  };

  function handleClick(evt: React.MouseEvent<HTMLElement>) {
    evt.preventDefault();
    const name = document.getElementById("name-input") as HTMLInputElement;
    const email = document.getElementById("email-input") as HTMLInputElement;
    const message = document.getElementById(
      "message-input"
    ) as HTMLTextAreaElement;

    const nameInput: string = name.value;
    const emailInput: string = email.value;
    const messageInput: string = message.value;

    if (!nameInput || !emailInput || !messageInput) {
      alert("must complete all feilds");
    } else {
      const mail = [nameInput, emailInput, messageInput];
      sendMail(mail);
    }
  }

  return (
    <>
      <h2 id="contact" className={styles.componenth2}>
        Contact Me
      </h2>
      <section className={styles.contact}>
        <div>
          <a href="https://github.com/Micklitodev">
            <Image
              className={styles.favicon}
              src="/contact/githubfavicon.png"
              alt="github link"
              width={30}
              height={30}
            />
          </a>
        </div>

        <div>
          <a href="tel:4708314159">
            <Image
              className={styles.favicon}
              src="/contact/phonefavicon.png"
              alt="phone link"
              width={30}
              height={30}
            />
          </a>
        </div>

        <div>
          <a href="mailto: micklito.dev@gmail.com">
            <Image
              className={styles.favicon}
              src="/contact/emailfavicon.png"
              alt="email link"
              width={30}
              height={30}
            />
          </a>
        </div>
        <div className={styles.formEl}>
          <div className="mb-32 text-center text-gray-800">
            <div className="mx-auto px-3 lg:px-6">
              <form>
                <div className="form-group mb-6">
                  <input
                    type="text"
                    className="form-control block
                        w-full
                        px-3
                        py-1.5  
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-green-400 focus:outline-none
                        "
                    id="name-input"
                    placeholder="Name"
                  />
                </div>

                <div className="form-group mb-6">
                  <input
                    type="email"
                    className="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-green-400 focus:outline-none
                          "
                    id="email-input"
                    placeholder="Email address"
                  />
                </div>

                <div className="form-group mb-6">
                  <textarea
                    className="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-green-400 focus:outline-none
                      "
                    id="message-input"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button
                  onClick={handleClick}
                  className="
                      w-full
                      px-6
                      py-2.5
                      bg-zinc-900 
                      text-gray-700
                      font-medium
                      text-xs
                      leading-tight
                      uppercase
                      rounded
                      shadow-md
                      hover:bg-green-400 hover:shadow-lg
                      focus:bg-green-400 focus:shadow-lg focus:outline-none focus:ring-0
                      active:bg-green-400 active:shadow-lg
                      transition
                      duration-150
                      ease-in-out
                      "
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
