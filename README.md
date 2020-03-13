# vue-web-excel

>* 一个基于Vue、用面向对象的思路编写网页Excel组件

## 参数清单

参数名称 | 参数描述 | 参数类型 | 是否必填 | 默认值 |
|-      |-        |--        |--       |--     |
| `row`  | 可在初次使用时，生成默认表格使用，指定表格的行数 | `Number`、`String` | `false` | `10` |
| `cell` | 可在初次使用时，生成默认表格使用，指定每行的单元格数量  | `Number`、`String` | `false` | `10` |
| `value` | 绑定的数据对象字段，可使用 `v-model` 或 `:value` | `Array` | `true` | `[]` |
