"use client";

import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure } from "@chakra-ui/react"
import { useRef } from "react"
import { LuMessageCircle } from "react-icons/lu";
import { IoCalendar } from "react-icons/io5";
import Link from 'next/link';
import { IconButton } from '@chakra-ui/react'
import { MdMenu } from "react-icons/md";

export default function MenuMobile() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
  
    return (
      <>

        <IconButton aria-label='Search database' onClick={onOpen} icon={<MdMenu />} />
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
  
            <DrawerBody>
              <div className="flex flex-col" >
          <Button
            className="poppins-regula w-[80%] mb-[1rem] text-sm "
            h={"50px"}
            size="sm"
            color="#02045C"
            bg={"#DBF3BF"}
            variant="solid"
          >
             <Link href="/us">
            
             Conocenos
            </Link>
          </Button>
          <Button
            className="poppins-regular w-[80%] text-sm "
            h={"50px"}
            size="sm"
            color="#02045C"
            bg={"#DBF3BF"}
            variant="solid"
          >
             <Link href="/contact">
            
             Contactanos
            </Link>
          </Button>
          </div>
       
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cerrar
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }