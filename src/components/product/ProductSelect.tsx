import React from 'react';
import Select from "../common/select/Select";
import {ProductDataType} from "../../_test/mock/productData";
import useOptionSelector from "../../hooks/useOptionSelector";

interface ProductSelectProps {
    productData: ProductDataType;
}

const ProductSelect = ({ productData }: ProductSelectProps) => {
    const { countList } = productData.data;


    const {
        selectedProduct,
        mainOptions: sizeOptions,
        subOptions: colorOptions,
        onSelectMain: onSelectSize,
        onSelectSub: onSelectColor,
    } = useOptionSelector(countList)

    return (
        <div className={'flex flex-col items-center justify-center'}>
            <Select
                options={sizeOptions}
                onChange={onSelectSize}
                defaultOption="사이즈"
            />
            <Select
                options={colorOptions}
                onChange={onSelectColor}
                defaultOption="색상"
                disabled={!selectedProduct.mainOption}
            />
            <div>
                선택 상품 : {selectedProduct.mainOption}/{selectedProduct.subOption}
            </div>
        </div>
    );
};


export default ProductSelect