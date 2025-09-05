"use client";

import React, { useEffect } from "react";
import { sendGTMEvent } from "@next/third-parties/google";
import { usePathname } from "next/navigation";

export default function GoogleTagProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    sendGTMEvent({ event: "page_view", value: pathname });
  }, [pathname]);

  return <>{children}</>;
}
