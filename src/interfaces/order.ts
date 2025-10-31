export interface Plan {
  id?: string;
  planName: string;
  price: string;
  type?: "mensal" | "anual";
  users?: number;
  priceYear?: string;
  newPlan?: boolean;
  servicesIncluded?: string[];
}

export interface OrderData {
  id?: number;
  email: string;
  domainName: string;
  cnpj: string;
  managerPhone: string;
  status?: string | null;
  status_pos_venda?: string | null;
  id_vivo_corp?: string | null;
  consultor_responsavel?: string | null;
  equipe?: string | null;
  id_crm?: string | null;
  obs_consultor?: string | null;
  manager_name?: string | null;
  created_at?: string;
  ordernumber?: string;
  isVivoClient: boolean | number;
  alreadyHaveMicrosoftDomain: boolean | number;
  acceptContact: boolean | number;
  acceptTerms: boolean | number;
  plans: Plan[];
}

export interface CreateOrderData {
  pedido: {
    email: string;
    cnpj: string;
    manager_name: string;
    managerPhone: string;
    isVivoClient: boolean;
    acceptContact: boolean;
    alreadyHaveMicrosoftDomain: boolean;
    domainName: string;
    acceptTerms: boolean;
    status: string;
  };
  itens: Array<{
    planName: string;
    price: string;
    type: string;
    users: number;
    newPlan: boolean;
  }>;
}
