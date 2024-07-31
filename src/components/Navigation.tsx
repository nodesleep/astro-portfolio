export default function Navigation() {
  return (
    <div className="flex font-bold w-[90%] md:w-[80%] items-center fixed p-6 bg-darkblue">
      <ul className="flex items-center gap-6">
        <li>
          <a href="/" className="hover:text-white">
            Home
          </a>
        </li>
        <li>
          <a href="/articles" className="hover:text-white">
            Articles
          </a>
        </li>
      </ul>
      <div className="flex items-center ml-auto">
        <a href="https://github.com/nodesleep/astro-porfolio" target="_blank">
          Source
        </a>
      </div>
    </div>
  );
}
