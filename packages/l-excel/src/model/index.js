import cellInfo from "./cellOperation";
import cellConfig from "./cellConfig";

export default class Store {
  constructor() {
    // 所有的单元格
    this.allCells = [];
    // 拖拽选中的单元格最小的行
    this.minRow = null;
    // 拖拽选中的单元格最小的列
    this.minCol = null;
    // 拖拽选中的单元格最大的行
    this.maxRow = null;
    // 拖拽选中的单元格最大的列
    this.maxCol = null;
    // 拖拽开始时选中的节点坐标
    this.startCellInfo = {
      row: null,
      col: null
    };
    // 选中的最左上角的单元格行列坐标
    this.beginCellInfo = null;
    // 选中的单元格是否全部加粗
    this.allWeight = false;
    // 选中的单元格
    this.selectedCells = [];
    // 被合并的单元格
    this.mergedCells = [];
    // 合并及被合并的单元格信息
    this.mergedCellsList = [];
    // 选中的单元格是否可拆分
    this.isSplit = false;
    // 拖拽的数据源
    this.dragData = {};
    // 配置相关的信息
    this.cellConfig = new cellConfig();
    // 右键菜单的数据
    this.menuData = {};
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
    this.mergedCellsList = [];
    this.allCells.map(rItem => {
      rItem.map(cItem => {
        // 如果单元格是覆盖状态，并且单元格是显示的，将其塞入至选中的数组内
        if (cItem.wasDuring) {
          if (cItem.style.cellSetting.rowSpan > 0 &&
            cItem.style.cellSetting.colSpan > 0) {
            this.selectedCells.push(cItem);
          }
          this.mergedCellsList.push(cItem);
          // 如果不存在起点单元格的坐标信息，将单元格的坐标信息赋值
          if (!this.beginCellInfo) {
            this.beginCellInfo = cItem;
          }
        }
      });
    });
    this.isSplit = this.selectedCells.length === 1 &&
      (this.selectedCells[0].style.cellSetting.colSpan > 1 ||
        this.selectedCells[0].style.cellSetting.rowSpan > 1);
    this.checkWeightInfo();
  }

  /**
   * @description 清除选中
   */
  clearSelectedCells() {
    this.selectedCells.map(item => {
      item.wasDuring = false;
      item.removeDuringClass();
    });
    if (this.isSplit) {
      this.mergedCellsList.map(item => {
        item.wasDuring = true;
        item.setDuringClass();
      });
      this.isSplit = false;
    }
    this.selectedCells = [];
    this.selectedCells = [];
    this.beginCellInfo = null;
    this.minRow = null;
    this.maxRow = null;
    this.minCol = null;
    this.maxCol = null;
  }

