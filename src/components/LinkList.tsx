import Data from "../data/metadata.json";

export default function LinkList() {
  return (
    <div className="mt-5">
      <ul className="link-list">
        {Data.links.map((link) => (
          <li key={link.name} className="link-item">
            <a href={link.url} target="_blank">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
