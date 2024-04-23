import Image from "next/image";
import logo from "../../../public/assets/LogoWecare.png";
import circle from "../../../public/assets/Circulo azul.png";
import circleverde from "../../../public/assets/Circuloverde.png";
import gradient from "../../../public/assets/gradient-green.png";
import mainImage from "../../../public/assets/happy-mother.png";
import firstImage from "../../../public/assets/first-image.png";
import secondImage from "../../../public/assets/urgencias.png";
import profile from "../../../public/assets/profile.png";
import { Button, Card, CardBody, Text, CardHeader } from "@chakra-ui/react";
import { LuMessageCircle } from "react-icons/lu";
import { IoCalendar } from "react-icons/io5";
import { LiaStethoscopeSolid } from "react-icons/lia";
import Link from 'next/link';

export default function Us() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-between">
      <header className="flex w-screen justify-between items-center flex-row mt-[50px] ">
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
          <h3 className="poppins-semibold text-sm text-[#02045C] underline mr-[42px]">
            Conocenos
          </h3>
          </Link>
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
        <section className="flex flex-col relative w-screen items-center content-center z-20 mb-[2rem]">
          <Image
            className="hidden md:block absolute top-[35rem] right-[-5rem] z-1 h-[90vh] rotate-180 md:h-auto  " style={{opacity: 0.3}}
            src={circleverde}
            alt={""}
          ></Image>
          <div className="w-[90%]  flex flex-col md:flex-row space-between content-between items-center  my-[2rem]">
            <div className="flex-1 ">
              <h2
                className="poppins-bold text-[35px] mb-[3rem]"
                color="#02045C"
              >
                La atención medica que siempre debiste tener
              </h2>
              <p
                className="poppins-regular text-[18px] mb-[2rem]"
                color="#02045C"
              >
                Encuentra a los profesionales médicos adecuados al instante y
                obtén un acompañamiento personalizado en cada paso y toma el
                control de tu salud.
              </p>
            </div>

            <div className="relative flex-1">
              <Image
                className="absolute left-[35%] top-[-3rem]"
                src={profile}
                alt={""}
              ></Image>
              <Image
                className="flex-1 w-[100%]"
                src={secondImage}
                alt={""}
              ></Image>
            </div>
          </div>
        </section>

        <section className="flex flex-col w-screen relative items-center content-center z-20  mb-[2rem]">
          <div className="w-[95%] relative z-20  md:w-[90%] grid grid-cols-1  md:grid-cols-3 gap-8 ">
            <Card className="relative z-20">
              <CardBody
                style={{ padding: "0!important" }}
                className="w-[100%] flex  flex-col z-20"
              >
                <div className="relative z-20">
                  <Image
                    width={"80"}
                    height={"80"}
                    src={"/assets/med6.png"}
                    alt={""}
                  ></Image>
                </div>
                <div>
                  <h1
                    style={{ padding: "0!important" }}
                    className="poppins-bold text-[20px] pb-0 mt-4 mb-[1rem]"
                  >
                    Acceso rápido y conveniente
                  </h1>

                  <Text className="">
                    Recibe atención médica de calidad desde tu dispositivo móvil
                    y en cualquier momento
                  </Text>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody
                style={{ padding: "0!important" }}
                className="w-[100%] flex  flex-col "
              >
                <div>
                  <Image
                    width={"80"}
                    height={"80"}
                    src={"/assets/med2.png"}
                    alt={""}
                  ></Image>
                </div>
                <div>
                  <h1
                    style={{ padding: "0!important" }}
                    className="poppins-bold text-[20px] pb-0 mt-4 mb-[1rem]"
                  >
                    Identificación precisa
                  </h1>

                  <Text className="">
                    Utilizamos algoritmos avanzados y contamos con una red de
                    médicos para darte un diagnostico correcto
                  </Text>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody
                style={{ padding: "0!important" }}
                className="w-[100%] flex  flex-col "
              >
                <div>
                  <Image
                    width={"80"}
                    height={"80"}
                    src={"/assets/med0.png"}
                    alt={""}
                  ></Image>
                </div>
                <div>
                  <h1
                    style={{ padding: "0!important" }}
                    className="poppins-bold text-[20px] pb-0 mt-4 mb-[1rem]"
                  >
                    Conexión instantánea
                  </h1>

                  <Text className="">
                    Te conectamos con nuestro asistente inteligente para
                    brindarte orientación personalizada.
                  </Text>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>
        <section className="flex flex-col relative w-screen items-center content-center  mb-[2rem]">
          <Image
            className="hidden md:block absolute top-[-35rem] left-[-5rem] z-1 h-[90vh]  md:h-auto  " style={{opacity: 0.3}}
            src={circleverde}
            alt={""}
          ></Image>
          <div className="w-[90%]  flex flex-col md:flex-row space-between content-between items-center z-20  my-[2rem]">
            <div className="flex-1 flex justify-center items-center">
              <Image
                className="md:w-[70%] h-[50%]"
                src={mainImage}
                alt={""}
              ></Image>
            </div>
            <div className="flex-1 ">
              <h2
                className="poppins-bold text-[35px] mb-[3rem]"
                color="#02045C"
              >
                Los servicios de salud que necesitas al alcance de tus manos
              </h2>
              <p
                className="poppins-regular text-[18px] mb-[2rem]"
                color="#02045C"
              >
                No importa si se trata de un resfriado común, una alergia
                estacional o una consulta sobre un problema crónico, WeCare está
                aquí para ayudarte en cada paso del camino.
              </p>
              <div className="flex items-center mt-8">
                <Image
                  width={"30"}
                  height={"30"}
                  src={"/assets/Checkbox.png"}
                  alt={""}
                ></Image>
                <h2
                  className="poppins-bold text-[18px] ml-[2rem]"
                  color="#02045C"
                >
                  Pre diagnóstico inteligente
                </h2>
              </div>
              <div className="flex items-center mt-8">
                <Image
                  width={"30"}
                  height={"30"}
                  src={"/assets/Checkbox.png"}
                  alt={""}
                ></Image>
                <h2
                  className="poppins-bold text-[18px] ml-[2rem]"
                  color="#02045C"
                >
                  Agenda citas
                </h2>
              </div>

              <div className="flex items-center mt-8">
                <Image
                  width={"30"}
                  height={"30"}
                  src={"/assets/Checkbox.png"}
                  alt={""}
                ></Image>
                <h2
                  className="poppins-bold text-[18px] ml-[2rem]"
                  color="#02045C"
                >
                  Telemedicina
                </h2>
              </div>

              <div className="flex items-center mt-8">
                <Image
                  width={"30"}
                  height={"30"}
                  src={"/assets/Checkbox.png"}
                  alt={""}
                ></Image>
                <h2
                  className="poppins-bold text-[18px] ml-[2rem]"
                  color="#02045C"
                >
                  Estudios de laboratorio
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col relative w-screen items-center content-center z-20 mb-[2rem]">
          <Image
            className="hidden md:block absolute top-[35rem] left-[-5rem] z-1 h-[90vh]  md:h-auto  " style={{opacity: 0.3}}
            src={circleverde}
            alt={""}
          ></Image>
          <div className="w-[90%]  flex flex-col md:flex-row space-between content-between items-center  my-[2rem]">
            <div className="flex-1 ">
              <h2
                className="poppins-bold text-[35px] mb-[3rem]"
                color="#02045C"
              >
                Tus necesidades y tu bienestar en primer lugar
              </h2>
              <p
                className="poppins-regular text-[18px] mb-[2rem]"
                color="#02045C"
              >
                Desde el momento en que nos eliges como tu proveedor de atención
                médica, nos comprometemos a trabajar contigo para desarrollar un
                plan de tratamiento que se ajuste a tus necesidades
                individuales.
              </p>

              <Button
                className="poppins-regular my-[42px] text-sm p-[1rem] w-[15rem]"
                h="50px"
                leftIcon={
                  <LiaStethoscopeSolid className="text-[30px]"></LiaStethoscopeSolid>
                }
                size="sm"
                color={"white"}
                bg={"#02045C"}
                variant="solid"
              >
                Iniciar prediagnóstico
              </Button>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <Image
                className="md:w-[70%] h-[50%]"
                src={firstImage}
                alt={""}
              ></Image>
            </div>
          </div>
        </section>

        <section className="flex flex-col w-screen items-center content-center z-20 mb-[2rem]">
          <div className="w-[90%]  flex flex-col  space-between content-between items-center  my-[2rem]">
            <h2 className="poppins-bold text-[35px] mb-[5rem]" color="#02045C">
              ¿Cómo funciona?
            </h2>

            <div className="w-[95%] md:w-[90%] grid grid-cols-1 md:grid-cols-4 gap-8 ">
              <div>
                <div
                  style={{ padding: "0!important" }}
                  className="w-[100%] flex flex-col  "
                >
                  <div>
                    <div className="bg-white shadow-lg shadow-indigo-500/40 w-[4rem] flex items-center justify-center text-center ml-[3rem] mb-[2rem] px-[1.5rem] py-[.5rem] rounded-full">
                      <h1
                        style={{ padding: "0!important" }}
                        className="poppins-bold text-[34px] w-[4rem]  "
                      >
                        01
                      </h1>
                    </div>
                  </div>
                  <div>
                    <h1
                      style={{ padding: "0!important" }}
                      className="poppins-bold text-[24px] pb-0 ml-[3rem] mb-[1rem]"
                    >
                      Identifica tus sintomas
                    </h1>

                    <Text className="ml-[3rem] text-[14px]">
                      Describe tus síntomas por chat o imagenes y recibe un
                      prediagnóstico
                    </Text>
                  </div>
                </div>
              </div>

              <div>
                <div
                  style={{ padding: "0!important" }}
                  className="w-[100%] flex flex-col  "
                >
                  <div>
                    <div className="bg-white shadow-lg shadow-indigo-500/40 w-[4rem] flex items-center justify-center text-center ml-[3rem] mb-[2rem] px-[1.5rem] py-[.5rem] rounded-full">
                      <h1
                        style={{ padding: "0!important" }}
                        className="poppins-bold text-[34px] w-[4rem]  "
                      >
                        02
                      </h1>
                    </div>
                  </div>
                  <div>
                    <h1
                      style={{ padding: "0!important" }}
                      className="poppins-bold text-[24px] pb-0 ml-[3rem] mb-[1rem]"
                    >
                      Elige el servicio que necesitas
                    </h1>

                    <Text className="ml-[3rem] text-[14px]">
                      Recibe un listado personalizado con la atención médica que
                      necesitas
                    </Text>
                  </div>
                </div>
              </div>

              <div>
                <div
                  style={{ padding: "0!important" }}
                  className="w-[100%] flex flex-col  "
                >
                  <div>
                    <div className="bg-white shadow-lg shadow-indigo-500/40 w-[4rem] flex items-center justify-center text-center ml-[3rem] mb-[2rem] px-[1.5rem] py-[.5rem] rounded-full">
                      <h1
                        style={{ padding: "0!important" }}
                        className="poppins-bold text-[34px] w-[4rem]  "
                      >
                        03
                      </h1>
                    </div>
                  </div>
                  <div>
                    <h1
                      style={{ padding: "0!important" }}
                      className="poppins-bold text-[24px] pb-0 ml-[3rem] mb-[1rem]"
                    >
                      Registra tus datos
                    </h1>

                    <Text className="ml-[3rem] text-[14px]">
                      Envía la información solicitada y ahorra tiempo en tu
                      ingreso
                    </Text>
                  </div>
                </div>
              </div>

              <div>
                <div
                  style={{ padding: "0!important" }}
                  className="w-[100%] flex flex-col  "
                >
                  <div>
                    <div className="bg-white shadow-lg shadow-indigo-500/40 w-[4rem] flex items-center justify-center text-center ml-[3rem] mb-[2rem] px-[1.5rem] py-[.5rem] rounded-full">
                      <h1
                        style={{ padding: "0!important" }}
                        className="poppins-bold text-[34px] w-[4rem]  "
                      >
                        04
                      </h1>
                    </div>
                  </div>
                  <div>
                    <h1
                      style={{ padding: "0!important" }}
                      className="poppins-bold text-[24px] pb-0 ml-[3rem] mb-[1rem]"
                    >
                      Recibe el cuidado que necesitas
                    </h1>

                    <Text className="ml-[3rem] text-[14px]">
                      Confirma tu cita y pago, nosotros nos encargamos del resto
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
