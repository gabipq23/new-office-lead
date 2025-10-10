export default function Payments() {
  return (
    <div
      id="formas-de-pagamento"
      className="flex flex-col text-[#5f6368] bg-[#f7f7f7] items-start justify-around text-center px-6 md:px-24 lg:px-32 pb-6  pt-16  w-full "
    >
      <h2
        style={{ margin: 0 }}
        className="text-[26px] md:text-[32px] text-[#5f6368] text-start "
      >
        Formas de pagamento
      </h2>
      <p
        className="text-[16px] text-start"
        style={{ margin: 0, paddingTop: "8px" }}
      >
        Caso seja Cliente Vivo Empresas: o pagamento é feito diretamente na
        fatura.
      </p>
    </div>
  );
}
