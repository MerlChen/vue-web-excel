import cellInfo from "./cellOperation";

export default class Store {
  constructor() {
    // 所有的单元格
    this.allCells = [];
    // 拖拽选中时的起点行下标
    this.startRow = null;
    // 拖拽选中时的起点列下标
    this.startCol = null;
    // 拖拽选中时的终点行下标
    this.endRow = null;
    // 拖拽选中时的终点列下标
    this.endCol = null;
    // 选中的最左上角的单元格行列坐标
    this.beginCellInfo = null;
    // 选中的单元格是否全部加粗
    this.allWeight = false;
    // 选中的单元格
    this.selectedCells = [];
  }

  /**
   * @description 初始化
   * @param list
   */
  init(list) {
    this.allCells = list;
    list.map((item, index) => {
      item.map((cItem, cIndex) => {
        new cellInfo(this, cItem.data, cItem.id, index, cIndex);
      });
    });
  }

  /**
   * @description 设置选中的单元格
   * @return {Array}
   * @constructor
   */
  reGetSelectedCells() {
    this.selectedCells = [];
    this.allCells.map(rItem => {
      rItem.map(cItem => {
        // 如果单元格是覆盖状态，将其塞入至选中的数组内
        if (cItem.wasDuring) {
          this.selectedCells.push(cItem);
          // 如果不存在起点单元格的坐标信息，将单元格的坐标信息赋值
          if (!this.beginCellInfo) {
            this.beginCellInfo = cItem;
          }
        }
      });
    });
    this.checkWeightInfo();
  }

  /**
   * @description 清除选中
   */
  clearSelectedCells() {
    this.selectedCells.map(item => {
      item.wasDuring = false;
    });
    this.selectedCells = [];
    this.beginCellInfo = null;
    this.startRow = null;
    this.endRow = null;
    this.startCol = null;
    this.endCol = null;
  }

  /**
   * @description 检测单元格是否在覆盖范围内
   */
  checkCellDuringStatus() {
    this.allCells.map((item, row) => {
      item.map((cItem, col) => {
        // 如果是向右拖动的
        if (row >= this.startRow && row <= this.endRow) {
          this.toggleDuringClass(row, col, cItem);
        }
        // 如果是向左拖动的
        else if (row <= this.startRow && row >= this.endRow) {
          this.toggleDuringClass(row, col, cItem);
        }
        // 都不满足的情况下，移除选中的样式类
        else {
          cItem.removeDuringClass();
        }
      })
    });
  }

  /**
   * @description 设置/取消单元格的选中样式
   * @param row
   * @param col
   * @param cellData
   */
  toggleDuringClass(row, col, cellData) {
    // 如果是向下拖动的
    if (col >= this.startCol && col <= this.endCol) {
      cellData.setDuringClass();
    }
    // 如果是向上拖动的
    else if (col <= this.startCol && col >= this.endCol) {
      cellData.setDuringClass()
    }
    // 都不满足的情况下，移除选中的样式类
    else {
      cellData.removeDuringClass()
    }
  }

  /**
   * @description 设置默认表格
   * @param row 行数
   * @param col 列数
   * @return {Array}
   */
  setDefaultList(row, col) {
    row = row ? row : 10;
    col = col ? col : 10;
    this.allCells = [];
    for (let r = 0; r < row; r++) {
      let rowObj = [];
      for (let c = 0; c < col; c++) {
        let cellCon = new cellInfo(this, {}, new Date().getTime() + "_" + r + "_" + c, r, c);
        rowObj.push(cellCon);
      }
      this.allCells.push(rowObj);
    }
  }

  /**
   * @description 更改选中的单元格边框颜色
   * @param color
   */
  changeBorderColor(color) {
    this.reGetSelectedCells();
    this.selectedCells.map(item => {
      // 设置单元格基础边框颜色=>底部边框及右侧边框
      item.setBasicBorderColor(color);
      // 如果是第一行的，需要设置顶部边框样式
      if (item.row === 0) {
        item.setTopBorderColor(color);
      }
      // 如果不是第一行的，需要设置上一行的当前个单元格的底部边框样式
      if (item.row !== 0) {
        this.allCells[item.row - 1][item.col].setBottomBorderColor(color);
      }
      // 如果是第一列的，需要设置左侧边框样式
      if (item.col === 0) {
        item.setLeftBorderColor(color);
      }
      // 如果不是第一列的，需要设置上一列的当前个单元格的左侧边框样式
      if (item.col !== 0) {
        this.allCells[item.row][item.col - 1].setRightBorderColor(color);
      }
    });
  }

