import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto px-8 ">
        <div className="flex flex-col items-center justify-between gap-6 py-8 sm:flex-row">
          <div className="flex items-center gap-4">
            <Image src="/4.png" alt="Lumen Web Logo" width={150} height={100} />
          </div>

          <div className="flex items-center gap-4">
            <SocialLink
              href="https://www.instagram.com/lumen.web/"
              icon={Instagram}
              label="Instagram"
            />
            <SocialLink
              href="https://www.linkedin.com/company/lumenweb/"
              icon={Linkedin}
              label="LinkedIn"
            />
            <SocialLink
              href="https://www.facebook.com/people/Lumen-Desenvolvimento-Web/61565593634646/"
              icon={Facebook}
              label="Facebook"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: typeof Instagram;
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-gray-500 transition-colors"
    >
      <span className="sr-only">{label}</span>
      <Icon className="h-6 w-6" />
    </Link>
  );
}
