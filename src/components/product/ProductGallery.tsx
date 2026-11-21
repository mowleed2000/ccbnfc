"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProductGalleryProps {
  images: string[];
  title: string;
}

export default function ProductGallery({ images, title }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const currentImage = images[selectedIndex] || images[0];

  return (
    <div className="space-y-4">
      {/* Main Image Container */}
      <div className="relative aspect-square w-full bg-[#F5F6F8] rounded-2xl border border-[#E5E7EB] overflow-hidden group">
        <Image
          src={currentImage}
          alt={title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 55vw"
          className="object-contain p-4 sm:p-8 transition-transform duration-300 group-hover:scale-102"
        />

        {/* Zoom Button */}
        <button
          onClick={() => setIsZoomed(true)}
          className="absolute bottom-4 right-4 p-2.5 bg-white/90 hover:bg-white text-[#15171B] rounded-xl shadow-md backdrop-blur-xs transition-colors"
          aria-label="Enlarge image"
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        {images.length > 1 && (
          <div className="absolute inset-y-0 inset-x-2 flex items-center justify-between pointer-events-none">
            <button
              onClick={() => setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
              className="p-2 bg-white/80 hover:bg-white rounded-full shadow pointer-events-auto"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4 text-[#15171B]" />
            </button>
            <button
              onClick={() => setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
              className="p-2 bg-white/80 hover:bg-white rounded-full shadow pointer-events-auto"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4 text-[#15171B]" />
            </button>
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-1">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIndex(idx)}
              className={`relative w-20 h-20 rounded-lg overflow-hidden bg-[#F5F6F8] border-2 shrink-0 transition-all ${
                selectedIndex === idx
                  ? "border-[#245CF5] shadow-xs"
                  : "border-[#E5E7EB] hover:border-gray-400 opacity-70 hover:opacity-100"
              }`}
            >
              <Image src={img} alt={`${title} view ${idx + 1}`} fill className="object-contain p-1" />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox / High Res Zoom Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsZoomed(false)}
        >
          <button
            onClick={() => setIsZoomed(false)}
            className="absolute top-6 right-6 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full"
            aria-label="Close zoom"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="relative w-full max-w-4xl max-h-[85vh] aspect-square"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentImage}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
