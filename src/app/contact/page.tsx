"use client";
import Image from "next/image";
import logo from "../../../public/assets/LogoWecare.png";
import circleverde from "../../../public/assets/Circuloverde.png";
import {
  Button,
  Card,
  CardBody,
  Text,
  CardHeader,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
} from "@chakra-ui/react";
import { LuMessageCircle } from "react-icons/lu";
import { IoCalendar } from "react-icons/io5";
import { LiaStethoscopeSolid } from "react-icons/lia";
import Link from "next/link";
import FormContact from "@/components/FormContact";

export default function Us() {
  
  return (
    <main className="flex min-h-screen w-screen flex-col items-center ">
      <header className="flex w-screen justify-between items-center flex-row mt-[50px] mb-[3rem] ">
        <div>
          <Link href="/">
            <Image
              className="ml-16 w-[221px] h-[30px] relative z-20"
              src={logo}
              alt={""}
            ></Image>
          </Link>
        </div>
        <div className="flex items-center flex-row  z-20 hidden lg:flex">
          <h3 className="poppins-semibold text-sm text-[#02045C] mr-[42px]">
            Asistente inteligente
          </h3>

          <Link href="/us">
            <h3 className="poppins-semibold text-sm text-[#02045C]  mr-[42px]">
              Conocenos
            </h3>
          </Link>
          <Button
            className="poppins-regular text-sm mr-[42px] underline"
            h={"50px"}
            size="sm"
            color="#02045C"
            leftIcon={<LuMessageCircle />}
            bg={"#DBF3BF"}
            variant="solid"
          >
            <Link href="/contact">Contactanos</Link>
          </Button>
        </div>
        <Image
          className="absolute top-[-16rem] right-[25%] z-10 h-[90vh] rotate-90 md:h-auto "
          style={{ opacity: 0.3 }}
          src={circleverde}
          alt={""}
        ></Image>
      </header>
      <div className="flex flex-col  justify-center items-center content-center w-[90%] mt-[1rem]">
        <section className="flex flex-col relative w-screen items-center content-center z-20 ">
          <div className="w-[80%]  flex flex-col md:flex-row space-between content-between items-center  my-[2rem]">
            <div className="flex-1 ">
              <h2
                className="poppins-bold text-[35px] mb-[3rem] mr-[2rem]"
                color="#02045C"
              >
                Agenda una demo y descubre más de nuestros servicios
              </h2>
              <p
                className="poppins-regular text-[18px] mb-[2rem] mr-[2rem]"
                color="#02045C"
              >
                Te enseñaremos como nuestras herramientas te ayudarán
                potencilizar y convertir tus servicos de salud en mejores
                resultados.
              </p>
            </div>
            <div className="relative flex-1 flex flex-col justify-center items-center content-center ml-[2rem]">

<FormContact/>
             </div>
          </div>
        </section>
      </div>
    </main>
  );
}
