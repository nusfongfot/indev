import { NoSsr } from "@mui/material";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useTranslation } from "react-i18next";

type ContextGlobal = {
  language: string;
  flag: string;
  setLanguage: Dispatch<SetStateAction<string>>;
  setFlag: Dispatch<SetStateAction<string>>;
};

type Props = {
  children: ReactNode;
};


const LanguageContext = createContext<ContextGlobal>({
  language: "th",
  flag: "../img/thIcon.webp",
  setLanguage: () => {}, // Empty function as a default
  setFlag: () => {}, // Empty function as a default
});

function LanguageContextProvider({ children }: Props) {
  const [language, setLanguage] = useState<string>("th");
  const [flag, setFlag] = useState<string>("../img/thIcon.webp");

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const getLang = window.localStorage.getItem("selectedLang");
    if (getLang == "th") {
      setFlag("../img/thIcon.webp");
      i18n.changeLanguage(getLang);
    } else if (getLang == "en") {
      setFlag("../img/enIcon.png");
      i18n.changeLanguage(getLang);
    } else {
      setFlag("../img/thIcon.webp");
      i18n.changeLanguage(language);
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        flag,
        setFlag,
      }}
    >
      <NoSsr>{children}</NoSsr>
    </LanguageContext.Provider>
  );
}

export const useChangeLanguage = () => useContext(LanguageContext);

export default LanguageContextProvider;
