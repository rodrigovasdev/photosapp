import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

interface BackButtonProps {
  href: string;
}

export default function BackButton({ href }: BackButtonProps) {
  return (
    <div className="pt-24 pl-5 bg-neutral-300">
      <Link href={href} className="">
        <ArrowLeftIcon className="h-8 w-24 text-orange-600" />
      </Link>
    </div>
  );
}
