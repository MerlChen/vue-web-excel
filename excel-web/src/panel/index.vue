<template>
  <div class="components-excel-panel">
    <div class="title">
      {{ dataInfo.title }}
    </div>
    <div class="left-words-list-container">
      <div
        v-for="(item,index) in dataInfo.list"
        :key="index"
        class="left-words-item"
      >
        <div
          class="left-words-item-name"
          :class="{'open': item.id === selectedData.id }"
          @click="toggleItemData(item)"
        >
          {{ item.name }}
          <en-icon
            name="xiayiye"
            size="12px"
          >
          </en-icon>
        </div>
        <en-collapse-area>
          <div
            v-show="item.id === selectedData.id"
            class="left-words-item-children"
          >
            <div
              v-for="el in item.children"
              :key="el.id"
              draggable="true"
              class="left-words-children-item"
              @dragstart="dragStart(el)"
            >
              {{ el.name }}
            </div>
          </div>
        </en-collapse-area>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Panel",
  props: {
    dataInfo: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return { selectedData: {} };
  },
  methods: {
    /**
     * @description 左侧字段列表拖动事件控制
     * @param evt
     * @return {boolean}
     */
    move(evt) {
      // 自身内部不允许移动
      if (evt.from === evt.to) {
        return false;
      }
    },
    /**
     * @description 展开/收起某父类
     * @param itemData
     */
    toggleItemData(itemData) {
      if (itemData.id === this.selectedData.id) {
        this.selectedData = {};
        return;
      }
      this.selectedData = itemData;
    },
    dragStart(elData) {
      this.$emit("startDrag", elData);
    }
  }
};
</script>

<style lang="scss" scoped>
  .components-excel-panel {
    width: 280px;
    height: 100%;
    text-align: left;
    background-color: #F5F7FA;
    border-right: 1px solid #DCE5EC;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    .title {
      width: 100%;
      font-size: 12px;
      line-height: 12px;
      color: #4694DF;
      font-weight: bold;
      background-color: #ffffff;
      padding: 20px 30px;
    }

    .left-words-list-container {
      height: calc(100% - 72px);
      overflow-y: auto;

      .left-words-item {
        width: 100%;

        .left-words-item-name {
          font-size: 12px;
          line-height: 12px;
          padding: 20px 20px 20px;
          border-bottom: 1px solid #E8ECF2;
          cursor: pointer;
          position: relative;

          .en-icon {
            position: absolute;
            width: 12px;
            height: 12px;
            color: #A9B5C6;
            right: 20px;
            top: 20px;
            transition: 0.3s ease-in-out all;
          }

          &:hover,
          &.open {
            color: #4694df;

            .en-icon {
              color: #4694df;
            }
          }

          &.open {
            .en-icon {
              color: #4694df;
              transform: rotate(90deg);
            }
          }
        }

        .left-words-item-children {
          padding: 0 20px 20px 0;
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          border-bottom: 1px solid #E8ECF2;

          .left-words-children-item {
            width: calc(calc(100% - 40px) / 2);
            margin: 20px 0 0 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            background-color: #ffffff;
            font-size: 12px;
            line-height: 12px;
            color: #636C78;
            padding: 10px 10px 10px;
            border: 1px solid #E8ECF2;
            border-radius: 4px 4px 4px;
            cursor: pointer;

            &:hover {
              color: #4694df;
            }
          }
        }
      }
    }
  }
</style>
