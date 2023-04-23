/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotesPage() {
  const [mockData, setMockData] = useState<any[]>([]);

  async function getMockData(): Promise<[]> {
    try {
      const response = await fetch(`http://0.0.0.0:8000/api/notes/`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
      return [];
    }
  }

  useEffect(() => {
    async function fetch() {
      const data = await getMockData();
      setMockData(data);
    }
    fetch();
  }, []);

  return (
    <>
      <Head>
        <title>Rantman</title>
        <meta name="description" content="an obfuscated notes app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1
        className="text-white text-4xl md:text-4xl lg:text-5xl font-bold font-poppins md:text-left text-center  px-9 pt-16"
        style={{
          background:
            "linear-gradient(to right,rgba(135, 206, 235, 1), rgba(1, 0, 70, 1))",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        `/api/notes/all`
      </h1>
      <section className="bg-inherit text-white -mt-4">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {mockData ? (
              mockData.map((note) => (
                <button
                  key={note.id}
                  className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                  onClick={() => {
                    // handle clicking on the note
                  }}
                >
                  <Link href={`/notes/${note.id}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>

                    <h2 className="mt-4 text-xl font-bold text-white text-left">
                      {note.id}
                    </h2>

                    <p className="mt-1 text-sm text-gray-300 text-left">
                      {note.body.split(" ").slice(0, 20).join(" ")}
                      {note.body.split(" ").length > 20 ? "..." : ""}
                    </p>
                  </Link>
                </button>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
