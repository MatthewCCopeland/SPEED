import { Refine } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";

import { Layout } from "components";
import { ArticleList, ArticleCreate, ArticleShow } from "pages/articles";

const App: React.FC = () => {
  return (
    <Refine
      dataProvider={dataProvider("http://localhost:5000")}
      routerProvider={routerProvider}
      resources={[
        {
          name: "articles",
          list: ArticleList,
          create: ArticleCreate,
          //edit: ArticleEdit,
          show: ArticleShow,
        },

      ]}
      Layout={Layout}
    />
  );
};

export default App;
