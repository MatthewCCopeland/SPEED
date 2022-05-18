import { Refine } from "@pankod/refine-core";
import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";

import { Layout } from "components";
import { PostIcon } from "icons";
import { PostList, PostCreate, PostEdit, PostShow } from "pages/posts";
import { ArticleList, ArticleCreate } from "pages/articles";

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
          // edit: ArticleEdit,
          // show: ArticeShow,
          icon: PostIcon
        }
      ]}
      Layout={Layout}
    />
  );
};

export default App;
