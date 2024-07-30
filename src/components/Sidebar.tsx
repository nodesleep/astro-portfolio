import convertAge from "../util/convertAge";
import Data from "../data/metadata.json";

export const prerender = true;

export default function Sidebar() {
  const date = new Date().getFullYear();
  type Meta = {
    name: string;
    age: number;
    sign: string;
  };

  const metaData: Meta = {
    name: "Aron",
    age: convertAge(1983),
    sign: "Pisces",
  };

  return (
    <div className="flex flex-col text-lg sidebar md:text-sm text-neutral-500">
      <img src="/images/aron_duo.webp" className="rounded" alt="My avatar" />
      <div>
        <hr />
        <h5 className="text-xl">// About Me</h5>
        <ul className="mt-[1rem]">
          <li>Name: {metaData.name}</li>
          <li>Age: {metaData.age}</li>
          <li>Sign: {metaData.sign}</li>
        </ul>
      </div>
      <div>
        <hr />
        <h5 className="text-xl">// Projects</h5>
        <ul className="mt-[1rem]">
          {Data.projects.map((project) => (
            <li key={project.url}>
              <a href={project.url} target="_blank">
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <hr />
        <h5 className="text-xl">// Education</h5>
        <ul className="mt-[1rem]">
          <li>Ma.Sc. Psychology*</li>
          <li>Ba.Sc. Psychology</li>
          <li>Ba.Sc. CompSci</li>
          <li>* = in progress</li>
        </ul>
      </div>
      <div>
        <hr />
        <h5 className="text-xl">// Links</h5>
        <ul className="mt-[1rem]">
          {Data.links.map((link) => (
            <li key={link.url}>
              <a href={link.url} target="_blank">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <hr />
        <h5 className="text-xl">// Site Errata</h5>
        <ul className="mt-[1rem] flex flex-col gap-2">
          <li>Built on Astro, React, and Tailwindcss</li>
          <li>
            <a
              href="https://github.com/nodesleep/astro-portfolio"
              target="_blank"
            >
              Source code
            </a>
          </li>
          <li>&copy; {date}</li>
        </ul>
        <hr />
      </div>
    </div>
  );
}
