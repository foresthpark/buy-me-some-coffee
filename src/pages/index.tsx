import CoffeeDonateCard from "@/components/CoffeeDonateCard/CoffeeDonateCard";
import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Buy Forest a coffee...or five </title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CoffeeDonateCard />
    </>
  );
};

export default Home;