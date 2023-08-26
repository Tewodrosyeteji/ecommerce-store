"use client";

import { Color, Size } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

type FilterProps = {
  data: (Size | Color)[];
  valueKey: string;
  name: string;
};

const Filters: React.FC<FilterProps> = ({ data, valueKey, name }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedValue = searchParams.get(valueKey);
  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      { url: window.location.href, query },
      { skipNull: true }
    );

    router.push(url);
  };
  return <div>Filters</div>;
};

export default Filters;
