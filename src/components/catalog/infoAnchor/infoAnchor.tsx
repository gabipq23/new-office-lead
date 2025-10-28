export default function InfoAnchor() {
  const hasOffice = sessionStorage.getItem("alreadyHaveMicrosoftDomain");
  return (
    <div
      id="porque-escolher"
      className="flex flex-col gap-4 text-gray-600 bg-[#f7f7f7] items-start justify-center w-full py-16 px-6 md:px-24 lg:px-32  lg:pr-0 "
    >
      {hasOffice === "true" && (
        <>
          {" "}
          <div className=" ">
            <h2 className="text-[24px] md:text-[32px] text-[#5f6368] text-start  ">
              Veja como é fácil migrar o pagamento da sua conta Office 365 para
              a Vivo Empresas.
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center ">
            <div className="lg:hidden  mb-6">
              <img
                src="/vivo-empresas-google-workspace-solucoes.png"
                className="w-full "
              />
            </div>

            <div className=" lg:flex-1 lg:pr-8">
              <div className="flex flex-col gap-2 py-4 text-start">
                <div>
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <h4 className="text-[16px] font-medium text-gray-800">
                      1. Insira os dados da sua empresa e conta Office 365
                    </h4>
                  </div>
                  <p className="text-gray-600 text-[14px] ml-5">
                    Preencha as informações da sua empresa e da conta Office 365
                    que será migrada.
                  </p>
                </div>

                <div>
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <h4 className="text-[16px] font-medium text-gray-800">
                      2. Aceite o termo eletrônico enviado pela Vivo
                    </h4>
                  </div>
                  <p className="text-gray-600 text-[14px] ml-5">
                    Após preencher os dados, você receberá um aceite eletrônico
                    para confirmar a migração.
                  </p>
                </div>

                <div>
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <h4 className="text-[16px] font-medium text-gray-800">
                      3. Receba as instruções de migração
                    </h4>
                  </div>
                  <p className="text-gray-600 text-[14px] ml-5">
                    Com o aceite aprovado, enviaremos as instruções de ativação
                    da nova forma de pagamento.
                  </p>
                </div>

                <div>
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <h4 className="text-[16px] font-medium text-gray-800">
                      4. Pronto! Em poucos minutos sua conta estará migrada
                    </h4>
                  </div>
                  <p className="text-gray-600 text-[14px] ml-5">
                    Todo o processo é digital, rápido e sem burocracia — leva
                    menos de 2 minutos.
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block lg:flex-1 ">
              <img
                src="/vivo-empresas-google-workspace-solucoes.png"
                className="w-full h-full"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
