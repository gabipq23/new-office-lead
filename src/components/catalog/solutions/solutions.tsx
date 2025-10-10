export default function Solutions() {
  return (
    <div className="flex flex-col text-[#5f6368] bg-[#f7f7f7] px-6 md:px-24 lg:px-32 w-full py-16 justify-center items-center">
      <div className="w-full">
        <h2 className="text-[32px] font-normal text-gray-600 mb-8">
          Conheça mais soluções para sua empresa
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg border border-gray-200 p-8 flex flex-col h-full">
            <div className="mb-6">
              <span className="text-[12px] font-medium text-gray-500 uppercase tracking-wide">
                CLOUD
              </span>
              <h3 className="text-[20px] font-normal text-[#3c4043] mt-2 mb-4">
                As melhores tecnologias para aprimorar o seu negócio
              </h3>
            </div>

            <div className="flex-1 flex items-center justify-center mb-6">
              <div className="w-32 h-32"></div>
            </div>

            <div className="mt-auto">
              <a
                href="#"
                className="inline-flex items-center text-[#8b5cf6] font-medium hover:underline"
              >
                Saiba mais
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-8 flex flex-col h-full">
            <div className="mb-6">
              <span className="text-[12px] font-medium text-gray-500 uppercase tracking-wide">
                PME
              </span>
              <h3 className="text-[20px] font-normal text-[#3c4043] mt-2 mb-4">
                Conheça as ofertas para sua pequena ou média empresa.
              </h3>
            </div>

            <div className="flex-1 flex items-center justify-center mb-6">
              <div className="w-32 h-32">
                <img
                  src="/vivo-pme-card.png"
                  alt="PME Vivo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="mt-auto">
              <a
                href="#"
                className="inline-flex items-center text-[#8b5cf6] font-medium hover:underline"
              >
                Saiba mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
