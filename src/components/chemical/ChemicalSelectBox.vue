<template>
        <SelectElement :search="true" label-prop="chemicalName" value-prop="id" name="chemical"
            :native="true" :items="chemicalList" placeholder="Chọn hóa chất" :columns="3" :object="true" />
</template>
<script>
import api from '@/plugin/axios'


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
            api.get("chemical/list/master").then((res) => {
                this.chemicalList = res.data;
                console.log(this.chemicalList)
            }).catch((e) => {
                console.log(e)
            })
        },
    },
    mounted() {
        this.getAllChemical()
    }
}
</script>