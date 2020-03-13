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
          v-for="(el,eIndex) in item"
          :key="eIndex"
          :data-info="el"
          :class="{
            'during':
              store.startRow &&
              index >= store.startRow &&
              index <= store.endRow &&
              eIndex >= store.startCell &&
              eIndex <= store.endCell
          }"
          @mousedown.native="mouseDown(index,eIndex)"
          @mousemove.native="mouseMove(index,eIndex)"
          @mouseup.native="mouseUp(index,eIndex)"
        >
        </excel-cell>
      </tr>
    </table>
  </div>
</template>

<script>
import excelToolbar from "./toolbar";
import excelCell from "./cell";

export default {
  name: "EnExcelContent",
  components: { excelToolbar, excelCell },
  props: {
    store: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return { isSelectCell: false };
  },
  methods: {
    mouseDown(rIndex, cIndex) {
      this.store.startRow = rIndex;
      this.store.startCell = cIndex;
      this.isSelectCell = true;
    },
    mouseMove(rIndex, cIndex) {
      if (this.isSelectCell) {
        if (rIndex < this.store.startRow && cIndex < this.store.startCell) {
          this.store.endRow = this.store.startRow;
          this.store.endCell = this.store.startCell;
          this.store.startRow = rIndex;
          this.store.startCell = cIndex;
        } else {
          this.store.endRow = rIndex;
          this.store.endCell = cIndex;
        }
      }
    },
    mouseUp(rIndex, cIndex) {
      this.store.endRow = rIndex;
      this.store.endCell = cIndex;
      this.store.SelectedCells;
      this.isSelectCell = false;
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
