<template>
    <Vueform :endpoint="false" @submit="submitForm" name="registerForm">
        <GroupElement name="chemicalInformation" label="Thông tin cơ bản">
            <TextElement name="name" rules="required" :messages="{ required: 'Nhập tên hóa chất' }"
                placeholder="Tên hóa chất" :columns="6" />
            <SelectElement :search="true" label-prop="name" value-prop="id" name="brand" :native="true"
                :items="brandList" placeholder="Nơi sản xuất" :columns="3" />
        </GroupElement>
        <GroupElement name="chemicalDescription" label="Mô tả hóa chất">
            <SelectElement :search="true" name="chemicalType" :native="false" :items="['Dung dịch', 'Bột']" :columns="2"
                placeholder="Loại hóa chất" />
            <SelectElement :search="true" name="chemicalTypeInfo" :native="false" :items="['Lọ', 'Gói']" :columns="2"
                placeholder="Đóng gói" />
            <TextElement rules="required" :messages="{ required: 'Nhập khối lượng hóa chất' }"
                name="manufactoryQuantity" placeholder="K/lượng,Thể tích" :columns="2" :mask="{
                    mask: 'number',
                    thousandsSeparator: '',     // any single char
                    scale: 2,                   // digits after fractional delimiter, 0 for integers
                    padFractionalZeros: false,  // pads zeros at end to the length of scale
                    normalizeZeros: true,       // removes zeros at ends (eg. 1,10 -> 1,1)
                    radix: ',',                 // fractional delimiter
                    mapToRadix: ['.'],          // symbols to process as radix
                    min: 0,                // minimum allowed value
                    max: 10000,                 // maximum allowed value
                    autofix: true,              // replace with min/max value if outside of range
                }" />

            <TextElement name="otherInfo" :native="false" :columns="2" placeholder="Mô tả khác" />
            <DateElement name="expiredDate" :columns="1" placeholder="Hạn sử dụng" />
        </GroupElement>
        <GroupElement name="chemicalClassGroup" label="Phân loại hóa chất">
            <SelectElement :search="true" name="chemicalClass" :native="false"
                :items="['Sinh học phân tử', 'Hóa chất vi sinh', 'Dung môi']" :columns="2"
                placeholder="Phân loại hóa chất" default="Sinh học phân tử" />

            <SelectElement :search="true" name="chemicalClassInfo" :native="false" :items="['Vô cơ', 'Hữu cơ']"
                :columns="2" placeholder="Loại HC vi sinh" :conditions="[
                    [
                        'chemicalClassGroup.chemicalClass',
                        '==',
                        'Hóa chất vi sinh'
                    ]
                ]" />
            <TextElement name="chemicalClassInfo1" :native="false" :columns="3" placeholder="Mô tả phân loại hóa chất"
                :conditions="[
                    [
                        'chemicalClassGroup.chemicalClass',
                        '!=',
                        'Hóa chất vi sinh'
                    ]
                ]" />
        </GroupElement>
        <GroupElement name="ImportUser" label="Người nhập hóa chất">
            <TextElement name="registerUser" :columns="2" />
        </GroupElement>
        <GroupElement name="chemicalImportDescription" label="Thông tin nhập hóa chất">
            <SelectElement :search="true" name="position" label-prop="positionInfo" value-prop="id" :items="positionLst"
                placeholder="Vị trí đặt hóa chất" :columns="2" />
            <TextElement name="chemicalStatus" placeholder="Tình trạng hóa chất" :columns="2" />
            <TextElement name="purchaseSrc" placeholder="Nguồn" :columns="2" />
        </GroupElement>
        <ButtonElement name="submit" add-class="mt-2" submits>
            Đăng kí hóa chẩt
        </ButtonElement>
    </Vueform>
</template>
<script>
import api from '@/plugin/axios';
import { toast } from 'vue3-toastify';
// import { Validator } from '@vueform/vueform'

// const abc = class extends Validator {
//     check(value) {
//         return /^[A-Z]*$/.test(value);
//     }
//     get msg() {
//         return 'abc'
//     }
// }


export default {
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
        async submitForm(form$) {
            const data = form$.data
            form$.submitting = true
            form$.cancelToken = form$.$vueform.services.axios.CancelToken.source()
            let response
            const url = form$.$vueform.services.axios.defaults.baseURL + 'chemical/add';
            try {
                if (data.chemicalClass != 'Hóa chất vi sinh') {
                    data.chemicalClassInfo = data.chemicalClassInfo1;
                }
                response = await form$.$vueform.services.axios.post(url,
                    data /* | data | requestData */,
                    {
                        cancelToken: form$.cancelToken.token,
                    }
                ).then(res => {
                    if (!res.data.errorMessage) {
                        toast.success("Hóa chất đã được đăng ký!", {
                            position: toast.POSITION.TOP_CENTER,
                        });
                        //reset form
                        form$.reset();
                    }
                    else {
                        toast.error(res.data.errorMessage, {
                            position: toast.POSITION.TOP_CENTER,
                        });
                    }
                })
            } catch (error) {
                toast.error(error, {
                    position: toast.POSITION.TOP_CENTER,
                });
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