export default function Navigation() {
  return (
    <div className="flex font-bold w-full items-center fixed p-6 bg-darkblue">
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
    </div>
  );
}
