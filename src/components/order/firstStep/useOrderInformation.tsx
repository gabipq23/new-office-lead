import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Plan } from "../../../interfaces/order";
import { useOrderControler } from "../../../controller/controller";
import { useOrderStore } from "../../../context/context";

interface BasicInfo {
  cnpj: string;
  email: string;
  manager_name: string;
  managerPhone: string;
  isVivoClient: boolean;
  acceptContact: boolean;
}

interface PlanInput {
  planName: string;
  price: string;
  users: number;
  type: string;
}

const PRICE_MAP = {
  Starter: { mensal: "49,00", anual: "32,72" },
  Standard: { mensal: "98,00", anual: "81,80" },
  Negocios: { mensal: "154,00", anual: "128,40" },
};

export function useOrderInformation(
  basicInfo: BasicInfo,
  updateBasicInfo: (info: Partial<BasicInfo>) => void
) {
  const navigate = useNavigate();
  const { createOrder, isCreatingOrderLoading, changeOrderStatus } =
    useOrderControler();
  const {
    confirmedPlans,
    addCurrentPlanToConfirmed,
    addNewPlanToConfirmed,
    removePlanFromConfirmed,
  } = useOrderStore();

  const [currentPlanInput, setCurrentPlanInput] = useState<PlanInput>({
    planName: "",
    price: "",
    users: 1,
    type: "",
  });

  const [newPlanInput, setNewPlanInput] = useState<PlanInput>({
    planName: "",
    price: "",
    users: 1,
    type: "",
  });

  const [cnpj, setCnpj] = useState(basicInfo.cnpj);
  const [email, setEmail] = useState(basicInfo.email);
  const [managerName, setManagerName] = useState(basicInfo.manager_name);
  const [managerPhone, setManagerPhone] = useState(basicInfo.managerPhone);
  const [acceptContact, setAcceptContact] = useState(basicInfo.acceptContact);
  const [hasTriedSubmit, setHasTriedSubmit] = useState(false);

  const hasOffice =
    sessionStorage.getItem("alreadyHaveMicrosoftDomain") === "true";
  const isVivoClient = sessionStorage.getItem("isVivoClient") === "true";

  const isFormValid = () => {
    const hasAtLeastOnePlan = confirmedPlans.length > 0;
    const cnpjDigits = cnpj.replace(/\D/g, "");
    const hasValidCnpj = cnpjDigits.length === 14;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const hasValidEmail = emailRegex.test(email);
    const hasValidManagerName = managerName.trim() !== "";
    const hasValidManagerPhone = managerPhone.replace(/\D/g, "").length === 11;
    const hasAcceptedContact = acceptContact === true;

    return (
      hasAtLeastOnePlan &&
      hasValidCnpj &&
      hasValidEmail &&
      hasValidManagerName &&
      hasValidManagerPhone &&
      hasAcceptedContact
    );
  };

  const updateCurrentPlanInput = (field: string, value: string | number) => {
    setCurrentPlanInput((prev) => ({ ...prev, [field]: value }));
  };

  const handleCurrentPlanNameChange = (value: string) => {
    updateCurrentPlanInput("planName", value);
    updateCurrentPlanInput("type", "anual");
    updateCurrentPlanInput(
      "price",
      PRICE_MAP[value as keyof typeof PRICE_MAP].anual
    );
  };

  const handleCurrentTypeChange = (value: string) => {
    updateCurrentPlanInput("type", value);
    if (currentPlanInput.planName) {
      const price =
        value === "anual"
          ? PRICE_MAP[currentPlanInput.planName as keyof typeof PRICE_MAP].anual
          : PRICE_MAP[currentPlanInput.planName as keyof typeof PRICE_MAP][
              value as "mensal" | "anual"
            ];
      updateCurrentPlanInput("price", price);
    }
  };

  const handleCurrentUserIncrease = () => {
    setCurrentPlanInput((prev) => ({ ...prev, users: prev.users + 1 }));
  };

  const handleCurrentUserDecrease = () => {
    if (currentPlanInput.users > 1) {
      setCurrentPlanInput((prev) => ({ ...prev, users: prev.users - 1 }));
    }
  };

  const addCurrentPlan = () => {
    if (
      currentPlanInput.planName &&
      currentPlanInput.price &&
      currentPlanInput.type
    ) {
      const newPlan: Plan = {
        id: Date.now().toString(),
        planName: currentPlanInput.planName,
        price: currentPlanInput.price,
        users: currentPlanInput.users,
        type: currentPlanInput.type as "mensal" | "anual",
        newPlan: false,
      };
      addCurrentPlanToConfirmed(newPlan);
      setCurrentPlanInput({ planName: "", price: "", users: 1, type: "" });
    }
  };

  const updateNewPlanInput = (field: string, value: string | number) => {
    setNewPlanInput((prev) => ({ ...prev, [field]: value }));
  };

  const handleNewPlanNameChange = (value: string) => {
    updateNewPlanInput("planName", value);
    updateNewPlanInput("type", "anual");
    updateNewPlanInput(
      "price",
      PRICE_MAP[value as keyof typeof PRICE_MAP].anual
    );
  };

  const handleNewTypeChange = (value: string) => {
    updateNewPlanInput("type", value);
    if (newPlanInput.planName) {
      const price =
        value === "anual"
          ? PRICE_MAP[newPlanInput.planName as keyof typeof PRICE_MAP].anual
          : PRICE_MAP[newPlanInput.planName as keyof typeof PRICE_MAP][
              value as "mensal" | "anual"
            ];
      updateNewPlanInput("price", price);
    }
  };

  const handleNewUserIncrease = () => {
    setNewPlanInput((prev) => ({ ...prev, users: prev.users + 1 }));
  };

  const handleNewUserDecrease = () => {
    if (newPlanInput.users > 1) {
      setNewPlanInput((prev) => ({ ...prev, users: prev.users - 1 }));
    }
  };

  const addNewPlan = () => {
    if (newPlanInput.planName && newPlanInput.price && newPlanInput.type) {
      const newPlan: Plan = {
        id: Date.now().toString(),
        planName: newPlanInput.planName,
        price: newPlanInput.price,
        users: newPlanInput.users,
        type: newPlanInput.type as "mensal" | "anual",
        newPlan: true,
      };
      addNewPlanToConfirmed(newPlan);
      setNewPlanInput({ planName: "", price: "", users: 1, type: "" });
    }
  };

  const removePlan = (planId: string) => {
    removePlanFromConfirmed(planId);
  };

  const handleSubmit = async () => {
    setHasTriedSubmit(true);
    if (!isFormValid()) {
      return;
    }

    updateBasicInfo({
      cnpj,
      email,
      manager_name: managerName,
      managerPhone,
      isVivoClient,
      acceptContact,
    });

    const orderData = {
      pedido: {
        email,
        cnpj: cnpj.replace(/\D/g, ""),
        manager_name: managerName,
        managerPhone: managerPhone.replace(/\D/g, ""),
        isVivoClient,
        acceptContact,
        alreadyHaveMicrosoftDomain: hasOffice,
        domainName: "",
        acceptTerms: hasOffice,
        status: "aberto",
      },
      itens: confirmedPlans.map((plan) => ({
        planName: plan.planName,
        price: plan.price,
        type: plan.type,
        users: plan.users,
        newPlan: plan.newPlan || false,
      })),
    };

    try {
      const response = await createOrder({ data: orderData });

      if (hasOffice) {
        await changeOrderStatus({
          id: Number(response.pedido.id),
          data: { status: "fechado" },
        });
        navigate(`/order/${response.pedido.id}`);
      } else {
        navigate(`/client-information/${response.pedido.id}`);
      }

      window.scrollTo(0, 0);
    } catch (error) {
      console.error("Erro ao processar pedido:", error);
    }
  };

  return {
    currentPlanInput,
    newPlanInput,
    cnpj,
    email,
    managerName,
    managerPhone,
    acceptContact,
    hasTriedSubmit,
    confirmedPlans,
    isCreatingOrderLoading,
    hasOffice,
    setCnpj,
    setEmail,
    setManagerName,
    setManagerPhone,
    setAcceptContact,
    handleCurrentPlanNameChange,
    handleCurrentTypeChange,
    handleCurrentUserIncrease,
    handleCurrentUserDecrease,
    addCurrentPlan,
    updateCurrentPlanInput,
    handleNewPlanNameChange,
    handleNewTypeChange,
    handleNewUserIncrease,
    handleNewUserDecrease,
    addNewPlan,
    updateNewPlanInput,
    removePlan,
    handleSubmit,
  };
}
