"use client";

import Head from "next/head";
import Image from "next/image";
import womanImage from "../assets/pexels-olly-733872.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Transforme seu look | Salão de Beleza</title>
        <meta
          name="description"
          content="Agende uma consulta com profissionais especializados e transforme seu visual no nosso salão. Localizado no coração da cidade."
        />
        <meta
          name="keywords"
          content="salão de beleza, corte de cabelo, estética, transformação, consultoria de imagem"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gray-50 text-gray-800">
        <section className="w-full max-w-6xl mx-auto p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Transforme seu look</h1>
            <p className="text-lg mb-6">
              Agende uma consulta com nossos especialistas e descubra uma nova
              versão de você.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              Agende uma consulta
            </button>

            <div className="mt-10">
              <h2 className="text-xl font-semibold mb-2">Sobre</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas ut justo nec erat dapibus hendrerit.
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Localização</h2>
              <p>Rua Exemplo, 123 - Centro, Cidade Imaginária</p>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <Image
              src={womanImage}
              alt="Cliente feliz"
              className="rounded-full object-cover"
              width={300}
              height={300}
            />
          </div>
        </section>

        {/* Sessão de Serviços */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-10">
              Nossos Serviços
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[
                "Corte de cabelo",
                "Coloração",
                "Tratamento capilar",
                "Manicure e Pedicure",
                "Maquiagem",
                "Design de sobrancelhas",
              ].map((servico, i) => (
                <div
                  key={i}
                  className="p-6 border rounded-lg shadow hover:shadow-md transition"
                >
                  <h3 className="text-xl font-semibold mb-2">{servico}</h3>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla facilisi.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sessão de Depoimentos */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-10">
              Depoimentos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow">
                  <p className="italic text-gray-700">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                    experiência foi maravilhosa!"
                  </p>
                  <p className="mt-4 font-semibold">Cliente {i}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sessão de Equipe */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-10">
              Conheça a nossa equipe
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-center">
                  <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-gray-300"></div>
                  <h3 className="text-xl font-semibold">Profissional {i}</h3>
                  <p className="text-sm text-gray-600">
                    Especialista em beleza
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sessão de Contato */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Entre em contato</h2>
            <p className="mb-6">
              Preencha o formulário e retornaremos o mais rápido possível.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nome"
                className="w-full px-4 py-2 rounded border"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full px-4 py-2 rounded border"
              />
              <textarea
                placeholder="Mensagem"
                rows={4}
                className="w-full px-4 py-2 rounded border"
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
              >
                Enviar
              </button>
            </form>
          </div>
        </section>

        {/* Rodapé */}
        <footer className="bg-black text-white py-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} Salão de Beleza Imaginário. Todos
            os direitos reservados.
          </p>
        </footer>
      </main>
    </>
  );
}
