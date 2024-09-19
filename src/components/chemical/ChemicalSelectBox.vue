<template>
        <SelectElement :search="true" label-prop="chemicalName" value-prop="id" name="chemical"
            :native="true" :items="chemicalList" placeholder="Chọn hóa chất" :columns="{ container: 3, label: 4, wrapper: 12 }" :object="true" />
</template>
<script>
import { axiosWrapper } from '@/plugin/axiosWrapper'


export default {
    data() {
        return {
            chemicalList: null,
            chemicalName: null,
            chemicalId: null
        }
    },
    watch: {

    },
    methods: {
        async getAllChemical() {
            this.chemicalList = await axiosWrapper.get('api/v1/chemical/list/master');
        },
    },
    mounted() {
        this.getAllChemical()
    }
}
</script>