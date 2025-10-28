export default function Benefits() {
  const hasOffice = sessionStorage.getItem("alreadyHaveMicrosoftDomain");

  return (
    <div
      id="beneficios"
      className="flex flex-col gap-4 text-gray-600 bg-[#f7f7f7] items-start justify-center w-full  px-6 md:px-24 lg:px-32  "
    >
      <div className="">
        <h2 className="text-[24px] md:text-[32px] text-[#5f6368] text-start  ">
          Por que {hasOffice === "true" ? "migrar" : "contratar"} o Office 365
          pela Vivo?
        </h2>
      </div>

      <div className=" w-full">
        {/*  Mobile  */}
        <div className="flex flex-col gap-8 md:hidden">
          <div className="flex items-start gap-4 mr-10  ">
            <div className="flex-shrink-0">
              <div className="w-12 h-12">
                <img src="/vivo-cofre-porquinho.svg" />
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-gray-800 text-[16px] font-medium mb-2">
                Pagamento direto na fatura Vivo
              </h4>
              <p className="text-gray-600 text-[14px] leading-relaxed">
                Sem necessidade de cartão de crédito. Tudo centralizado na sua
                conta empresarial.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 mr-10 ">
            <div className="flex-shrink-0">
              <div className="w-12 h-12">
                <img src="/vivo-arquivos.svg" />
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-gray-800 text-[16px] font-medium mb-2">
                Fatura única e centralizada
              </h4>
              <p className="text-gray-600 text-[14px] leading-relaxed">
                Tenha mais controle e praticidade, reunindo todos os serviços da
                empresa em uma só fatura.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 mr-10">
            <div className="flex-shrink-0">
              <div className="w-12 h-12">
                <img src="/vivo-pessoas.svg" />
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-gray-800 text-[16px] font-medium mb-2">
                Ganhe +2GB de internet móvel
              </h4>
              <p className="text-gray-600 text-[14px] leading-relaxed">
                Para cada conta Office 365 migrada ou contratada, você recebe
                +2GB na sua linha Vivo Móvel.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 mr-10">
            <div className="flex-shrink-0">
              <div className="w-12 h-12">
                <img src="/vivo-mulher.svg" />
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-gray-800 text-[16px] font-medium mb-2">
                Suporte especializado
              </h4>
              <p className="text-gray-600 text-[14px] leading-relaxed">
                Conte com o atendimento corporativo da Vivo, com suporte técnico
                para ajudar sua empresa na ativação e gestão do Office 365.
              </p>
            </div>
          </div>

          {/* <div className="flex items-start gap-4 mr-10">
            <div className="flex-shrink-0">
              <div className="w-12 h-12">
                <img src="/vivo-computador.svg" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-gray-800 text-[16px] font-medium mb-2">
                Autogestão
              </h3>
              <p className="text-gray-600 text-[14px] leading-relaxed">
                Controle das licenças e faturas pela Plataforma Digital, de uma
                forma fácil e rápido.
              </p>
            </div>
          </div> */}
        </div>

        {/*  Desktop  */}
        <div className="hidden md:grid md:grid-cols-4 md:gap-6 md:py-8">
          <div className="flex flex-col items-start text-start">
            <div className="mb-6">
              <div className="w-20 h-20 flex items-center justify-center">
                <img
                  src="/vivo-cofre-porquinho.svg"
                  className="w-full h-full"
                />
              </div>
            </div>
            <h4 className="text-gray-800 md:text-[16px] lg:text-[18px] font-medium mb-3">
              Pagamento direto na fatura Vivo
            </h4>
            <p className="text-[#666666] md:text-[14px] lg:text-[16px] leading-relaxed">
              Sem necessidade de cartão de crédito. Tudo centralizado na sua
              conta empresarial.
            </p>
          </div>

          <div className="flex flex-col items-start text-start">
            <div className="mb-6">
              <div className="w-20 h-20 flex items-center justify-center">
                <img src="/vivo-arquivos.svg" className="w-full h-full" />
              </div>
            </div>
            <h4 className="text-gray-800 md:text-[16px] lg:text-[18px] font-medium mb-3">
              Fatura única e centralizada
            </h4>
            <p className="text-[#666666] md:text-[14px] lg:text-[16px] leading-relaxed">
              Tenha mais controle e praticidade, reunindo todos os serviços da
              empresa em uma só fatura.
            </p>
          </div>

          <div className="flex flex-col items-start text-start">
            <div className="mb-6">
              <div className="w-20 h-20 flex items-center justify-center">
                <img src="/vivo-pessoas.svg" className="w-full h-full" />
              </div>
            </div>
            <h4 className="text-gray-800 md:text-[16px] lg:text-[18px] font-medium mb-3">
              Ganhe +2GB de internet móvel
            </h4>
            <p className="text-[#666666] md:text-[14px] lg:text-[16px] leading-relaxed">
              Para cada conta Office 365 migrada ou contratada, você recebe +2GB
              na sua linha Vivo Móvel.
            </p>
          </div>

          <div className="flex flex-col items-start text-start">
            <div className="mb-6">
              <div className="w-20 h-20 flex items-center justify-center">
                <img src="/vivo-mulher.svg" className="w-full h-full" />
              </div>
            </div>
            <h4 className="text-gray-800 md:text-[16px] lg:text-[18px] font-medium mb-3">
              Suporte especializado
            </h4>
            <p className="text-[#666666] md:text-[14px] lg:text-[16px] leading-relaxed">
              Conte com o atendimento corporativo da Vivo, com suporte técnico
              para ajudar sua empresa na ativação e gestão do Office 365.
            </p>
          </div>

          {/* <div className="flex flex-col items-start text-start">
            <div className="mb-6">
              <div className="w-20 h-20 flex items-center justify-center">
                <img src="/vivo-computador.svg" className="w-full h-full" />
              </div>
            </div>
            <h3 className="text-gray-800 text-[18px] font-medium mb-3">
              Autogestão
            </h3>
            <p className="text-[#666666] md:text-[14px] lg:text-[16px] leading-relaxed">
              Controle das licenças e faturas pela Plataforma Digital, de uma
              forma fácil e rápido.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
