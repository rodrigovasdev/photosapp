import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function BackButton(){
    return(
        <div className="pt-24 pl-5 bg-neutral-300">
            <Link className="" href="/">
                <ArrowLeftIcon className="h-8 w-24 text-orange-600"></ArrowLeftIcon>
            </Link>
        </div>    
    );
}