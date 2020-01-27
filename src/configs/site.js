export const MENU_LIST = [
    {
        name: "home",
        text: "首页",
        path: "/"
    },
    {
        name: "product",
        text: "产品中心",
        path: "/product",
        child: [
            { name: "lottery", text: "彩票游戏", path: "/lottery" },
            { name: "sport", text: "体育投注", path: "/sport" },
            { name: "electronic", text: "电子游艺", path: "/electronic" },
            { name: "video", text: "真人视讯", path: "/video" },
            { name: "card", text: "棋牌游戏", path: "/card" }
        ]
    },
    {
        name: "case",
        text: "客户案例",
        path: "/case"
    },
    {
        name: "news",
        text: "最新快讯",
        path: "/news"
    },
    {
        name: "culture",
        text: "企业文化",
        path: "/culture"
    },
    {
        name: "mobile",
        text: "手机投注",
        path: "/mobile"
    },
    {
        name: "cooperation",
        text: "开放合作",
        path: "/cooperation"
    }
]

export const COOPRETE_LIST = [
    { name: "AB", class: "ab", img: "./image/AB.png" },
    { name: "AG", class: "ag", img: "./image/AB.png" },
    { name: "BBIN", class: "bbin", img: "./image/AB.png" },
    { name: "DS", class: "ds", img: "./image/AB.png" },
    { name: "LEBO", class: "lebo", img: "./image/AB.png" },
    { name: "MWG", class: "mwg", img: "./image/AB.png" },
    { name: "MG", class: "mg", img: "./image/AB.png" },
    { name: "OG", class: "og", img: "./image/AB.png" },
    { name: "OPUS", class: "opus", img: "./image/AB.png" },
    { name: "PT", class: "pt", img: "./image/AB.png" },
    { name: "SOON", class: "soon", img: "./image/AB.png" }
]

export const STATUS_LIST = [
    { label: "停用", value: 0 },
    { label: "啟用", value: 1 }
]

export function statusFormatter(row, column, cellValue) {
    let result = '錯誤'
    let target = STATUS_LIST.find(node => node.value === cellValue)
    if (target !== undefined) result = target.label
    return result
}