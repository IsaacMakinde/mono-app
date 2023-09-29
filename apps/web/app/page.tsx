import React from "react";

export default function Page(): JSX.Element {
  return (
    <section className="hero is-info is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="columns is-8 is-variable">
            <div className="columns is-two-thirds has-text-left">
              <div className="is-flex-direction-row">
                <h1 className="title is-1">About me</h1>
                <p className="is-size-4">
                  My name is Isaac Makinde, and I{`'`}m in my final year of
                  Computer Science at Dublin City University. I{`'`}m very keen
                  to start working as soon as I finish my degree. I have prior
                  experience working in an agile development environment and am
                  well-versed in programming languages such as Python, Java, and
                  JavaScript along with frameworks like React, Angular, and
                  Flask coupled with Google cloud services utilizing MySQL. With
                  time, I aim to grow personally and professionally by getting
                  involved in a multitude of projects, and I sincerely hope to
                  hear from you.
                </p>
                <hr />
                <a
                  className="button is-link is-large"
                  download="resume.pdf"
                  href="/documents/resume.pdf"
                >
                  Check out my CV!
                </a>
              </div>
            </div>
            <div className="column is-one-third">Image of myself pending</div>
          </div>
        </div>
      </div>
    </section>
  );
}
