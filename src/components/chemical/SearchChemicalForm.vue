<template>
    <div>
        <Vueform :endpoint="false" @submit="doSearch" name="searchChemicalForm">
            <GroupElement name="group1">
                <ChemicalSelectBox />
                <SelectElement :search="true" label-prop="name" value-prop="id" name="brand" :native="true"
                    :items="brandList" placeholder="Nơi sản xuất" :columns="3" />
                <SelectElement :search="true" name="chemicalType" :native="false" :items="['Dung dịch', 'Bột']"
                    :columns="2" placeholder="Loại hóa chất" />
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
            <ButtonElement align="center" name="submit" add-class="mt-2" submits>
                Tìm kiếm
            </ButtonElement>
        </Vueform>
    </div>
</template>
<script>
import api from '@/plugin/axios';
import { toast } from 'vue3-toastify';
import ChemicalSelectBox from '@/components/chemical/ChemicalSelectBox.vue'

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
                // interested: [],
                // terms: false
            },
            brandList: null,
            positionLst: null
        }
    },
    watch: {

    },
    methods: {
        async getAllBrand() {
            api.get("brand").then((res) => {
                this.brandList = res.data;
            }).catch(e => {
                console.log(e)
            })
        }
        ,
        async getAllPosition() {
            api.get("position").then((res) => {
                this.positionLst = res.data;
            }).catch((e) => {
                console.log(e)
            })
        },
        async doSearch(form$) {
            const data = form$.data
            form$.submitting = true
            form$.cancelToken = form$.$vueform.services.axios.CancelToken.source()
            let response
            const url = form$.$vueform.services.axios.defaults.baseURL + 'chemical/list';
            try {
                // if (data.chemicalClass != 'Hóa chất vi sinh') {
                //     data.chemicalClassInfo = data.chemicalClassInfo1;
                // }
                console.log(data)
                response = await form$.$vueform.services.axios.post(url,
                    data /* | data | requestData */,
                    {
                        cancelToken: form$.cancelToken.token,
                    }
                ).then(res => {
                    console.log(res)
                    if (!res.data.errorMessage) {
                        this.$emit('getData',res.data.data);
                    }
                    else {
                        toast.error(res.data.errorMessage, {
                            position: toast.POSITION.TOP_CENTER,
                        });
                    }
                })
            } catch (error) {
                console.log(error)
            } finally {
                form$.submitting = false
            }
            console.log('success', response)
        }
    },
    mounted() {
        this.getAllBrand()
        this.getAllPosition()
    }
} 
</script>