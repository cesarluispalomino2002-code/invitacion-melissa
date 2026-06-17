"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(0);
  const [questionError, setQuestionError] = useState("");
  const [petAnswers, setPetAnswers] = useState<string[]>([]);
  const [stores, setStores] = useState("");
const [returnTime, setReturnTime] = useState("");
const [foods, setFoods] = useState("");

  const correctName = "Melissa Gisell Quiroz Layseca";

  const handleLogin = () => {
  if (name.trim() === correctName) {
    setError("");
    setShowModal(true);
    setStep(1);
  } else {
    setError(
      "Error. Escribe bien tu nombre puede ser que te hayas confundido."
    );
  }
};

const togglePetAnswer = (answer: string) => {
  if (petAnswers.includes(answer)) {
    setPetAnswers(petAnswers.filter((a) => a !== answer));
  } else {
    setPetAnswers([...petAnswers, answer]);
  }
};

const sendInvitation = () => {
  const message = `Hola imbecil! Este mensaje es para aceptar la invitación para el 4 de Julio 🎁

Nos vemos y no llegues tarde o se cancela!

Tiendas o marcas favoritas:
${stores}

Hora de regreso:
${returnTime}

Comidas favoritas:
${foods}
`;

  const url = `https://wa.me/51991248321?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};

  return (
    <>
      <main className="relative min-h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-rose-300 flex items-center justify-center p-5">
        <div className="absolute top-20 left-20 text-5xl floating-heart">
          <div className="heart h1">💖</div>
<div className="heart h2">💕</div>
<div className="heart h3">🌸</div>
<div className="heart h4">💗</div>
<div className="heart h5">✨</div>
<div className="heart h6">💞</div>
  💖
</div>

<div
  className="absolute bottom-20 right-20 text-5xl floating-heart"
  style={{ animationDelay: "1s" }}
>
  🌸
</div>
        <div className="w-full max-w-md bg-white/40 backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-2xl">

          <h1 className="text-4xl text-center font-bold text-pink-700 mb-4">
            💖 Una invitación especial
          </h1>

          <p className="text-center text-gray-700 mb-6">
            Esta invitación es para el amor de mi vida.
            Coloca tu nombre completo y si eres el amor de mi vida te dejará ingresar.
          </p>

          <input
            type="text"
            placeholder="Confirmación de identidad"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-pink-300 rounded-xl px-4 py-3 outline-none"
          />

          {error && (
            <p className="text-red-600 mt-3 text-sm">
              {error}
            </p>
          )}

          <button
            onClick={handleLogin}
            className="w-full mt-5 bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl transition"
          >
            Ingresar
          </button>
        </div>
      </main>

        {showModal && (
  <div className="fixed inset-0 bg-black/40 flex justify-center items-center p-5">

    <div className="modal-card bg-white rounded-3xl p-8 max-w-lg w-full text-center shadow-2xl">

      {step === 1 && (
        <>
          <h2 className="text-3xl text-pink-600 font-bold mb-4">
            💖 Identidad detectada
          </h2>

          <p className="text-gray-700 mb-6">
            Pusiste el nombre correcto, felicidades.
            Pero por mayor seguridad necesito hacerte unas preguntas
            para saber si no estás suplantando la identidad de la niña
            que más amo en el mundo.
          </p>

          <button
            onClick={() => setStep(2)}
            className="bg-pink-500 text-white px-8 py-3 rounded-xl"
          >
            Aceptar
          </button>
        </>
      )}

      {step === 2 && (
  <>
    <h2 className="text-2xl font-bold text-pink-600 mb-6">
      Pregunta 1 ❤️
    </h2>

    <p className="mb-6">
      ¿Dónde fue nuestro primer beso?
    </p>
{questionError && (
  <div className="mb-4 bg-red-100 border border-red-300 text-red-600 rounded-xl p-3">
    {questionError}
  </div>
)}
    <div className="flex flex-col gap-3">

      <button
        onClick={() =>
  setQuestionError(
    "Ups... esa no es la respuesta correcta 💔"
  )
}
        className="border rounded-xl py-3"
      >
        a) En un taxi
      </button>

      <button
        onClick={() =>
  setQuestionError(
    "Ups... esa no es la respuesta correcta 💔"
  )
}
        className="border rounded-xl py-3"
      >
        b) En el cine
      </button>

      <button
        onClick={() => {
  setQuestionError("");
  setStep(3);
}}
        className="border rounded-xl py-3 hover:bg-pink-100"
      >
        c) En la feria
      </button>

      <button
        onClick={() =>
  setQuestionError(
    "Ups... esa no es la respuesta correcta 💔"
  )
}
        className="border rounded-xl py-3"
      >
        d) No recuerdo
      </button>

    </div>
  </>
)}

{step === 3 && (
  <>
    <h2 className="text-3xl font-bold text-pink-600 mb-4">
      🎉 Felicidades
    </h2>

    <p className="mb-4">
      Acertaste la primera pregunta.
    </p>

    <div className="bg-pink-50 rounded-xl p-4 mb-6">
      <p>
        ¿Recuerdas bien cómo se dio?
        Yo estaba recontra nervioso,
        no esperaba que fuera mutuo lo que sentía por ti.
        Siempre que me acuerdo se me hace un nudito en la garganta.
      </p>
    </div>

    <button
      onClick={() => setStep(4)}
      className="bg-pink-500 text-white px-8 py-3 rounded-xl"
    >
      Continuar
    </button>
  </>
)}

{step === 4 && (
  <>
    <h2 className="text-2xl font-bold text-pink-600 mb-6">
      Pregunta 2 🐶
    </h2>

    <p className="mb-6">
      ¿Cómo se llama tu mascota?
    </p>

    <div className="flex flex-col gap-3">

      {["Nalgas", "Nala", "Gorda", "Nalita"].map((item) => (
        <button
          key={item}
          onClick={() => togglePetAnswer(item)}
          className={`border rounded-xl py-3 ${
            petAnswers.includes(item)
              ? "bg-pink-200"
              : ""
          }`}
        >
          {petAnswers.includes(item) ? "✅ " : ""}
          {item}
        </button>
      ))}

    </div>

    <button
      onClick={() => {
        if (petAnswers.length === 4) {
          setQuestionError("");
          setStep(5);
        } else {
          setQuestionError(
            "💔 Recuerda que todas las respuestas son correctas."
          );
        }
      }}
      className="mt-6 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-xl"
    >
      Validar respuesta
    </button>

    {questionError && (
      <div className="mt-4 bg-red-100 text-red-600 p-3 rounded-xl">
        {questionError}
      </div>
    )}
  </>
)}

{step === 5 && (
  <>
    <h2 className="text-3xl font-bold text-pink-600 mb-4">
      🎉 Felicidades
    </h2>

    <div className="flex justify-center mb-4">
      <Image
        src="/nala.jpg"
        alt="Nala"
        width={250}
        height={250}
        className="rounded-2xl"
      />
    </div>

    <p className="mb-6">
      Todas las respuestas eran correctas ❤️
    </p>

    <button
      onClick={() => setStep(6)}
      className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-xl"
    >
      Continuar
    </button>
  </>
)}

{step === 6 && (
  <>
    <h2 className="text-3xl text-pink-600 font-bold mb-4">
      💖 Última validación
    </h2>

    <p className="mb-6">
      Estás a punto de validar tu identidad como el amor de mi vida.
      Dale click en continuar para pasar a la última pregunta.
    </p>

    <button
      onClick={() => setStep(7)}
      className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-xl"
    >
      Continuar
    </button>
  </>
)}

{step === 7 && (
  <>
    <h2 className="text-2xl font-bold text-pink-600 mb-6">
      Pregunta Final ❤️
    </h2>

    <p className="mb-6">
      ¿Cuál es mi comida favorita?
      <br />
      (Esto solo lo sabría el amor de mi vida)
    </p>

    <div className="flex flex-col gap-3">

      <button
        onClick={() => setQuestionError("💔 Incorrecto")}
        className="border rounded-xl py-3"
      >
        a) Tú
      </button>

      <button
        onClick={() => setQuestionError("💔 Incorrecto")}
        className="border rounded-xl py-3"
      >
        b) Tus besos
      </button>

      <button
        onClick={() => setQuestionError("💔 Incorrecto")}
        className="border rounded-xl py-3"
      >
        c) Tus nalgas
      </button>

      <button
        onClick={() => {
          setQuestionError("");
          setStep(8);
        }}
        className="border rounded-xl py-3 hover:bg-pink-100"
      >
        d) Todas las anteriores
      </button>

    </div>

    {questionError && (
      <div className="mt-4 bg-red-100 text-red-600 p-3 rounded-xl">
        {questionError}
      </div>
    )}
  </>
)}

{step === 8 && (
  <>
    <h2 className="text-3xl text-pink-600 font-bold mb-4">
      💖 Identidad validada
    </h2>

    <p className="mb-6">
      Felicidades, validaste tu identidad.
      <br />
      Eres Melissa ❤️
      <br /><br />
      Esto confirma que sí eres el amor de mi vida y que debemos pasar el resto de nuestras vidas juntos.
    </p>

    <button
      onClick={() => setStep(9)}
      className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-xl"
    >
      Continuar
    </button>
  </>
)}

{step === 9 && (
  <>
    <h2 className="text-3xl text-pink-600 font-bold mb-4">
      💖 Una invitación para ti
    </h2>

    <div className="text-left max-h-[400px] overflow-y-auto mb-6 space-y-4">

      <p>
        Este cumpleaños aunque tal vez no llegue en la situación que hubiera querido,
        quiero hacerte ver que al igual que para ti es una fecha muy importante para mí.
      </p>

      <p>
        Por motivos externos el año pasado no estuve a la altura así como lo estuviste tú conmigo.
      </p>

      <p>
        No tomes esta invitación como un acto impulsado por arrepentimiento o algo parecido.
      </p>

      <p>
        Tómalo como un acto de amor y una muestra más de lo que puede ser si nos damos la oportunidad.
      </p>

      <p>
        Aunque no sea el mismo día o incluso la misma semana...
      </p>

      <p className="text-xl font-bold text-center text-pink-600">
        ¿Quieres celebrar tu cumpleaños conmigo?
      </p>

      <div className="bg-pink-50 rounded-xl p-4">

        <p><strong>Fecha:</strong> Sábado 4 de Julio del 2026</p>

        <p><strong>Hora:</strong> Desde las 3:00 PM</p>

        <p>
          <strong>Detalle:</strong> Yo paso por ti y usted solo se pone bonita ❤️
        </p>

      </div>

    </div>

    <div className="flex gap-4 justify-center">

      <button
        onClick={() => setStep(10)}
        className="bg-green-500 text-white px-8 py-3 rounded-xl"
      >
        Sí ❤️
      </button>

      <button
        onClick={() => setStep(11)}
        className="bg-red-500 text-white px-8 py-3 rounded-xl"
      >
        No 😢
      </button>

    </div>
  </>
)}

{step === 11 && (
  <>
    <h2 className="text-3xl text-pink-600 font-bold mb-4">
      ⚠️ Error del sistema
    </h2>

    <p className="mb-6">
      La opción "No" no está disponible para el amor de mi vida 😌❤️
    </p>

    <button
      onClick={() => setStep(9)}
      className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-xl"
    >
      Intentar nuevamente
    </button>
  </>
)}

{step === 10 && (
  <>
    <h2 className="text-3xl text-pink-600 font-bold mb-4">
      🎁 Confirmación final
    </h2>

    <p className="mb-6">
      Para una mejor experiencia por favor completa estos campos.
    </p>

    <div className="space-y-4 text-left">

      <div>
        <label className="font-semibold block mb-2">
          1. Dime 6 tiendas y/o marcas que te gusten
        </label>

        <textarea
          value={stores}
          onChange={(e) => setStores(e.target.value)}
          className="w-full border rounded-xl p-3"
          rows={4}
        />
      </div>

      <div>
        <label className="font-semibold block mb-2">
          2. ¿A qué hora te gustaría regresar a casa?
        </label>

        <input
          value={returnTime}
          onChange={(e) => setReturnTime(e.target.value)}
          className="w-full border rounded-xl p-3"
        />
      </div>

      <div>
        <label className="font-semibold block mb-2">
          3. Si tuvieras que comer 3 comidas toda tu vida, que comerías...
        </label>

        <textarea
          value={foods}
          onChange={(e) => setFoods(e.target.value)}
          className="w-full border rounded-xl p-3"
          rows={4}
        />
      </div>

      <button
        onClick={sendInvitation}
        className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 rounded-xl"
      >
        💖 Aceptar invitación
      </button>

    </div>
  </>
)}

    </div>

  </div>
)}
    </>
  );
}