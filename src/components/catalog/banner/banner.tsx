import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  const hasOffice = sessionStorage.getItem("alreadyHaveMicrosoftDomain");

  const bannerMobile = "/vivo-empresas-m365-2509-mobile-1212x808.png";
  const bannerWeb = "/vivo-empresas-m365-2509-desk-1920x703.png";

  return (
    <div className="bg-[#f7f7f7] relative w-full">
      <div className="relative">
        <img
          src={bannerMobile}
          className="w-full h-[440px] md:h-[440px] object-cover block md:hidden"
          alt="Banner"
        />

        <img
          src={bannerWeb}
          className="w-full h-[400px] md:h-[400px] lg:h-[440px] object-cover hidden md:block"
          alt="Banner"
        />
      </div>

      <div
        style={{ margin: 0, padding: 0 }}
        className="absolute inset-0 flex flex-col justify-evenly px-6 md:px-24 lg:px-32   "
      >
        <div className="text-start flex gap-2 flex-col px-6 md:py-4 lg:py-6  md:px-24 lg:px-32  ">
          <p
            style={{ lineHeight: "1.", margin: 0 }}
            className="text-[12px] md:text-[12px] lg:text-[16px] text-[#f7f7f7] "
          >
            {hasOffice === "true" ? "" : " CONTRATE AGORA"}
          </p>
          {hasOffice === "true" ? (
            <>
              <p
                style={{ lineHeight: "1.0", margin: 0 }}
                className="text-[23px] md:text-[28px] lg:text-[28px] text-[#f7f7f7] "
              >
                MIGRE SUA CONTA OFFICE 365
              </p>
              <p
                style={{ lineHeight: "1.0", margin: 0 }}
                className="text-[23px] mdtext-[28px] lg:text-[28px] text-[#f7f7f7] "
              >
                PRA VIVO E TENHA BENEFÍCIOS
              </p>
            </>
          ) : (
            <>
              <p
                style={{ lineHeight: "1.0", margin: 0 }}
                className="text-[23px] md:text-[28px] lg:text-[38px] text-[#f7f7f7] "
              >
                Office 365:
              </p>
              <p
                style={{ lineHeight: "1.0", margin: 0 }}
                className="text-[23px] mdtext-[28px] lg:text-[38px] text-[#f7f7f7] "
              >
                Mais produtividade
              </p>
              <p
                style={{ lineHeight: "1.0", margin: 0 }}
                className="text-[23px] mdtext-[28px] lg:text-[38px] text-[#f7f7f7] "
              >
                para sua empresa
              </p>
            </>
          )}
          {hasOffice === "true" ? (
            <>
              <p
                style={{ lineHeight: "1.0", margin: 0 }}
                className="text-[10px] md:text-[20px] lg:text-[26px] text-[#f7f7f7] "
              >
                Garanta esta oferta por tempo limitado
              </p>
            </>
          ) : (
            <>
              <p
                style={{ lineHeight: "1.0", margin: 0 }}
                className="text-[10px] md:text-[12px] lg:text-[14px] text-[#f7f7f7] "
              >
                INCLUA DIRETO NA SUA FATURA VIVO EMPRESAS
              </p>
            </>
          )}
        </div>

        <div className="mx-2 md:mx-16 lg:mx-24 ">
          <img
            src="/vivo-empresas-m365.png"
            className="w-48 sm:w-48 md:w-64 lg:w-76 h-auto object-contain"
            alt="Microsoft 365"
          />
        </div>

        <div className="px-6 py-0 lg:py-2 md:px-24 lg:px-32 ">
          <Button
            style={{
              width: "200px",
              height: "46px",
              fontWeight: "bold",
              borderRadius: "14px",
            }}
            variant="solid"
            size="large"
            color="magenta"
            onClick={() => navigate("/choose-plan")}
          >
            {hasOffice === "true" ? "QUERO MIGRAR" : "CONTRATE AGORA"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
