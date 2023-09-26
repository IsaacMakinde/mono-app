import React, { use } from "react";
import type { Repositories } from "../interfaces/i-repositories";

async function getRepositories(): Promise<Repositories[]> {
  const response = await fetch(
    "https://api.github.com/users/IsaacMakinde/repos"
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = (await response.json()) as Repositories[];
  return data;
}

export default function Projects(): JSX.Element {
  const repoData = use(getRepositories());

  return (
    <section className="hero is-info is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="columns is-multiline is-mobile">
            {repoData.map((repo) => (
              <div
                className="column is-6-desktop is-6-tablet is-8-mobile is-offset-2-mobile"
                key={repo.id}
              >
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title">{repo.name}</p>
                  </header>

                  <div className="card-content">
                    <div className="content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.s
                      {repo.description}
                    </div>
                  </div>

                  <div className="card-footer has-text-centered">
                    <a
                      className="card-footer-item has-text-primary"
                      href={`${repo.html_url}`}
                    >
                      <p className="titles-is-2">Check it out on Github!</p>

                      <i className="fa-brands fa-github fa-beat fa-lg custom-icon-green icon-with-gap" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
