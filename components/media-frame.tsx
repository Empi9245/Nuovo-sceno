import Image from "next/image";
import type { ImageAsset } from "@/data/site";

type MediaFrameProps = {
  image: ImageAsset;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

export function MediaFrame({ image, priority = false, className = "", sizes = "(min-width: 900px) 50vw, 100vw" }: MediaFrameProps) {
  return (
    <div className={`media-frame ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="media-frame__image"
      />
    </div>
  );
}
