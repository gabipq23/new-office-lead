import { Button, Dropdown } from "antd";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SubHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const hasOffice = sessionStorage.getItem("alreadyHaveMicrosoftDomain");

  const menuItems = [
    ...(hasOffice !== "true"
      ? [
          {
            key: "1",
            label: (
              <a
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("ofertas")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                href="#ofertas"
                className="text-gray-600 hover:text-[#660099] py-2 px-4 block"
              >
                Ofertas
              </a>
            ),
          },
        ]
      : []),
    ...(hasOffice === "true"
      ? [
          {
            key: "1",
            label: (
              <a
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("depoimentos")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                href="#depoimentos"
                className="text-gray-600 hover:text-[#660099] py-2 px-4 block"
              >
                Depoimentos
              </a>
            ),
          },
        ]
      : []),

    ...(hasOffice === "true"
      ? [
          {
            key: "2",
            label: (
              <a
                href="#porque-escolher"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("porque-escolher")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="text-gray-600 hover:text-[#660099] py-2 px-4 block"
              >
                Como migrar
              </a>
            ),
          },
        ]
      : []),
    {
      key: "3",
      label: (
        <a
          href="#beneficios"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("beneficios")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className="text-gray-600 hover:text-[#660099] py-2 px-4 block"
        >
          Benefícios
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a
          href="#apps"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("apps")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className="text-gray-600 hover:text-[#660099] py-2 px-4 block"
        >
          Aplicativos
        </a>
      ),
    },

    {
      key: "5",
      label: (
        <a
          href="#duvidas"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("duvidas")?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className="text-gray-600 hover:text-[#660099] py-2 px-4 block"
        >
          Principais dúvidas
        </a>
      ),
    },
  ];

  return (
    // bg-[#f7f7f7] bg da LP
    // bg-[#f1f1f1] bg do header
    <div className="flex justify-between gap-4 items-center p-2 bg-[#f1f1f1]  py-2  px-6  md:px-24 lg:px-32   shadow-sm border-b border-gray-300 z-2 sticky top-0">
      <div className="flex md:hidden items-center">
        <Dropdown
          menu={{ items: menuItems }}
          trigger={["click"]}
          placement="bottomLeft"
          onOpenChange={setIsOpen}
          className="border-0"
        >
          <div className="flex items-center gap-2 cursor-pointer border border-gray-400 px-3 py-2 rounded">
            <span className="text-[12px] md:text-[16px] font-bold">
              MICROSOFT 365
            </span>
            <ChevronDown
              size={16}
              className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </div>
        </Dropdown>
      </div>

      <div className="hidden  md:flex items-center justify-center gap-4 ">
        <p
          style={{ margin: 0, fontWeight: "bold" }}
          className="text-[16px] text-[#575757] "
        >
          MICROSOFT 365
        </p>
        <div className="flex  pt-0.5 h-full gap-6 md:text-[10px] lg:text-[14px] text-[#666666] cursor-pointer">
          {hasOffice !== "true" && (
            <a
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("ofertas")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              href="#ofertas"
              className="hover:text-[#660099] "
            >
              Ofertas
            </a>
          )}
          {hasOffice === "true" && (
            <a
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("depoimentos")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              href="#depoimentos"
              className="hover:text-[#660099] "
            >
              Depoimentos
            </a>
          )}
          {hasOffice === "true" && (
            <a
              href="#porque-escolher"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("porque-escolher")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className="hover:text-[#660099]"
            >
              {hasOffice === "true"
                ? "Como migrar"
                : "Porque Escolher Office 365"}
            </a>
          )}
          <a
            href="#beneficios"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("beneficios")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="hover:text-[#660099]"
          >
            Benefícios
          </a>

          <a
            href="#apps"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("apps")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="hover:text-[#660099]"
          >
            Aplicativos
          </a>

          <a
            href="#duvidas"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("duvidas")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="hover:text-[#660099]"
          >
            Principais dúvidas
          </a>
        </div>
      </div>

      <div className="block lg:hidden">
        <Button
          style={{
            width: "120px",
            height: "35px",
            fontWeight: "bold",
            borderRadius: "14px",
          }}
          variant="solid"
          size="middle"
          color="magenta"
          onClick={() => {
            sessionStorage.setItem("currentUrl", window.location.href);

            navigate("/choose-plan");
          }}
        >
          {hasOffice === "true" ? "QUERO MIGRAR" : "CONTRATAR"}
        </Button>
      </div>
      <div className="lg:block hidden">
        <Button
          style={{
            width: "180px",
            height: "35px",
            fontWeight: "bold",
            borderRadius: "14px",
          }}
          variant="solid"
          size="middle"
          color="magenta"
          onClick={() => {
            sessionStorage.setItem("currentUrl", window.location.href);

            navigate("/choose-plan");
          }}
        >
          {hasOffice === "true" ? "QUERO MIGRAR" : "CONTRATAR"}
        </Button>
      </div>
    </div>
  );
}

export default SubHeader;
