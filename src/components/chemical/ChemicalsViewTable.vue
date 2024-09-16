<template>
    <div class="container mt-6">
        <table class="table table-bordered table-striped table-hover">
            <thead class="thead-dark">
                <tr>
                    <th>Tên hóa chất</th>
                    <th>Hãng sản xuất</th>
                    <th>Dạng hóa chất</th>
                    <th>Khối lượng đăng kí</th>
                    <th>Khối lượng còn lại</th>
                    <th>Mô tả đóng gói</th>
                    <th>Phân loại hóa chất</th>
                    <th>Phân loại hóa chất</th>
                    <th>Thông tin người nhập</th>
                    <th>Vị trí</th>
                    <th>Hạn dụng</th>
                    <th>Tình trạng đăng kí</th>
                    <th>Tình trạng hóa chất</th>
                    <th>Nguồn</th>
                    <th>Khác</th>
                    <th v-if="hasPermission('USER')">Cập nhật</th>
                    <th v-if="hasPermission('ADMIN')">Xóa</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(chemical, index) in chemicals" :key="index">
                    <td>{{ chemical.name }}</td>
                    <td>{{ chemical.brand }}</td>
                    <td>{{ chemical.chemicalType }}</td>
                    <td>{{ chemical.manufactoryQuantity }}</td>
                    <td>{{ chemical.remain }}</td>
                    <td>{{ chemical.chemicalTypeInfo }}</td>
                    <td>{{ chemical.chemicalClass }}</td>
                    <td>{{ chemical.chemicalClassInfo }}</td>
                    <td>{{ chemical.registerUser }}</td>
                    <td>{{ chemical.position }}</td>
                    <td>{{ chemical.expiredDate }}</td>
                    <td>{{ chemical.chemicalStatus }}</td>
                    <td>{{ chemical.impExpInfo }}</td>
                    <td>{{ chemical.purchaseSrc }}</td>
                    <td>{{ chemical.otherInfo }}</td>
                    <td v-if="hasPermission('USER')">
                        <button class="btn btn-primary btn-sm">Cập nhật</button>
                    </td>
                    <td v-if="hasPermission('ADMIN')">
                        <button class="btn btn-danger btn-sm">Xóa</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

// import api from '@/plugin/axios';
// import { ref } from 'vue'

// const chemicals = ref([]);

// const fetchDataChemicals = async () => {
//     try {
//         const conn = api.get("chemical/list")
//         // .then((res)=>{
//         //     console.log(res);
//         //     console.log(res.data);
//         //     console.log("2");
//         //     // chemicals.value = res.data;
//         //     return res.data;
//         // });
//         return conn;
//     } catch (error) {
//         console.error('There was a problem with the axios request:', error);
//     }
// }
export default {
    props: ['chemicals'],
    data() {
        return {
            mutableList: JSON.parse(this.chemicals)
            // chemicals: [],  // Define the property here
            // test: ""
        };
    },
    methods: {
        hasPermission(role) {
            // Giả sử bạn có một cách để kiểm tra quyền người dùng, ví dụ từ Vuex hoặc API.
            // Đây là một ví dụ giả định để kiểm tra quyền.
            const userRole = 'USER'; // Thay thế bằng quyền thực tế của người dùng
            return role === userRole || role === 'ADMIN';
        }
    },

    mounted() {
        // fetchDataChemicals().then(res => {
        //     this.chemicals = res.data
        // });
    },
    setup() {

        // const chemicals = ref([
        //     /* ... */
        // ])

        // const itemRefs = useTemplateRef('items')
        // onMounted(async () => {
        //     try {
        //         const response = await axios.get(' http://localhost:8081/api/v1/chemical/list', {
        //             headers: {
        //                 'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyMSIsImlhdCI6MTcyNjA1Njc0MSwiZXhwIjoxNzI2MTE2NzQxfQ.QQZvyHPW-eJywBJKuZLPLRNkAiyikb9t8IkBlr3Z7Dk`
        //             }
        //         });
        //         this.chemicals = response.data;
        //     } catch (error) {
        //         console.error('There was a problem with the axios request:', error);
        //     }

        // })
        // return;
    }
}
</script>

<style scoped>
/* Tùy chỉnh CSS nếu cần */
.table {
    width: 100%;
}
</style>