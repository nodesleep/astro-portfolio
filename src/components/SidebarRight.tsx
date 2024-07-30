import Thoughts from "../data/thoughts.json";

export default function SidebarRight() {
  const sortedPosts = Thoughts.posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div>
      <h4>Random Thoughts</h4>
      <ul className="thought-list">
        {sortedPosts.map((post) => (
          <li key={post.id}>
            <p className="text-indigo-500 pb-0">
              {new Date(post.date).toDateString()}
            </p>
            <p>{post.thought}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
