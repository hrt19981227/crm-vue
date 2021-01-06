import category from "@/api/category";

export default {
    name: "index",
    data() {
        return {
            tableData: [],
            editDialog: false,
            delDialog: false,
            formData: {},
            ids: []
        }
    },
    created() {
        this.findAll();
    },
    methods: {
        async findAll(){
            this.tableData = await category.getTreeData();
        },
        async addOrEdit() {
            if (this.formData.id) {
                //修改
                await category.updateEntity(this.formData);
            } else {
                //新增
                await category.addEntity(this.formData);
            }
            this.findAll();
        },
        async pageChange(page) {
            this.currentPage = page;
            this.findAll();
        },
        async findById(id) {
            this.formData = await category.findById(id);
        },
        async selectionChangeListener(selection) {
            this.ids = [];
            selection.forEach(item => this.ids.push(item.id))
        },
        async deleteByIds(){
            if (this.ids.length == 0) {
                this.$notify.error({
                    title:'错误',
                    message:'请选择要删除的内容'
                })
            } else {
                await category.deleteByIds(this.ids);
                this.findAll();
            }
        }
    }
}