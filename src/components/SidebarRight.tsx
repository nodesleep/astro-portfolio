import { useEffect, useState } from "react";
import { getCollection } from "astro:content";

interface Post {
  slug: string;
  data: {
    title: string;
    pubDate: Date;
    description?: string;
    draft?: boolean;
  };
}

export default function SidebarRight() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts: Post[] = await getCollection("thoughts");
      const publishedPosts = allPosts.filter((post) => !post.data.draft);
      const sortedPosts = publishedPosts
        .sort(
          (a, b) =>
            new Date(b.data.pubDate).getTime() -
            new Date(a.data.pubDate).getTime(),
        )
        .slice(0, 4);
      setPosts(sortedPosts);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h4>// Random Thoughts</h4>
      <ul className="thought-list">
        {posts.map((post) => (
          <li key={post.slug}>
            <p className="text-indigo-500 pb-0">
              {new Date(post.data.pubDate).toDateString()}
            </p>
            <p>{post.data.title}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
