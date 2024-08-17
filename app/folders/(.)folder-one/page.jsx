import Link from "next/link";
import React from "react";

function InterceptingFolderOne() {
  return (
    <div className="bg-emerald-800 w-1/2 mx-auto px-4 py-4 mt-7">
      <h1 className="text-center text-2xl">InterceptingFolderOne</h1>
      <div className="flex flex-col gap-2">
        <Link href="/folders">{"< Back"}</Link>
        <Link href="/folders/folder-one/subfolder-one">
          {"Sub Folder One >"}
        </Link>
      </div>
    </div>
  );
}

export default InterceptingFolderOne;
