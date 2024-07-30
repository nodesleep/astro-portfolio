import { useEffect, useState } from "react";
import { getCollection } from "astro:content";

interface Post {
  slug: string;
  data: {
    title: string;
    pubDate: Date;
    description?: string;
    category?: string;
    author: string;
    image?: {
      url: string;
      alt: string;
    };
    tags?: string[];
    draft?: boolean;
  };
}

export default function Articles() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts: Post[] = await getCollection("articles");
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
      <h4>// Tech Articles</h4>
      <ul className="article-list">
        {posts.map((post) => (
          <li key={post.slug}>
            <a href={`/articles/${post.slug}`}>{post.data.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
