<template>
  <div class="components-excel-content">
    <excel-toolbar
      :store="store"
    >
    </excel-toolbar>
    <table
      cellpadding="0"
      cellspacing="0"
      border="none"
    >
      <tr
        v-for="(item,index) in store.allCells"
        :key="index"
      >
        <excel-cell
          v-for="el in item"
          :key="el.id"
          :data-info="el"
          :class="{
            'during': el.wasDuring
          }"
          :store="store"
          draggable="false"
          @mousedown.native="mouseDown(el)"
          @mousemove.native="mouseMove(el)"
          @mouseup.native="mouseUp(el)"
          @contextmenu.native="setDefineData(el)"
          @drop.native="dragEnd(el)"
          @dragover.native.prevent="dragOver(el)"
          @dragleave.native.prevent="dragLevel(el)"
        >
        </excel-cell>
      </tr>
    </table>
    <define-menu
      :store="store"
    >
    </define-menu>
  </div>
</template>

<script>
import excelToolbar from "./toolbar";
import excelCell from "./cell";
import defineMenu from "./defineMenu";

export default {
  name: "EnExcelContent",
  components: {
    excelToolbar,
    excelCell,
    defineMenu
  },
  props: {
    store: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return { isSelectCell: false, cellInfo: {} };
  },
  mounted() {
    let _this = this;
    window.onmouseup = ((e) => {
      if (e.target.localName !== "td" && _this.isSelectCell) {
        _this.isSelectCell = false;
        _this.store.clearSelectedCells();
      }
    });
  },
  methods: {
    /**
     * @description 鼠标按键按下，记录数据信息
     * @param elData
     */
    mouseDown(elData) {
      this.isSelectCell = true;
      this.store.clearSelectedCells();
      this.store.setCellPositionInfo(elData);
    },
    /**
     * @description 鼠标移动，记录坐标信息
     * @param elData
     */
    mouseMove(elData) {
      if (this.isSelectCell) {
        this.store.setCellPositionInfo(elData);
      }
    },
    /**
     * @description 鼠标松开，记录最后一个位置的数据信息
     * @param elData
     */
    mouseUp(elData) {
      this.store.setCellPositionInfo(elData, true);
      this.isSelectCell = false;
    },
    /**
     * @description 右键点击，记录数据
     */
    setDefineData(elData) {
      this.store.setMenuDataInfo(elData);
    },
    /**
     * @description 拖拽结束时，设置数据到对应单元格内
     */
    dragEnd(elData) {
      elData.setDataInfo(this.store.dragData);
      this.store.clearSelectedCells();
    },
    /**
     * @description 鼠标移入单元格
     */
    dragOver(elData) {
      elData.setDuringClass();
    },
    /**
     * @description 鼠标移开了
     */
    dragLevel(elData) {
      elData.removeDuringClass();
    }
  }
};
</script>

<style lang="scss" scoped>
  .components-excel-content {
    table {
      margin: 20px 20px 20px;
      width: calc(100% - 40px);
      display: inline-table;
      border-collapse: collapse;
      table-layout: fixed;

      tr {
        width: 100%;
        border-bottom: none;
      }
    }
  }
</style>