  /**
   * @description 更改选中的单元格边框宽度
   * @param width
   */
  changeBorderWidth(width) {
    this.reGetSelectedCells();
    this.selectedCells.map(item => {
      // 设置单元格基础边框颜色=>底部边框及右侧边框
      item.setBasicBorderWidth(width);
      // 如果是第一行的，需要设置顶部边框样式
      if (item.row === 0) {
        item.setTopBorderWidth(width);
      }
      // 如果不是第一行的，需要设置上一行的当前个单元格的底部边框样式
      if (item.row !== 0) {
        this.allCells[item.row - 1][item.col].setBottomBorderWidth(width);
      }
      // 如果是第一列的，需要设置左侧边框样式
      if (item.col === 0) {
        item.setLeftBorderWidth(width);
      }
      // 如果不是第一列的，需要设置上一列的当前个单元格的左侧边框样式
      if (item.col !== 0) {
        this.allCells[item.row][item.col - 1].setRightBorderWidth(width);
      }
    });
  }

  /**
   * @description 将单元格边框设置成无边框
   */
  changeNoBorderInfo() {
    let borderColor = "#e8ecf2";
    let borderWidth = "1px";
    let borderType = "isDashed";
    this.reGetSelectedCells();
    this.selectedCells.map(item => {
      item.setBasicBorderWidth(borderWidth);
      item.setBasicBorderColor(borderColor);
      item.setBasicBorderStyle(borderType);
      // 如果是第一行的，需要设置顶部边框样式
      if (item.row === 0) {
        item.setTopBorderWidth(borderWidth);
        item.setTopBorderColor(borderColor);
        item.setTopBorderStyle(borderType);
      }
      // 如果不是第一行的，需要设置上一行的当前个单元格的底部边框样式
      if (item.row !== 0) {
        this.allCells[item.row - 1][item.col].setBottomBorderWidth(borderWidth);
        this.allCells[item.row - 1][item.col].setBottomBorderColor(borderColor);
        this.allCells[item.row - 1][item.col].setBottomBorderStyle(borderType);
      }
      // 如果是第一列的，需要设置左侧边框样式
      if (item.col === 0) {
        item.setLeftBorderWidth(borderWidth);
        item.setLeftBorderColor(borderColor);
        item.setLeftBorderStyle(borderType);
      }
      // 如果不是第一列的，需要设置当前行的前一列的边框样式
      if (item.col !== 0) {
        this.allCells[item.row][item.col - 1].setRightBorderWidth(borderWidth);
        this.allCells[item.row][item.col - 1].setRightBorderColor(borderColor);
        this.allCells[item.row][item.col - 1].setRightBorderStyle(borderType);
      }
    })
  }

  /**
   * @description 将单元格设置成所有边框
   */
  changeAllBorderInfo() {
    let borderColor = "#000000";
    let borderWidth = "1px";
    let borderType = "isSolid";
    this.reGetSelectedCells();
    this.selectedCells.map(item => {
      item.setBasicBorderWidth(borderWidth);
      item.setBasicBorderColor(borderColor);
      item.setBasicBorderStyle(borderType);
      // 如果是第一行的，需要设置顶部边框样式
      if (item.row === 0) {
        item.setTopBorderWidth(borderWidth);
        item.setTopBorderColor(borderColor);
        item.setTopBorderStyle(borderType);
      }
      // 如果不是第一行的，需要设置上一行的当前个单元格的底部边框样式
      if (item.row !== 0) {
        this.allCells[item.row - 1][item.col].setBottomBorderWidth(borderWidth);
        this.allCells[item.row - 1][item.col].setBottomBorderColor(borderColor);
        this.allCells[item.row - 1][item.col].setBottomBorderStyle(borderType);
      }
      // 如果是第一列的，需要设置左侧边框样式
      if (item.col === 0) {
        item.setLeftBorderWidth(borderWidth);
        item.setLeftBorderColor(borderColor);
        item.setLeftBorderStyle(borderType);
      }
      // 如果不是第一列的，需要设置当前行的前一列的边框样式
      if (item.col !== 0) {
        this.allCells[item.row][item.col - 1].setRightBorderWidth(borderWidth);
        this.allCells[item.row][item.col - 1].setRightBorderColor(borderColor);
        this.allCells[item.row][item.col - 1].setRightBorderStyle(borderType);
      }
    })
  }

  /**
   * @description 将单元格设置成实线边框
   * @param type
   */
  changeSolidBorderInfo(type) {
    let borderWidth = type === "isSolidBorder" ? "2px" : "1px";
    let borderType = "isSolid";
    this.reGetSelectedCells();
    this.changeBorderWidth(borderWidth);
    this.selectedCells.map(item => {
      item.setBasicBorderStyle(borderType);
      // 如果是第一行的，需要设置顶部边框样式
      if (item.row === 0) {
        item.setTopBorderStyle(borderType);
      }
      // 如果不是第一行的，需要设置上一行的当前个单元格的底部边框样式
      if (item.row !== 0) {
        this.allCells[item.row - 1][item.col].setBottomBorderStyle(borderType);
      }
      // 如果是第一列的，需要设置左侧边框样式
      if (item.col === 0) {
        item.setLeftBorderStyle(borderType);
      }
      // 如果不是第一列的，需要设置当前行的前一列的边框样式
      if (item.col !== 0) {
        this.allCells[item.row][item.col - 1].setRightBorderStyle(borderType);
      }
    })
  }

