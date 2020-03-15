<template>
    <td
            class="components-excel-cell"
            :rowSpan="dataInfo.style.cellSetting.rowSpan"
            :colSpan="dataInfo.style.cellSetting.colSpan"
            v-if="dataInfo.isShow"
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
        {{ "行:"+ dataInfo.row +"_列：" + dataInfo.col }}
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
