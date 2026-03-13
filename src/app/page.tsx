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

      <main className="flex-1 px-8 py-10 max-w-6xl mx-auto w-full">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            AGM Software Soluções Tecnológicas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desenvolvemos sistemas, sites e soluções tecnológicas para empresas
            que buscam eficiência, inovação e resultados reais.
          </p>
        </header>

        {/* Banner com a imagem sistemas-tecnologicos */}
        <div className="mb-16 flex justify-center w-full">
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image
              src="/banner-sistemas-tecnologicos.png"
              alt="Desenvolvemos sistemas, sites e soluções tecnológicas para empresas"
              fill
              className="rounded-xl shadow-2xl object-cover"
              priority
            />
          </div>
        </div>

        <section className="bg-gray-50 p-10 rounded-2xl shadow-sm">
          <h3 className="text-3xl font-semibold mb-8 text-center text-gray-800">
            Nossos Serviços
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <p className="text-lg text-gray-700">✓ Desenvolvimento de sistemas personalizados</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <p className="text-lg text-gray-700">✓ Criação de sites responsivos e modernos</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsappButton />
    </div>
  );
}
