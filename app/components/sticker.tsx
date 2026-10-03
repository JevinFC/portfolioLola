interface StickerProps {
  name: "smiley" | "flower";
  className?: string; // taille, position et rotation
}

// Le contour d'origine de la fleur fait moins d'un pixel : net sur un téléphone (écran haute densité),
// il paraît pixellisé sur un écran d'ordinateur standard. Jusqu'à une densité de 1,5, le navigateur prend donc
// la version aux contours épaissis (src, compté comme 1x) ; au-delà, l'originale
export const stickerImage = (name: StickerProps["name"]) =>
  name === "flower"
    ? { src: "/stickers/flower-1x.svg", srcSet: "/stickers/flower-1x.svg 1.5x, /stickers/flower.svg 2x" }
    : { src: `/stickers/${name}.svg` };

// Sticker décoratif repris du visuel Canva de Lola (ignoré par les lecteurs d'écran), qui gigote au survol
export default function Sticker({ name, className = "" }: StickerProps) {
  return (
    <span aria-hidden="true" className={`inline-block select-none ${className}`}>
      <img
        {...stickerImage(name)}
        alt=""
        loading="lazy"
        className="wiggle-hover w-full drop-shadow-md"
      />
    </span>
  );
}
