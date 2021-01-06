<template>
  <div class="entity-box">
    <!--    操作部分-->
    <div class="execute-box">
      <el-button-group>
        <el-button size="mini" type="success" @click="editDialog=true;formData={}">新增</el-button>
        <el-button size="mini" type="danger" @click="delDialog=true">删除</el-button>
      </el-button-group>
    </div>
    <div class="search-box">

    </div>
    <!--    表单数据-->
    <div class="table-box">
      <el-table
          ref="dataTable"
          stripe
          border
          tooltip-effect="light"
          :data="tableData"
          @selection-change="selectionChangeListener"
          row-key="id"
          :tree-props="{children: 'children'}"
          style="width: 100%">
        <el-table-column
            align="center"
            type="selection"
            width="55">
        </el-table-column>
        <el-table-column
            prop="categoryName"
            label="分类名称">
        </el-table-column>
        <el-table-column
            align="center"
            prop="categoryDesc"
            label="分类描述">
        </el-table-column>
        <el-table-column
            align="center"
            label="操作">
          <template v-slot="entity">
            <el-button size="mini" type="primary" @click="findById(entity.row.id);editDialog=true">编辑</el-button>
            <el-button size="mini" type="danger" @click="delDialog=true;$refs.dataTable.clearSelection();ids=[];ids.push(entity.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页-->
<!--    <div class="page-box">-->
<!--      <el-pagination-->
<!--          background-->
<!--          layout="prev, pager, next"-->
<!--          :current-page="currentPage"-->
<!--          :page-size="pageSize"-->
<!--          @current-change="pageChange"-->
<!--          :total="total">-->
<!--      </el-pagination>-->
<!--    </div>-->
    <!--    新建/编辑弹框-->
    <el-dialog
        title="实体操作"
        :visible.sync="editDialog"
        width="40%">
      <el-form ref="form" :model="formData" label-width="100px" size="small">
        <el-row>

            <el-form-item label="分类名称">
              <el-input v-model="formData.categoryName" placeholder="分类名称"></el-input>
            </el-form-item>
        </el-row>
          <el-row>
            <el-form-item label="分类描述">
              <el-input v-model="formData.categoryDesc" placeholder="分类描述"></el-input>
            </el-form-item>
          </el-row>
        <el-row>
            <el-form-item label="分类等级">
            <el-input v-model="formData.parentId" placeholder="分类等级"></el-input>
            </el-form-item>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
       <el-button @click="editDialog = false" size="mini">取 消</el-button>
       <el-button type="success" @click="editDialog = false;addOrEdit()" size="mini">确 定</el-button>
      </span>
    </el-dialog>
<!--    删除弹框-->
    <el-dialog
        title="温馨提示"
        :visible.sync="delDialog"
        width="30%">
      <span>你确定要删除吗？{{ids}}</span>
      <span slot="footer" class="dialog-footer">
       <el-button @click="delDialog = false" size="mini">取 消</el-button>
       <el-button type="success" @click="delDialog = false;deleteByIds()" size="mini">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script src="./index.js"></script>

<style scoped lang="less" src="./index.less"></style>