  /**
   * @description 将单元格设置成实线边框
   */
  changeDashedBorderInfo() {
    let borderWidth = "1px";
    let borderType = "isDashed";
    this.reGetSelectedCells();
    this.changeBorderWidth(borderWidth);
    this.selectedCells.map(item => {
      item.setBasicBorderStyle(borderType);
      // 如果是第一行的，需要设置顶部边框样式
      if (item.row === 0) {
        item.setTopBorderStyle(borderType);
      }
      // 如果不是第一行的，需要设置上一行的当前个单元格的底部边框样式
      if (item.row !== 0) {
        this.allCells[item.row - 1][item.col].setBottomBorderStyle(borderType);
      }
      // 如果是第一列的，需要设置左侧边框样式
      if (item.col === 0) {
        item.setLeftBorderStyle(borderType);
      }
      // 如果不是第一列的，需要设置当前行的前一列的边框样式
      if (item.col !== 0) {
        this.allCells[item.row][item.col - 1].setRightBorderStyle(borderType);
      }
    })
  }

  /**
   * @description 更改单元格对齐方式
   * @param align
   */
  changeCellTextAlign(align) {
    this.reGetSelectedCells();
    this.selectedCells.map(item => {
      item.setCellTextAlign(align);
    });
  }

  /**
   * @description 更改单元格字体加粗属性
   */
  changeCellFontWeight() {
    this.reGetSelectedCells();
    this.selectedCells.map(item => {
      item.setCellFontWeight(!this.allWeight);
    });
  }

  /**
   * @description 设置行高
   * @param height
   */
  changeCellHeight(height) {
    this.reGetSelectedCells();
    this.selectedCells.map(item => {
      item.setCellRowHeight(height);
    });
  }

  /**
   * @description 更改单元格背景颜色
   * @param color
   */
  changeCellBg(color) {
    this.reGetSelectedCells();
    this.selectedCells.map(item => {
      item.setCellBackGroundColor(color);
    });
  }

  /**
   * @description 更改单元格字体颜色
   * @param color
   */
  changeCellFontColor(color) {
    this.reGetSelectedCells();
    this.selectedCells.map(item => {
      item.setCellFontColor(color);
    });
  }

  /**
   * @description 更改单元格列宽
   * @param width
   */
  changeCellWidth(width) {
    this.reGetSelectedCells();
    this.selectedCells.map(item => {
      item.setCellColWidth(width);
    });
  }

  /**
   * @description 清除单元格样式
   */
  clearStyleInfo() {
    this.allCells.map(item => {
      item.map(cItem => {
        cItem.clearCellStyleInfo();
      });
    });
  }

  /**
   * @description 移除选中的样式类
   */
  clearCellPositionInfo() {
    this.startRow = null;
    this.startCol = null;
    this.endRow = null;
    this.endCol = null;
    this.beginCellInfo = null;
    this.selectedCells.map(item => {
      item.removeDuringClass();
    });
    this.selectedCells = [];
  }

  /**
   * @description 拖动选择单元格，进行单元格的数据信息记录
   * @param cellData 单元格信息
   * @param getSelected 是否需要获取选中的单元格
   */
  setCellPositionInfo(cellData, getSelected) {
    // 如果不存在起始单元格数据信息
    if (this.startRow === null && this.startCol === null) {
      this.startRow = cellData.row;
      this.startCol = cellData.col;
    } else {
      this.endRow = cellData.row;
      this.endCol = cellData.col;
      this.checkDuringCellInfo();
      if (getSelected) {
        this.reGetSelectedCells();
      }
    }
  }

  /**
   * @description 检查范围内是否存在合并的单元格
   * @description 如果存在合并的单元格，进行单元格检验
   */
  checkDuringCellInfo() {
    this.checkCellDuringStatus();
  }

  /**
   * @description 执行选中的单元格合并
   */
  mergeCellOp() {
    this.reGetSelectedCells();
    let rSpan = this.beginCellInfo.style.cellSetting.rowSpan;
    let cSpan = this.beginCellInfo.style.cellSetting.colSpan;
    this.selectedCells.map(item => {
      // 同行的计算出对应的列
      if (item.row === this.beginCellInfo.row && item.col !== this.beginCellInfo.col) {
        cSpan += item.style.cellSetting.colSpan
      }
      // 同列的计算出对应的行
      if (item.row !== this.beginCellInfo.row && item.col === this.beginCellInfo.col) {
        rSpan += item.style.cellSetting.rowSpan
      }
      // 不是开始的单元格，行列值都设置为0
      if (item !== this.beginCellInfo) {
        item.setCellHide(0, 0);
      }
    });
    this.beginCellInfo.setCellRowSpan(rSpan);
    this.beginCellInfo.setCellColSpan(cSpan);
  }

  /**
   * @description 检测是否为加粗状态
   * @description 如果是多个单元格，只要一个不是就不是
   */
  checkWeightInfo() {
    let flag = true;
    this.selectedCells.map(item => {
      if (!item.style.fontWeight) {
        flag = false;
      }
    });
    this.allWeight = flag;
  }
}
