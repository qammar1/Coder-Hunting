import Image from "next/image";
import wondersImages from "../wonder";
import Modal from "../../../../../about/modal";
export default function PhotoPage({ params }) {
  const id = params.Id;
  const photo = wondersImages.find((p) => p.id === id);
  //   console.log(params.Id);
  return (
    <>
      <h1>pikanchio</h1>
      <Modal>
        <Image
          alt={photo.name}
          src={photo.src}
          className="w-full object-cover aspect-square "
        />
        <div className="bg-purple-400 py-4">
          <h3>{photo.photographer}</h3>
          {/* <h3>{photo.location}</h3> */}
        </div>
      </Modal>
    </>
  );
}
