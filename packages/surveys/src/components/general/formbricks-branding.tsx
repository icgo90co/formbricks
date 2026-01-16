import { useTranslation } from "react-i18next";

export function FormbricksBranding() {
  const { t } = useTranslation();
  return (
    <span className="flex justify-center">
      <a
        href="https://www.icgo.co"
        target="_blank"
        tabIndex={-1}
        rel="noopener">
        <p className="text-signature text-xs">
          {t("common.powered_by")}{" "}
          <b>
            <span className="text-branding-text hover:text-signature">Mko</span>
          </b>
        </p>
      </a>
    </span>
  );
}
