import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

interface backButtonProps {
    text: string;
    link: string
}

const BackButton = ({text, link}: backButtonProps) => {
  return (
<Link href={link} className="text-gray-500 hover:underline items-center gap-1 font-bold mb-5 
">
    <ArrowLeftCircle size={18} /> {text}
</Link>
)
}

export default BackButton