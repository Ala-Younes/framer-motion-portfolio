import Image from "next/image";
import topLeftImage from "@/public/top-left-img.png";

const TopLeftImage = () => {
  // ! mix-blend-color-dodge => try lighten or darken
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50">
      <Image src={topLeftImage} width={400} height={400} alt="top left image" />
    </div>
  );
};

export default TopLeftImage;
