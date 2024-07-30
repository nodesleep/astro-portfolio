import Thoughts from "../data/thoughts.json";

export default function SidebarRight() {
  const sortedPosts = Thoughts.posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <div>
      <ul className="thought-list">
        {sortedPosts.map((post) => (
          <li key={post.id} className="thought-item">
            <p className="text-white pb-0">
              {new Date(post.date).toDateString()}
            </p>
            <p>{post.thought}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
