import Article from "./_components/Article";

import { articles } from "./_lib/data";

export default function Home() {
  return (
    <>
      <div className="h-40 bg-accent">Hero section</div>

      <div className="flex gap-20 my-20">
        <section className="w-3xl">
          <h2 className="text-xl text-accent mb-10">مقاله ها و آموزش ها</h2>

          <div className="flex flex-col gap-10">
            {articles.map((article) => (
              <Article
                title={article.title}
                description={article.description}
                author={article.author}
                key={article.id}
              />
            ))}
          </div>
        </section>
        <section className="">
          <h3 className="text-xl text-accent mb-10">دسته بندی ها</h3>
        </section>
      </div>
    </>
  );
}
