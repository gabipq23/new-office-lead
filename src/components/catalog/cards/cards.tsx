import { Button, ConfigProvider, Radio } from "antd";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Cards() {
  const navigate = useNavigate();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const toggleDetails = (cardType: string) => {
    setExpandedCard(expandedCard === cardType ? null : cardType);
  };

  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = 280;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setCurrentSlide(index);
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 280;
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const newSlide = Math.round(scrollLeft / cardWidth);
      setCurrentSlide(newSlide);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const cardsData = [
    {
      id: "basic",
      badge: "PEQUENAS E MÉDIAS EMPRESAS",
      badgeStyle:
        "bg-[#660099] text-white px-4 py-1 text-[10px] font-medium text-center",
      subtitle: "Business",
      title: "Basic",
      storage: "Ganhe +2GB na sua linha móvel",
      priceClient: "31,23",
      priceNonClient: "35,00",
      clientType: "Sou cliente Vivo Móvel",
      nonClientType: "Não sou cliente Vivo Móvel",
      appVersions: "Versões web e celular",
      details: [
        {
          title: "Gerenciamento de colaboradores",
          subtitle:
            "Gerenciamento de usuário, identidade e acesso para até 300 colaboradores",
        },
        {
          title: "E-mail empresarial personalizado (nome@suaempresa.com)",
        },
        {
          title: "Microsoft Teams",
          subtitle: "Chat, chamadas e conferências de vídeo",
        },
        {
          title: "Armazenamento na nuvem",
          subtitle: "1 TB de armazenamento na nuvem por usuário",
        },
        {
          title: "Filtragem automática de malware e spam",
        },
        {
          title: "Aplicativos adicionais",
          subtitle: "Microsoft Bookings, Planner, Forms e outros",
        },
        {
          title: "Suporte ilimitado",
          subtitle: "Tenha suporte por telefone ou pela Web a qualquer momento",
        },
        {
          title: "Microsoft 365 Copilot",
          subtitle: "Recurso disponível como complemento com valor extra¹",
        },
      ],
    },
    {
      id: "standard",
      badge: "PEQUENAS E MÉDIAS EMPRESAS",
      badgeStyle:
        "bg-[#660099] text-white px-4 py-1 text-[10px] font-medium text-center",
      subtitle: "Business",
      title: "Standard",
      storage: "Ganhe +2GB na sua linha móvel",
      priceClient: "80,90",
      priceNonClient: "85,00",
      clientType: "Sou cliente Vivo Móvel",
      nonClientType: "Não sou cliente Vivo Móvel",
      appVersions: "Versões web, celular e desktop",
      details: [
        {
          title: "Tenha tudo do plano Basic além de:",
        },
        {
          title: "Webinars com relatório",
          subtitle:
            "Organize webinars com relatório e registro de participantes",
        },
        {
          title: "Microsoft Loop",
          subtitle: "Espaços de trabalho colaborativos para criar em equipe",
        },
        {
          title: "Microsoft Clipchamp",
          subtitle: "Ferramentas de design e edição de vídeos",
        },
        {
          title: "Microsoft 365 Copilot",
          subtitle: "Recurso disponível como complemento com valor extra¹",
        },
      ],
    },
    {
      id: "negocios",
      badge: "PEQUENAS E MÉDIAS EMPRESAS",
      badgeStyle:
        "bg-[#660099] text-white px-4 py-1 text-[10px] font-medium text-center",
      subtitle: "Apps Negócios para PME",
      title: "Negócios",
      storage: "Ganhe +2GB na sua linha móvel",
      priceClient: "73,00",
      priceNonClient: "88,00",
      clientType: "Sou cliente Vivo Móvel",
      nonClientType: "Não sou cliente Vivo Móvel",
      appVersions: "Versões web, celular e desktop",
      details: [
        {
          title: "Armazenamento na nuvem",
          subtitle: "1 TB de armazenamento na nuvem por usuário",
        },
        {
          title: "Suporte limitado",
          subtitle: "Tenha suporte por telefone ou pela web a qualquer momento",
        },
        {
          title: "Microsoft 365 Copilot",
          subtitle: "Recurso disponível como complemento¹",
        },
      ],
    },
  ];

  const Card = ({ cardData }: { cardData: (typeof cardsData)[0] }) => {
    const [selectedClientType, setSelectedClientType] =
      useState<string>("cliente");

    return (
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

            <ConfigProvider
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
            </ConfigProvider>

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
                {selectedClientType === "cliente"
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
              Assinar plano
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
                  {cardData.details.map((detail, index) => (
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
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        id="ofertas"
        className="flex flex-col text-[#5f6368] bg-[#f7f7f7] items-start justify-around text-center px-6  md:px-24 lg:px-32   pt-16  w-full "
      >
        <h2
          style={{ margin: 0 }}
          className="text-[26px] md:text-[32px] text-[#5f6368] text-start "
        >
          Microsoft 365: conheça as ofertas disponíveis
        </h2>
        <p
          className="text-[14px] text-start"
          style={{ margin: 0, paddingBlock: "8px" }}
        >
          Escolha o pacote de assinatura da Microsoft 365 ideal para os
          objetivos e desafios da sua empresa:
        </p>
        <div className="w-full items-start justify-start flex lg:gap-8 ">
          {/* MOBILE  */}
          <div className="flex lg:hidden w-full flex-col ">
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto gap-6 px-6 py-6 w-full scrollbar-none"
              style={{
                scrollSnapType: "x mandatory",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {cardsData.map((cardData) => (
                <div
                  key={cardData.id}
                  className="flex-shrink-0 w-[260px] "
                  style={{ scrollSnapAlign: "center" }}
                >
                  <Card cardData={cardData} />
                </div>
              ))}
            </div>

            <div className="flex gap-2 mt-4">
              {cardsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "bg-purple-600 w-6" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* DESKTOP */}
          <div className="hidden lg:flex py-8 gap-4">
            {cardsData.map((cardData) => (
              <Card key={cardData.id} cardData={cardData} />
            ))}
          </div>
        </div>

        <div className="flex  items-start  justify-start text-start">
          <p style={{ margin: 0 }} className="text-[10px] text-[#5f6368] ">
            ¹A contratação do assistente de IA da Microsoft está disponível para
            contratação com valor adicional ao oferecido no pacote. Conferir os
            mercados e idiomas disponíveis.
          </p>
        </div>
      </div>
    </>
  );
}
