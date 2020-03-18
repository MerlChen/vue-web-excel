<template>
  <!-- 插入行列弹窗 -->
  <div
    v-if="menuInfo.showMenu"
    ref="defineMenu"
    :style="{
      'top':menuInfo.top+'px',
      'left':menuInfo.left + 'px'
    }"
    class="cell-row-insert-dialog"
  >
    <div class="cell-row-insert-item">
      <div class="label">
        在上方插入
      </div>
      <el-input v-model="insertInfo.beforeRow" @keydown.enter.native="insertBeforeRows">
      </el-input>
      <div class="label">
        行
      </div>
    </div>
    <div class="cell-row-insert-item">
      <div class="label">
        在下方插入
      </div>
      <el-input v-model="insertInfo.afterRow" @keydown.enter.native="insertAfterRows">
      </el-input>
      <div class="label">
        行
      </div>
    </div>
    <div class="cell-row-insert-item split" @click="deleteRows">
      删除所在行
    </div>
    <div class="cell-row-insert-item">
      <div class="label">
        在左侧插入
      </div>
      <el-input v-model="insertInfo.leftCell" @keyup.enter="insertCells(1)">
      </el-input>
      <div class="label">
        列
      </div>
    </div>
    <div class="cell-row-insert-item">
      <div class="label">
        在右侧插入
      </div>
      <el-input v-model="insertInfo.rightCell" @keyup.enter="insertCells(-1)">
      </el-input>
      <div class="label">
        列
      </div>
    </div>
    <div class="cell-row-insert-item" @click="deleteCells">
      删除所在列
    </div>
  </div>
</template>

<script>
export default {
  name: "DefineMenu",
  props: ["store", "dataInfo"],
  data() {
    return {
      menuInfo: {
        showMenu: false,
        top: 0,
        left: 0
      },
      insertInfo: {
        beforeRow: 1,
        afterRow: 1,
        leftCell: 1,
        rightCell: 1
      }
    };
  },
  mounted() {
    this.checkMenuStatus();
    this.checkMenuShow();
  },
  methods: {
    /**
     * @description 鼠标单击时，判断是否需要隐藏自定义菜单
     */
    checkMenuStatus() {
      window.onclick = ((e) => {
        if (this.menuInfo.showMenu) {
          let dom = this.$refs.defineMenu;
          let x = e.clientX;
          let y = e.clientY;
          let domXMin = dom.offsetLeft;
          let domYMin = dom.offsetTop;
          let domXMax = dom.offsetLeft + dom.offsetWidth;
          let domYMax = dom.offsetTop + dom.offsetHeight;
          if (x < domXMin || x > domXMax || y < domYMin || y > domYMax) {
            this.menuInfo.showMenu = false;
          }
        }
      });
    },
    /**
     * @description 鼠标右键点击时，判断是否在单元格内，如果在单元格内，显示自定义菜单
     */
    checkMenuShow() {
      window.oncontextmenu = ((e) => {
        if (e.target.localName === "td") {
          e.preventDefault();
          this.menuInfo.showMenu = true;
          setTimeout(() => {
            let maxWidth = document.body.scrollWidth;
            let menuWidth = this.$refs.defineMenu.offsetWidth;
            if (menuWidth + e.clientX - e.layerX + e.target.offsetWidth > maxWidth) {
              this.menuInfo.top = e.clientY - e.layerY + e.target.offsetHeight;
              this.menuInfo.left = e.clientX - e.layerX + e.target.offsetWidth - menuWidth;
            } else {
              this.menuInfo.top = e.clientY - e.layerY + e.target.offsetHeight;
              this.menuInfo.left = e.clientX - e.layerX + e.target.offsetWidth;
            }
          }, 10);
        }
      });
    },
    /**
     * @description 在当前单元格上方插入指定行
     */
    insertBeforeRows() {
      this.store.insertBeforeRow(this.insertInfo.beforeRow);
      this.insertInfo.beforeRow = 0;
    },
    /**
     * @description 在当前单元格上方插入指定行
     */
    insertAfterRows() {
      this.store.insertAfterRow(this.dataInfo, this.insertInfo.afterRow);
      this.insertInfo.afterRow = 0;
    },
    /**
     * @description 删除行
     */
    deleteRows() {
      this.$emit("change", { isDeleteRow: true });
    },
    /**
     * @description 插入列
     */
    insertCells(direction) {
      this.$emit("change", {
        isInsertCell: true,
        result: {
          isLeft: direction === 1,
          num: direction === 1 ? this.insertInfo.leftCell : this.insertInfo.rightCell
        }
      });
    },
    /**
     * @description 删除列
     */
    deleteCells() {
      this.$emit("change", { isDeleteCell: true });
    }
  }
};
</script>

<style lang="scss" scoped>
  .cell-row-insert-dialog {
    position: absolute;
    background: #FFFFFF;
    border: 1px solid #E8ECF2;
    box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.04);
    border-radius: 4px;
    width: 146px;
    z-index: 4;
    padding: 8px 0;
    transition: 0.3s ease-in-out all;

    .cell-row-insert-item {
      padding: 0 10px;
      line-height: 36px;
      display: flex;
      justify-content: flex-start;
      font-size: 12px;
      cursor: pointer;
      color: #636C78;

      &:hover {
        background-color: #F5F8FC;
        color: #4694DF;
      }

      /deep/ .el-input {
        width: 44px;
        margin: 0 3px;
        text-align: left;

        input {
          height: 24px;
          line-height: 24px;
        }
      }

      &.split {
        border-bottom: 1px solid #E8ECF2;
      }
    }
  }
</style>
