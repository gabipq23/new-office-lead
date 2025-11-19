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
  acceptContact: boolean | number;
  acceptTerms: boolean | number;
  alreadyHaveMicrosoftDomain: boolean | number;
  client_ip?: string | null;
  cnpj: string;
  company_name?: string | null;
  consultor_responsavel?: string | null;
  cpf?: string | null;
  created_at?: string;
  credito_servicos?: string | null;
  domainName: string;
  email: string;
  equipe?: string | null;
  finger_print?: string | null;
  i_have_authorization?: boolean;
  id?: number;
  id_crm?: string | null;
  id_vivo_corp?: string | null;
  isVivoClient: boolean | number;
  managerPhone: string;
  manager_name?: string | null;
  obs_consultor?: string | null;
  observacao_consultor?: string;
  ordernumber?: string;
  plans: Plan[];
  second_manager_phone?: string;
  status?: string | null;
  status_pos_venda?: string | null;
  url?: string | null;
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
    i_have_authorization?: boolean;
    second_manager_phone?: string;
    cpf?: string | null;
    client_ip?: string | null;
    url?: string | null;
    finger_print?: string | null;
    company_name?: string | null;
  };
  itens: Array<{
    planName: string;
    price: string;
    type: string;
    users: number;
    newPlan: boolean;
  }>;
}
