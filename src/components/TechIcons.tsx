import { FaVuejs, FaGolang, FaReact, FaHtml5, FaCss3 } from "react-icons/fa6";
import {
  TbBrandAstro,
  TbBrandTypescript,
  TbBrandJavascript,
} from "react-icons/tb";
import { SiHtmx } from "react-icons/si";
export default function ReactComponent() {
  return (
    <div className="flex flex-col justify-center">
      <h4>I work with the following</h4>
      <div className="flex items-center text-3xl gap-4">
        <FaVuejs />
        <FaReact />
        <TbBrandAstro />
        <FaHtml5 />
        <FaCss3 />
        <TbBrandJavascript />
        <TbBrandTypescript />
        <FaGolang />
        <SiHtmx />
      </div>
    </div>
  );
}
