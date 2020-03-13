export default class CellInfo {
  constructor(store, data, id, row, cell) {
    this.store = store;
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
        leftStyle: {
          // 边框线条宽度
          width: "1px",
          // 细线
          isSolid: false,
          // 虚线--默认
          isDashed: true,
          // 边框颜色
          color: "#e8ecf2"
        },
        rightStyle: {
          // 边框线条宽度
          width: "1px",
          // 细线
          isSolid: false,
          // 虚线--默认
          isDashed: true,
          // 边框颜色
          color: "#e8ecf2"
        },
        topStyle: {
          // 边框线条宽度
          width: "1px",
          // 细线
          isSolid: false,
          // 虚线--默认
          isDashed: true,
          // 边框颜色
          color: "#e8ecf2"
        },
        bottomStyle: {
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
    this.row = row;
    this.cell = cell;
    this.data = data || {};
    this.id = id || 0;
  }

  /**
   * @description 设置单元格默认样式
   * @return {{backgroundColor: string, textAlign: string, borderStyle: {leftStyle: {isSolid: boolean, color: string, isDashed: boolean, width: string}, rightStyle: {isSolid: boolean, color: string, isDashed: boolean, width: string}, bottomStyle: {isSolid: boolean, color: string, isDashed: boolean, width: string}, topStyle: {isSolid: boolean, color: string, isDashed: boolean, width: string}}, cellStyle: {cellWeight: null, lineHeight: null}, fieldStyle: {amount: {isRMB: boolean, isUSD: boolean, isEUR: boolean, isGBP: boolean}, dateFormat: {fullDate: boolean, dateAndTime: boolean, monthAndDate: boolean, yearAndMonth: boolean, fullShortDate: boolean}, percentage: boolean, text: boolean, numericalStyle: {orderByASC: boolean, emptyShowWait: boolean, showThousandSplit: boolean, emptyShowNull: boolean, digitNum: null, emptyShowZero: boolean}}, cellSetting: {rowSpan: number, colSpan: number}, fontWeight: boolean, fontColor: string}}
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
        leftStyle: {
          // 边框线条宽度
          width: "1px",
          // 细线
          isSolid: false,
          // 虚线--默认
          isDashed: true,
          // 边框颜色
          color: "#e8ecf2"
        },
        rightStyle: {
          // 边框线条宽度
          width: "1px",
          // 细线
          isSolid: false,
          // 虚线--默认
          isDashed: true,
          // 边框颜色
          color: "#e8ecf2"
        },
        topStyle: {
          // 边框线条宽度
          width: "1px",
          // 细线
          isSolid: false,
          // 虚线--默认
          isDashed: true,
          // 边框颜色
          color: "#e8ecf2"
        },
        bottomStyle: {
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
   * @description 设置顶部边框颜色
   * @param color
   */
  setTopBorderColor(color) {
    this.style.borderStyle.topStyle.color = color;
  }

  /**
   * @description 设置右侧边框颜色
   * @param color
   */
  setRightBorderColor(color) {
    this.style.borderStyle.rightStyle.color = color;
  }

  /**
   * @description 设置底部边框颜色
   * @param color
   */
  setBottomBorderColor(color) {
    this.style.borderStyle.bottomStyle.color = color;
  }

  /**
   * @description 设置左侧边框颜色
   * @param color
   */
  setLeftBorderColor(color) {
    this.style.borderStyle.leftStyle.color = color;
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
   * @description 设置单元格字体颜色
   * @param color
   */
  setCellFontColor(color) {
    this.style.fontColor = color;
  }

}

