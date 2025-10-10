import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";

const onChange = (key: string) => {
  console.log(key);
};

export default function OfficeApps() {
  const EssenciaisContent = () => (
    <div className="flex flex-col gap-8">
      <p style={{ margin: 0 }} className=" text-gray-700 text-[16px]">
        Programas fundamentais para os melhores resultados
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Word */}
        <div className="flex  gap-4 md:gap-0  md:flex-col items-start">
          <div className="mb-4">
            <img src="/word.svg" alt="Word" className="w-16 h-16" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Word</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Crie documentos, formate textos e verifique erros de ortografia.
            </p>
          </div>
        </div>

        {/* Excel */}
        <div className="flex  gap-4 md:gap-0  md:flex-col items-start">
          <div className="mb-4">
            <img src="/excel.svg" alt="Excel" className="w-16 h-16" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Excel</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Monte tabelas e faça cálculos, gráficos, análises e orçamentos.
            </p>
          </div>
        </div>

        {/* PowerPoint */}
        <div className="flex  gap-4 md:gap-0  md:flex-col items-start">
          <div className="mb-4">
            <img
              src="/power-point.svg"
              alt="PowerPoint"
              className="w-16 h-16"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              PowerPoint
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Faça apresentações multimídia.
            </p>
          </div>
        </div>

        {/* Outlook */}
        <div className="flex  gap-4 md:gap-0  md:flex-col items-start">
          <div className="mb-4">
            <img src="/outlook.svg" alt="Outlook" className="w-16 h-16" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Outlook</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Gerencie contas de e-mail, contatos, listas e calendários.
            </p>
          </div>
        </div>

        {/* Teams */}
        <div className="flex gap-4 md:gap-0 md:flex-col items-start">
          <div className="mb-4">
            <img src="/teams.svg" alt="Teams" className="w-16 h-16" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Teams</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Acesse um espaço de trabalho personalizado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const CompartilharContent = () => (
    <div className="flex flex-col gap-8">
      <p style={{ margin: 0 }} className=" text-gray-700 text-[16px]">
        Envie seus dados com segurança
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* OneDrive */}
        <div className="flex  gap-4 md:gap-0  md:flex-col items-start">
          <div className="mb-4">
            <img src="/onedrive.svg" alt="OneDrive" className="w-16 h-16" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">OneDrive</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              salve, acesse e compartilhe documentos em qualquer lugar.
            </p>
          </div>
        </div>

        {/* SharePoint */}
        <div className="flex  gap-4 md:gap-0  md:flex-col items-start">
          <div className="mb-4">
            <img src="/sharepoint.svg" alt="SharePoint" className="w-16 h-16" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              SharePoint
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              acesse e envie arquivos quando quiser.
            </p>
          </div>
        </div>

        {/* Sway */}
        <div className="flex  gap-4 md:gap-0  md:flex-col items-start">
          <div className="mb-4">
            <img src="/sway.svg" alt="Sway" className="w-16 h-16" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Sway</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              crie e compartilhe relatórios interativos, apresentações e mais.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const GerenciarContent = () => (
    <div className="flex flex-col gap-8">
      <p style={{ margin: 0 }} className=" text-gray-700 text-[16px]">
        Encontre ajuda para administrar o seu negócio
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* OneNote */}
        <div className="flex  gap-4 md:gap-0  md:flex-col items-start">
          <div className="mb-4">
            <img src="/onenote.png" alt="OneNote" className="w-16 h-16" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">OneNote</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              escreva, edite e compartilhe blocos de notas.
            </p>
          </div>
        </div>

        {/* Access */}
        <div className="flex  gap-4 md:gap-0  md:flex-col items-start">
          <div className="mb-4">
            <img src="/access.svg" alt="Access" className="w-16 h-16" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Access</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              construa um banco de dados fácil de usar.
            </p>
          </div>
        </div>

        {/* Bookings */}
        <div className="flex  gap-4 md:gap-0  md:flex-col items-start">
          <div className="mb-4">
            <img src="/bookings.png" alt="Bookings" className="w-16 h-16" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Bookings</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              faça agendamentos online para a sua empresa.
            </p>
          </div>
        </div>

        {/* Planner */}
        <div className="flex  gap-4 md:gap-0  md:flex-col items-start">
          <div className="mb-4">
            <img src="/planner.png" alt="Planner" className="w-16 h-16" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Planner</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              gerencie o trabalho da sua equipe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const items: TabsProps["items"] = [
    {
      key: "essenciais",
      label: "Essenciais",
      children: <EssenciaisContent />,
    },
    {
      key: "compartilhar",
      label: "Compartilhar",
      children: <CompartilharContent />,
    },
    {
      key: "gerenciar",
      label: "Gerenciar",
      children: <GerenciarContent />,
    },
  ];

  return (
    <div
      id="apps"
      className="flex flex-col gap-4 text-gray-600 bg-[#f7f7f7] items-start justify-center w-full pt-8 pb-16 px-6 md:px-24 lg:px-32"
    >
      <div className=" w-full ">
        <h2 className="text-[24px] md:text-[32px]  text-[#5f6368] text-start">
          Microsoft 365: aumente a produtividade com os apps
        </h2>
        <div className="flex flex-col gap-2">
          <p
            style={{ margin: 0 }}
            className="text-[12px] md:text-[14px]  text-gray-500"
          >
            Tenha acesso a todos os recursos do pacote office que você já
            conhece, além de outras ferramentas e aplicativos corporativos que
            vão ajudar a sua empresa aumentar a produtividade.
          </p>

          <p
            style={{ margin: 0 }}
            className="text-[12px] md:text-[14px]  text-gray-500"
          >
            E-mail profissional com o Outlook, armazenamento na nuvem com espaço
            de 1TB de armazenamento com o One Drive, web conferências com o
            Microsoft Teams e gestão de arquivos com Word, Excel e PowerPoint.
          </p>
        </div>
      </div>

      <div className=" w-full">
        <Tabs
          defaultActiveKey="essenciais"
          items={items}
          onChange={onChange}
          style={
            {
              "--ant-color-primary": "#7c3aed",
            } as React.CSSProperties
          }
        />
      </div>
    </div>
  );
}
