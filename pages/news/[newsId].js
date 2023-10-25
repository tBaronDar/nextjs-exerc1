//domain.com/news/some-id
import { useRouter } from "next/router";

function NewsDetailsPage() {
  const router = useRouter();

  const newsId = router.query.newsId;

  return <h1>This is the details page. {newsId}</h1>;
}

export default NewsDetailsPage;
