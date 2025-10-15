import { useState } from "react";
import { Button, Input, Checkbox, Radio, ConfigProvider } from "antd";
import { useNavigate } from "react-router-dom";
import { Check, ChevronDown, ChevronUp, CircleCheck } from "lucide-react";
import { useOrderStore } from "../../context/context";
import { useOrderControler } from "../../controller/controller";
import { CPFInput, PhoneInput } from "../../utils/input";

export default function CompanyInfo() {
  const [hasWorkspace, setHasWorkspace] = useState(false);
  const { updateCompanyInfo } = useOrderStore();
  const [cpf, setcpf] = useState("");
  const [phone, setPhone] = useState("");
  const [acceptContact, setAcceptContact] = useState(true);
  const [showServices, setShowServices] = useState(false);
  const [showServicesWeb, setShowServicesWeb] = useState(true);
  const [domainName, setDomainName] = useState("");
  const [domainSuggestion1, setDomainSuggestion1] = useState("");
  const [domainSuggestion2, setDomainSuggestion2] = useState("");
  const [hasTriedSubmit, setHasTriedSubmit] = useState(false);
  const { buildCompleteOrder, clearOrder } = useOrderStore();

  const { createOrder } = useOrderControler();

  const navigate = useNavigate();

  const isFormValid = () => {
    const cpfDigits = cpf.replace(/\D/g, "");
    const hasValidCpf = cpfDigits.length === 11;

    const phoneDigits = phone.replace(/\D/g, "");
    const hasValidPhone = phoneDigits.length === 11;

    const hasAcceptedTerms = acceptContact === true;

    let hasDomainInfo = true;
    if (!hasWorkspace) {
      // Se não tem workspace, precisa das DUAS sugestões obrigatórias
      hasDomainInfo =
        domainSuggestion1.trim() !== "" && domainSuggestion2.trim() !== "";
    } else {
      hasDomainInfo = domainName.trim() !== "";
    }

    return hasValidCpf && hasValidPhone && hasAcceptedTerms && hasDomainInfo;
  };

  const handleSubmit = async () => {
    setHasTriedSubmit(true);
    if (!isFormValid()) {
      return;
    }
    updateCompanyInfo({
      managerPhone: phone,
      cpf: cpf,
      alreadyHaveWorkspace: hasWorkspace,
      acceptContact: acceptContact,
      domainName: domainName,
      domainSuggestion1: domainSuggestion1,
      domainSuggestion2: domainSuggestion2,
    });

    const orderData = buildCompleteOrder();
    if (orderData) {
      await createOrder({ data: orderData });
      clearOrder();
      navigate("/order");
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-[100vh] ">
      {/* mobile */}
      <div className="md:hidden flex flex-col bg-[#660099] text-white  pt-2">
        <div className=" flex items-end justify-end text-[12px] gap-2 px-3">
          <span className="text-white">🛒</span>
          <span className="">Seu plano</span>
        </div>

        <h3
          style={{ fontWeight: "bold", paddingInline: "12px" }}
          className="text-[14px] text-white "
        >
          Microsoft 365
        </h3>

        <div className="flex justify-between gap-2  px-3">
          <div className="text-start">
            <div className="text-white text-[10px]">Plano</div>
            <div
              style={{ fontWeight: "bold" }}
              className="text-[#ff7f17] text-[13px]"
            >
              Business Basic
            </div>
          </div>
          <div className="text-start">
            <div className="text-white text-[10px]">Usuários</div>
            <div
              style={{ fontWeight: "bold" }}
              className="text-[#ff7f17] text-[13px]"
            >
              1
            </div>
          </div>
          <div className="text-start">
            <div className="text-white text-[10px]">Valor Total</div>
            <div
              style={{ fontWeight: "bold" }}
              className="text-[#ff7f17] text-[13px]"
            >
              R$ 35,00/mês
            </div>
          </div>
        </div>

        <div className="text-center bg-purple-100  ">
          <ConfigProvider
            theme={{
              token: {
                colorBgTextHover: "none",
                colorBgTextActive: "none",
                colorText: "#660099",
              },
            }}
          >
            <Button
              size="small"
              type="text"
              variant="text"
              onClick={() => setShowServices(!showServices)}
            >
              {showServices ? (
                <>
                  ver menos <ChevronUp className="inline w-3 h-3" />
                </>
              ) : (
                <>
                  ver mais <ChevronDown className="inline w-3 h-3" />
                </>
              )}
            </Button>
          </ConfigProvider>
        </div>

        {showServices && (
          <div className="p-4 bg-purple-100">
            <h4
              style={{ fontWeight: "bold" }}
              className="text-[#660099] font-medium mb-3 text-[12px]"
            >
              Serviços inclusos
            </h4>

            <div className="flex justify-around">
              <img src="/word.svg" alt="Word" className="w-8 h-8" />
              <img src="/excel.svg" alt="Excel" className="w-8 h-8" />
              <img
                src="/power-point.svg"
                alt="PowerPoint"
                className="w-8 h-8"
              />
              <img src="/outlook.svg" alt="Outlook" className="w-8 h-8" />
              <img src="/teams.svg" alt="Teams" className="w-8 h-8" />
              <img src="/onedrive.svg" alt="OneDrive" className="w-8 h-8" />
              <img src="/exchange.png" alt="Exchange" className="w-8 h-8" />
            </div>
            <hr className="my-3 border-t border-gray-200" />
            <div className=" flex flex-col gap-1 text-[#660099] text-[10px]">
              <div className="flex gap-1 items-center ">
                <span className="text-[#4f0077] ">
                  <CircleCheck size={11} />
                </span>
                <span>Versão para web e dispositivos móveis</span>
              </div>
              <div className="flex gap-1 items-center ">
                <span className="text-[#4f0077] ">
                  <CircleCheck size={11} />
                </span>
                <span>
                  Chat, chamada e conferência de vídeo com o Microsoft Teams
                </span>
              </div>
              <div className="flex gap-1 items-center ">
                <span className="text-[#4f0077] ">
                  <CircleCheck size={11} />
                </span>
                <span>1 TB de armazenamento na nuvem por usuário</span>
              </div>
              <div className="flex gap-1 items-center ">
                <span className="text-[#4f0077] ">
                  <CircleCheck size={11} />
                </span>
                <span>Filtragem automática de malware e spam</span>
              </div>
              <div className="flex gap-1 items-center ">
                <span className="text-[#4f0077] ">
                  <CircleCheck size={11} />
                </span>
                <span>
                  E-mail empresarial personalizado (nome@suaempresa.com)
                </span>
              </div>
              <div className="flex gap-1 items-center ">
                <span className="text-[#4f0077] ">
                  <CircleCheck size={11} />
                </span>
                <span>
                  Incluso Copilot Chat e possíveis novas contratações de Copilot
                  como complemento após compra
                </span>
              </div>
              <div className="flex gap-1 items-center ">
                <span className="text-[#4f0077] ">
                  <CircleCheck size={11} />
                </span>
                <span>
                  Mais de 10 aplicativos adicionais para suas necessidades de
                  negócios (incluindo Bookings, Planner e Forms)
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 px-8 pt-8 pb-4 justify-between bg-[#f7f7f7] ">
        <div>
          <div className="flex flex-col gap-4 lg:flex-row items-center justify-between mb-8">
            <img src="/Vivo-Empresas.png" alt="Vivo Empresas" className="h-7" />

            <div className="flex items-center gap-2">
              <div className="flex flex-col gap-1 items-center">
                <div className="w-6 h-6 bg-[#660099] border-1 border-[#660099] text-white rounded-full flex items-center justify-center text-[12px] font-semibold">
                  <Check size={16} />
                </div>
                <span className="text-[12px] text-[#660099] font-medium">
                  Produto
                </span>
              </div>
              <div className="w-8 h-px bg-[#660099] mt-[-12px]"></div>

              <div className="flex flex-col gap-1 items-center">
                <div className="w-6 h-6 bg-[#f7f7f7] border-1 border-[#660099] text-[#660099] rounded-full flex items-center justify-center text-[12px] font-semibold">
                  2
                </div>
                <span className="text-[12px] text-[#660099]">Dados</span>
              </div>
              <div className="w-8 h-px bg-gray-300 mt-[-12px]"></div>

              <div className="flex flex-col gap-1 items-center">
                <div className="w-6 h-6 bg-[#f7f7f7] border-1 border-gray-400 text-gray-500 rounded-full flex items-center justify-center text-[12px] font-semibold">
                  3
                </div>
                <span className="text-[12px] text-gray-400">Confirmação</span>
              </div>
            </div>
          </div>

          <h1 className="text-[18px] font-normal text-[#660099] ">
            Agora, informe os dados abaixo:
          </h1>

          <div className="mb-8 text-[12px]">
            <h3 className="text-[14px] text-gray-800 mb-4">
              Você já possui um Domínio Microsoft existente?
            </h3>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#f97316",
                },
              }}
            >
              <Radio.Group
                value={hasWorkspace}
                onChange={(e) => setHasWorkspace(e.target.value)}
                className="flex gap-6 text-[14px]"
              >
                <Radio
                  onClick={() => setHasWorkspace(false)}
                  value={false}
                  className="text-gray-700 text-[12px]"
                >
                  Não
                </Radio>
                <Radio
                  onClick={() => setHasWorkspace(true)}
                  value={true}
                  className="text-gray-700 text-[12px]"
                >
                  Sim
                </Radio>
              </Radio.Group>
            </ConfigProvider>
          </div>
          {!hasWorkspace ? (
            <>
              <div className="bg-orange-100 border border-orange-100 rounded-lg p-3 mb-6 flex items-start gap-2">
                <span className="text-orange-600 text-[12px] ">
                  Inclua 2 sugestões de domínio. Avaliaremos a disponibilidade
                  para uso.
                </span>
              </div>
              <div className="flex w-full gap-4">
                <div className="w-full">
                  <label className="flex items-center gap-1  text-[12px] text-gray-600 mb-2">
                    Sugestão 1 <span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <Input
                      value={domainSuggestion1}
                      onChange={(e) => setDomainSuggestion1(e.target.value)}
                      size="middle"
                      placeholder="seudomínio"
                      className="rounded-r-none border-r-0"
                    />
                    <div className="bg-neutral-200 text-[#660099] px-3 py-2 text-[12px] flex items-center rounded-r border border-neutral-200">
                      @onmicrosoft.com
                    </div>
                  </div>
                  {hasTriedSubmit &&
                    !hasWorkspace &&
                    domainSuggestion1.trim() === "" && (
                      <p className="text-red-500 text-xs mt-1">
                        Campo obrigatório
                      </p>
                    )}
                </div>
                <div className="w-full">
                  <label className="flex items-center gap-1  text-[12px] text-gray-600 mb-2">
                    Sugestão 2 <span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <Input
                      value={domainSuggestion2}
                      onChange={(e) => setDomainSuggestion2(e.target.value)}
                      size="middle"
                      placeholder="seudomínio"
                      className="rounded-r-none border-r-0"
                    />
                    <div className="bg-neutral-200 text-[#660099] px-3 py-2 text-[12px] flex items-center rounded-r border border-neutral-200">
                      @onmicrosoft.com
                    </div>
                  </div>
                  {hasTriedSubmit &&
                    !hasWorkspace &&
                    domainSuggestion2.trim() === "" && (
                      <p className="text-red-500 text-xs mt-1">
                        Campo obrigatório
                      </p>
                    )}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="w-full">
                <label className="flex items-center gap-1  text-[12px] text-gray-600 mb-2">
                  Informe seu domínio <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <Input
                    value={domainName}
                    onChange={(e) => setDomainName(e.target.value)}
                    size="middle"
                    placeholder="seudomínio"
                    className="rounded-r-none border-r-0"
                  />
                  <div className="bg-neutral-200 text-[#660099] px-3 py-2 text-[12px] flex items-center rounded-r border border-neutral-200">
                    @onmicrosoft.com
                  </div>
                </div>
                {hasTriedSubmit && hasWorkspace && domainName.trim() === "" && (
                  <p className="text-red-500 text-xs mt-1">Campo obrigatório</p>
                )}
              </div>
            </>
          )}

          <div className="mb-8 mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="flex items-center gap-1 text-[12px] text-gray-600 mb-2">
                  CPF do representante legal{" "}
                  <span className="text-red-500">*</span>
                </label>
                <CPFInput
                  format="###.###.###-##"
                  value={cpf}
                  onValueChange={(values) => setcpf(values.value)}
                />
                {hasTriedSubmit && cpf.replace(/\D/g, "").length !== 11 && (
                  <p className="text-red-500 text-xs mt-1">Campo obrigatório</p>
                )}
              </div>

              <div>
                <label className="block text-[12px] text-gray-600 mb-2">
                  Telefone <span className="text-red-500">*</span>
                </label>
                <PhoneInput
                  format="(##) #####-####"
                  value={phone}
                  onValueChange={(values) => setPhone(values.value)}
                />
                {hasTriedSubmit && phone.replace(/\D/g, "").length !== 11 && (
                  <p className="text-red-500 text-xs mt-1">Campo obrigatório</p>
                )}
              </div>
            </div>

            <div className="mb-8">
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: "#f97316",
                  },
                }}
              >
                <Checkbox
                  checked={acceptContact}
                  onChange={(e) => setAcceptContact(e.target.checked)}
                  className="text-gray-600"
                >
                  <span className="text-red-500">*</span> Aceito e concordo com
                  os termos e contratos. Em caso de não possuir linhas ativas
                  Vivo Empresas Móvel, autorizo a criação do meu usuário e
                  aceite de contrato na Plataforma Digital Vivo Empresas.
                </Checkbox>
              </ConfigProvider>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 md:right-90 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
          <div className="flex justify-end max-w-7xl mx-auto">
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#22c55e",
                },
              }}
            >
              <Button
                type="primary"
                size="large"
                onClick={handleSubmit}
                className=" self-end"
              >
                Concluir pedido
              </Button>
            </ConfigProvider>
          </div>
        </div>
      </div>
      {/* desktop */}

      <div className="hidden md:flex flex-col  w-90 bg-[#660099] text-white p-6">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-white">🛒</span>
          <span className="font-medium">Seu plano</span>
        </div>

        <div className="bg-white text-gray-800 rounded-lg  relative">
          <div className="bg-orange-500 text-white px-2 py-1 rounded-xl text-[10px] inline-block mb-4 absolute -top-2 right-2">
            + 2GB na linha móvel
          </div>
          <div className="">
            <h3
              style={{ fontWeight: "bold", padding: "12px" }}
              className="text-[14px] text-[#660099]"
            >
              Microsoft 365
            </h3>

            <div className="flex justify-between gap-2 p-3 pt-0 ">
              <div className="text-start">
                <div className="text-gray-600 text-[10px]">Plano</div>
                <div
                  style={{ fontWeight: "bold" }}
                  className="text-[#660099] text-[13px]"
                >
                  Business Basic
                </div>
              </div>
              <div className="text-start">
                <div className="text-gray-600 text-[10px]">Usuários</div>
                <div
                  style={{ fontWeight: "bold" }}
                  className="text-[#660099] text-[13px]"
                >
                  1
                </div>
              </div>
              <div className="text-start">
                <div className="text-gray-600 text-[10px]">Valor Total</div>
                <div
                  style={{ fontWeight: "bold" }}
                  className="text-[#660099] text-[13px]"
                >
                  R$ 35,00/mês
                </div>
              </div>
            </div>

            <div className="text-center bg-purple-100 rounded-b-md ">
              <ConfigProvider
                theme={{
                  token: {
                    colorBgTextHover: "none",
                    colorBgTextActive: "none",
                    colorText: "#660099",
                  },
                }}
              >
                <Button
                  size="small"
                  type="text"
                  variant="text"
                  onClick={() => setShowServicesWeb(!showServicesWeb)}
                >
                  {showServicesWeb ? (
                    <>
                      ver menos <ChevronUp className="inline w-3 h-3" />
                    </>
                  ) : (
                    <>
                      ver mais <ChevronDown className="inline w-3 h-3" />
                    </>
                  )}
                </Button>
              </ConfigProvider>
            </div>

            {showServicesWeb && (
              <div className="p-4 bg-purple-100">
                <h4
                  style={{ fontWeight: "bold" }}
                  className="text-[#660099] font-medium mb-3 text-[12px]"
                >
                  Serviços inclusos
                </h4>

                <div className="flex justify-around">
                  <img src="/word.svg" alt="Word" className="w-8 h-8" />
                  <img src="/excel.svg" alt="Excel" className="w-8 h-8" />
                  <img
                    src="/power-point.svg"
                    alt="PowerPoint"
                    className="w-8 h-8"
                  />
                  <img src="/outlook.svg" alt="Outlook" className="w-8 h-8" />
                  <img src="/teams.svg" alt="Teams" className="w-8 h-8" />
                  <img src="/onedrive.svg" alt="OneDrive" className="w-8 h-8" />
                  <img src="/exchange.png" alt="Exchange" className="w-8 h-8" />
                </div>
                <hr className="my-3 border-t border-gray-200" />
                <div className=" flex flex-col gap-1 text-[#660099] text-[11px]">
                  <div className="flex gap-1 items-center ">
                    <span className="text-[#4f0077] ">
                      <CircleCheck size={11} />
                    </span>
                    <span>Versão para web e dispositivos móveis</span>
                  </div>
                  <div className="flex gap-1 items-center ">
                    <span className="text-[#4f0077] ">
                      <CircleCheck size={11} />
                    </span>
                    <span>
                      Chat, chamada e conferência de vídeo com o Microsoft Teams
                    </span>
                  </div>
                  <div className="flex gap-1 items-center ">
                    <span className="text-[#4f0077] ">
                      <CircleCheck size={11} />
                    </span>
                    <span>1 TB de armazenamento na nuvem por usuário</span>
                  </div>
                  <div className="flex gap-1 items-center ">
                    <span className="text-[#4f0077] ">
                      <CircleCheck size={11} />
                    </span>
                    <span>Filtragem automática de malware e spam</span>
                  </div>
                  <div className="flex gap-1 items-center ">
                    <span className="text-[#4f0077] ">
                      <CircleCheck size={11} />
                    </span>
                    <span>
                      E-mail empresarial personalizado (nome@suaempresa.com)
                    </span>
                  </div>
                  <div className="flex gap-1 items-center ">
                    <span className="text-[#4f0077] ">
                      <CircleCheck size={11} />
                    </span>
                    <span>
                      Incluso Copilot Chat e possíveis novas contratações de
                      Copilot como complemento após compra
                    </span>
                  </div>
                  <div className="flex gap-1 items-center ">
                    <span className="text-[#4f0077] ">
                      <CircleCheck size={11} />
                    </span>
                    <span>
                      Mais de 10 aplicativos adicionais para suas necessidades
                      de negócios (incluindo Bookings, Planner e Forms)
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
