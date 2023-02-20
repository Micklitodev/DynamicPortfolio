const Contact = (): JSX.Element => {
  return (
    <>
      <section id="contact">
        <div>
          <h2>Contact Me</h2>
        </div>
        <div>
          <div>
            <a href="https://github.com/Micklitodev">
              <img
                src='/'
                alt="github link"
              />
            </a>
            <h3>GitHub Link</h3>
          </div>
        </div>
        <div>
          <div>
            <a href="tel:4708314159">
              <img
                src='/'
                alt="phone link"
              />
            </a>
            <h3>(470) 831-4159</h3>
          </div>
        </div>
        <div>
          <div>
            <a href="mailto: micklito.dev@gmail.com">
              <img
                src='/'
                alt="email link"
              />
            </a>
            <h3>Micklito.dev@gmail.com</h3>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
