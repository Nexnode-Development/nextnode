import z from "zod";

export interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  role: string;
  phone?: string;
  country_code?: string;
}

export type Login = {
    email: string;
    password: string
}

export type Register = {
    fullName: string;
    email: string;
    password: string;
    phone: string;
    role: string;
}