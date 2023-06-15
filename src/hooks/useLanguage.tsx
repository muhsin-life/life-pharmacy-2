import { useRouter } from "next/router";
import en from "../locales/en.json"
import ar from "../locales/ar.json";

export const useLanguage = () => {
  const { locale } = useRouter();
  
  const t = locale === "ae-en" || locale === "sa-en" ? en : ar;

  const parts = locale?.split("-")

  const currency = parts ? parts[0] === "sa" ? "SAR" : "AED" : "AED"

  return { t, locale, currency };
};