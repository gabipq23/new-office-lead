import { useState } from "react";
import { useOrderStore } from "../../../context/context";
import OrderResumeMobile from "../components/orderResumeMobile";
import OrderResumeDesktop from "../components/orderResumeDesktop";
import OrderInformation from "./orderInformation";
// import Header from "../../header/header";
// import { Button } from "antd";

export default function FirstStep() {
  const { basicInfo, updateBasicInfo, confirmedPlans } = useOrderStore();
  const [showServices, setShowServices] = useState(false);
  // const isOrderOpen = sessionStorage.getItem("orderStatus");
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

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-[100vh]  ">
        {/* {isOrderOpen === "fechado" ? (
          <div className="flex flex-col h-full w-full">
            <Header />
            <div className="w-full flex flex-col items-center justify-center">
              <div className="bg-purple-100 border border-purple-200 rounded-lg p-4 mt-24  text-center">
                {" "}
                <p>
                  <strong>O seu pedido já foi criado.</strong>
                  <br />
                  Retorne para a tela de{" "}
                  <Button
                    onClick={() =>
                      (window.location.href = `/order/${sessionStorage.getItem(
                        "orderId"
                      )}`)
                    }
                    variant="link"
                    type="link"
                  >
                    resumo do pedido
                  </Button>
                  <br />
                  Ou, caso queira abrir um novo pedido,
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 px-3 py-1 bg-orange-500 text-white rounded"
                  >
                    Clique aqui
                  </a>
                </p>
              </div>
            </div>
          </div>
        ) : ( */}
        <>
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

          <div className="flex flex-col flex-1 px-2 pt-4  justify-between bg-[#f7f7f7] h-[calc(100vh-60px)] overflow-y-auto scrollbar-thin ">
            <OrderInformation
              basicInfo={basicInfo}
              updateBasicInfo={updateBasicInfo}
            />
          </div>

          {/* desktop */}
          <div className="hidden md:flex">
            <OrderResumeDesktop
              confirmedPlans={confirmedPlans}
              getTotalPrice={getTotalPrice}
            />
          </div>
        </>
        {/* )} */}
      </div>
    </>
  );
}
