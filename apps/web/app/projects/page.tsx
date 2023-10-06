import React, { use } from "react";
import Image from "next/image";
import { getRepositories } from "../../services/githubapi";

export default function Projects(): JSX.Element {
  const username = "IsaacMakinde";
  const repoData = use(getRepositories(username));

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

                  <div className="card-image">
                    <figure className="image is-4by3">
                      <Image
                        alt="An image of a pair of glasses"
                        className=""
                        height={300}
                        src={repo.owner.avatar_url}
                        width={300}
                      />
                    </figure>
                  </div>

                  <div className="card-content">
                    <div className="content">{repo.description}</div>
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
