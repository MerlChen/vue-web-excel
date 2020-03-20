export default class CellInfo {
  constructor(store, data, id, row, col) {
    this.store = store;
    // 默认样式
    this.style = {
      // 字段格式
      fieldStyle: {
        // 文本
        text: false,
        // 数值属性
        numericalStyle: {
          // 小数位
          digitNum: null,
          // 字段排序是否为升序
          orderByASC: false,
          // 数值为0显示空
          emptyShowNull: false,
          // 数值为0显示0
          emptyShowZero: false,
          // 数值为0显示--
          emptyShowWait: false,
          // 显示千分符
          showThousandSplit: false
        },
        // 金额图标
        amount: {
          // 是否为RMB
          isRMB: false,
          // 是否为美元
          isUSD: false,
          // 是否为英镑
          isGBP: false,
          // 是否为欧元
          isEUR: false
        },
        // 日期格式
        dateFormat: {
          // yyyy/mm/dd
          fullShortDate: false,
          // mm月dd日
          monthAndDate: false,
          // yyyy年mm月
          yearAndMonth: false,
          // yyyy年mm月dd日
          fullDate: false,
          // yyyy/mm/dd HH:MM:SS
          dateAndTime: false
        },
        // 是否为百分数
        percentage: false
      },
      // 对齐方式
      textAlign: "center",
      // 单元格行高列宽
      cellStyle: {
        // 行高
        lineHeight: null,
        // 列宽
        cellWidth: null
      },
      // 单元格的合并属性
      cellSetting: {
        colSpan: 1,
        rowSpan: 1
      },
      // 是否加粗
      fontWeight: false,
      // 背景颜色
      backgroundColor: "#ffffff",
      // 字体颜色
      fontColor: "#000000",
      // 边框设置
      borderStyle: {
        leftBorder: {
          // 边框线条宽度
          width: "1px",
          // 细线--默认
          isSolid: false,
          // 虚线
          isDashed: true,
          // 边框颜色
          color: "#e8ecf2"
        },
        rightBorder: {
          // 边框线条宽度
          width: "1px",
          // 细线--默认
          isSolid: false,
          // 虚线
          isDashed: true,
          // 边框颜色
          color: "#e8ecf2"
        },
        topBorder: {
          // 边框线条宽度
          width: "1px",
          // 细线--默认
          isSolid: false,
          // 虚线
          isDashed: true,
          // 边框颜色
          color: "#e8ecf2"
        },
        bottomBorder: {
          // 边框线条宽度
          width: "1px",
          // 细线--默认
          isSolid: false,
          // 虚线
          isDashed: true,
          // 边框颜色
          color: "#e8ecf2"
        }
      }
    };
    // 单元格所在的行下标
    this.row = row;
    // 单元格所在的列下标
    this.col = col;
    // 单元格绑定的数据
    this.data = data || {};
    // 单元格的ID
    this.id = id || 0;
    // 单元格是否在选中的范围内
    this.wasDuring = false;
  }

  /**
   * @description 设置单元格默认样式
   * @return {{backgroundColor: string, textAlign: string, borderStyle: {leftBorder: {isSolid: boolean, color: string, isDashed: boolean, width: string}, rightBorder: {isSolid: boolean, color: string, isDashed: boolean, width: string}, bottomBorder: {isSolid: boolean, color: string, isDashed: boolean, width: string}, topBorder: {isSolid: boolean, color: string, isDashed: boolean, width: string}}, cellStyle: {cellWeight: null, lineHeight: null}, fieldStyle: {amount: {isRMB: boolean, isUSD: boolean, isEUR: boolean, isGBP: boolean}, dateFormat: {fullDate: boolean, dateAndTime: boolean, monthAndDate: boolean, yearAndMonth: boolean, fullShortDate: boolean}, percentage: boolean, text: boolean, numericalStyle: {orderByASC: boolean, emptyShowWait: boolean, showThousandSplit: boolean, emptyShowNull: boolean, digitNum: null, emptyShowZero: boolean}}, cellSetting: {rowSpan: number, colSpan: number}, fontWeight: boolean, fontColor: string}}
   */
  static setDefaultStyleConfig() {
    return {
      // 字段格式
      fieldStyle: {
        // 文本
        text: false,
        // 数值属性
        numericalStyle: {
          // 小数位
          digitNum: null,
          // 字段排序是否为升序
          orderByASC: false,
          // 数值为0显示空
          emptyShowNull: false,
          // 数值为0显示0
          emptyShowZero: false,
          // 数值为0显示--
          emptyShowWait: false,
          // 显示千分符
          showThousandSplit: false
        },
        // 金额图标
        amount: {
          // 是否为RMB
          isRMB: false,
          // 是否为美元
          isUSD: false,
          // 是否为英镑
          isGBP: false,
          // 是否为欧元
          isEUR: false
        },
        // 日期格式
        dateFormat: {
          // yyyy/mm/dd
          fullShortDate: false,
          // mm月dd日
          monthAndDate: false,
          // yyyy年mm月
          yearAndMonth: false,
          // yyyy年mm月dd日
          fullDate: false,
          // yyyy/mm/dd HH:MM:SS
          dateAndTime: false
        },
        // 是否为百分数
        percentage: false
      },
      // 对齐方式
      textAlign: "center",
      // 单元格行高列宽
      cellStyle: {
        // 行高
        lineHeight: null,
        // 列宽
        cellWidth: null
      },
      cellSetting: {
        colSpan: 1,
        rowSpan: 1
      },
      // 是否加粗
      fontWeight: false,
      // 背景颜色
      backgroundColor: "#ffffff",
      // 字体颜色
      fontColor: "#000000",
      // 边框设置
      borderStyle: {
        leftBorder: {
          // 边框线条宽度
          width: "1px",
          // 细线
          isSolid: false,
          // 虚线--默认
          isDashed: true,
          // 边框颜色
          color: "#e8ecf2"
        },
        rightBorder: {
          // 边框线条宽度
          width: "1px",
          // 细线
          isSolid: false,
          // 虚线--默认
          isDashed: true,
          // 边框颜色
          color: "#e8ecf2"
        },
        topBorder: {
          // 边框线条宽度
          width: "1px",
          // 细线
          isSolid: false,
          // 虚线--默认
          isDashed: true,
          // 边框颜色
          color: "#e8ecf2"
        },
        bottomBorder: {
          // 边框线条宽度
          width: "1px",
          // 细线
          isSolid: false,
          // 虚线--默认
          isDashed: true,
          // 边框颜色
          color: "#e8ecf2"
        }
      }
    };
  }

  /**
   * @description 清除单元格样式信息
   */
  clearCellStyleInfo() {
    this.style = CellInfo.setDefaultStyleConfig();
  }

  /**
   * @description 设置/取消 字体加粗
   * @param isWeight
   */
  setCellFontWeight(isWeight) {
    this.style.fontWeight = isWeight;
  }

  /**
   * @description 设置字体对齐方式
   * @param direction
   */
  setCellTextAlign(direction) {
    this.style.textAlign = direction;
  }

  /**
   * @@description 设置底部边框及右侧边框的颜色
   * @param color
   */
  setBasicBorderColor(color) {
    this.setRightBorderColor(color);
    this.setBottomBorderColor(color);
  }

  /**
   * @description 设置底部边框及右侧边框的样式
   * @param style
   */
  setBasicBorderStyle(style) {
    this.setRightBorderStyle(style);
    this.setBottomBorderStyle(style);
  }

  /**
   * @description 设置底部边框及右侧边框的线条宽度
   * @param width
   */
  setBasicBorderWidth(width) {
    this.setRightBorderWidth(width);
    this.setBottomBorderWidth(width);
  }

  /**
   * @description 设置顶部边框颜色
   * @param color
   */
  setTopBorderColor(color) {
    this.style.borderStyle.topBorder.color = color;
  }

  /**
   * @description 设置顶部边框宽度
   * @param width
   */
  setTopBorderWidth(width) {
    this.style.borderStyle.topBorder.width = width;
  }

  /**
   * @description 设置顶部边框样式
   * @param style
   */
  setTopBorderStyle(style) {
    this.style.borderStyle.topBorder.isDashed = style === "isDashed";
    this.style.borderStyle.topBorder.isSolid = style !== "isDashed";
  }

  /**
   * @description 设置右侧边框颜色
   * @param color
   */
  setRightBorderColor(color) {
    this.style.borderStyle.rightBorder.color = color;
  }

  /**
   * @description 设置右侧边框宽度
   * @param width
   */
  setRightBorderWidth(width) {
    this.style.borderStyle.rightBorder.width = width;
  }

  /**
   * @description 设置右侧边框样式
   * @param style
   */
  setRightBorderStyle(style) {
    this.style.borderStyle.rightBorder.isDashed = style === "isDashed";
    this.style.borderStyle.rightBorder.isSolid = style !== "isDashed";
  }

  /**
   * @description 设置底部边框颜色
   * @param color
   */
  setBottomBorderColor(color) {
    this.style.borderStyle.bottomBorder.color = color;
  }

  /**
   * @description 设置底部边框宽度
   * @param width
   */
  setBottomBorderWidth(width) {
    this.style.borderStyle.bottomBorder.width = width;
  }

  /**
   * @description 设置底部边框样式
   * @param type
   */
  setBottomBorderStyle(type) {
    this.style.borderStyle.bottomBorder.isDashed = type === "isDashed";
    this.style.borderStyle.bottomBorder.isSolid = type !== "isDashed";
  }

  /**
   * @description 设置左侧边框颜色
   * @param color
   */
  setLeftBorderColor(color) {
    this.style.borderStyle.leftBorder.color = color;
  }

  /**
   * @description 设置左侧边框宽度
   * @param width
   */
  setLeftBorderWidth(width) {
    this.style.borderStyle.leftBorder.width = width;
  }

  /**
   * @description 设置左侧边框样式
   * @param type
   */
  setLeftBorderStyle(type) {
    this.style.borderStyle.leftBorder.isDashed = type === "isDashed";
    this.style.borderStyle.leftBorder.isSolid = type !== "isDashed";
  }

  /**
   * @description 设置单元格行高
   * @param height
   */
  setCellRowHeight(height) {
    this.style.cellStyle.lineHeight = height;
  }

  /**
   * @description 设置单元格列宽
   * @param width
   */
  setCellColWidth(width) {
    this.style.cellStyle.cellWidth = width;
  }

  /**
   * @description 设置单元格背景颜色
   * @param color
   */
  setCellBackGroundColor(color) {
    this.style.backgroundColor = color;
  }

  /**
   * @description 移除选中的样式类
   */
  removeDuringClass() {
    this.wasDuring = false;
  }

  /**
   * @description 设置选中的样式类
   */
  setDuringClass() {
    this.wasDuring = true;
  }

  /**
   * @description 设置单元格的行合并值
   * @param num
   */
  setCellRowSpan(num) {
    this.style.cellSetting.rowSpan = num;
  }

  /**
   * @description 设置单元格的行列并值
   * @param num
   */
  setCellColSpan(num) {
    this.style.cellSetting.colSpan = num;
  }

  /**
   * @description 隐藏单元格
   * @param row
   * @param col
   */
  setCellHide(row, col) {
    this.wasDuring = false;
    if (row) {
      this.setCellRowSpan(row);
    }
    if (col) {
      this.setCellColSpan(col);
    }
  }

  /**
   * @description 显示单元格
   * @param row
   * @param col
   */
  setCellShow(row, col) {
    if (row) {
      this.setCellRowSpan(row);
    }
    if (col) {
      this.setCellColSpan(col);
    }
  }

  /**
   * @description 设置数据
   * @param data
   */
  setDataInfo(data) {
    this.data = data;
  }

  /**
   * @description 移除单元格数据信息
   */
  removeDataInfo() {
    this.data = {};
  }

  /**
   * @description 设置行坐标信息
   * @param num
   */
  setRowLineNum(num) {
    this.row = num;
  }

  /**
   * @description 设置列坐标信息
   * @param num
   */
  setColLineNum(num) {
    this.col = num;
  }

  /**
   * @description 设置单元格字体颜色
   * @param color
   */
  setCellFontColor(color) {
    this.style.fontColor = color;
  }
}
