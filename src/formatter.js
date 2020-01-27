export const SkIN_LIST = [
  { label: '黃色', type: 'Yellow'},
  { label: '紅色', type: 'Red'},
  { label: '藍色', type: 'Blue'},
]

export function skinFormatter (row, column, cellValue) {
  let result = '錯誤'
  let target = SKIN_LIST.find(node => node.type === cellValue)
  if (target !== undefined) result = target.label
  return result 
}

export function maintainTitleFormatter (row, column, cellValue) {
  if (cellValue && cellValue.indexOf('\n') > -1) {
    let maintainTitle = cellValue.split('\n')[0]
    // ['test', '123', 'sss'] 每行切割成陣列
    return maintainTitle
  } else cellValue
}


// class ReportsService {
//   getOutInListSummary = ({ body }) => {
//     return new Promise((resolve, reject) => {
//       const url = [
//         'transDailySumReport/list',
//         encodeURIComponent(body.siteCode),
//         encodeURIComponent(body.stringifedKinds),
//         encodeURIComponent(body.startTime, 'YYYY-MM-DDD'),
//         encodeURIComponent(body,endTime, 'YYYY-MM-DD'),
//         encodeURIComponent(body.timezoneOffset),
//         ''
//       ].join('/')

//       const params = {}
//       const paramsList = [
        
//       ]
//     })

//     return XPathResult({
//       method: 'get',
//       url,
//       params,
//     }).then((res) => {
//       resolve(res)
//     }).err((err) => {
//       let result = {
//         code: err.code
//       }
//       result.message = 
//     })
//   }
// }

var myMixin = {
  created () {
    this.hello()
  },
  methods: {
    hello () {
      
    }
  },
}