<template>
  <td
    v-if="dataInfo.style.cellSetting.rowSpan > 0 && dataInfo.style.cellSetting.colSpan > 0"
    class="components-excel-cell"
    :rowSpan="dataInfo.style.cellSetting.rowSpan"
    :colSpan="dataInfo.style.cellSetting.colSpan"
    :style="{
      'text-align': dataInfo.style.textAlign,
      'font-weight': dataInfo.style.fontWeight ? 'bold' : 'normal',
      'background-color': dataInfo.style.backgroundColor,
      'color': dataInfo.style.fontColor,
      'border-left-width': dataInfo.style.borderStyle.leftBorder.width,
      'border-top-width': dataInfo.style.borderStyle.topBorder.width,
      'border-right-width': dataInfo.style.borderStyle.rightBorder.width,
      'border-bottom-width': dataInfo.style.borderStyle.bottomBorder.width,
      'border-left-style': dataInfo.style.borderStyle.leftBorder.isDashed ? 'dashed': 'solid',
      'border-top-style': dataInfo.style.borderStyle.topBorder.isDashed ? 'dashed': 'solid',
      'border-right-style': dataInfo.style.borderStyle.rightBorder.isDashed ? 'dashed': 'solid',
      'border-bottom-style': dataInfo.style.borderStyle.bottomBorder.isDashed ? 'dashed': 'solid',
      'border-left-color': dataInfo.style.borderStyle.leftBorder.color,
      'border-top-color': dataInfo.style.borderStyle.topBorder.color,
      'border-right-color': dataInfo.style.borderStyle.rightBorder.color,
      'border-bottom-color': dataInfo.style.borderStyle.bottomBorder.color,
      'width':dataInfo.style.cellStyle.cellWidth && dataInfo.style.cellStyle.cellWidth> 0 ? dataInfo.style.cellStyle.cellWidth + 'px' : null,
      'height':dataInfo.style.cellStyle.lineHeight && dataInfo.style.cellStyle.lineHeight> 0 ? dataInfo.style.cellStyle.lineHeight + 'px' : null,
    }"
  >
    {{ dataInfo.data.name }}
    <en-icon
      v-if="store.cellConfig.couldDelete && dataInfo.data.name"
      name="shanchu-liebiao"
      class="components-excel-cell-icon"
      @click.native="removeCellDataInfo"
    >
    </en-icon>
  </td>
</template>

<script>
export default {
  name: "CellModel",
  props: {
    dataInfo: {
      type: Object,
      default: () => {
        return {};
      }
    },
    store: {}
  },
  methods: {
    /**
     * @description 清除单元格的数据
     */
    removeCellDataInfo() {
      this.dataInfo.removeDataInfo();
      this.store.clearSelectedCells();
    }
  }
};
</script>

<style lang="scss">
  .components-excel-cell {
    user-select: none;
    user-modify: none;
    height: 40px;
    line-height: 40px;
    position: relative;

    .components-excel-cell-icon {
      position: absolute;
      top: -5px;
      right: -5px;
      width: 16px;
      height: 16px;
      z-index: 3;
      cursor: pointer;
      display: none;
    }

    &.during {
      background-color: #4694df3b !important;
    }

    &:hover {
      .components-excel-cell-icon {
        display: block;
      }
    }
  }
</style>
