/* eslint-disable @next/next/no-img-element */
//@ts-nocheck

import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

export default function Note() {
  const id = 1;
  const [mockLocation, setMockLocation] = useState<string>("");
  const [mockJSON, setMockJSON] = useState<object | null>(null);
  const [responseData, setResponseData] = useState<object | null>(null);

  async function postMockData(
    mockJSON: object,
    mockLocation: string
  ): Promise<void> {
    const data = {
      mockJSON: mockJSON,
      mockLocation: mockLocation,
    };

    try {
      const response = await fetch(`http://0.0.0.0:8000/api/mock/create/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      setResponseData(responseData); // set the response data in state
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function getMockData(mockLocation: string): Promise<object | null> {
    try {
      const response = await fetch(
        `http://0.0.0.0:8000/api/mock/${mockLocation}`
      );
      const data = await response.json();
      setResponseData(data); // set the response data in state
      return data;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  }

  return (
    <>
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
            `{`{id}`}`
          </h1>

          <div>
            <div className="relative pt-2">
              <input
                className="w-full h-72 p-4 pr-12 pt-4 text-sm border-gray-700 bg-[#111111] rounded-lg shadow-sm resize-none placeholder-gray-400"
                placeholder=""
                type="text"
                onChange={(event) => setMockJSON(event.target.value)}
                value={mockJSON}
              />

              <span className="absolute inset-y-0 right-0 grid px-4 place-content-center"></span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-12">
            {/* {responseData ? (
              <div>
                <p>Response Data:</p>
                <pre className="text-gray-700">
                  {JSON.stringify(responseData, null, 2)}
                </pre>
              </div>
            ) : (
              <p className="text-gray-700 ml-2">Try out :p</p>
            )} */}

            <span className="space-x-3  ">
              {" "}
              <button
                onClick={async () => {
                  const data = await postMockData(mockJSON, mockLocation);
                  console.log(data);
                }}
                className="inline-block rounded-lg bg-[#233471] px-5 py-3 text-sm font-medium text-white"
              >
                DELETE
              </button>
              <button
                onClick={async () => {
                  const data = await getMockData(mockLocation);
                  console.log(data);
                }}
                className="inline-block rounded-lg bg-[#2d4391] px-5 py-3 text-sm font-medium text-white"
              >
                <Link href="/notes">UPDATE</Link>
              </button>
            </span>

            <a className="text-white text-xl" href="/">
              /
            </a>
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
