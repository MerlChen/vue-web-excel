<template>
  <div class="components-excel">
    <excel-panel
      v-if="showPanel && showPanel === 'true'"
      :data-info="panelList"
    >
    </excel-panel>
    <excel-content
      :class="{'show-panel': showPanel && showPanel === 'true'}"
      :store="store"
    >
    </excel-content>
  </div>
</template>

<script>
import excelPanel from "./src/panel";
import excelContent from "./src/content";
import Store from "./model";

export default {
  name: "EnExcel",
  components: {
    excelPanel,
    excelContent
  },
  props: {
    showPanel: {
      type: [ String, Boolean ],
      default: true
    },
    value: {
      type: Array,
      default: () => {
        return [];
      }
    },
    panelList: {
      type: Object,
      default: () => {
        return {};
      }
    },
    row: {
      type: [ String, Number ],
      default: 10
    },
    cell: {
      type: [ String, Number ],
      default: 10
    }
  },
  data() {
    return { store: {} };
  },
  watch: {
    value: {
      deep: true,
      immediate:true,
      handler(value) {
        this.store = new Store();
        if (value.length > 0) {
          this.store.init(value);
        } else {
          this.store.setDefaultList(this.row, this.cell);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .components-excel {
    width: 100%;
    display: flex;
    justify-content: flex-start;

    .components-excel-content {
      width: 100%;

      &.show-panel {
        width: calc(100% - 280px);
      }
    }
  }
</style>
