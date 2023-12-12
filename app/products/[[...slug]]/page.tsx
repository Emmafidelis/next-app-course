import React from "react";

interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div className="bg-sky-600">
      ProductPage {slug} {sortOrder}
    </div>
  );
};

export default ProductPage;
