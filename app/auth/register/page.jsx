import { createUser } from "@/app/_lib/action";
import { KeyRound, LogIn, LogInIcon } from "lucide-react";
import Link from "next/link";

export default function Register() {
  return (
    <div className="flex flex-col justify-center items-center py-30">
      <div className="border border-gray-300 p-4 rounded-md">
        <div className="flex justify-center gap-2 items-center mb-4">
          <h1 className="text-lg font-semibold">ثبت نام</h1>
          <LogInIcon className=" size-4 text-accent" />
        </div>

        <section className="">
          <form action={createUser} className="flex flex-col w-80 gap-2">
            <input
              type="text"
              placeholder="نام"
              className="border border-gray-300 p-2 rounded-lg outline-0 caret-accent  placeholder:text-sm"
              name="name"
            />
            <input
              type="email"
              placeholder="ایمیل"
              className="border border-gray-300 p-2 rounded-lg outline-0 caret-accent  placeholder:text-sm"
              name="email"
            />
            <input
              type="password"
              placeholder="گذرواژه"
              className="border border-gray-300 p-2 rounded-lg outline-0 caret-accent  placeholder:text-sm"
              name="password"
            />
            <input
              type="password"
              placeholder="گذرواژه تکرار"
              className="border border-gray-300 p-2 rounded-lg outline-0 caret-accent  placeholder:text-sm"
              name="confirmPassword"
            />

            <button className="text-slate-800 bg-accent rounded-sm px-4 py-2 hover:bg-lime-500">
              ثبت نام
            </button>

            <p className="text-center text-gray-300 text-xs">
              عضو سایت هستید؟{" "}
              <Link
                href="/auth/login"
                className="underline underline-offset-2 decoration-accent"
              >
                وارد شوید{" "}
              </Link>
            </p>
          </form>
        </section>
      </div>
    </div>
  );
}
