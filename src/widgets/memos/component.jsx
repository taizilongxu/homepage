import { useTranslation } from "next-i18next";
import Container from "components/services/widget/container";
import Block from "components/services/widget/block";
import useWidgetAPI from "utils/proxy/use-widget-api";

export default function Component({ service }) {
  const { t } = useTranslation();
  const { widget } = service;
  const { data: resultData, error } = useWidgetAPI(widget, "stats");

  if (error) {
    return <Container service={service} error={error} />;
  }

  if (!resultData) {
    return (
      <Container service={service}>
        <Block label={t("memos.loading")} />
      </Container>
    );
  }


  return (
    <Container service={service}>
      <Block label="memos.count" value={t("common.number", { value: resultData.totalMemoCount })} />
      <Block label="memos.tag_count" value={t("common.number", { value:  Object.keys(resultData.tagCount).length })} />
    </Container>
  );
} 