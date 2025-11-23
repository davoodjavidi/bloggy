import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Article({ title, description, author }) {
  return (
    <article className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold decoration-accent hover:underline underline-offset-4 cursor-pointer decoration-2">
          {title}
        </h1>

        <div className="flex gap-10">
          <span className="text-gray-300 text-xs">زمان مطالعه:‌۳ دقیقه</span>
          <span className="text-gray-300 text-xs ">نویسنده: {author}</span>
        </div>
      </div>

      <p>{description}</p>
      <Link href="/" className="flex gap-2 group">
        <p className="font-semibold hover:text-accent "> بیشتر بخوانید</p>

        <ArrowLeft className="hover:animate-pulse group-hover:text-accent" />
      </Link>
    </article>
  );
}
