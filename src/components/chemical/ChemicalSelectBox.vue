<template>
        <SelectElement :search="true" label-prop="chemicalName" value-prop="id" name="chemical"
            :native="true" :items="chemicalList" placeholder="Chọn hóa chất" :columns="3" :object="true" />
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
            this.chemicalList = await axiosWrapper.get(process.env.VUE_APP_BASE_URL + 'api/v1/chemical/list/master');
            // api.get("chemical/list/master").then((res) => {
            //     this.chemicalList = res.data;
            //     console.log(this.chemicalList)
            // }).catch((e) => {
            //     console.log(e)
            // })
        },
    },
    mounted() {
        this.getAllChemical()
    }
}
</script>