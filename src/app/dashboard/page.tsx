"use client"

import Navbar from "@/components/ui/Navbar"
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";


export default function BudgetPage() {
  const { data: session, status } = useSession();
  
  if (status === "unauthenticated") {
    redirect("/");
  }
  return (
    <>
      <Navbar/>
      <h1>DashBoard</h1>
    </>
  );
}
