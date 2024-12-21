import { Suspense } from "react";

import { LoadingGoat, Thanks } from "@/components";
import { BaseLayout } from "@/layouts/BaseLayout";

const ThanksPage = () => {
  return (
    <BaseLayout>
      <Suspense fallback={<LoadingGoat />}>
        <Thanks />
      </Suspense>
    </BaseLayout>
  );
};

export default ThanksPage;
