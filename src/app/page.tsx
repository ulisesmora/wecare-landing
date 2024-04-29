import Image from "next/image";
import logo from "../../public/assets/LogoWecare.png";
import circle from "../../public/assets/Circulo azul.png";
import circleverde from "../../public/assets/Circuloverde.png";
import gradient from "../../public/assets/Ellipse 1406.png";
import mainImage from "../../public/assets/32.png";
import secondImage from "../../public/assets/Group 1026.png";
import { Button, Card, CardBody, Text, CardHeader } from "@chakra-ui/react";
import { LuMessageCircle } from "react-icons/lu";
import { IoCalendar } from "react-icons/io5";
import Link from 'next/link';
import  MenuMobile  from "@/components/MenuMobile";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-between">
      <header className="flex w-screen justify-between items-center flex-row mt-[50px] ">
        <div>
          <Image
            className="ml-16 w-[221px] h-[30px] relative z-20"
            src={logo}
            alt={""}
          ></Image>
        </div>
        <div className="lg:hidden sx:flex flex items-center flex-row  z-20 sm:flex ">
          <MenuMobile></MenuMobile>
        </div>
        <div className="flex items-center flex-row  z-20 hidden lg:flex">
         {/* 
          <h3 className="poppins-semibold text-sm text-white mr-[42px]">
            Asistente inteligente
          </h3>
           */}
          <h3 className="poppins-semibold text-sm text-white mr-[42px]">
          <Link href="/us">
            Conocenos
            </Link>
          </h3>
          <Button
            className="poppins-regular text-sm mr-[42px]"
            h={"50px"}
            size="sm"
            color="#02045C"
            leftIcon={<LuMessageCircle />}
            bg={"#DBF3BF"}
            variant="solid"
          >
             <Link href="/contact">
            
             Contactanos
            </Link>
          </Button>
        </div>
        <Image
          className="absolute top-1 right-3 z-10 h-[90vh] md:h-auto "
          src={circle}
          alt={""}
        ></Image>
        <Image
          className="absolute -top-14  right-[-0.25rem] w-[90%] h-[90rem] md:h-auto"
          src={gradient}
          alt={""}
        ></Image>
      </header>
      <div className="flex flex-col  justify-center items-center content-center w-[90%] mt-[5rem]">
        <section className="flex flex-col items-center content-center relative z-20">
          <h2
            className="poppins-bold text-[30px] md:text-[50px]  w-[60%] text-center break-normal "
            color="#02045C"
          >
            {" "}
            Ecosistema para atención médica con{" "}
            <span color="#DBF3BF"> inteligencia artificial </span>{" "}
          </h2>
          <p
            className="poppins-regular w-[60%] text-[18px] mt-[2rem] text-center "
            color="#02045C"
          >
            Mejora la experiencia de los pacientes diseñando una atención
            personalizada y seguimiento inmediato mediante herramientas
            digitales inteligentes, ofreciendo una solución transparente y
            eficiente enfocada en sus necesidades de atención médica.
          </p>
          <div className="relative w-[65%] z-10 ">
          <Image
            className=" mt-[5rem]"
            src={mainImage}
            alt={""}
          ></Image>
          </div>
          <Button
            className="poppins-regular my-[42px] text-sm p-[1rem] "
            h="50px"
            size="sm"
            
            color={"white"}
            leftIcon={<IoCalendar />}
            bg={"#02045C"}
            variant="solid"
          >
            <Link href={'/contact'} >
            Agenda una demo
            </Link>
          </Button>
        </section>
        <section className="flex flex-col w-screen relative items-center content-center z-20 mb-[2rem]">
        <Image
          className="hidden  md:block absolute top-[-40rem] z-1 left-2  h-[90vh] md:h-auto " style={{opacity: 0.3}}
          src={circleverde}
          alt={""}
        ></Image>
        <Image
          className="hidden md:block absolute top-[-10rem] right-[-5rem] z-1 h-[90vh] rotate-180 md:h-auto  " style={{opacity: 0.3}}
          src={circleverde}
          alt={""}
        ></Image>
          <div
            className="w-[90%] z-10 rounded-lg shadow-xl flex flex-col md:flex-row space-between content-between items-center py-[2rem]"
            style={{ background: "#EEF1F2" }}
          >
            <div
              className="flex flex-1 flex-col justify-center content-center items-center my-[2rem]"
              style={{ borderRight: "2px solid white" }}
            >
              <h2
                className="poppins-bold text-[40px] md:text-[70px]  w-[60%] text-center break-normal "
                color="#02045C"
              >
                {" "}
                90%{" "}
              </h2>
              <p
                className="poppins-regular w-[60%] text-[20px] mt-[2rem] text-center "
                color="#02045C"
              >
                de los pacientes que llegan son del nicho correcto.
              </p>
            </div>
            <div
              className="flex flex-1  flex-col justify-center content-center items-center my-[2rem]"
              style={{ borderRight: "2px solid white" }}
            >
              <h2
                className="poppins-bold text-[40px] md:text-[70px]  w-[60%] text-center break-normal "
                color="#02045C"
              >
                {" "}
                100%{" "}
              </h2>
              <p
                className="poppins-regular w-[60%] text-[20px] mt-[2rem] text-center "
                color="#02045C"
              >
                de los pacientes que procesa nuestro sistema transaccionan.
              </p>
            </div>
            <div className="flex flex-1 flex-col justify-center content-center items-center my-[2rem]">
              <h2
                className="poppins-bold text-[40px] md:text-[70px]  w-[60%] text-center break-normal "
                color="#02045C"
              >
                {" "}
                40%{" "}
              </h2>
              <p
                className="poppins-regular w-[60%] text-[20px] mt-[2rem] text-center "
                color="#02045C"
              >
                de reducción en el costo de adquisición de clientes.
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col relative w-screen items-center content-center z-20 mb-[2rem]">
        <Image
          className="hidden md:block absolute top-[35rem] right-[-5rem] z-1 h-[90vh] rotate-180 md:h-auto  " style={{opacity: 0.3}}
          src={circleverde}
          alt={""}
        ></Image>
          <div className="w-[90%]  flex flex-col md:flex-row space-between content-between items-center  my-[2rem]">
            <Image className="flex-1 " src={secondImage} alt={""}></Image>
            <div className="flex-1 ">
              <h2
                className="poppins-bold text-[35px] mb-[3rem]"
                color="#02045C"
              >
                Conecta tus servicios de salud con pacientes.
              </h2>
              <p
                className="poppins-regular text-[18px] mb-[2rem]"
                color="#02045C"
              >
                Transforma la forma de conectar conectar y segmentar pacientes
                con servicios de salud según sus necesidades, simplificando el
                proceso y asegurando una atención personalizada.
              </p>
              <Button
                className="poppins-bold text-sm "
                color="#02045C"
                h={"50px"}
                size="sm"
                bg={"#DBF3BF"}
                variant="solid"
              >
                Descarga más información
              </Button>
            </div>
          </div>
        </section>

        <section className="flex flex-col w-screen items-center content-center z-20 mb-[2rem]">
          <div className="w-[90%]  flex flex-col  space-between content-between items-center  my-[2rem]">
            <h2 className="poppins-bold text-[35px] mb-[3rem]" color="#02045C">
              La plataforma que necesitas
            </h2>
            <p
              className="poppins-regular text-[18px] mb-[2rem]"
              color="#02045C"
            >
              Nuestras soluciones ayudan a potencilizar y convertir la
              excelencia clínica en mejores resultados para nuestros socios.
            </p>

            <div className="w-[95%] md:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-8 ">
              <Card >
        
                <CardBody style={{'padding':'0!important'}} className="w-[100%] flex items-center ">

                <div >
                  <Image  width={'140'} height={'140'} src={'/assets/med0.png'} alt={""} ></Image>
                  </div>
                  <div>
                  <h1 style={{'padding':'0!important'}} className="poppins-bold text-[20px] pb-0 ml-[3rem] mb-[1rem]">
                    Asistente Inteligente
                  </h1>

                  <Text className="ml-[3rem]" >
                  Asesora a tus pacientes sobre sus síntomas a través de un cuestionario en menos de 3 minutos.
                  </Text>
                  </div>
                </CardBody>
              </Card>

        

      <Card >
        
        <CardBody style={{'padding':'0!important'}} className="w-[100%] flex items-center ">

        <div >
          <Image  width={'140'} height={'140'} src={'/assets/med1.png'} alt={""} ></Image>
          </div>
          <div>
          <h1 style={{'padding':'0!important'}} className="poppins-bold text-[20px] pb-0 ml-[3rem] mb-[1rem]">
            Agenda Homologada
          </h1>

          <Text className="ml-[3rem]" >
          Sincronizada con tu correo de google calendar, evita duplicar eventos y validar disponibilidad
          </Text>
          </div>
        </CardBody>
      </Card>

      <Card >
        
        <CardBody style={{'padding':'0!important'}} className="w-[100%] flex items-center ">

        <div >
          <Image  width={'140'} height={'140'} src={'/assets/med2.png'} alt={""} ></Image>
          </div>
          <div>
          <h1 style={{'padding':'0!important'}} className="poppins-bold text-[20px] pb-0 ml-[3rem] mb-[1rem]">
          Atención médica en línea
          </h1>

          <Text className="ml-[3rem]" >
          Conecta con pacientes a traves de telemedicina y mantiene la información protegida
          </Text>
          </div>
        </CardBody>
      </Card>

      <Card >
        
        <CardBody style={{'padding':'0!important'}} className="w-[100%] flex items-center ">

        <div >
          <Image  width={'140'} height={'140'} src={'/assets/med3.png'} alt={""} ></Image>
          </div>
          <div>
          <h1 style={{'padding':'0!important'}} className="poppins-bold text-[20px] pb-0 ml-[3rem] mb-[1rem]">
          Recetas digitales
          </h1>

          <Text className="ml-[3rem]" >
          Crea recetas digitales y homologa tus sistemas para médicos y pacientes de manera más eficiente.
          </Text>
          </div>
        </CardBody>
      </Card>

      <Card >
        
        <CardBody style={{'padding':'0!important'}} className="w-[100%] flex items-center ">

        <div >
          <Image  width={'140'} height={'140'} src={'/assets/med4.png'} alt={""} ></Image>
          </div>
          <div>
          <h1 style={{'padding':'0!important'}} className="poppins-bold text-[20px] pb-0 ml-[3rem] mb-[1rem]">
          Modulo de atención virtual
          </h1>

          <Text className="ml-[3rem]" >
          Ofrece un módulo con equipamiento médico para tus colaboradores y conecta con médicos por medio de telemedicina
          </Text>
          </div>
        </CardBody>
      </Card>

      <Card >
        
        <CardBody style={{'padding':'0!important'}} className="w-[100%] flex items-center ">

        <div >
          <Image  width={'140'} height={'140'} src={'/assets/med5.png'} alt={""} ></Image>
          </div>
          <div>
          <h1 style={{'padding':'0!important'}} className="poppins-bold text-[20px] pb-0 ml-[3rem] mb-[1rem]">
          Financiamiento
          </h1>

          <Text className="ml-[3rem]" >
          Ofrece financiamientos a tus pacientes de hasta $100,000 pesos para estudios, consultas y procedimientos
          </Text>
          </div>
        </CardBody>
      </Card>



            </div>
            {/*
            <Button
            className="poppins-regular my-[42px] text-sm p-[1rem] w-[10rem]"
            h="50px"
            size="sm"
            color={"white"}
            bg={"#02045C"}
            variant="solid"
          >
            Conoce más
          </Button>
           */}
          </div>
        </section>
      </div>
    </main>
  );
}
