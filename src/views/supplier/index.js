import supplier from "@/api/supplier";

export default {
    name: "index",
    data() {
        return {
            tableData: [],
            currentPage: 1,
            pageSize: 5,
            total: 0,
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
        async findAll() {
            let response = await supplier.findAll(this.currentPage, this.pageSize);
            this.tableData = response.list;
            this.total = response.total;
        },
        async addOrEdit() {
            if (this.formData.id) {
                //修改
                await supplier.updateEntity(this.formData);
            } else {
                //新增
                await supplier.addEntity(this.formData);
            }
            this.findAll();
        },
        async pageChange(page) {
            this.currentPage = page;
            this.findAll();
        },
        async findById(id) {
            this.formData = await supplier.findById(id);
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
                await supplier.deleteByIds(this.ids);
                this.findAll();
            }
        }
    }
}