<template>
    <div class ="col-md-12 form-search">
        <Vueform :endpoint="false" @submit="doSearch" name="searchChemicalForm">
            <GroupElement name="group1" :columns="{ container: 12, label: 4, wrapper: 12 }">
                <ChemicalSelectBox />
                <SelectElement :search="true" label-prop="name" value-prop="id" name="brand" :native="true"
                    :items="brandList" placeholder="Nơi sản xuất" :columns="{ container: 3, label: 4, wrapper: 12 }" />
                <SelectElement :search="true" name="chemicalType" :native="false" :items="['Dung dịch', 'Bột']"
                :columns="{ container: 3, label: 4, wrapper: 12 }" placeholder="Loại hóa chất" />
            </GroupElement>
            <GroupElement name="group2">
                <SelectElement :search="true" name="chemicalClass" :native="false"
                    :items="['Sinh học phân tử', 'Hóa chất vi sinh', 'Dung môi']" :columns="2"
                    placeholder="Phân loại hóa chất" />
                <SelectElement :search="true" name="position" label-prop="positionInfo" value-prop="id"
                    :items="positionLst" placeholder="Vị trí đặt hóa chất" :columns="2" />
                <SelectElement :search="true" name="impExpType" :native="false"
                    :items="['Hóa chất mới', 'Sắp hết', 'Hết']" :columns="2" placeholder="Trạng thái hóa chất" />
            </GroupElement>
            <ButtonElement name="submit" add-class="md-2 btn-search" submits>
                Tìm kiếm
            </ButtonElement>
        </Vueform>
    </div>
</template>
<script>
// import api from '@/plugin/axios';
// import { toast } from 'vue3-toastify';
import ChemicalSelectBox from '@/components/chemical/ChemicalSelectBox.vue'
import { axiosWrapper } from '@/plugin/axiosWrapper';

export default {
    components: {
        ChemicalSelectBox
    },
    data() {
        return {
            // abc,
            chemical: {
                name: '',
                manufactoryQuantity: '',
                shptChemical: '',
                other: '',
                importUser: '',
                chemicalProperty: '',
                purchaseSrc: '',
            },
            brandList: null,
            positionLst: null
        }
    },
    methods: {
        async getAllBrand() {
            this.brandList = await axiosWrapper.get('api/v1/brand');
        }
        ,
        async getAllPosition() {
            this.positionLst = await axiosWrapper.get('api/v1/position');
        },
        async doSearch(form$) {
            const data = form$.data;
            form$.submitting = true;
            const result = await axiosWrapper.post('api/v1/chemical/list', data).finally(()=>{
                form$.submitting = false;
            })
            this.$emit('getData', result.data);
        }
    },
    mounted() {
        this.getAllBrand()
        this.getAllPosition()
    }
} 
</script>
<style>
.form-search{
    padding-left: 10%;
}
.btn-search{
    padding-left: 40%;
    margin-bottom: 50px;
}
</style>