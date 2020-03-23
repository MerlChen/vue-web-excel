<template>
  <div class="components-excel">
    <excel-panel
      v-if="showPanel && showPanel === 'true'"
      :data-info="panelList"
      :store="store"
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
    col: {
      type: [ String, Number ],
      default: 10
    },
    couldDelete: {
      type: [ Boolean, String ],
      default: true
    }
  },
  data() {
    return { store: {} };
  },
  watch: {
    value: {
      deep: true,
      immediate: true,
      handler(value) {
        this.store = new Store();
        this.setConfigInfo();
        if (value.length > 0) {
          this.store.init(value);
        } else {
          this.store.setDefaultList(this.row, this.col);
        }
      }
    }
  },
  methods: {
    /**
     * @description 配置信息设置
     */
    setConfigInfo() {
      this.store.cellConfig.couldDelete = this.couldDelete !== "false" && this.couldDelete !== false;
      this.store.cellConfig.editAble = this.editAble !== "false" && this.editAble !== false;
      this.store.cellConfig.row = this.row;
      this.store.cellConfig.col = this.col;
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
