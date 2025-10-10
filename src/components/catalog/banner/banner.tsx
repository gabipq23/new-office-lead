import { Button, ConfigProvider } from "antd";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();

  const bannerMobile = "/vivo-empresas-m365-2509-mobile-1212x808.png";
  const bannerWeb = "/vivo-empresas-m365-2509-desk-1920x703.png";

  return (
    <div className="bg-[#f7f7f7] relative w-full">
      <div className="relative">
        <img
          src={bannerMobile}
          className="w-full h-[440px] md:h-[440px] object-cover block md:hidden"
        />

        <img
          src={bannerWeb}
          className="w-full h-[400px] md:h-[400px] lg:h-[600px] object-cover hidden md:block"
        />
      </div>

      <div
        style={{ margin: 0, padding: 0 }}
        className="absolute inset-0 flex flex-col justify-evenly  px-6  md:px-24 lg:px-32   "
      >
        <div className="text-start flex gap-2 flex-col px-6 md:py-4 lg:py-6  md:px-24 lg:px-32  ">
          <p
            style={{ lineHeight: "1.3", margin: 0 }}
            className="text-[16px] md:text-[28px] lg:text-[38px] text-[#f7f7f7] "
          >
            OFFICE 365
          </p>
          <p
            style={{ lineHeight: "1.3", margin: 0 }}
            className="text-[23px] md:text-[28px] lg:text-[38px] text-[#f7f7f7] "
          >
            Mais produtividade
          </p>
          <p
            style={{ lineHeight: "1.3", margin: 0 }}
            className="text-[23px] mdtext-[28px] lg:text-[38px] text-[#f7f7f7] "
          >
            para sua empresa
          </p>
        </div>

        <div className="mx-2 md:mx-18 lg:mx-24  ">
          <img
            src="/vivo-empresas-m365.png"
            className="w-48 sm:w-48 md:w-48 lg:w-56 xl:w-64 h-auto object-contain"
            alt="Microsoft 365"
          />
        </div>

        <div className="px-6  md:px-24 lg:px-32  ">
          <ConfigProvider
            theme={{
              token: {
                colorPrimaryBg: "#f7f7f7",
                colorPrimaryText: "#660099",

                colorPrimaryHover: "#aa00ff",
              },
            }}
          >
            <Button
              variant="solid"
              size="large"
              onClick={() => navigate("/choose-plan")}
            >
              Assinar já
            </Button>
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
}

export default Banner;
