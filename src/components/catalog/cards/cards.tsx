import { useState, useRef, useEffect } from "react";
import CardLayout from "./cardLayout";

export default function Cards() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
                  <CardLayout cardData={cardData} />
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
              <CardLayout key={cardData.id} cardData={cardData} />
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
