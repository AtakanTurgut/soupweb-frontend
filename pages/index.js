import { getSession } from "next-auth/react";
import Head from "next/head";
import Feed from "./Feed";
import Header from "./Header";
import RightSidebar from "../components/RightSidebar";
import Sidebar from "../components/Sidebar";
import Profile from "./Profile";
import Login from "./Login";
import Register from "./Register";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdateProfile from "./UpdateProfile";

export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>SoupWeb</title>
        <image href="https://user-images.githubusercontent.com/77547962/238136744-0ad0b788-5f9e-4d4d-9992-ba6d9bec9036.png"></image>
      </Head>
      {/* <Header /> */}

      <main className="flex bg-gray-100 w-full">

        {/* Feed */}
        <Feed />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
