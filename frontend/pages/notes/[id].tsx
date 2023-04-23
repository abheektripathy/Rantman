export default function note() {
    const id = 1;
    return (
        <>
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
          `{`/api/notes/${id}`}`
        </h1>
        </>
    );
}