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
                    <!-- <th>Thông tin người nhập</th> -->
                    <th>Vị trí</th>
                    <th>Hạn dụng</th>
                    <!-- <th>Tình trạng đăng kí</th> -->
                    <th>Tình trạng hóa chất</th>
                    <!-- <th>Nguồn</th> -->
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
                    <!-- <td>{{ chemical.registerUser }}</td> -->
                    <td>{{ chemical.position }}</td>
                    <td>{{ chemical.expiredDate }}</td>
                    <!-- <td>{{ chemical.chemicalStatus }}</td> -->
                    <td>{{ chemical.impExpInfo }}</td>
                    <!-- <td>{{ chemical.purchaseSrc }}</td> -->
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
export default {
    props: ['chemicals'],
    data() {
        return {
            mutableList: JSON.parse(this.chemicals)
        };
    },
    methods: {
        hasPermission(role) {
            const userRole = 'ROLE_USER'; // Thay thế bằng quyền thực tế của người dùng
            return role === userRole || role === 'ROLE_ADMIN';
        }
    },
}
</script>

<style scoped>
/* Tùy chỉnh CSS nếu cần */
.table {
    width: 100%;
}
</style>