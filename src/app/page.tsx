import React from "react";
import BottomBar from "@/components/bottomBar";

export default function Home() {
  return (
      <div>
          <script>
              window.Telegram.WebApp.ready(); window.Telegram.WebApp.expand();
          </script>
        <h1 className="w-full capitalize text-4xl mx-auto text-center mt-10">Home Page</h1>
        <BottomBar/>
      </div>
  );
}
