export default function Navigation() {
  return (
    <div className="flex font-bold w-full mb-8">
      <ul className="flex items-center ml-auto gap-6">
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
