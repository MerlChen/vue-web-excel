<template>
  <div class="en-excel-tool-bar">
    <!-- 清除格式 -->
    <div
      class="content-tool-bar-item"
      @click="clearStyleInfo"
    >
      <l-icon
        name="qingchugeshi"
        class="content-tool-bar-main-icon"
      >
      </l-icon>
      <div class="label">
        清除格式
      </div>
    </div>
    <!-- 字段格式 -->
    <div class="content-tool-bar-item">
      <div class="content-tool-bar-main">
        <l-icon
          name="geshi-wenben"
          class="content-tool-bar-main-icon"
        >
        </l-icon>
        <div class="label">
          字段格式
        </div>
        <l-icon
          name="xiala"
          class="content-tool-bar-drop-icon"
        >
        </l-icon>
      </div>
      <div class="content-tool-bar-menu-list">
        <div class="content-tool-bar-menu-item">
          <l-icon
            name="geshi-wenben"
            class="dropdown-main-icon"
          >
          </l-icon>
          <div class="dropdown-main-label">
            文本
          </div>
        </div>
        <div class="content-tool-bar-menu-item">
          <l-icon
            name="shuzhi-ziduangeshi"
            class="dropdown-main-icon"
          >
          </l-icon>
          <div class="dropdown-main-label">
            数值
          </div>
          <l-icon
            name="xiayiye"
            class="child-menu-icon"
          >
          </l-icon>
          <div class="child-menu">
            <div class="child-menu-item with-input">
              <input
                class="l-input"
                v-model="digitLength"
                type="text"
                placeholder="请输入"
              >
              位小数
            </div>
            <div class="child-menu-item">
              字段排序-升序
            </div>
            <div class="child-menu-item">
              数值为0显示空
            </div>
            <div class="child-menu-item">
              数值为0显示0
            </div>
            <div class="child-menu-item">
              数值为0显示--
            </div>
            <div class="child-menu-item">
              显示千分符
            </div>
          </div>
        </div>
        <div class="content-tool-bar-menu-item">
          <l-icon
            name="jine-ziduangeshi"
            class="dropdown-main-icon"
          >
          </l-icon>
          <div class="dropdown-main-label">
            金额
          </div>
          <l-icon
            name="xiayiye"
            class="child-menu-icon"
          >
          </l-icon>
          <div class="child-menu">
            <div class="child-menu-item">
              ￥
            </div>
            <div class="child-menu-item">
              ＄
            </div>
            <div class="child-menu-item">
              €
            </div>
            <div class="child-menu-item">
              ￡
            </div>
          </div>
        </div>
        <div class="content-tool-bar-menu-item">
          <l-icon
            name="riqi-ziduangeshi"
            class="dropdown-main-icon"
          >
          </l-icon>
          <div class="dropdown-main-label">
            日期
          </div>
          <l-icon
            name="xiayiye"
            class="child-menu-icon"
          >
          </l-icon>
          <div class="child-menu" style="width: 160px;">
            <div class="child-menu-item">
              YYYY/MM/DD
            </div>
            <div class="child-menu-item">
              MM月DD日
            </div>
            <div class="child-menu-item">
              YYYY年MM月
            </div>
            <div class="child-menu-item">
              YYYY年MM月DD日
            </div>
            <div class="child-menu-item">
              YYYY/MM/DD hh:mm:ss
            </div>
          </div>
        </div>
        <div class="content-tool-bar-menu-item">
          <l-icon
            name="baifenbi-ziduangeshi"
            class="dropdown-main-icon"
          >
          </l-icon>
          <div class="dropdown-main-label">
            百分数
          </div>
        </div>
      </div>
    </div>
    <!-- 对齐方式 -->
    <div class="content-tool-bar-item">
      <div class="content-tool-bar-main">
        <l-icon
          name="zuoduiqi"
          class="content-tool-bar-main-icon"
        >
        </l-icon>
        <div class="label">
          对齐方式
        </div>
        <l-icon
          name="xiala"
          class="content-tool-bar-drop-icon"
        >
        </l-icon>
      </div>
      <div class="content-tool-bar-menu-list">
        <div
          class="content-tool-bar-menu-item"
          @click="textAlign('left')"
        >
          <l-icon
            name="zuoduiqi"
            class="dropdown-main-icon"
          >
          </l-icon>
          <div class="dropdown-main-label">
            居左对齐
          </div>
        </div>
        <div
          class="content-tool-bar-menu-item"
          @click="textAlign('center')"
        >
          <l-icon
            name="juzhongduiqi"
            class="dropdown-main-icon"
          >
          </l-icon>
          <div class="dropdown-main-label">
            居中对齐
          </div>
        </div>
        <div
          class="content-tool-bar-menu-item"
          @click="textAlign('right')"
        >
          <l-icon
            name="youduiqi"
            class="dropdown-main-icon"
          >
          </l-icon>
          <div class="dropdown-main-label">
            居右对齐
          </div>
        </div>
      </div>
    </div>
    <!-- 合并拆分 -->
    <div
      class="content-tool-bar-item"
      @click="mergeCellInfo"
    >
      <l-icon
        name="hebing-biaogecaozuo"
        class="content-tool-bar-main-icon"
      >
      </l-icon>
      <div class="label">
        {{ store.isSplit ? "拆分" : "合并" }}
      </div>
    </div>
    <!-- 行高列宽 -->
    <div class="content-tool-bar-item">
      <div class="content-tool-bar-main">
        <l-icon
          name="liekuan"
          class="content-tool-bar-main-icon"
        >
        </l-icon>
        <div class="label">
          行高列宽
        </div>
        <l-icon
          name="xiala"
          class="content-tool-bar-drop-icon"
        >
        </l-icon>
      </div>
      <div class="content-tool-bar-menu-list" style="width: 220px">
        <div class="content-tool-bar-menu-item">
          <l-icon
            name="zuoduiqi"
            class="dropdown-main-icon"
          >
          </l-icon>
          <div class="dropdown-main-label width-label">
            <div class="component-label">
              设置行高
            </div>
            <input
              v-model="lineHeight"
              placeholder="请输入"
              class="component l-input"
              @keyup.enter="changeLineHeight"
            />
          </div>
        </div>
        <div class="content-tool-bar-menu-item">
          <l-icon
            name="juzhongduiqi"
            class="dropdown-main-icon"
          >
          </l-icon>
          <div class="dropdown-main-label width-label">
            <div class="component-label">
              设置列宽
            </div>
            <input
              v-model="cellWidth"
              placeholder="请输入"
              class="component l-input"
              @keyup.enter="changeCellWidth"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- 字体加粗 -->
    <div
      class="content-tool-bar-item"
      :class="{'active': store.allWeight}"
      @click="fontWeight"
    >
      <l-icon
        name="zitijiacu"
        class="content-tool-bar-main-icon"
      >
      </l-icon>
      <div class="label">
        字体加粗
      </div>
    </div>
    <!-- 背景颜色 -->
    <div class="content-tool-bar-item">
      <div class="content-tool-bar-main">
        <div class="content-tool-bar-color-picker">
          <l-icon
            name="beijingyanse"
            class="content-tool-bar-main-icon background-color-icon"
          >
          </l-icon>
          <div
            class="picker-color-container"
            :style="{'background-color': dataInfo.backgroundColor}"
          >
          </div>
        </div>
        <div class="label">
          填充颜色
        </div>
        <l-icon
          name="xiala"
          class="content-tool-bar-drop-icon"
        >
        </l-icon>
      </div>
    </div>
    <!-- 字体颜色 -->
    <div class="content-tool-bar-item">
      <div class="content-tool-bar-main">
        <div class="content-tool-bar-color-picker">
          <l-icon
            name="zitiyanse1"
            class="content-tool-bar-main-icon"
          >
          </l-icon>
          <div
            class="picker-color-container"
            :style="{'background-color': dataInfo.color}"
          >
          </div>
        </div>
        <div class="label">
          字体颜色
        </div>
        <l-icon
          name="xiala"
          class="content-tool-bar-drop-icon"
        >
        </l-icon>
      </div>
    </div>
    <!-- 边框设置 -->
    <div class="content-tool-bar-item">
      <div class="content-tool-bar-main">
        <l-icon
          name="biankuangshezhi"
          class="content-tool-bar-main-icon"
        >
        </l-icon>
        <div class="label">
          边框设置
        </div>
        <l-icon
          name="xiala"
          class="content-tool-bar-drop-icon"
        >
        </l-icon>
      </div>
      <div class="content-tool-bar-menu-list">
        <div
          class="content-tool-bar-menu-item"
          @click="borderSetting('noBorder')"
        >
          <l-icon
            name="wukuangxian"
            class="dropdown-main-icon"
          >
          </l-icon>
          <div class="dropdown-main-label">
            无边框
          </div>
        </div>
        <div
          class="content-tool-bar-menu-item split"
          @click="borderSetting('allBorder')"
        >
          <l-icon
            name="biankuangshezhi"
            class="dropdown-main-icon"
          >
          </l-icon>
          <div class="dropdown-main-label">
            所有边框
          </div>
        </div>
        <div class="content-tool-bar-menu-item">
          <div class="dropdown-main-label">
            边框颜色
          </div>
          <l-icon
            name="xiayiye"
            class="child-menu-icon"
          >
          </l-icon>
        </div>
        <div class="content-tool-bar-menu-item">
          <div class="dropdown-main-label">
            边框样式
          </div>
          <l-icon
            name="xiayiye"
            class="child-menu-icon"
          >
          </l-icon>
          <div class="child-menu" style="width: 300px;">
            <div
              class="child-menu-item line-list"
              @click="borderSetting('isSolidBorder')"
            >
              <div class="line-label">
                粗线
              </div>
              <div class="line line-bold"></div>
            </div>
            <div
              class="child-menu-item line-list"
              @click="borderSetting('isSolid')"
            >
              <div class="line-label">
                细线
              </div>
              <div class="line line-normal"></div>
            </div>
            <div
              class="child-menu-item line-list"
              @click="borderSetting('isDashed')"
            >
              <div class="line-label">
                虚线
              </div>
              <div class="line line-dashed"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lIcon from "./../../../../l-icon"
