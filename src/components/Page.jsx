import Head from "next/head";
import Navbar from "./Navbar";
import Title from "./Title";

function Page({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main className="px-6 py-4">
        <Title>{title}</Title>
        {children}
      </main>
    </>
  );
}

export default Page;
