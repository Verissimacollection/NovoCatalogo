import { Factory } from "lucide-react";
import { Product } from "@/interfaces/Product";
import { conjunto_bia } from "./conjunto_bia";
import { conjunto_mirela} from "./conjunto_mirela"
import {macacao} from "./macacao"








 

// Combinando todos os produtos
export const products: Product[] = [
  ...conjunto_bia,
  ...conjunto_mirela,
  ...macacao,
];
