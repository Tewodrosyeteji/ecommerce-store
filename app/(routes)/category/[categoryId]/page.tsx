import getCategory from "@/actions/getCategory";
import getColors from "@/actions/getColors";
import getProducts from "@/actions/getProducts";
import getSizes from "@/actions/getSizes";
import Billboard from "@/components/Billboard";
import Container from "@/components/ui/Container";
import Filters from "./components/Filters";

export const revalidate = 0;

type CategoryPageProps = {
  params: { categoryId: string };
  searchParams: {
    sizeId: string;
    colorId: string;
  };
};

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    sizeId: searchParams.sizeId,
    colorId: searchParams.colorId,
  });

  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);
  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            {/* mobile filters */}
            <div className="hidden lg:block">
              <Filters valueKey="sizeId" name="Sizes" data={sizes} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
