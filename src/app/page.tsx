"use client";

import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-1 px-4 sm:px-6 md:px-8 py-8 md:py-10 max-w-6xl mx-auto w-full">

        {/* Título */}
        <header className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-gray-800">
            AGM Software Soluções Tecnológicas
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Desenvolvemos sistemas, sites e soluções tecnológicas para empresas
            que buscam eficiência, inovação e resultados reais.
          </p>
        </header>

        {/* Banner */}
        <div className="mb-12 md:mb-16 flex justify-center w-full">
          <div className="relative w-full h-[220px] sm:h-[300px] md:h-[450px]">
            <Image
              src="/banner-sistemas-tecnologicos.png"
              alt="Desenvolvemos sistemas, sites e soluções tecnológicas para empresas"
              fill
              className="rounded-xl shadow-2xl object-cover"
              priority
            />
          </div>
        </div>

        {/* Serviços */}
        <section className="bg-gray-50 p-6 md:p-10 rounded-2xl shadow-sm">
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center text-gray-800">
            Nossos Serviços
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <p className="text-base md:text-lg text-gray-700">
                ✓ Desenvolvimento de sistemas personalizados
              </p>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm">
              <p className="text-base md:text-lg text-gray-700">
                ✓ Criação de sites responsivos e modernos
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsappButton />
    </div>
  );
}
