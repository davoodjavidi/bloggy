import { KeyRound, LogIn, LogInIcon } from "lucide-react";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center py-30">
      <div className="border border-gray-300 p-4 rounded-md">
        <div className="flex justify-center gap-2 items-center mb-4">
          <h1 className="text-lg font-semibold">ورود</h1>
          <LogInIcon className=" size-4 text-accent" />
        </div>

        <section className="">
          <form action="" className="flex flex-col w-80 gap-2">
            <input
              type="text"
              placeholder="ایمیل"
              className="border border-gray-300 p-2 rounded-lg outline-0 caret-accent  placeholder:text-sm"
            />
            <input
              type="text"
              placeholder="گذرواژه"
              className="border border-gray-300 p-2 rounded-lg outline-0 caret-accent  placeholder:text-sm"
            />

            <button className="text-slate-800 bg-accent rounded-sm px-4 py-2 hover:bg-lime-500">
              ورود
            </button>

            <p className="text-center text-gray-300 text-xs">
              عضو نیستید؟
              <Link
                href="/auth/register"
                className="underline underline-offset-2 decoration-accent"
              >
                ثبت نام کنید
              </Link>
            </p>
          </form>
        </section>
      </div>
    </div>
  );
}
