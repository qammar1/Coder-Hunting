"use client"
import Image from "next/image";
import wondersImages from "../../../wonder";
import { useCallback, useRef, useEffect, MouseEventHandler } from "react";
import { useRouter } from "next/navigation";
// import Modal from "../../../modal";

export default function PhotoPage({ params }) {
    
    const overlay = useRef(null);
    const wrapper = useRef(null);
    const router = useRouter();
  
    const onDismiss = useCallback(() => {
      router.back();
    }, [router]);
  
    const onClick = useCallback(
      (e) => {
        if (e.target === overlay.current || e.target === wrapper.current) {
          if (onDismiss) onDismiss();
        }
      },
      [onDismiss, overlay, wrapper]
    );
  
    const onKeyDown = useCallback(
      (e) => {
        if (e.key === "Escape") onDismiss();
      },
      [onDismiss]
    );
  
    useEffect(() => {
      document.addEventListener("keydown", onKeyDown);
      return () => document.removeEventListener("keydown", onKeyDown);
    }, [onKeyDown]);
  const { Id: id } = params; // Destructure the `Id` property correctly
  const photo = wondersImages.find((p) => p.id === id);

  if (!photo) {
    return <p>Photo not found</p>; // Handle case where photo is not found
  }

 
  return (
    <>
      <h1>pikanchio</h1>
      <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 p-10"
      onClick={onClick}
    >
    <h1>pikanchio</h1>
      <div
        ref={wrapper}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-10/12 md:w-8/12 lg:w-2/5 p-6"
      >
         <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <div>
          <h1 className="text-center text-3xl font-bold my-4">{photo.name}</h1>
        </div>
        <Image
          alt={photo.name}
          src={photo.src}
          className="w-full object-cover aspect-square "
        />

        <div className="bg-green-400 py-4">
          <h3>{photo.photographer}</h3>
          <h3>{photo.location}</h3>
        </div>
      </div>
      {/* helllo */}
    </div>
      </div>
    </div>
    </>
  );
}
