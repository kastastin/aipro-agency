import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-[20px]">
      <div className="container mx-auto">
        <h2 className="h2 mb-[50px] lg:w-[570px]">Контактная информация</h2>

        {/* Socials */}
        <ul className="space-y-[30px]">
          <li className="space-y-[10px]">
            <div className="flex space-x-[10px]">
              <Image
                src="/socials/telegram.svg"
                alt="Telegram"
                width={20}
                height={20}
              />
              <span className="text-xl">Telegram</span>
            </div>

            <Link
              href="https://t.me/aiproagency"
              target="_blank"
              className="text-xl font-semibold hover:underline"
            >
              @aiproagency
            </Link>
          </li>

          <li className="space-y-[10px]">
            <div className="flex space-x-[10px]">
              <Image
                src="/socials/facebook.svg"
                alt="Telegram"
                width={20}
                height={20}
              />
              <span className="text-xl">Facebook</span>
            </div>

            <Link
              href="https://t.me/aiproagency"
              target="_blank"
              className="text-xl font-semibold hover:underline"
            >
              @aiproagency
            </Link>
          </li>

          <li className="space-y-[10px]">
            <div className="flex space-x-[10px]">
              <Image
                src="/socials/gmail.svg"
                alt="Telegram"
                width={20}
                height={20}
              />
              <span className="text-xl">Gmail</span>
            </div>

            <Link
              href="https://t.me/aiproagency"
              target="_blank"
              className="text-xl font-semibold hover:underline"
            >
              aiproagency@gmail.com
            </Link>
          </li>
        </ul>

        {/* Pages */}
        <ul className="flex justify-between py-[50px]">
          <li>
            <Link href="#" className="text-2xl uppercase hover:underline">
              Услуги
            </Link>
          </li>
          <li>
            <Link href="#" className="text-2xl uppercase hover:underline">
              FAQ
            </Link>
          </li>
          <li>
            <Link href="#" className="text-2xl uppercase hover:underline">
              Отзывы
            </Link>
          </li>
        </ul>

        {/* Logo */}
        <Image
          src="/logo-footer.png"
          alt="Logo"
          width={205}
          height={150}
          className="mx-auto pb-[50px]"
        />

        {/* Policies */}
        <div className="flex justify-between">
          <span className="cursor-pointer text-mini hover:underline">
            Политика конфиденциальности
          </span>
          <span className="cursor-pointer text-mini hover:underline">
            Копирайтинг 2024
          </span>
        </div>
      </div>
    </footer>
  );
}
