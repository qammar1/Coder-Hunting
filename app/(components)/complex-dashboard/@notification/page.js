import Link from "next/link";
import React from "react";

export default function Notification() {
  return (
    <>
      <div className="py-9 h-1/2 bg-white w-1/4 text-black text-center">
        This is notification page
      Notification<Link href="/complex-dashboard/archived">archived</Link>
      </div>
    </>
  );
}
