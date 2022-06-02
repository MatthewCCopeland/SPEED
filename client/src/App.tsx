import { Refine } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";

import { Layout } from "components";
import { AdminList, AdminCreate, AdminShow, AdminEdit } from "pages/articles";
import { AcceptedList, AcceptedShow } from "pages/accepted";
import { RejectedList, RejectedShow } from "pages/rejected";
import { ArticleCreate } from "pages/submit";
import { ModerationList, ModerationShow, ModerationEdit } from "pages/moderation";
import { AnalysisList, AnalysisShow, AnalysisEdit } from "pages/analysis";


const App: React.FC = () => {
  return (
    <Refine
      dataProvider={dataProvider("https://speed-develop.herokuapp.com")}
      routerProvider={routerProvider}
      resources={[
        {
          name: "articles",
          list: AdminList,
          create: AdminCreate,
          edit: AdminEdit,
          show: AdminShow,
          options: { label: "Admin" },
        },
        {
          name: "submit",
          list: ArticleCreate,
          options: { label: "Submit" },
        },
        {
          name: "moderation",
          list: ModerationList,
          edit: ModerationEdit,
          show: ModerationShow,
          options: { label: "Moderation" },
        },
        {
          name: "analysis",
          list: AnalysisList,
          edit: AnalysisEdit,
          show: AnalysisShow,
          options: { label: "Analysis" },
        },
        {
          name: "accepted",
          list: AcceptedList,
          show: AcceptedShow,
          options: { label: "Accepted Articles" },
        },
        {
          name: "rejected",
          list: RejectedList,
          show: RejectedShow,
          options: { label: "Rejected Articles" },
        },

      ]}
      Layout={Layout}
    />
  );
};

export default App;
