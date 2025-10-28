import { Collapse } from "antd";
import type { CollapseProps } from "antd";
import { useState } from "react";

export default function FAQ() {
  const [activeKeys, setActiveKeys] = useState<string[]>([]);

  const faqItems: CollapseProps["items"] = [
    {
      key: "1",
      label: (
        <span className="text-[16px] font-medium text-[#3c4043]">
          O que é o Microsoft 365?
        </span>
      ),
      children: (
        <div className="text-[14px] text-[#5f6368] leading-6">
          <p>
            O Microsoft 365 é uma solução de produtividade em nuvem que combina
            os aplicativos do Office que você conhece e ama com serviços em
            nuvem poderosos, segurança de classe empresarial e gerenciamento de
            dispositivos. Inclui aplicativos como Word, Excel, PowerPoint,
            Outlook, Teams, OneDrive e muito mais, permitindo que você trabalhe
            de qualquer lugar, em qualquer dispositivo, com colaboração em tempo
            real.
          </p>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <span className="text-[16px] font-medium text-[#3c4043]">
          Quais são as principais diferenças entre os planos Microsoft 365
          Business?
        </span>
      ),
      children: (
        <div className="text-[14px] text-[#5f6368] leading-6">
          <p>
            O <strong>Business Basic</strong> inclui aplicativos web e móveis do
            Office, Teams, Exchange, OneDrive (1TB) e SharePoint. O{" "}
            <strong>Business Standard</strong> adiciona as versões desktop dos
            aplicativos Office e recursos avançados do Teams como webinars. O{" "}
            <strong>Apps para Negócios</strong> foca nos aplicativos premium do
            Office (Word, Excel, PowerPoint, Outlook) nas versões web, móvel e
            desktop, com 1TB de armazenamento no OneDrive, mas sem Exchange
            Online nem SharePoint.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div
      id="duvidas"
      className="flex text-gray-600  px-6 md:px-24 lg:px-32 w-full py-16 justify-center"
    >
      <div className="w-full ">
        <div className="w-full">
          <h2 className="text-[32px] font-normal text-gray-600 mb-8">
            Nós temos as respostas que você precisa
          </h2>

          <div className="border-t border-[#dadce0] pt-4">
            <Collapse
              ghost
              className="bg-white border-none w-full max-w-4xl [&_.ant-collapse-item]:border-b [&_.ant-collapse-item]:border-[#dadce0] [&_.ant-collapse-item]:py-4"
              activeKey={activeKeys}
              onChange={(keys) =>
                setActiveKeys(
                  Array.isArray(keys) ? keys : [keys].filter(Boolean)
                )
              }
              expandIconPosition="end"
              items={faqItems}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
