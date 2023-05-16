import { Metadata } from "next";
import Menu from "./components/Menu";

export const metadata: Metadata = {
  title: "Menu",
  description: "Menu page",
};

export default function MenuPage() {
  return (
    <div className="min-h-screen min-w-full bg-cover bg-repeat-y bg-fixed  absolute top-0 custom-img-three">
      <a href="https://www.freepik.com/free-photo/wooden-natural-floor-decoration-concept_3001886.htm?query=wooden%20table#from_view=detail_alsolike" className="hidden">Image by rawpixel.com on Freepik</a> 
      <Menu />
    </div>
  );
}
