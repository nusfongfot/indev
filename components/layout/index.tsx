import Footer from "@/components/footer";
import ResponsiveAppBar from "@/components/navbar";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <ResponsiveAppBar />
      {children}
      <Footer />
    </>
  );
}
