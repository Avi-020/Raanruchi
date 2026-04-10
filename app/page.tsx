"use client";

import { motion } from "framer-motion";
import {
  Coffee,
  //  MapPin,
  Phone,
} from "lucide-react";
// import { useEffect, useState } from "react";

export default function Home() {
  // const targetDate = new Date("2026-06-01T00:00:00");
  // const [timeLeft, setTimeLeft] = useState<any>({});

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     const now = new Date();
  //     const diff = targetDate.getTime() - now.getTime();

  //     setTimeLeft({
  //       days: Math.floor(diff / (1000 * 60 * 60 * 24)),
  //       hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
  //       minutes: Math.floor((diff / 1000 / 60) % 60),
  //       seconds: Math.floor((diff / 1000) % 60),
  //     });
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);

  return (
    <main className="bg-white text-gray-800">
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <img
          src="/bg.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6"
        >
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold flex justify-center items-center gap-2">
            <Coffee /> Raanruchi Cafe
          </h1>

          {/* SLOGAN */}
          <p className="mt-2 text-sm md:text-sm tracking-wide opacity-90">
            " Swad Jo Dil Mein Bas Jaaye "
          </p>

          {/* COMING SOON */}
          <h2 className="mt-20 text-5xl md:text-8xl font-extrabold tracking-widest">
            COMING SOON
          </h2>
        </motion.div>
      </section>
      {/* COUNTDOWN */}
      {/* <section className="py-20 bg-gradient-to-b from-white to-orange-50 text-center">
        <h3 className="text-4xl font-bold mb-3 text-orange-900">
          Launching Soon ⏳
        </h3>
        <p className="text-gray-600 mb-10">
          Get ready to flavors like never before
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {["days", "hours", "minutes", "seconds"].map((unit, index) => (
            <motion.div
              key={unit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white/70 backdrop-blur-lg border border-orange-200 shadow-xl rounded-2xl px-6 py-6 w-[100px] md:w-[120px] hover:scale-105 transition">
                <p className="text-4xl md:text-5xl font-extrabold text-orange-900">
                  {timeLeft[unit] || 0}
                </p>

                <p className="text-sm text-gray-500 uppercase tracking-wider mt-2">
                  {unit}
                </p>
              </div>

              
              <div className="absolute inset-0 rounded-2xl bg-orange-200 opacity-0 group-hover:opacity-20 blur-xl transition"></div>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* MAP */}
      {/* <section className="py-20 bg-white text-center px-6">
        <h3 className="text-4xl font-bold mb-4 text-orange-900 flex justify-center items-center gap-2">
          <MapPin className="text-orange-600" /> Visit Us
        </h3>

        <p className="text-gray-600 mb-10">
          Find us and experience the taste in real life ☕
        </p>

        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-[300px] md:h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps?q=Pune&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>

      
        <div className="mt-8">
          <p className="text-gray-700 font-medium">Raanruchi Café, Pune</p>

          <a
            href="https://www.google.com/maps"
            target="_blank"
            className="inline-block mt-3 text-orange-600 font-semibold hover:underline"
          >
            Get Directions →
          </a>
        </div>
      </section> */}

      {/* CTA */}
      {/* <section className="py-16 bg-orange-600 text-white text-center">
        <h3 className="text-3xl font-semibold mb-4">Stay Updated</h3>

        <button className="bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold">
          Get Notified
        </button>
      </section> */}

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/917057272227"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg"
      >
        <Phone />
      </a>
    </main>
  );
}
