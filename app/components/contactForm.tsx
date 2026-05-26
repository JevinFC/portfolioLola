"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

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
    <div className="w-full bg-zinc-50 py-20 flex justify-center" id="contact">
      <div className="w-full max-w-[1200px] px-6 sm:px-12 md:px-20">

        <form
          onSubmit={handleSubmit}
          className={`
            flex flex-col gap-4 
            w-full max-w-md 
            mx-auto 
            p-6 sm:p-8 
            bg-white 
            shadow-md 
            rounded-md
            ${status === "error" ? "animate-shake" : ""}
            ${status === "success" ? "animate-pop" : ""}
          `}
        >
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={form.name}
            onChange={handleChange}
            required
            className="border border-zinc-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1800AD]"
          />

          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={form.email}
            onChange={handleChange}
            required
            className="border border-zinc-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1800AD]"
          />

          <textarea
            name="message"
            placeholder="Votre message"
            value={form.message}
            onChange={handleChange}
            required
            className="border border-zinc-300 rounded-md px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-[#1800AD]"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className={`bg-[#1800AD] text-white px-6 py-3 rounded-md transition-transform duration-200 hover:scale-105 ${
              status === "sending" ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {status === "sending" ? "Envoi..." : "Envoyer"}
          </button>

          {status === "success" && (
            <p className="text-green-600 mt-2 text-center">
              Merci ! Votre message a été envoyé.
            </p>
          )}

          {status === "error" && (
            <p className="text-red-600 mt-2 text-center">
              Erreur lors de l’envoi, veuillez réessayer.
            </p>
          )}
        </form>

      </div>
    </div>
  );
}
