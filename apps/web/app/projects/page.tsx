import Link from "next/link";
import { use } from "react";

async function getCharacters() {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  return res.json();
}

async function getRepos() {
  const res = await fetch("https://api.github.com/users/IsaacMakinde/repos");
  return res.json();
}

export default function Projects() {
  const allCharacters = use(getCharacters());
  const allRepositories = use(getRepos());
  return (
    <div>
      <div>
        <h2>All Characters</h2>
        {allCharacters?.results.map((character) => (
          <ul key={character.id}>
            <li>{character.name}</li>
          </ul>
        ))}
      </div>
      <hr />
      <div>
        <h1>My Repos</h1>
        {allRepositories?.map((repo) => (
          <div className="card" key={repo.id}>
            <header className="card-header">
              <p className="card-header-title">{repo.name}</p>
              <button aria-label="more options" className="card-header-icon">
                <span className="icon">
                  <i aria-hidden="true" className="fas fa-angle-down" />
                </span>
              </button>
            </header>
            <div className="card-content">
              <div className="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <br />
                <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
            <footer className="card-footer">
              <a className="card-footer-item" href="/">
                Save
              </a>
              <a className="card-footer-item" href="/">
                Edit
              </a>
              <a className="card-footer-item" href="/">
                Delete
              </a>
            </footer>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
