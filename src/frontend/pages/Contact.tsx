import { useTranslation } from "react-i18next";
import Page from "@/components/layout/Page";
import Panel from "@/components/ui/Panel";
import KeyValueRow from "@/components/ui/KeyValueRow";

function Contact() {
  const { t } = useTranslation();

  return (
    <Page
      eyebrow="Get in touch"
      title={t("contact")}
      intro="The fastest way to reach me is email — happy to talk music, code, or both."
    >
      <Panel>
        <KeyValueRow label="Email">
          <a
            href="mailto:antondurov05@gmail.com"
            className="text-accent hover:underline"
          >
            antondurov05@gmail.com
          </a>
        </KeyValueRow>
        <KeyValueRow label="LinkedIn">
          <a
            href="https://linkedin.com/in/anton-durov"
            target="_blank"
            rel="noreferrer noopener"
            className="text-accent hover:underline"
          >
            linkedin.com/in/anton-durov
          </a>
        </KeyValueRow>
        <KeyValueRow label="Instagram">
          <a
            href="https://instagram.com/antvndurov"
            target="_blank"
            rel="noreferrer noopener"
            className="text-accent hover:underline"
          >
            @antvndurov
          </a>
        </KeyValueRow>
      </Panel>
    </Page>
  );
}

export default Contact;
