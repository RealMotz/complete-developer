import type {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
  PreviewData,
} from "next";
import { ParsedUrlQuery } from "querystring";
import { fetchNames } from "../utils/fetch-names";

type responseItemType = {
  id: string;
  name: string;
};

const NamesSSG: NextPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const output = props.names.map((item: responseItemType, idx: number) => {
    return (
      <li key={`name-${idx}`}>
        {item.id} : {item.name}
      </li>
    );
  });

  return <ul>{output}</ul>;
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>
) => {
  let names: responseItemType[] | [] = [];
  try {
    names = await fetchNames();
  } catch (err) {}

  return {
    props: {
      names,
    },
  };
};

export default NamesSSG;
