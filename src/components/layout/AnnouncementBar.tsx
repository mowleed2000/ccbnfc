import React from "react";
import Link from "next/link";
import { storeConfig } from "@/config/store.config";

export default function AnnouncementBar() {
  if (!storeConfig.announcement.enabled || !storeConfig.announcement.message) {
    return null;
  }

  return (
    <div className="bg-[#15171B] text-white text-xs py-2 px-4 text-center font-medium tracking-wide border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
        <span>{storeConfig.announcement.message}</span>
        {storeConfig.announcement.linkUrl && (
          <Link
            href={storeConfig.announcement.linkUrl}
            className="underline underline-offset-2 hover:text-blue-300 transition-colors"
          >
            Explore catalogue
          </Link>
        )}
      </div>
    </div>
  );
}
