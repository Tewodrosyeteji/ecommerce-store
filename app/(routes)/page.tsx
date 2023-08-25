import getBillboard from "@/actions/getBillboard";
import getProducts from "@/actions/getProducts";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";

const HomePage = async () => {
  const billboard = await getBillboard("2babfc4d-5c4b-4028-8be1-2466b471af6f");
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 ">
          <ProductList title="Featured Product" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
