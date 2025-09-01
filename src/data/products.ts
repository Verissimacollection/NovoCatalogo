import { Factory } from "lucide-react";
import { Product } from "@/interfaces/Product";
import { conjunto_bia } from "./conjunto_bia";
import { conjunto_mirela} from "./conjunto_mirela"
import {macacao} from "./macacao"
import {conjunto_juliana} from "./conjunto_juliana"
import { macacao_mariana } from "./macacao_mariana";
import { conjunto_maisa } from "./conjunto_maisa";








 

// Combinando todos os produtos
export const products: Product[] = [
  ...conjunto_bia,
  ...conjunto_mirela,
  ...conjunto_juliana,
  ...conjunto_maisa,
  ...macacao,
  ...macacao_mariana,
];
