import Sticker from "./sticker";

interface SectionTitleProps {
  title: string;
  sticker?: "smiley" | "flower";
  onDark?: boolean; // titre posé sur un aplat bleu
  className?: string;
}

// Titre de section (h2, sous le h1 de la page) : police Unbounded, avec un sticker de Lola à côté
export default function SectionTitle({ title, sticker, onDark = false, className = "" }: SectionTitleProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <h2 className={`text-3xl md:text-4xl font-extrabold ${onDark ? "text-white" : "text-brand"}`}>{title}</h2>
      {sticker && (
        <Sticker
          name={sticker}
          className={`w-10 flex-shrink-0 md:w-12 ${sticker === "smiley" ? "rotate-12" : "-rotate-12"}`}
        />
      )}
    </div>
  );
}
