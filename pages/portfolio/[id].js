import { useRouter } from 'next/router';

export default function PortfolioId() {
  const router = useRouter();
  console.log('query', router.query);
  return <div className="portfolio">Portfolio Id Page</div>;
}
