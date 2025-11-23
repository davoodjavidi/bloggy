import { SquareCode } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <div>
      <Link href="/" className="flex gap-2 items-center">
        <SquareCode className="text-[#06EF62] size-10" />
        <h1 className="text-xl lg:text-2xl">واکنشگر</h1>
      </Link>
    </div>
  );
}
