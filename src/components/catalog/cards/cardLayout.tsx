import { Button, ConfigProvider } from "antd";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CardLayout({ cardData }: { cardData: any }) {
  const navigate = useNavigate();
  const isVivoClient = sessionStorage.getItem("isVivoClient");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleDetails = (cardType: string) => {
    setExpandedCard(expandedCard === cardType ? null : cardType);
  };

  return (
    <>
      <div className="flex flex-col w-full items-center relative">
        {cardData.badge && (
          <div
            className={`${cardData.badgeStyle} absolute rounded-tl-sm rounded-r-sm self-start -top-2 z-10`}
          >
            {cardData.badge}
          </div>
        )}
        <div className="flex w-full max-w-[260px] flex-col border border-gray-300 rounded-sm bg-white shadow-sm">
          <div className=" flex flex-col gap-2">
            <div className="text-start pt-6 px-4">
              <p style={{ margin: 0 }} className=" text-[14px] ">
                {cardData.subtitle}
              </p>
              <h3 className="text-[28px]  ">{cardData.title}</h3>
            </div>

            {/* <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#660099",
                },
              }}
            >
              <div className="px-4  flex text-start flex-col gap-2">
                <Radio.Group
                  value={selectedClientType}
                  onChange={(e) => setSelectedClientType(e.target.value)}
                  className="flex flex-col gap-2"
                >
                  <div className="flex items-start">
                    <Radio
                      value="cliente"
                      style={{
                        color: "#660099",
                      }}
                    />
                    <div className="flex flex-col">
                      <p
                        style={{ margin: 0 }}
                        className="text-gray-700  text-[12px] "
                      >
                        {cardData.clientType}
                      </p>
                      <p className="text-gray-600 text-[10px]">
                        {cardData.storage}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center text-start ">
                    <Radio
                      value="nao-cliente"
                      style={{
                        color: "#660099",
                      }}
                    />
                    <p
                      style={{ margin: 0 }}
                      className="text-gray-700  text-[12px] "
                    >
                      {cardData.nonClientType}
                    </p>
                  </div>
                </Radio.Group>
              </div>
            </ConfigProvider> */}

            <div className="mx-4 mb-3 flex flex-col items-start bg-[#f0f0f0] p-3 px-2 text-start rounded text-[14px]">
              <p style={{ margin: 0 }} className=" text-[11px] ">
                {cardData.appVersions}
              </p>

              <div className="flex items-center gap-2 ">
                <p style={{ margin: 0 }} className=" text-[11px]">
                  dos apps
                </p>
                <img src="/word.svg" className="w-4 h-6" alt="Word" />
                <img src="/excel.svg" className="w-4 h-6" alt="Excel" />
                <img
                  src="/power-point.svg"
                  className="w-4 h-6"
                  alt="PowerPoint"
                />
                <img src="/outlook.svg" className="w-4 h-6" alt="Outlook" />
              </div>
            </div>

            <div className="flex flex-col items-start gap-1 mx-4">
              <p style={{ margin: 0 }} className=" text-[20px] text-gray-900">
                R${" "}
                {isVivoClient === "true"
                  ? cardData.priceClient
                  : cardData.priceNonClient}{" "}
                <span className="text-[20px] text-gray-600">/mês</span>
              </p>
              <p className="text-[10px] text-gray-600">por usuário</p>
            </div>

            <Button
              className="self-center"
              style={{ width: "160px", height: "50px" }}
              variant="solid"
              size="large"
              color="magenta"
              onClick={() => (navigate("/choose-plan"), window.scrollTo(0, 0))}
            >
              CONTRATAR
            </Button>
            <ConfigProvider
              theme={{
                token: {
                  colorBgTextHover: "none",
                  colorBgTextActive: "none",
                  colorText: "#666666",
                  fontSize: 10,
                },
              }}
            >
              <Button
                type="text"
                size="small"
                className=" cursor-pointer "
                onClick={() => toggleDetails(cardData.id)}
              >
                {expandedCard === cardData.id ? (
                  <>
                    Menos Detalhes <ChevronUp className="inline w-3 h-3" />
                  </>
                ) : (
                  <>
                    Mais Detalhes <ChevronDown className="inline w-3 h-3" />
                  </>
                )}
              </Button>
            </ConfigProvider>

            {expandedCard === cardData.id && (
              <div className=" p-4 text-start bg-[#f0f0f0]  rounded-sm border-t">
                <div className="flex items-start flex-col gap-3 text-sm text-gray-700">
                  {cardData.details.map(
                    (
                      detail: { title: string; subtitle?: string },
                      index: number
                    ) => (
                      <div key={index}>
                        <p style={{ margin: 0 }} className="font-medium  mb-1">
                          {detail.title}
                        </p>
                        {detail.subtitle && (
                          <p
                            style={{ margin: 0 }}
                            className="text-gray-500 text-xs"
                          >
                            {detail.subtitle}
                          </p>
                        )}
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
