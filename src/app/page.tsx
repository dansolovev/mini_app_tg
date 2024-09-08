import Link from "next/link";
import React from "react";
import MyLink from "@/components/MyLink";
import BottomBar from "@/components/bottomBar";

export default function Home() {
  return (
      <div>
        <h1 className="w-full capitalize text-4xl mx-auto text-center mt-10">Home Page</h1>
        <BottomBar/>
      </div>
  );
}
