import Link from "next/link";
import Image from "next/image";

export default function Logo({ ...props }) {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={32}
        height={25}
        className="cursor-pointer hover:brightness-110"
        {...props}
      />
    </Link>
  );
}