export default {
  name: "Toolbar",
  components:{ lIcon },
  props: [ "store" ],
  data() {
    return {
      dataInfo: {
        backgroundColor: "#4694df",
        color: "#000000",
        digitNum: 0
      },
      borderColor: "",
      isMergeCell: true,
      lineHeight: null,
      cellWidth: null,
      digitLength: null,
    };
  },
  methods: {
    /**
     * @description 清除格式
     */
    clearStyleInfo() {
      this.store.clearStyleInfo();
      this.clearStoreInfo();
    },
    /**
     * @description 更改单元格字体对齐方式
     * @param align
     */
    textAlign(align) {
      this.store.changeCellTextAlign(align);
      this.clearStoreInfo();
    },
    /**
     * @description 字体加粗处理
     */
    fontWeight() {
      this.store.changeCellFontWeight();
      this.clearStoreInfo();
    },
    /**
     * @description 更改单元格背景颜色
     * @param res
     */
    changeBackgroundColor(res) {
      this.store.changeCellBg(res);
      this.clearStoreInfo();
    },
    /**
     * @description 更改单元格字体颜色
     * @param res
     */
    changeFontColor(res) {
      this.store.changeCellFontColor(res);
      this.clearStoreInfo();
    },
    /**
     * @description 边框设置
     * @param border
     */
    borderSetting(border) {
      if (border === "noBorder") {
        this.store.changeNoBorderInfo();
      } else if (border === "allBorder") {
        this.store.changeAllBorderInfo();
      } else if (border === "isSolidBorder" || border === "isSolid") {
        this.store.changeSolidBorderInfo(border);
      } else if (border === "isDashed") {
        this.store.changeDashedBorderInfo();
      }
      this.clearStoreInfo();
    },
    /**
     * @description 更改边框颜色
     * @param res
     */
    changeBorderColor(res) {
      this.store.changeBorderColor(res);
      this.clearStoreInfo();
    },
    /**
     * @description 合并拆分
     */
    mergeCellInfo() {
      if (this.store.isSplit) {
        this.store.splitCellOp();
      } else {
        this.store.mergeCellOp();
      }
      this.clearStoreInfo();
    },
    /**
     * @description 调整行高
     */
    changeLineHeight() {
      this.store.changeCellHeight(this.lineHeight);
      this.lineHeight = null;
      this.clearStoreInfo();
    },
    /**
     * @description 调整列宽
     */
    changeCellWidth() {
      this.store.changeCellWidth(this.cellWidth);
      this.cellWidth = null;
      this.clearStoreInfo();
    },
    clearStoreInfo() {
      this.store.clearSelectedCells();
    }
  }
};
</script>

