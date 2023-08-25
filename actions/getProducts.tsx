import { Product } from "@/types";
import axios from "axios";
import qs from "query-string";

type Query = {
  categoryId?: string;
  sizeId?: string;
  colorId?: string;
  isFeatured?: boolean;
};

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
      sizeId: query.sizeId,
      colorId: query.colorId,
      isFeatured: query.isFeatured,
    },
  });
  const res = await axios.get(URL);
  return res.data;
};

export default getProducts;
