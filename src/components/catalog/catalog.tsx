import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Banner from "./banner/banner";
import Cards from "./cards/cards";
import Header from "../header/header";
import SubHeader from "../subHeader/subHeader";
import Footer from "../footer/footer";
import Payments from "./payments/payments";
import Benefits from "./benefits/benefits";
import OfficeApps from "./officeApps/officeApps";

export default function Catalog() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <SubHeader />
        <Banner />

        <Cards />
        <Payments />
        <OfficeApps />
        <Benefits />

        <Footer />
      </QueryClientProvider>
    </>
  );
}
