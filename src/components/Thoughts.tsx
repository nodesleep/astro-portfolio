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

export default function Thoughts() {
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
          <li key={post.slug}>{post.data.title}</li>
        ))}
      </ul>
    </div>
  );
}
