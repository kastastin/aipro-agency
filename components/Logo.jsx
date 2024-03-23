import Link from "next/link";
import Image from "next/image";

export default function Logo({ ...props }) {
  return (
    <Link href="/" {...props}>
      <div className="relative h-[25px] w-[32px] xl:h-[50px] xl:w-[64px]">
        <Image
          src="/logo.svg"
          alt="Logo"
          fill
          className="cursor-pointer hover:brightness-110"
        />
      </div>
    </Link>
  );
}
