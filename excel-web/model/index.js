import cellInfo from "./cellOperation";

export default class Store {
  constructor() {
    this.cells = {};
    this.allCells = [];
    this.startRow = null;
    this.startCell = null;
    this.endRow = null;
    this.endCell = null;
    this.allWeight = false;
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
        this.cells[index + "_" + cIndex] = new cellInfo(this, cItem.data, cItem.id, index, cIndex);
      });
    });
  }

  /**
   * @description 设置选中的单元格
   * @return {Array}
   * @constructor
   */
  get reGetSelectedCells() {
    this.selectedCells = [];
    this.allCells.map((rItem, rIndex) => {
      rItem.map((cItem, cIndex) => {
        if (rIndex >= this.startRow && cIndex >= this.startCell && rIndex <= this.endRow && cIndex <= this.endCell) {
          this.selectedCells.push(cItem);
        }
      });
    });
    this.checkWeightInfo();
    return this.selectedCells;
  }

  /**
   * @description 设置默认表格
   * @param row 行数
   * @param cell 列数
   * @return {Array}
   */
  setDefaultList(row, cell) {
    row = row ? row : 10;
    cell = cell ? cell : 10;
    this.allCells = [];
    for (let r = 0; r < row; r++) {
      let rowObj = [];
      for (let c = 0; c < cell; c++) {
        let cellCon = new cellInfo(this, {}, new Date().getTime() + "_" + r + "_" + c, r, c);
        rowObj.push(cellCon);
      }
      this.allCells.push(rowObj);
    }
  }

  /**
   * @description 设置选中的单元格边框颜色
   * @param color
   */
  changeBorderColor(color) {
    this.reGetSelectedCells;
    this.selectedCells.map(item => {
      // 设置单元格基础边框颜色=>底部边框及右侧边框
      item.setBasicBorderColor(color);
      // 如果是第一行的，需要设置顶部边框样式
      if (item.row === 0) {
        item.setTopBorderColor(color);
      }
      // 如果不是第一行的，需要设置上一行的当前个单元格的底部边框样式
      if (item.row !== 0) {
        this.allCells[item.row - 1][item.cell].setBottomBorderColor(color);
      }
      // 如果是第一列的，需要设置左侧边框样式
      if (item.cell === 0) {
        item.setLeftBorderColor(color);
      }
      // 如果不是第一列的，需要设置上一列的当前个单元格的左侧边框样式
      if (item.cell !== 0) {
        this.allCells[item.row][item.cell - 1].setRightBorderColor(color);
      }
    });
  }

  /**
   * @description 更改单元格对齐方式
   * @param align
   */
  changeCellTextAlign(align) {
    this.reGetSelectedCells;
    this.selectedCells.map(item => {
      item.setCellTextAlign(align);
    });
  }

  changeCellFontWeight() {
    this.reGetSelectedCells;
    this.selectedCells.map(item => {
      item.setCellFontWeight(!this.allWeight);
    });
  }

  /**
   * @description 设置行高
   * @param height
   */
  changeCellHeight(height) {
    this.reGetSelectedCells;
    this.selectedCells.map(item => {
      item.setCellRowHeight(height);
    });
  }

  /**
   * @description 更改单元格背景颜色
   * @param color
   */
  changeCellBg(color) {
    this.reGetSelectedCells;
    this.selectedCells.map(item => {
      item.setCellBackGroundColor(color);
    });
  }

  /**
   * @description 更改单元格字体颜色
   * @param color
   */
  changeCellFontColor(color) {
    this.reGetSelectedCells;
    this.selectedCells.map(item => {
      item.setCellFontColor(color);
    });
  }

  /**
   * @description 更改单元格列宽
   * @param width
   */
  changeCellWidth(width) {
    this.reGetSelectedCells;
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
