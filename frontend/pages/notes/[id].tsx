/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import Link from "next/link";

export default function Note() {
  const { enqueueSnackbar } = useSnackbar();
  const [noteBody, setnoteBody] = useState<string | null>(null);
  const [responseData, setResponseData] = useState<String | null>(null);
  const router = useRouter();
  const { id } = router.query;

  async function getNoteData(): Promise<String | null> {
    try {
      const response = await fetch(`http://0.0.0.0:8000/api/notes/${id}`);
      const data = await response.json();
      setResponseData(data.body); // set the response data in state
      return data.body;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  }

  async function putData(noteBody: string | null): Promise<void> {
    const data = {
      body: noteBody,
    };
    if (noteBody) {
      try {
        const response = await fetch(
          `http://0.0.0.0:8000/api/notes/${id}/update`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        const responseData = await response.json();
        setResponseData(responseData);
        enqueueSnackbar("Note Updated", { variant: "success" });
        return responseData;
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      enqueueSnackbar("Body Empty", { variant: "error" });
    }
  }

  async function deleteNote() {
    try {
      const response = await fetch(
        `http://0.0.0.0:8000/api/notes/${id}/delete/`,
        { method: "DELETE" }
      );
      const data = await response.json();
      enqueueSnackbar(data.toString(), { variant: "success" });
    } catch (error) {
      console.error("Error:", error);
      enqueueSnackbar("Failed", { variant: "error" });
      return null;
    }
  }

  useEffect(() => {
    async function fetchNoteData() {
      const data = await getNoteData();
      if (data)
        //@ts-ignore
        setnoteBody(data);
    }
    fetchNoteData();
  }, [id]);

  return (
    <>
      <Head>
        <title>Rantman</title>
        <meta name="description" content="an obfuscated notes app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-6/12 lg:px-16 lg:py-24">
          <h1
            className="text-white text-4xl md:text-5xl font-bold font-poppins md:text-left text-center mb-12"
            style={{
              background:
                "linear-gradient(to right,rgba(135, 206, 235, 1), rgba(1, 0, 70, 1))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {id}
          </h1>

          <div>
            <div className="relative pt-2">
              <textarea
                className="w-full h-72 p-4 pr-12 pt-4 text-sm border-gray-700 bg-[#111111] rounded-lg shadow-sm resize-none placeholder-gray-400 text-white"
                placeholder=""
                type="text"
                onChange={(event) => setnoteBody(event.target.value)}
                //@ts-ignore
                value={noteBody}
              />

              <span className="absolute inset-y-0 right-0 grid px-4 place-content-center"></span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-12">
            <span className="space-x-3  ">
              {" "}
              <button
                onClick={async () => {
                  const data = await putData(noteBody);
                  console.log(data);
                }}
                className="inline-block rounded-lg bg-[#233471] px-5 py-3 text-sm font-medium text-white"
              >
                UPDATE
              </button>
              <button
                onClick={async () => {
                  const data = await deleteNote();
                  console.log(data);
                  router.push("/notes");
                }}
                className="inline-block rounded-lg bg-[#2d4391] px-5 py-3 text-sm font-medium text-white"
              >
                DELETE
              </button>
            </span>

            <Link className="text-white text-xl" href="/">
              /
            </Link>
          </div>
        </div>
        <div className="lg:w-1/12" />

        <div className="relative w-full h-64 sm:h-96 lg:h-full lg:w-5/12">
          <img
            alt="Welcome"
            src="/do.jpg"
            className="absolute inset-0 object-fill w-full h-full"
          />
        </div>
      </section>
    </>
  );
}
