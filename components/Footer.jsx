import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-[20px] xl:pb-[50px] xl:pt-[70px]">
      <div className="container mx-auto">
        {/* Grid */}
        <div className="grid xl:grid-cols-[1fr_444px]">
          <div>
            <h2 className="h2 mb-[50px] lg:w-[570px]">Контактная информация</h2>
            {/* Socials */}
            <ul className="space-y-[30px]">
              <li className="space-y-[10px] xl:flex xl:items-center xl:gap-x-[46px] xl:space-y-0">
                <div className="flex space-x-[10px] xl:w-[130px]">
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

              <li className="space-y-[10px] xl:flex xl:items-center xl:gap-x-[46px] xl:space-y-0">
                <div className="flex space-x-[10px] xl:w-[130px]">
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

              <li className="space-y-[10px] xl:flex xl:items-center xl:gap-x-[46px] xl:space-y-0">
                <div className="flex space-x-[10px] xl:w-[130px]">
                  <Image
                    src="/socials/gmail.svg"
                    alt="Gmail"
                    width={20}
                    height={20}
                  />
                  <span className="text-xl">Gmail</span>
                </div>

                <Link
                  href="https://t.me/aiproagency"
                  target="_blank"
                  className="text-xl font-semibold hover:underline xl:w-[130px]"
                >
                  aiproagency@gmail.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Pages */}
          <ul className="xl:place-center col-span-full mx-auto flex justify-between py-[50px] xl:col-start-1 xl:w-[460px] xl:py-[80px]">
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
          <div className="relative mx-auto h-[150px] w-[205px] xl:col-start-2 xl:row-start-1 xl:h-[330px] xl:w-[444px]">
            <Image src="/logo-footer.png" alt="Logo" fill />
          </div>
        </div>

        {/* Policies */}
        <div className="mt-[50px] flex justify-between xl:mt-0">
          <span className="text-mini cursor-pointer hover:underline">
            Политика конфиденциальности
          </span>
          <span className="text-mini cursor-pointer hover:underline">
            Копирайтинг 2024
          </span>
        </div>
      </div>
    </footer>
  );
}
