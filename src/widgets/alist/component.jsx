import { useTranslation } from "next-i18next";

import Container from "components/services/widget/container";
import Block from "components/services/widget/block";
import useWidgetAPI from "utils/proxy/use-widget-api";

export default function Component({ service }) {
  const { t } = useTranslation();

  const { widget } = service;

  const { data: alistData, error: alistError } = useWidgetAPI(widget, "storage");

  if (alistError) {
    return <Container service={service} error={alistError} />;
  }

  if (!alistData) {
    return (
      <Container service={service}>
        <Block label="alist.storageCount" />
        <Block label="alist.storageError" />
      </Container>
    );
  }

  const errored = alistData.data.content.filter((storage) => storage.status !== "work");

  return (
    <Container service={service}>
      <Block label="alist.storage_count" value={t("common.number", { value: alistData.data.total })} />
      <Block label="alist.storage_error" value={t("common.number", { value: errored.length })} />
    </Container>
  );
}
