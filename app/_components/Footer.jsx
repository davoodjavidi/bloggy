import { Github, Instagram, Linkedin, Twitter, X } from "lucide-react";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="min-h-20 mx-auto py-5">
      <div className="flex max-w-6xl mx-auto justify-between">
        <div>
          <Logo />
          <p className="text-sm text-gray-400">
            طراحی سایت و آموزش برنامه نویسی
          </p>
          <ul className="flex gap-8 text-gray-300 mt-6">
            <li>خدمات</li>
            <li>تماس</li>
            <li>سفارش</li>
            <li>درباره</li>
            <li>نمونه کار</li>
          </ul>
          <p className="text-gray-400 text-xs mt-10">
            تمامی مطالب سایت متعلق به وبسایت واکنشگر است
          </p>
        </div>
        {/* social icons */}
        <div className="self-end">
          <ul className="flex gap-6">
            <li>
              <Github />
            </li>
            <li>
              <Linkedin />
            </li>

            <li>
              <Instagram />
            </li>
            <li>
              <Twitter />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
