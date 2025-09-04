import React from "react";
import GoogleTagProvider from "@/packages/providers/GoogleTagProvider";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <GoogleTagProvider>{children}</GoogleTagProvider>;
}
