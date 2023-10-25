//domain.com/news

import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>This is the news page.</h1>
      <ul>
        <li>
          <Link href="/news/anItem">An item</Link>
        </li>
        <li>
          <Link href="/news/anOtherItem">An other item.</Link>
        </li>
      </ul>
    </>
  );
}

export default NewsPage;
