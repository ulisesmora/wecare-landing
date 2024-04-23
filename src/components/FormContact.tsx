"use client";
import { Button, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react';

import React, { useState } from 'react'

import axios from "axios";

export default function FormContact() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
    
      const handleChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        try {
          await axios.post("/api/send-email", formData);
          alert("Message sent successfully!");
          // Optionally, clear the form fields after successful submission
          setFormData({
            fullName: "",
            email: "",
            phone: "",
            message: "",
          });
        } catch (error) {
          console.error("Error sending message:", error);
          alert(
            "An error occurred while sending the message. Please try again later."
          );
        }
      };
    
  return (
    <form className="w-[100%] flex flex-col items-start justify-center content-center " onSubmit={handleSubmit}>
    <FormControl className="w-[100%] flex flex-col items-start justify-center content-center mb-[2rem]">
      <FormLabel className="poppins-bold text-[#02045C]">
        Nombre completo
      </FormLabel>
      <Input
        variant="filled"
        className="w-[100%]"
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        required
      />
    </FormControl>
    <FormControl className="w-[80%] flex flex-col items-start justify-center content-center mb-[2rem]">
      <FormLabel className="w-[80%] poppins-bold text-[#02045C]">
        Correo electrónico
      </FormLabel>
      <Input
        variant="filled"
        className="w-[100%]"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </FormControl>
    <FormControl className="w-[80%] flex flex-col items-start justify-center content-center mb-[2rem]">
      <FormLabel className="w-[80%] poppins-bold text-[#02045C]">
        Teléfono
      </FormLabel>
      <Input
        variant="filled"
        className="w-[100%]"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
    </FormControl>
    <FormControl className="w-[80%] flex flex-col items-start justify-center content-center mb-[2rem]">
      <FormLabel className="w-[80%] poppins-bold text-[#02045C]">
        Mensaje
      </FormLabel>
      <Textarea
        variant="filled"
        className="w-[100%]"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />
    </FormControl>

    <Button
      color={"white"}
      bg={"#02045C"}
      variant="solid"
      className="mb-[2rem] mt-[2rem] w-[15rem]"
      type="submit"
    >
      Enviar
    </Button>
  </form>

  )
}
