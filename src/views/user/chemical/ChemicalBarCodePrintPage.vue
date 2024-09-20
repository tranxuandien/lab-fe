<template>
    <div>
        <div style="margin-bottom: 10px;">
            <h2><b> In tem hóa chất</b></h2>
        </div>
        <Vueform :endpoint="false" @submit="print">
            <ChemicalSelectBox />
            <TextElement name="printNumber" input-type="number" placeholder="Nhập số lượng tem" rules="required"
                :columns="2" :messages="{ required: 'Nhập khối lượng hóa chất' }" :mask="{
                    mask: 'number',
                    min: 0,                // minimum allowed value
                    max: 10,                 // maximum allowed value
                    autofix: true,              // replace with min/max value if outside of range
                }"></TextElement>
            <ButtonElement name="submit" add-class="mt-2" submits>In tem</ButtonElement>
        </Vueform>
    </div>
</template>

<script>
import ChemicalSelectBox from '@/components/chemical/ChemicalSelectBox.vue'
import { axiosWrapper } from '@/plugin/axiosWrapper';

export default {
    components: {
        ChemicalSelectBox
    },
    methods: {
        async print(form$) {
            const data = form$.data
            form$.submitting = true
            await axiosWrapper.get('api/v1/admin/chemical/codeprint?chemicalName=' + data.chemical.chemicalName + '&chemicalId=' + data.chemical.id + '&number=' + data.printNumber, null, true)
                .finally(() => {
                    form$.submitting = false
                })
        }
    }
}
</script>