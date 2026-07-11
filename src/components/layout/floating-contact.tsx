import { Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${siteConfig.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.3A9 9 0 1 0 12 3Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M8.5 9.3c0 4 3.2 6.7 6.6 7 .9.1 1.6-.6 1.6-1.4v-.6c0-.4-.3-.7-.7-.8l-1.6-.4c-.3-.1-.6 0-.8.2l-.4.5c-1.2-.5-2.1-1.4-2.6-2.6l.5-.4c.2-.2.3-.5.2-.8l-.4-1.6c-.1-.4-.4-.7-.8-.7h-.6c-.8 0-1.5.7-1.4 1.6Z"
            fill="currentColor"
          />
        </svg>
      </a>
      <a
        href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
        aria-label="Call us"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-crimson text-ivory shadow-lg shadow-black/20 transition-transform hover:scale-105"
      >
        <Phone size={22} />
      </a>
    </div>
  );
}
