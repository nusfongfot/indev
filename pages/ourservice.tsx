import Footer from "@/components/footer";
import ResponsiveAppBar from "@/components/navbar";
import OurSerVice from "@/components/our-service";
import Digital from "@/components/our-service/digital";
import ECommerce from "@/components/our-service/e_com";
import Mobile from "@/components/our-service/mobile";
import MobileDesign from "@/components/our-service/mobile_design";
import Server from "@/components/our-service/server";
import WebSite from "@/components/our-service/website";
import WebSiteDeSign from "@/components/our-service/website_design";
import Head from "next/head";
import { useRouter } from "next/router";

export default function OurServicePage() {
  const router: any = useRouter();
  return (
    <>
      <Head>
        <title>WEB DEV IN DREAM</title>
        <meta
          name="description"
          content="Meta description for the About page"
        />
      </Head>
      {router.pathname == "/ourservice" && !router.query.subpath && (
        <OurSerVice />
      )}
      {router.query.subpath == "website_design" && <WebSiteDeSign />}
      {router.query.subpath == "mobile_design" && <MobileDesign />}
      {router.query.subpath == "server" && <Server />}
      {router.query.subpath == "website" && <WebSite />}
      {router.query.subpath == "mobile" && <Mobile />}
      {router.query.subpath == "e_commerce" && <ECommerce />}
      {router.query.subpath == "digital" && <Digital />}
    </>
  );
}