<style lang="scss" scoped>
  .en-excel-tool-bar {
    width: 100%;
    background-color: #F7F9F9;
    padding: 0 40px;
    display: flex;
    justify-content: flex-start;

    .content-tool-bar-item {
      margin-right: 30px;
      position: relative;
      padding: 17px 0;
      cursor: pointer;

      .content-tool-bar-main-icon {
        width: 16px;
        height: 16px;
        color: #A9B5C6;

        &.background-color-icon {
          width: 18px;
          height: 18px;
        }
      }

      .label {
        color: #636C78;
        font-size: 12px;
        line-height: 12px;
        margin-top: 4px;
      }

      .content-tool-bar-drop-icon {
        position: absolute;
        width: 8px;
        height: 8px;
        color: #A9B5C6;
        top: 21px;
        left: 32px;
      }

      .content-tool-bar-menu-list {
        position: absolute;
        top: 67px;
        left: 0;
        width: 120px;
        display: none;
        background: #FFFFFF;
        border: 1px solid #E8ECF2;
        box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.04);
        border-radius: 4px;
        z-index: 3;

        .content-tool-bar-menu-item {
          padding: 2px 12px;
          display: flex;
          position: relative;
          cursor: pointer;
          justify-content: flex-start;

          &.split {
            border-bottom: 1px solid #E8ECF2;
          }

          &:hover {
            background-color: #F5F8FC !important;

            .l-icon {
              color: #4694df;
            }

            .dropdown-main-label {
              color: #4694df;

              &.width-label {
                .component {
                  display: block;
                }
              }
            }

            .child-menu {
              display: block;
            }
          }

          .dropdown-main-icon {
            margin: 8px 12px 8px 0;
            width: 16px;
            height: 16px;
            color: #A9B5C6;
          }

          .dropdown-main-label {
            color: #636C78;
            font-size: 12px;
            line-height: 32px;

            &.width-label {
              display: flex;
              justify-content: flex-start;

              .component-label {
                margin: 0 10px 0 0;
                line-height: 32px;
              }

              .component {
                width: 100px;
                display: none;
              }
            }
          }

          .child-menu-icon {
            width: 8px;
            height: 8px;
            position: absolute;
            right: 12px;
            top: 14px;
            color: #A9B5C6;
          }

          /* 子级菜单样式控制 */
          .child-menu {
            position: absolute;
            left: 100%;
            top: 0;
            width: 120px;
            padding: 6px 0;
            display: none;
            background: #FFFFFF;
            border: 1px solid #E8ECF2;
            box-shadow: 0 3px 7px 0 rgba(0, 0, 0, 0.04);
            border-radius: 4px;
            z-index: 3;

            .child-menu-item {
              padding: 0 12px;
              height: 36px;
              line-height: 36px;
              display: flex;
              justify-content: flex-start;
              font-size: 12px;
              color: #636C78;

              &.line-list {
                .line-label {
                  margin-right: 22px;
                  width: 24px;
                }

                .line {
                  width: calc(100% - 46px);
                  margin-top: 17px;

                  &.line-bold {
                    height: 2px;
                    border-bottom: 2px solid #A9B5C6;
                  }

                  &.line-normal {
                    height: 1px;
                    border-bottom: 1px solid #A9B5C6;
                  }

                  &.line-dashed {
                    height: 1px;
                    border-bottom: 1px dashed #A9B5C6;
                  }
                }

              }

              &.with-input /deep/ {
                padding: 0 2px;

                .l-input {
                  width: 60px;
                  margin-right: 4px;
                  padding: 0 12px;
                }
              }

              &:hover {
                background-color: #F5F8FC;
                color: #4694df;
              }
            }
          }

          /* 边框颜色设置区域 */
          .border-color-setting {
            width: 120px;
            height: 36px;
            position: absolute;
            left: 0;
            top: 0;
            opacity: 0;
            z-index: 3;
          }
        }
      }

      .content-tool-bar-color-picker {
        position: relative;

        .el-color-picker /deep/ {
          position: absolute;
          top: -17px;
          left: 0;
          opacity: 0;
          width: 100%;
          height: calc(100% + 50px);

          .el-color-picker__trigger {
            width: 100%;
            height: 100%;
          }
        }

        .picker-color-container {
          position: absolute;
          width: 16px;
          height: 2px;
          top: 16px;
          left: 50%;
          margin-left: -8px;
        }
      }

      &:hover {
        .l-icon {
          color: #4694df;
        }

        .label {
          color: #4694df;
        }

        .content-tool-bar-menu-list {
          display: block;
        }
      }

      &.active {
        .content-tool-bar-main-icon {
          color: #4694df;
          width: 18px;
          height: 18px;
        }

        .label {
          color: #4694df;
          font-weight: bold;
        }
      }
    }
  }
</style>
