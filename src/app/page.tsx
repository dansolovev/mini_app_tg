'use client'
import React, {useEffect} from "react";
import BottomBar from "@/components/bottomBar";
import WebApp from "@twa-dev/sdk";

export default function Home() {
    useEffect(() => {
        WebApp.ready();
        WebApp.expand();
    })

  return (
      <div>
          <h1 className="w-full capitalize text-4xl mx-auto text-center mt-10">Home Page</h1>
          <BottomBar/>
      </div>
  );
}
