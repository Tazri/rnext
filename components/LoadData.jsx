"use client";
import { useEffect } from "react";

export default function LoadData() {
  useEffect(() => {
    console.log("LoadData rendered");
  }, []);
  return <h1>Load Data</h1>;
}
