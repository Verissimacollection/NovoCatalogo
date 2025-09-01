import React, { useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface DeliveryFormProps {
  deliveryData: {
    nome: string;
    endereco: string;
    numero: string;
    complemento?: string;
    cidade: string;
    estado: string;
    cep: string;
    frete: string;
  };
  onDeliveryDataChange: (data: any) => void;
}

const DeliveryForm: React.FC<DeliveryFormProps> = ({ deliveryData, onDeliveryDataChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onDeliveryDataChange({ ...deliveryData, [e.target.name]: e.target.value });
  };

  const handleFreteChange = (value: string) => {
    onDeliveryDataChange({ ...deliveryData, frete: value });
  };

  useEffect(() => {
    const cep = deliveryData.cep.replace(/\D/g, '');

    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(data => {
          if (!data.erro) {
            onDeliveryDataChange({
              ...deliveryData,
              endereco: data.logradouro || deliveryData.endereco,
              cidade: data.localidade || deliveryData.cidade,
              estado: data.uf || deliveryData.estado,
            });
          }
        })
        .catch(err => {
          console.error('Erro ao buscar CEP:', err);
        });
    }
  }, [deliveryData.cep]);

  return (
    <div className="space-y-4 px-2 sm:px-4">
      <div>
        <Label>Nome</Label>
        <Input name="nome" value={deliveryData.nome} onChange={handleChange} />
      </div>

      <div>
        <Label>CEP</Label>
        <Input name="cep" value={deliveryData.cep} onChange={handleChange} maxLength={9} />
      </div>

      <div>
        <Label>Endereço</Label>
        <Input name="endereco" value={deliveryData.endereco} onChange={handleChange} />
      </div>

      <div>
        <Label>Número</Label>
        <Input name="numero" value={deliveryData.numero} onChange={handleChange} />
      </div>

      <div>
        <Label>Complemento</Label>
        <Input name="complemento" value={deliveryData.complemento || ''} onChange={handleChange} />
      </div>

      <div>
        <Label>Cidade</Label>
        <Input name="cidade" value={deliveryData.cidade} onChange={handleChange} />
      </div>

      <div>
        <Label>Estado</Label>
        <Input name="estado" value={deliveryData.estado} onChange={handleChange} />
      </div>

      <div>
        <Label>Frete</Label>
        <RadioGroup value={deliveryData.frete} onValueChange={handleFreteChange} className="flex gap-4">
          <RadioGroupItem value="onibus" id="onibus" />
          <Label htmlFor="onibus">Ônibus</Label>

          <RadioGroupItem value="correio" id="correio" />
          <Label htmlFor="correio">Correio</Label>

          <RadioGroupItem value="transportadora" id="transportadora" />
          <Label htmlFor="transportadora">Transportadora</Label>
        </RadioGroup>
      </div>
    </div>
  );
};

export default DeliveryForm;
