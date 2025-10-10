export default function Benefits() {
  return (
    <div
      id="beneficios"
      className="flex flex-col gap-4 text-gray-600 bg-[#f7f7f7] items-start justify-center w-full  px-6 md:px-24 lg:px-32  "
    >
      <div className="">
        <h2 className="text-[24px] md:text-[32px] text-[#5f6368] text-start  ">
          Benefícios de usar o Microsoft 365
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
              <h3 className="text-gray-800 text-[16px] font-medium mb-2">
                Economia
              </h3>
              <p className="text-gray-600 text-[14px] leading-relaxed">
                Sem necessidade de grandes investimentos em infraestrutura de TI
                e com programas atualizados.
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
              <h3 className="text-gray-800 text-[16px] font-medium mb-2">
                Produtividade
              </h3>
              <p className="text-gray-600 text-[14px] leading-relaxed">
                Facilidade para toda equipe com o compartilhamento de arquivos
                em nuvem.
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
              <h3 className="text-gray-800 text-[16px] font-medium mb-2">
                Autonomia
              </h3>
              <p className="text-gray-600 text-[14px] leading-relaxed">
                Os usuários definem quem ou quais grupos têm acesso a arquivos e
                pastas.
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
              <h3 className="text-gray-800 text-[16px] font-medium mb-2">
                Suporte
              </h3>
              <p className="text-gray-600 text-[14px] leading-relaxed">
                Time de especialistas disponíveis para auxiliar nas instalações
                das ferramentas Pacote Office.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 mr-10">
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
          </div>
        </div>

        {/*  Desktop  */}
        <div className="hidden md:grid md:grid-cols-5 md:gap-6 md:py-8">
          <div className="flex flex-col items-start text-start">
            <div className="mb-6">
              <div className="w-20 h-20 flex items-center justify-center">
                <img
                  src="/vivo-cofre-porquinho.svg"
                  className="w-full h-full"
                />
              </div>
            </div>
            <h3 className="text-gray-800 text-[18px] font-medium mb-3">
              Economia
            </h3>
            <p className="text-[#666666] md:text-[14px] lg:text-[16px] leading-relaxed">
              Sem necessidade de grandes investimentos em infraestrutura de TI e
              com programas atualizados.
            </p>
          </div>

          <div className="flex flex-col items-start text-start">
            <div className="mb-6">
              <div className="w-20 h-20 flex items-center justify-center">
                <img src="/vivo-arquivos.svg" className="w-full h-full" />
              </div>
            </div>
            <h3 className="text-gray-800 text-[18px] font-medium mb-3">
              Produtividade
            </h3>
            <p className="text-[#666666] md:text-[14px] lg:text-[16px] leading-relaxed">
              Facilidade para toda equipe com o compartilhamento de arquivos em
              nuvem.
            </p>
          </div>

          <div className="flex flex-col items-start text-start">
            <div className="mb-6">
              <div className="w-20 h-20 flex items-center justify-center">
                <img src="/vivo-pessoas.svg" className="w-full h-full" />
              </div>
            </div>
            <h3 className="text-gray-800 text-[18px] font-medium mb-3">
              Autonomia
            </h3>
            <p className="text-[#666666] md:text-[14px] lg:text-[16px] leading-relaxed">
              Os usuários definem quem ou quais grupos têm acesso a arquivos e
              pastas.
            </p>
          </div>

          <div className="flex flex-col items-start text-start">
            <div className="mb-6">
              <div className="w-20 h-20 flex items-center justify-center">
                <img src="/vivo-mulher.svg" className="w-full h-full" />
              </div>
            </div>
            <h3 className="text-gray-800 text-[18px] font-medium mb-3">
              Suporte
            </h3>
            <p className="text-[#666666] md:text-[14px] lg:text-[16px] leading-relaxed">
              Time de especialistas disponíveis para auxiliar nas instalações
              das ferramentas Pacote Office.
            </p>
          </div>

          <div className="flex flex-col items-start text-start">
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
          </div>
        </div>
      </div>
    </div>
  );
}
