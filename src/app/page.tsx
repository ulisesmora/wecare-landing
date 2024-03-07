import Image from "next/image";
import logo from "../../public/assets/Frame 8148.png";
import circle from "../../public/assets/Circulo azul.png"
import gradient from '../../public/assets/Ellipse 1406.png'
import mainImage from '../../public/assets/Frame 8163.png'
import { Button } from "@chakra-ui/react";
import { LuMessageCircle } from "react-icons/lu";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-between">
      <header className="flex w-screen justify-between items-center flex-row mt-[50px] ">
        <div >
          <Image className="ml-16 w-[221px] h-[30px] relative z-20" src={logo} alt={""}></Image>
        </div>
        <div className="flex items-center relative z-20 hidden lg:block">
          <h3 className="poppins-semibold text-sm text-white mr-[42px]">Asistente inteligente</h3>
          <h3 className="poppins-semibold text-sm text-white mr-[42px]">Conocenos</h3>
          <h3 className="poppins-semibold text-sm text-white mr-[42px]">Beneficios</h3>
          <Button className="poppins-regular text-sm mr-[42px]" h={'50px'} size='sm'  leftIcon={<LuMessageCircle />} bg={"#DBF3BF"} variant='solid'>
            Contactanos
          </Button>
        </div>
        <Image className="absolute top-1 right-3 z-10" src={circle} alt={""}></Image>
        <Image className="absolute -top-14  right-[-0.25rem] w-[90%]" src={gradient} alt={""}></Image>
      </header>
      <div className="flex  h-screen justify-center w-[90%] mt-[5rem]">
        <section className="flex flex-col items-center content-center z-20" >
          <h2 className="poppins-bold text-[50px]  w-[60%] text-center break-normal " color="#02045C"> Ecosistema para atención médica con <span color="#DBF3BF">  inteligencia artificial </span>  </h2>
          <p className="poppins-regular w-[60%] text-[18px] mt-[2rem] text-center " color="#02045C" >Mejora la experiencia de los pacientes diseñando una atención personalizada y seguimiento inmediato mediante herramientas digitales inteligentes, ofreciendo una solución transparente y eficiente enfocada en sus necesidades de atención médica.</p>
          <Image className="w-[75%] mt-[5rem] "  src={mainImage} alt={""}></Image>
        </section>
      </div>
    </main>
  );
}
