import { Factory } from "lucide-react";
import { Product } from "@/interfaces/Product";
import { conjunto_bia } from "./conjunto_bia";
import { conjunto_mirela} from "./conjunto_mirela"
import {macacao} from "./macacao"
import {conjunto_juliana} from "./conjunto_juliana"
import { macacao_mariana } from "./macacao_mariana";
import { conjunto_maisa } from "./conjunto_maisa";
import { corta_vento } from "./corta_vento";
import { conjunto_bea } from "./conjunto_bea";
import { conjunto_mia } from "./conjunto_mia";
import { vestido_helen } from "./vestido_helen";
import { saia_couro_resinada } from "./saia_couro_resinada_elastano";
import { shorts_couro_resinado } from "./shorts_couro_resinado";
import { conjunto_vivian } from "./conjunto_vivian";
import { conjunto_gabriela } from "./conjunto_gabriela";
import { regata_cetim } from "./regata_importada_cetim";
import { vestido_rose } from "./vestido_rose";
import { regata_petala } from "./regata_petala";








 

// Combinando todos os produtos
export const products: Product[] = [
  ...conjunto_bia,
  ...conjunto_mirela,
  ...conjunto_mia,
  ...conjunto_juliana,
  ...conjunto_vivian,
  ...conjunto_gabriela,
  ...conjunto_maisa,
  ...vestido_rose,
  ...regata_petala,
  ...conjunto_bea,
  ...regata_cetim,
  ...macacao,
  ...macacao_mariana,
  ...corta_vento,
  ...vestido_helen,
  ...saia_couro_resinada,
  ...shorts_couro_resinado
];
