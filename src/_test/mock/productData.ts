export type CountListItemType = {
    combination: string[];
    remainCount: number;
}

export type GroupListType = {
    title: string;
    options: string[]
}

export type ProductDataType = {
    _id: string;
    data: {
        countList: CountListItemType[]
    }
    titleList?: string[],
    groupList?: GroupListType[]
}

const productData: ProductDataType = {
    "_id" : "621f2588d8d85b8d78eb3e64",
    "data": {
        "countList":[
            {
                "combination": ["스몰", "검정"],
                "remainCount": 0,
            },
            {
                "combination": ["스몰", "하양"],
                "remainCount": 0,
            },
            {
                "combination": ["스몰", "빨강"],
                "remainCount": 0,
            },
            {
                "combination": ["라지", "검정"],
                "remainCount": 1,
            },
            {
                "combination": ["라지", "하양"],
                "remainCount": 1,
            },
            {
                "combination": ["라지", "빨강"],
                "remainCount": 0
            },
            {
                "combination": ["미디엄", "검정"],
                "remainCount": 3
            },
            {
                "combination": ["미디엄", "파랑"],
                "remainCount": 2
            },
            {
                "combination": ["미디엄", "빨강"],
                "remainCount": 1
            },

        ]
    },
    "titleList":["사이즈","색상"],
    "groupList":[{"title":"사이즈","options":["스몰","라지"]}, {"title":"색상","options":["검정","하양","빨강"]}]
}

export default productData