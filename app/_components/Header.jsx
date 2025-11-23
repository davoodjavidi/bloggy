import {
  Edit,
  Eye,
  Heart,
  Menu,
  MonitorCog,
  Newspaper,
  PersonStanding,
  Search,
  Settings,
  Trash2,
} from "lucide-react";
import defaultImage1 from "@/public/assets/300x200.svg";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

// nav menu
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";

export default function Header() {
  return (
    <nav className="py-8 flex justify-between items-center lg:max-w-7xl mx-auto">
      <Logo />
      {/* Menu start */}
      <Menubar className={"bg-transparent text-white hidden lg:flex"}>
        <MenubarMenu>
          <MenubarTrigger className="">خانه</MenubarTrigger>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="">خدمات</MenubarTrigger>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="">
            <Link href="/pages/about">درباره من</Link>
          </MenubarTrigger>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="">
            <Link href="/pages/contact">تماس با من</Link>
          </MenubarTrigger>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="">
            <Link href="/dashboard">حساب کاربری</Link>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link href="/dashboard/article/manage">پست جدید</Link>
            </MenubarItem>
            <MenubarItem>
              <Link href="/dashboard/article/all">پست ها</Link>
            </MenubarItem>
            <MenubarItem>
              <Link href="/dashboard/article/all">پروفایل کاربری</Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      {/*  Menu End */}
      <div className="flex gap-1">
        <Dialog className={"bg-green-800 rtl:text-right"}>
          <DialogTrigger className="hover:bg-slate-700 p-2 transition duration-200 rounded-md">
            <Heart />
          </DialogTrigger>
          <DialogContent
            className={
              "bg-slate-800 max-w-xl text-white border border-gray-300 py-10"
            }
          >
            <DialogHeader className={"rtl:text-right "}>
              <DialogTitle>مقالات ذخیره شده</DialogTitle>
            </DialogHeader>

            <div className="flex flex-col overflow-y-scroll max-h-80 gap-1">
              <div className="flex gap-2 border border-gray-400 p-2 rounded-md">
                <Image
                  src={defaultImage1}
                  alt="image-1"
                  className="w-33 h-20 object-cover rounded-lg"
                />
                <div className="flex-col flex-1 p-2 space-y-2">
                  <p>این عنوان مقاله است</p>
                  <div className="flex flex-1 justify-between text-gray-400 text-sm">
                    <div className="flex flex-row-reverse justify-center items-center gap-2">
                      <Eye /> <span>۱۲</span>
                    </div>
                    <Trash2 className="text-red-500 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger className="hover:bg-slate-700 p-2 transition duration-200 rounded-md">
            <Search />
          </DialogTrigger>

          <DialogContent
            className={
              "bg-slate-800 max-w-xl text-white border border-gray-300 py-10"
            }
          >
            <DialogHeader>
              <input
                type="text"
                placeholder="جستجو کنید..."
                className="border border-gray-300 rounded-md p-2 outline-0 focus:ring-indigo-500 placeholder:text-sm focus:ring-2"
              />
            </DialogHeader>

            <h1>۳ مقاله یافت شد</h1>
            <div className="flex flex-col overflow-y-scroll max-h-80 gap-1">
              <div className="flex gap-2 border border-gray-400 p-2 rounded-md">
                <Image
                  src={defaultImage1}
                  alt="image-1"
                  className="w-33 h-20 object-cover rounded-lg"
                />
                <div className="flex-col flex-1 p-2 space-y-2">
                  <p>این عنوان مقاله است</p>
                  <div className="flex flex-1 justify-between text-gray-400 text-sm">
                    <div className="flex flex-row-reverse justify-center items-center gap-2">
                      <Eye /> <span>۱۲</span>
                    </div>
                    <Trash2 className="text-red-500 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <Link
          href="/auth/login"
          className=" text-gray-100 rounded-sm px-4 py-2 hidden lg:flex border-2 border-gray-100 hover:border-[#06EF62]"
        >
          ورود / عضویت
        </Link>

        <Link
          href="/auth/login"
          className=" text-gray-900 bg-white rounded-sm px-4 py-2 hover:bg-[#06EF62] flex items-center font-semibold"
        >
          سفارش طراح سایت{" "}
        </Link>

        <Sheet>
          <SheetTrigger className="lg:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent className="bg-slate-800 text-white">
            <SheetHeader>
              <Logo />

              <ul className="flex flex-col gap-4 my-10">
                <li className="flex gap-2">
                  <MonitorCog />
                  <Link href="/dashboard">حساب کاربری</Link>
                </li>

                <li className="flex gap-2">
                  <Newspaper />
                  <Link href="/dashboard">مقاله ها</Link>
                </li>

                <li className="flex gap-2">
                  <Settings />
                  <Link href="/dashboard">تنظیمات</Link>
                </li>

                <li className="flex gap-2">
                  <Edit />
                  <Link href="/dashboard">ویرایش</Link>
                </li>
              </ul>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
