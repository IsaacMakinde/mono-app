import React from "react";



export default function Page(): JSX.Element {
  return (
    <div className="hero-body">
      <div className="container has-text-centered">
        <div className="columns is-8 is-variable">
          <div className="column is-two-thirds has-text-left">
            <h1 className="title is-1">Contact Me</h1>
            <p className="is-size-4">
              Thank you for considering reaching out to me. I appreciate your
              interest and am eager to assist you in any way I can. I{`'`}m here
              to make your experience as smooth and productive as possible.
            </p>

            <div className="social-media">
              <a
                aria-label="Visit Github"
                className="button is-light is-large"
                href="https://github.com/IsaacMakinde"
              >
                <i className="fa-brands fa-github fa-beat fa-lg custom-icon-green" />
              </a>
              <a
                aria-label="Visit Youtube"
                className="button is-light is-large"
                href="https://www.youtube.com/@kixgamer2183/videos"
              >
                <i className="fa-brands fa-youtube fa-beat fa-lg custom-icon-green" />
              </a>
              <a
                aria-label="Visit LinkedIn"
                className="button is-light is-large"
                href="https://www.linkedin.com/in/isaac-makinde-4236781a8/"
              >
                <i className="fa-brands fa-linkedin fa-beat fa-lg custom-icon-green" />
              </a>
            </div>
          </div>
          <form action="https://api.web3forms.com/submit" className="column is-one-third has-text-left" method="POST">
          <input name="access_key" type="hidden" value="690241ff-ba2b-466d-97f6-98d53f7eb0fb" />
            <div className="field">
              <label className="label">
                Name
                <input className="input is-medium" name="name" required type="text" />
              </label>
            </div>
            <div className="field">
              <label className="label">
                Email
                <input className="input is-medium" name="email" required type="text" />
              </label>
            </div>
            <div className="field">
              <label className="label">
                Message
                <textarea className="textarea is-medium" name="message" required  />
              </label>
            </div>
            <div className="field" data-captcha="true" />
            <div className="control">
              <button
                className="button is-link is-fullwidth has-text-weight-medium is-medium"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
          <script async defer src="https://web3forms.com/client/script.js" />
        </div>
      </div>
    </div>
  );
}
