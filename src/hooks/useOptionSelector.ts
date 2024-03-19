import React, {useCallback, useMemo, useState} from "react";
import {OptionType} from "../components/common/select/Select";
import {CountListItemType} from "../_test/mock/productData";

type selectedProductType = {
    mainOption?: string;
    subOption?: string
}
const  useOptionSelector = (countList: CountListItemType[])  => {
    const [selectedProduct, setSelectedProduct] = useState<selectedProductType>({ mainOption: '', subOption: '' });


    const mainOptions = useMemo<OptionType[]>(() => {

        const optionMap = new Map<string, number>();

        countList.forEach(item => {
            const [ option ] = item.combination
            optionMap.set(option, (optionMap.get(option) || 0) + item.remainCount)
        })

        return Array.from(optionMap).map(item => {
            const [ option, remainCount ] = item
            const isSoldOut = remainCount === 0
            return {
                value: option,
                children: isSoldOut ? `${option} (품절)` : option,
                disabled: isSoldOut,
            }
        })

    }, [countList])

    const subOptions = useMemo<OptionType[]>(() => {
        if(!selectedProduct.mainOption) return [];

        const result = countList.filter(item => {
            const [ option] = item.combination
            return option === selectedProduct.mainOption
        })

        return result.map(item => {
            const [ ,option ] = item.combination
            const isSoldOut = item.remainCount === 0;
            return {
                value: option,
                disabled: isSoldOut,
                children: `${option} ${isSoldOut ? '(품절)' : `(${item.remainCount}개 구매가능)`}`
            }
        })

    }, [selectedProduct.mainOption, countList])

    const onSelectMain = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedProduct(prevState => ({
            ...prevState,
            mainOption: event.target.value,
            subOption: '',
        }));
    }, []);

    const onSelectSub = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedProduct(prevState => ({
            ...prevState,
            subOption: event.target.value,
        }));
    }, []);

    return {
        selectedProduct,
        mainOptions,
        subOptions,
        onSelectMain,
        onSelectSub
    }
}

export default useOptionSelector