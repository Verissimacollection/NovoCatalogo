import jsPDF from 'jspdf';
import { CartItem } from '@/contexts/CartContext';

interface GeneratePDFProps {
  items: CartItem[];
  total: number;
  totalQuantity: number;
  deliveryData?: {
    nome: string;
    endereco: string;
    cidade: string;
    cep: string;
    frete: string;
  };
}

const formatPrice = (price: number): string => `R$ ${price.toFixed(2).replace('.', ',')}`;

export const generateOrderPDF = ({
  items,
  total,
  totalQuantity,
  deliveryData
}: GeneratePDFProps) => {
  const doc = new jsPDF();
  const now = new Date();
  const date = now.toLocaleDateString('pt-BR');
  const time = now.toLocaleTimeString('pt-BR');
  const discountRate = 0.2;

  const marginX = 20;
  let y = 30;

  const addLineSeparator = (y: number, thickness = 0.1) => {
    doc.setLineWidth(thickness);
    doc.line(marginX, y, 190, y);
  };

  const addText = (
    text: string,
    x: number,
    y: number,
    size = 12,
    isBold = false,
    align: 'left' | 'center' = 'left'
  ) => {
    doc.setFontSize(size);
    doc.setFont('helvetica', isBold ? 'bold' : 'normal');
    const textX = align === 'center' ? doc.internal.pageSize.getWidth() / 2 : x;
    doc.text(text, textX, y, { align });
  };

  const splitText = (text: string, maxWidth: number) => {
    return doc.splitTextToSize(text, maxWidth);
  };

  // Título
  addText('Verissima New Collection - Resumo do Pedido', 0, y, 18, true, 'center');
  y += 10;
  addLineSeparator(y);
  y += 10;

  // Data e Hora
  addText(`Data: ${date}`, marginX, y, 11);
  y += 6;
  addText(`Hora: ${time}`, marginX, y, 11);
  y += 10;
  addLineSeparator(y);
  y += 10;

  // Dados de entrega (se fornecidos)
  if (deliveryData) {
    addText('Dados para Entrega', marginX, y, 14, true);
    y += 8;
    
    addText(`Nome: ${deliveryData.nome}`, marginX, y, 11);
    y += 6;
    addText(`Endereço: ${deliveryData.endereco}`, marginX, y, 11);
    y += 6;
    addText(`Cidade: ${deliveryData.cidade}`, marginX, y, 11);
    y += 6;
    addText(`CEP: ${deliveryData.cep}`, marginX, y, 11);
    y += 6;
    
    const freteLabel = {
      onibus: 'Ônibus',
      correio: 'Correio',
      transportadora: 'Transportadora'
    }[deliveryData.frete] || deliveryData.frete;
    
    addText(`Frete: ${freteLabel} (consultar valor)`, marginX, y, 11);
    y += 10;
    addLineSeparator(y);
    y += 10;
  }

  // Itens
  addText('Itens do Pedido', marginX, y, 14, true);
  y += 10;

  items.forEach((item, index) => {
    const subtotal = item.price * item.quantity;

    const productLines = splitText(`${index + 1}. ${item.name}`, 160);
    productLines.forEach(line => {
      addText(line, marginX, y, 12, true);
      y += 5;
    });

    addText(`SKU: ${item.sku}`, marginX + 5, y, 10);
    y += 5;

    if (item.color) {
      addText(`Cor: ${item.color}`, marginX + 5, y, 10);
      y += 5;
    }

    if (item.size) {
      addText(`Tamanho: ${item.size}`, marginX + 5, y, 10);
      y += 5;
    }

    addText(`Quantidade: ${item.quantity}`, marginX + 5, y, 10);
    y += 5;

    addText(`Preço unitário: ${formatPrice(item.price)}`, marginX + 5, y, 10);
    y += 5;

    addText(`Subtotal: ${formatPrice(subtotal)}`, marginX + 5, y, 10);
    y += 8;

    addLineSeparator(y, 0.05);
    y += 8;

    if (y > 260) {
      doc.addPage();
      y = 30;
    }
  });

  // Totais
  addText('Resumo da Compra', marginX, y, 14, true);
  y += 8;

  addText(`Total de unidades: ${totalQuantity}`, marginX, y);
  y += 6;
  addText(`Total: ${formatPrice(total)}`, marginX, y, 12, true);
  y += 6;

  y += 10;
  addLineSeparator(y);
  y += 10;

  // Rodapé
  const pageHeight = doc.internal.pageSize.height;
  addText('Verissima New Collection - Produtos de qualidade', marginX, pageHeight - 20, 10);
  addText('WhatsApp: (11) 94753-7240', marginX, pageHeight - 12, 10);

  const fileName = `pedido-leev-${now.toISOString().split('T')[0]}-${Date.now()}.pdf`;
  doc.save(fileName);

  return fileName;
};
