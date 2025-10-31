import { useState, useEffect } from "react";
import { Button, Input, ConfigProvider, Tooltip } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { Check, CircleAlert } from "lucide-react";
import { useOrderStore } from "../../../context/context";
import { useOrderControler } from "../../../controller/controller";
import OrderResumeMobile from "../components/orderResumeMobile";
import OrderResumeDesktop from "../components/orderResumeDesktop";

export default function CompanyInfo() {
  const { companyInfo, updateCompanyInfo, confirmedPlans, clearOrder } =
    useOrderStore();

  const [domainName, setDomainName] = useState(companyInfo.domainName || "");
  const [hasOffice, sethasOffice] = useState(
    companyInfo.alreadyHaveMicrosoftDomain || false
  );

  const acceptTerms = companyInfo.acceptTerms || true;

  const [showServices, setShowServices] = useState(false);
  const [hasTriedSubmit, setHasTriedSubmit] = useState(false);

  useEffect(() => {
    const savedOfficeValue = sessionStorage.getItem(
      "alreadyHaveMicrosoftDomain"
    );
    if (savedOfficeValue !== null) {
      const boolValue = savedOfficeValue === "true";
      sethasOffice(boolValue);
    }
  }, []);

  const getTotalPrice = () => {
    const confirmedPlansTotal = confirmedPlans.reduce((total, plan) => {
      const numericPrice = parseFloat(plan.price.replace(",", "."));
      return total + numericPrice * plan.users;
    }, 0);
    return confirmedPlansTotal.toFixed(2).replace(".", ",");
  };

  const getTotalUsers = () => {
    return confirmedPlans.reduce((total, plan) => total + plan.users, 0);
  };

  const { orderId } = useParams<{ orderId: string }>();
  const { updateOrder, isUpdateOrderFetching, changeOrderStatus } =
    useOrderControler();

  const navigate = useNavigate();

  const isFormValid = () => {
    const hasAcceptedTerms = acceptTerms === true;
    const hasDomainName = domainName.trim() !== "";

    return hasAcceptedTerms && hasDomainName;
  };

  const handleSubmit = async () => {
    setHasTriedSubmit(true);
    if (!isFormValid()) {
      return;
    }

    updateCompanyInfo({
      domainName: domainName,
      alreadyHaveMicrosoftDomain: hasOffice,
      acceptTerms: acceptTerms,
    });

    const updateData = {
      pedido: {
        domainName: domainName,
        alreadyHaveMicrosoftDomain: hasOffice,
        acceptTerms: acceptTerms,
      },
    };

    try {
      await updateOrder({
        id: Number(orderId),
        data: updateData,
      });

      changeOrderStatus({
        id: Number(orderId),
        data: { status: "fechado" },
      });

      clearOrder();
      sessionStorage.setItem("orderStatus", "fechado");

      navigate(`/order/${orderId}`);
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("Erro ao atualizar pedido:", error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-[100vh] ">
      {/* mobile */}
      <div className="md:hidden flex ">
        <OrderResumeMobile
          confirmedPlans={confirmedPlans}
          getTotalUsers={getTotalUsers}
          getTotalPrice={getTotalPrice}
          setShowServices={setShowServices}
          showServices={showServices}
        />
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

          <>
            <div className="">
              <label className="flex items-center gap-1  text-[14px] text-gray-600 mb-2">
                Qual é o nome do domínio da sua empresa?{" "}
                <span className="text-red-500">*</span>
              </label>
              <div className="flex items-start mb-4 gap-2 ">
                <p className="text-[11px]" style={{ margin: 0 }}>
                  Você usará para configurar endereços de e-mail, como
                  info@example.com
                </p>
                <Tooltip title="Um domínio é o que aparece depois de 'www'. Você o usuará para configurar endereços de e-mail, como info@example.com. Ajudaremos você a confirmar que o domínio pertence à empresa mais tarde.">
                  <span className="text-gray-500 cursor-pointer">
                    <CircleAlert size={14} />
                  </span>
                </Tooltip>
              </div>

              <Input
                value={domainName}
                onChange={(e) => setDomainName(e.target.value)}
                size="middle"
                placeholder="dominio@gmail.com"
                className="max-w-[300px]"
              />
              {hasTriedSubmit && domainName.trim() === "" && (
                <p className="text-red-500 text-xs mt-1">Campo obrigatório</p>
              )}
            </div>
          </>

          {/* <div className="mb-8 mt-4">
            <div className="mb-8">
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: "#f97316",
                  },
                }}
              >
                <Checkbox
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="text-gray-600"
                >
                  <span className="text-red-500">*</span> Aceito e concordo com
                  os termos e contratos.
                </Checkbox>
              </ConfigProvider>
              {hasTriedSubmit && !acceptTerms && (
                <p className="text-red-500 text-xs mt-1">
                  Você deve aceitar os termos para continuar
                </p>
              )}
            </div>
          </div> */}
        </div>

        <div className="fixed bottom-0 left-0 right-0 md:right-86 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
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
                loading={isUpdateOrderFetching}
                disabled={isUpdateOrderFetching}
                className=" self-end"
              >
                {isUpdateOrderFetching ? "Finalizando..." : "Concluir pedido"}
              </Button>
            </ConfigProvider>
          </div>
        </div>
      </div>

      {/* desktop */}
      <div className="hidden md:flex">
        <OrderResumeDesktop
          confirmedPlans={confirmedPlans}
          getTotalPrice={getTotalPrice}
        />
      </div>
    </div>
  );
}
