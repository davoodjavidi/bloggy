import { Bell, EyeIcon, Heart, MessageCircle, Newspaper } from "lucide-react";
import { articles, comments } from "../_lib/data";

function page() {
  return (
    <div className="h-screen">
      <div className="flex max-w-2xl mx-auto mt-2 border border-gray-600 p-4 rounded-2xl gap-6 justify-center">
        <div className="flex items-center gap-2 rounded-md border border-gray-300 p-2">
          <EyeIcon className="text-accent" />
          <div className="flex flex-col items-center">
            <span className="font-bold">۲۱</span>
            <span className="text-gray-400 text-xs">بازدیدها</span>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-md border border-gray-300 p-2">
          <Newspaper className="text-accent" />
          <div className="flex flex-col items-center">
            <span className="font-bold">۴</span>
            <span className="text-gray-400 text-xs">مقاله ها</span>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-md border border-gray-300 p-2">
          <Heart className="text-accent" />
          <div className="flex flex-col items-center">
            <span className="font-bold">۴۲</span>
            <span className="text-gray-400 text-xs">لایک</span>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-md border border-gray-300 p-2">
          <MessageCircle className="text-accent" />
          <div className="flex flex-col items-center">
            <span className="font-bold">۱۲</span>
            <span className="text-gray-400 text-xs">کامنتها</span>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-md border border-gray-300 p-2">
          <Bell className="text-accent" />
          <div className="flex flex-col items-center">
            <span className="font-bold">۰۸</span>
            <span className="text-gray-400 text-xs">نوتیفیکیشن</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 mx-auto">
        <div>
          <h2>مقاله ها</h2>
          <span className="text-sm text-gray-400">تمامی مقاله ها</span>

          <div>
            {articles.map((article) => (
              <li key={article.id}>{article.title}</li>
            ))}
          </div>
        </div>

        <div>
          <h2>کامنتها</h2>
          <p>کامنتهای اخیر</p>

          <div>
            {comments.map((comment) => (
              <li key={comment.id}>{comment.description}</li>
            ))}
          </div>
        </div>

        <div>
          <h2>نوتیف ها</h2>
          <p>نوتیفهای اخیر</p>
        </div>
      </div>
    </div>
  );
}

export default page;
