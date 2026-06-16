import React from "react";

interface AvisProps {
    avisText: string;
    authorName: string;
    authorTitle: React.ReactNode;
    authorImg: string;
}

export default function Avis({
    avisText,
    authorName,
    authorTitle,
    authorImg,
}: AvisProps
) {
    return (
       <div className="flex flex-row gap-15">
  <div className="max-w-[500px] border border-zinc-300 rounded-md p-6 shadow-md">
  <p className="mb-4">
    {avisText}
  </p>

  {/* Bloc auteur */}
  <div className="flex items-center gap-4 mt-4">
    <img
      src={authorImg}
      alt={authorName}
      className="w-14 h-14 rounded-full object-cover"
    />

    <div className="flex flex-col">
      <span className="font-semibold text-black">{authorName}</span>
      <span className="text-sm text-zinc-500">{authorTitle}</span>
    </div>
  </div>
</div>

</div>
    );
}