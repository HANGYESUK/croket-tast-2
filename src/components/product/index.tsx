import ProductSelect from "./ProductSelect";
import productData from "../../_test/mock/productData";

const ProductPage = () => {
    return <div>
        <ProductSelect productData={productData}/>
    </div>
}

export default ProductPage;