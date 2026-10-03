"use client";

import { useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { contact } from "../data/contact";

const champ =
  "w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-brand";
const libelle = "text-sm font-semibold text-zinc-800";
const lien = "font-semibold text-brand underline decoration-accent decoration-2 underline-offset-4";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        "service_tp9eco9",
        "template_3b3t6rk",
        { ...form, time: new Date().toLocaleString() },
        "UGO0KuK2Wc6P5yi_x"
      );

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);

    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <div
      className={`mx-auto w-full max-w-md rounded-2xl bg-white p-6 shadow-xl sm:p-8 ${
        status === "error" ? "animate-shake" : ""
      } ${status === "success" ? "animate-pop" : ""}`}
    >
      <p className="text-center text-zinc-700">
        Un projet, une question&nbsp;? Je vous réponds sous {contact.delaiReponse}.
      </p>

      {/* Libellés visibles au-dessus des champs : ils restent lisibles pendant la saisie */}
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-nom" className={libelle}>Nom</label>
          <input
            id="contact-nom"
            type="text"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            required
            className={champ}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-email" className={libelle}>E-mail</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="vous@exemple.fr"
            value={form.email}
            onChange={handleChange}
            required
            className={champ}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-message" className={libelle}>Message</label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Parlez-moi de votre projet…"
            value={form.message}
            onChange={handleChange}
            required
            className={`${champ} h-32`}
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className={`rounded-full bg-brand px-6 py-3 font-semibold text-white transition-transform duration-200 hover:scale-105 ${
            status === "sending" ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          {status === "sending" ? "Envoi..." : "Envoyer"}
        </button>

        <p role="status" aria-live="polite" className="text-center text-sm empty:hidden">
          {status === "success" && <span className="text-green-700">Merci ! Votre message a été envoyé.</span>}
          {status === "error" && <span className="text-red-700">Erreur lors de l’envoi, veuillez réessayer.</span>}
        </p>
      </form>

      {/* Données personnelles : une mention courte, le détail est dans les mentions légales */}
      <p className="mt-4 text-xs leading-relaxed text-zinc-500">
        Vos informations servent uniquement à vous répondre.{" "}
        <Link href="/mentions-legales#donnees" className="underline underline-offset-2 hover:text-brand">
          En savoir plus
        </Link>
      </p>

      {/* Les autres moyens de contact */}
      <p className="mt-6 border-t border-zinc-100 pt-5 text-center text-sm leading-relaxed text-zinc-700">
        Vous préférez écrire directement&nbsp;?
        <br />
        <a href={`mailto:${contact.email}`} className={lien}>{contact.email}</a>
        {" · "}
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className={lien}>LinkedIn</a>
      </p>
    </div>
  );
}
