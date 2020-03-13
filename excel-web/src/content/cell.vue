<template>
  <td
    class="components-excel-cell"
    :rowspan="dataInfo.style.cellSetting.rowSpan"
    :colspan="dataInfo.style.cellSetting.colSpan"
    :style="{
      'text-align': dataInfo.style.textAlign,
      'font-weight': dataInfo.style.fontWeight ? 'bold' : 'normal',
      'background-color': dataInfo.style.backgroundColor,
      'color': dataInfo.style.fontColor,
      'border-left-width': dataInfo.style.borderStyle.leftStyle.width,
      'border-top-width': dataInfo.style.borderStyle.topStyle.width,
      'border-right-width': dataInfo.style.borderStyle.rightStyle.width,
      'border-bottom-width': dataInfo.style.borderStyle.bottomStyle.width,
      'border-left-style': dataInfo.style.borderStyle.leftStyle.isDashed ? 'dashed': 'solid',
      'border-top-style': dataInfo.style.borderStyle.topStyle.isDashed ? 'dashed': 'solid',
      'border-right-style': dataInfo.style.borderStyle.rightStyle.isDashed ? 'dashed': 'solid',
      'border-bottom-style': dataInfo.style.borderStyle.bottomStyle.isDashed ? 'dashed': 'solid',
      'border-left-color': dataInfo.style.borderStyle.leftStyle.color,
      'border-top-color': dataInfo.style.borderStyle.topStyle.color,
      'border-right-color': dataInfo.style.borderStyle.rightStyle.color,
      'border-bottom-color': dataInfo.style.borderStyle.bottomStyle.color,
      'width':dataInfo.style.cellStyle.cellWidth && dataInfo.style.cellStyle.cellWidth> 0 ? dataInfo.style.cellStyle.cellWidth + 'px' : null,
      'height':dataInfo.style.cellStyle.lineHeight && dataInfo.style.cellStyle.lineHeight> 0 ? dataInfo.style.cellStyle.lineHeight + 'px' : null,
    }"
  >
    {{ dataInfo.name }}
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

    &.during {
      background-color: #4694df3b !important;
    }
  }
</style>