  /**
   * @description 检测单元格是否在覆盖范围内
   */
  checkCellDuringStatus() {
    this.allCells.map(item => {
      item.map(cItem => {
        if (cItem.row <= this.maxRow && cItem.col <= this.maxCol && cItem.row >= this.minRow && cItem.col >= this.minCol) {
          cItem.setDuringClass();
        } else {
          cItem.removeDuringClass();
        }
      });
    });
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
    });
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
    });
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
    });
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
    });
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
   * @description 拖动选择单元格，进行单元格的数据信息记录
   * @param cellData 单元格信息
   * @param getSelected 是否需要获取选中的单元格
   */
  setCellPositionInfo(cellData, getSelected) {
    // 如果不存在起始单元格数据信息
    if (this.minRow === null && this.minCol === null) {
      this.minRow = cellData.row;
      this.minCol = cellData.col;
      this.maxRow = cellData.row;
      this.maxCol = cellData.col;
      this.startCellInfo = {
        row: cellData.row,
        col: cellData.col
      };
    } else {
      this.checkPositionInfo(cellData);
      if (getSelected) {
        this.reGetSelectedCells();
      }
    }
  }

  /**
   * @description 检测拖到的单元格的坐标体系
   * @param cellData
   */
  checkPositionInfo(cellData) {
    let cRow = cellData.row + cellData.style.cellSetting.rowSpan - 1;
    let cCol = cellData.col + cellData.style.cellSetting.colSpan - 1;
    // 判断拖动的方向，以起点为准心
    // 如果是向下拖动
    if (cRow > this.startCellInfo.row) {
      this.maxRow = cRow;
      // 向右拖动
      if (cCol > this.startCellInfo.col) {
        this.maxCol = cCol;
        // 向左拖动
      } else {
        this.maxCol = this.startCellInfo.col;
        this.minCol = cCol;
      }
      // 向上拖动
    } else {
      this.minRow = cRow;
      this.maxRow = this.startCellInfo.row;
      // 向右拖动
      if (cCol > this.startCellInfo.col) {
        this.maxCol = cCol;
        // 向左拖动
      } else {
        this.maxCol = this.startCellInfo.col;
        this.minCol = cCol;
      }
    }
    // 如果存在合并的单元格，需要检测坐标是否会发生碰撞
    if (this.mergedCells.length > 0) {
      this.checkMergeCellInfo();
      // 否则直接执行单元格状态变更
    } else {
      this.checkCellDuringStatus();
    }
  }

  /**
   * @description 执行拖拽时与合并单元格的碰撞检查
   */
  checkMergeCellInfo() {
    // 暂存之前的起始行列坐标信息
    let minR = this.minRow, maxR = this.maxRow, minC = this.minCol, maxC = this.maxCol;
    // 遍历合并的单元格是否有影响到此拖拽情况的
    this.mergedCells.map(item => {
      // 合并单元格的起点行
      let minRow = item.row;
      // 合并单元格的终点行
      let maxRow = item.row + item.style.cellSetting.rowSpan - 1;
      // 合并单元格的起点列
      let minCol = item.col;
      // 合并单元格的终点列
      let maxCol = item.col + item.style.cellSetting.colSpan - 1;
      // 如果行列都在范围内
      if (maxC >= minCol && minC <= maxCol && maxR >= minRow && minR <= maxRow) {
        // 如果终点的行小于合并单元格的终点行
        if (maxR < maxRow) {
          // 重置终点行
          this.maxRow = maxRow;
        }
        // 如果起点的行大于合并单元格的起点行
        if (minR > minRow) {
          // 重置起点行
          this.minRow = minRow;
        }
        // 如果起点的列大于合并单元格的起点列
        if (minC > minCol) {
          // 重置起点裂
          this.minCol = minCol;
        }
        // 如果终点的列小于合并单元格的终点列
        if (maxC < maxCol) {
          // 重置终点列
          this.maxCol = maxCol;
        }
      }
    });
    // 如果存在坐标被修改过，那么说明坐标还未确定，需要重新执行一次
    if (this.minCol !== minC || this.maxCol !== maxC || this.maxRow !== maxR || this.minRow !== minR) {
      this.checkMergeCellInfo();
      // 坐标确认之后，执行单元格的状态变更
    } else {
      this.checkCellDuringStatus();
    }
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
        cSpan += item.style.cellSetting.colSpan;
      }
      // 同列的计算出对应的行
      if (item.row !== this.beginCellInfo.row && item.col === this.beginCellInfo.col) {
        rSpan += item.style.cellSetting.rowSpan;
      }
      // 不是开始的单元格，行列值都设置为0
      if (item !== this.beginCellInfo) {
        item.setCellColSpan(0);
        item.setCellRowSpan(0);
      }
    });
    this.beginCellInfo.setCellRowSpan(rSpan);
    this.beginCellInfo.setCellColSpan(cSpan);
    // 存储合并的单元格信息
    this.mergedCells.push(this.beginCellInfo);
  }

  /**
   * @description 执行选中的单元格拆分
   */
  splitCellOp() {
    this.mergedCellsList.map(item => {
      item.setCellRowSpan(1);
      item.setCellColSpan(1);
    });
  }

  /**
   * @description 记录右键菜单点击的数据信息
   * @param data
   */
  setMenuDataInfo(data) {
    this.menuData = data;
  }

  /**
   * @description 在点击的行上方插入指定行
   * @param num
   */
  insertBeforeRow(num) {
    this.insertRowInfoOp(num);
  }

  /**
   * @description 在点击的行下方插入指定行
   * @param num
   */
  insertAfterRow(num) {
    this.insertRowInfoOp(num, true);
  }

  /**
   * @description 插入行处理
   * @param num
   * @param isDown
   */
  insertRowInfoOp(num, isDown) {
    if (this.mergedCells.length === 0) {
      for (let n = 0; n < num; n++) {
        let newRow = [];
        let r = this.menuData.row + n;
        for (let c = 0; c < this.cellConfig.col; c++) {
          let cellCon = new cellInfo(this, {}, new Date().getTime() + "_" + r + "_" + c, r, c);
          newRow.push(cellCon);
        }
        this.allCells.splice(isDown ? r + 1 : r, 0, newRow);
      }
    } else {
      this.checkCellEffect(num, isDown);
    }
    this.resetCellPositionInfo(num);
  }

  /**
   * @description 检查插入行时，合并单元格对其的影响
   * @param num
   * @param isDown
   */
  checkCellEffect(num, isDown) {
    this.mergedCells.map(item => {
      let rSpan = item.style.cellSetting.rowSpan;
      let cSpan = item.style.cellSetting.colSpan;
      let rNum = item.row + rSpan - 1;
      let cNum = item.col + cSpan - 1;
      let cRow = this.menuData.row;
      let newRow = [];
      // 如果当前行受到行插入的影响
      if (rNum > cRow && cRow >= item.row) {
        for (let i = 0; i < num; i++) {
          // 更新合并的单元格的行合并值
          item.setCellRowSpan(rSpan + 1);
          // 得到新的行数据
          newRow = this.produceNewRow();
          // 对新的行数据进行单元格的rowSpan、colSpan处理
          newRow.map(rItem => {
            if (item.col <= rItem.col && rItem.col <= cNum) {
              rItem.setCellRowSpan(0);
              rItem.setCellColSpan(0);
            }
          });
          this.allCells.splice(isDown ? cRow + 1 : cRow, 0, newRow);
        }
        // 如果当前行不受影响
      } else {
        for (let i = 0; i < num; i++) {
          newRow = this.produceNewRow();
          this.allCells.splice(isDown ? cRow + 1 : cRow, 0, newRow);
        }
      }
    });
  }

  /**
   * @description 生成新的一行单元格
   * @return {Array}
   */
  produceNewRow() {
    let colNum = this.cellConfig.col;
    let newRow = [];
    for (let i = 0; i < colNum; i++) {
      let cell = new cellInfo(this, {}, new Date().getTime() + "_" + i, +"_" + i, i, i);
      newRow.push(cell);
    }
    return newRow;
  }

  /**
   * @description 左侧插入列
   * @param num
   */
  insertBeforeCol(num) {
    this.insertColInfoOp(num, true);
  }

  /**
   * @description 右侧插入列
   * @param num
   */
  insertAfterCol(num) {
    this.insertColInfoOp(num);
  }

  /**
   * @description 插入列处理
   * @param num
   * @param isLeft
   */
  insertColInfoOp(num, isLeft) {
    // 如果不存在合并的单元格，直接进行插入
    if (this.mergedCells.length === 0) {
      let cCol = isLeft ? this.menuData.col : this.menuData.col + 1;
      this.allCells.map(item => {
        let cell = new cellInfo(this, {}, new Date().getTime());
        item.splice(cCol, 0, cell);
      });
    } else {
      this.checkInsertColEffect(num, isLeft);
    }
    this.resetCellPositionInfo();
  }

  /**
   * @description 在插入列前检测是否收到合并单元格的影响
   * @param num
   * @param isLeft
   */
  checkInsertColEffect(num, isLeft) {
    let cCol = isLeft ? this.menuData.col : this.menuData.col + 1;
    this.mergedCells.map(item => {
      let cSpan = item.style.cellSetting.colSpan;
      let iCol = item.col + cSpan - 1;
      if ((isLeft ? cCol <= iCol : cCol < iCol) && (isLeft ? cCol > item.col : cCol >= item.col)) {
        for (let i = 0; i < num; i++) {
          item.setCellColSpan(cSpan + 1);
        }
      }
    });
    this.allCells.map(item => {
      let flag = true;
      item.map(cItem => {
        let cSpan = cItem.style.cellSetting.colSpan;
        let iCol = cItem.col + cSpan - 1;
        if ((cCol > cItem.col && cCol <= iCol) || (cCol > cItem.col && cSpan === 0)) {
          flag = false;
        }
      });
      for (let i = 0; i < num; i++) {
        let cell = new cellInfo(this, {}, new Date().getTime());
        cell.setCellColSpan(flag ? 1 : 0);
        cell.setCellRowSpan(flag ? 1 : 0);
        item.splice(cCol, 0, cell);
      }
    });
  }

  /**
   * @description 删除指定行
   */
  deleteCurrentRow() {
    if (this.mergedCells.length === 0) {
      this.allCells.splice(this.menuData.row, 1);
    }
    this.resetCellPositionInfo();
  }

  /**
   * @description 删除指定列
   */
  deleteCurrentCol() {
    if (this.mergedCells.length === 0) {
      this.allCells.map(item => {
        item.splice(this.menuData.col, 1);
      });
    }
    this.resetCellPositionInfo();
  }

  /**
   * @description 重置单元格的行坐标信息
   */
  resetCellPositionInfo() {
    this.allCells.map((item, index) => {
      item.map((cItem, cIndex) => {
        cItem.setRowLineNum(index);
        cItem.setColLineNum(cIndex);
        cItem.id = new Date().getTime() + "_" + index + "_" + cIndex;
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

