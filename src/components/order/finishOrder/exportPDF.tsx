import pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import type { OrderData } from "../../../interfaces/order";

import { formatCPF } from "../../../utils/formatCPF";
import { formatPrice } from "../../../utils/formatPrice";

(pdfMake as any).vfs = pdfFonts.vfs;

const getBase64FromImageUrl = (url: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d");
      if (!ctx) return reject("Erro ao criar contexto do canvas");

      ctx.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL("image/png");
      resolve(dataURL);
    };
    img.onerror = () => reject("Erro ao carregar imagem");
    img.src = url;
  });
};

const formatCurrency = (value: number): string => {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

const formatCNPJ = (cnpj: string): string => {
  if (!cnpj) return "-";
  return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
};

const formatPhone = (phone: string): string => {
  if (!phone) return "-";
  return phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
};

export const generatePDF = async (office: OrderData) => {
  if (!office) return;

  const logoVivo = await getBase64FromImageUrl("/logovivopdf.png");
  const logoGold = await getBase64FromImageUrl("/goldpdf.png");

  // Calcular totais dos planos
  const totalUsuarios =
    office.plans?.reduce((total, plan) => total + (plan.users || 0), 0) || 0;
  const valorTotalMensal =
    office.plans?.reduce(
      (total, plan) =>
        total + parseFloat(plan.price || "0") * (plan.users || 0),
      0
    ) || 0;

  const docDefinition = {
    pageMargins: [20, 40, 20, 40],
    content: [
      // Cabeçalho com logos
      {
        columns: [
          {
            image: logoVivo,
            width: 100,
            alignment: "left",
            margin: [0, 10, 0, 0],
          },
          { text: "", width: "*" },
          {
            image: logoGold,
            width: 100,
            alignment: "right",
            margin: [0, 25, 0, 0],
          },
        ],
        margin: [0, 5, 0, 10] as [number, number, number, number],
      },

      // Título do pedido
      {
        columns: [
          {
            text: `Pedido Office Nº${office.id}`,
            style: "title",
          },
        ],
      },

      // Planos Contratados
      { text: "Planos Office Contratados", style: "sectionHeader" },
      {
        table: {
          headerRows: 1,
          widths: ["*", 70, 70, 70, 80],
          body: [
            [
              { text: "Plano", style: "tableHeader" },
              { text: "Usuários", style: "tableHeader" },
              { text: "Modalidade", style: "tableHeader" },
              { text: "Valor Unitário", style: "tableHeader" },

              { text: "Valor Total", style: "tableHeader" },
            ],
            ...(office.plans && office.plans.length > 0
              ? office.plans.map((plan) => [
                  {
                    text: "Business " + plan.planName || "-",
                    style: "tableBody",
                  },

                  { text: plan.users?.toString() || "0", style: "tableBody" },
                  {
                    text: plan.type === "mensal" ? "Mensal" : "-",
                    style: "tableBody",
                  },
                  {
                    text: Number(plan.price.replace(",", "."))
                      .toFixed(2)
                      .replace(".", ","),
                    style: "tableBody",
                  },
                  {
                    text: (
                      Number(plan.price.replace(",", ".")) * (plan?.users ?? 0)
                    )
                      .toFixed(2)
                      .replace(".", ","),
                    style: "tableBody",
                  },
                ])
              : [
                  [
                    {
                      text: "Nenhum plano contratado",
                      style: "tableBody",
                      colSpan: 4,
                    },
                    {},
                    {},
                    {},
                  ],
                ]),
          ],
        },
        layout: "lightHorizontalLines",
        style: "productTable",
      },

      // Informações da Empresa
      { text: "Informações da Empresa", style: "sectionHeader" },
      {
        type: "circle",
        ul: [
          `CNPJ: ${formatCNPJ(office?.cnpj || "")}`,
          `Razão Social: ${office?.company_name || ""}`,

          `Nome do Domínio: ${office?.domainName || "-"}`,
          `Já possui Office: ${
            office.alreadyHaveMicrosoftDomain === 1 ? "Sim" : "Não"
          }`,
          `É Cliente Vivo: ${office.isVivoClient === 1 ? "Sim" : "Não"}`,
        ],
        style: "content",
      },

      // Informações do Gestor
      { text: "Informações do Gestor", style: "sectionHeader" },
      {
        type: "circle",
        ul: [
          `Nome: ${office.manager_name || "-"}`,
          `Telefone: ${formatPhone(office.managerPhone || "")}`,
          `Segundo Telefone : ${formatPhone(
            office.second_manager_phone || ""
          )}`,

          `Email: ${office?.email || "-"}`,
          `CPF: ${formatCPF(office?.cpf || "") || "-"}`,
        ],
        style: "content",
      },

      // Resumo Financeiro
      { text: "Resumo Financeiro", style: "sectionHeader" },
      {
        columns: [
          { text: "Total de Usuários", style: "content" },
          {
            text: totalUsuarios.toString(),
            style: "content",
            alignment: "right",
          },
        ],
      },
      {
        columns: [
          { text: "Valor Total Mensal", style: "content" },
          {
            text: formatCurrency(valorTotalMensal),
            style: "content",
            alignment: "right",
          },
        ],
      },

      // Rodapé
      {
        text: "50.040.822/0001-74 - Gsc Solucoes Corporativas",
        style: "footer",
        margin: [0, 30, 0, 0] as [number, number, number, number],
      },
    ],
    styles: {
      tableHeader: {
        bold: true,
        fontSize: 10,
        color: "#222",
        fillColor: "#f3f3f3",
        margin: [0, 4, 0, 4],
      },
      tableBody: {
        fontSize: 9,
        color: "#444",
        margin: [0, 2, 0, 2],
      },
      productTable: {
        margin: [0, 5, 0, 15],
      },
      title: {
        fontSize: 18,
        bold: true,
        color: "#333",
        marginBottom: 12,
        alignment: "center" as const,
      },
      sectionHeader: {
        fontSize: 14,
        bold: true,
        color: "#444",
        margin: [0, 15, 0, 8] as [number, number, number, number],
      },
      content: {
        fontSize: 11,
        color: "#555",
        marginBottom: 3,
        lineHeight: 1.3,
      },
      footer: {
        alignment: "center" as const,
        italics: true,
        fontSize: 12,
        color: "#333",
      },
    },
  };

  pdfMake
    .createPdf(docDefinition as any)
    .download(`pedido-office-${office.id}.pdf`);
};
