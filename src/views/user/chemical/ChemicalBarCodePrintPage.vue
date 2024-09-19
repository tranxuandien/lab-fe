<template>
    <div>
        <h2>In tem hóa chất</h2>
        <Vueform @submit="async (form$, FormData) => {
            const data = form$.data
            form$.submitting = true
            form$.cancelToken = form$.$vueform.services.axios.CancelToken.source()
            let response
            // console.log(data.chemical)
            const url = form$.$vueform.services.axios.defaults.baseURL + 'chemical/codeprint?chemicalName=' + data.chemical.chemicalName + '&chemicalId=' + data.chemical.id + '&number=' + data.printNumber;
            try {
                response = await form$.$vueform.services.axios.get(url,
                    {
                        cancelToken: form$.cancelToken.token,
                        responseType: 'blob',
                    }
                ).then((res) => {
                    form$.update({ tempData: res.data });
                });

            } catch (error) {
                console.error('error', error)
                return
            } finally {
                form$.submitting = false
            }
            console.log('success', response)
        }">
            <ChemicalSelectBox />
            <TextElement name="printNumber" input-type="number" placeholder="Nhập số lượng tem" rules="required"
                :columns="2" :messages="{ required: 'Nhập khối lượng hóa chất' }" :mask="{
                    mask: 'number',
                    min: 0,                // minimum allowed value
                    max: 10,                 // maximum allowed value
                    autofix: true,              // replace with min/max value if outside of range
                }"></TextElement>
            <TextElement name="tempData" hidden @change="saveFile"></TextElement>
            <ButtonElement name="submit" add-class="mt-2" submits>In tem</ButtonElement>
        </Vueform>
    </div>
</template>

<script>
// import { TextElement } from '@vueform/vueform';
// import { data } from 'autoprefixer';
import ChemicalSelectBox from '@/components/chemical/ChemicalSelectBox.vue'

export default {
    components: {
        ChemicalSelectBox
    },
    methods: {
        saveFile(val) {
            const url = window.URL.createObjectURL(new Blob([val], { type: "application/pdf" }));
            const tempLink = document.createElement('a');
            tempLink.href = url;
            tempLink.setAttribute('download',
                `chemical_barcode.pdf`);
            document.body.appendChild(tempLink);
            tempLink.click();
            document.body.removeChild(tempLink);
            window.URL.revokeObjectURL(url);
        }
    }
}
</script>