import { useQuery, gql } from '@apollo/client/react/components';
import Link from 'next/link';
const GET_POSTS = gql`
  query GetPosts {
    posts {
      nodes {
        slug
        title
      }
    }
  }
`;

export default function HomePage() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar las noticias.</p>;

  return (
    <div>
      <h1>Noticias de la Radio</h1>
      <ul>
        {data.posts.nodes.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}