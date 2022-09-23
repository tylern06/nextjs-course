import { useRouter } from 'next/router';

export default function BlogPostsPage() {
  const router = useRouter();
  console.log('query', router.query);

  return (
    <div className="portfolio">
      Blog slug
      <button
        onClick={() => {
          router.push({
            pathname: '/portfolio/[id]',
            query: { id: 5 },
          });
        }}
      >
        Return
      </button>
    </div>
  );
}
