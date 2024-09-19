import Layout from '@/views/user/Layout.vue';
import ChemicalPage from '@/views/user/chemical/ChemicalPage.vue'
import ChemicalRegisterPage from '@/views/user/chemical/ChemicalRegisterPage.vue'
import ChemicalImportRegisterPage from '@/views/user/chemical/ChemicalImportRegisterPage.vue'
import ChemicalBarCodePrintPage from '@/views/user/chemical/ChemicalBarCodePrintPage.vue'

export default {
    path: '/user',
    component: Layout,
    children: [
        {
            path: 'chemical',
            name: 'chemical',
            component: ChemicalPage
        },
        {
            path: 'chemical/register',
            name: 'chemicalRegister',
            component: ChemicalRegisterPage
        },
        {
            path: 'chemical/import/register',
            name: 'chemicalImportRegister',
            component: ChemicalImportRegisterPage
        },
        {
            path: 'chemical/barcode/print',
            name: 'chemicalBarCodePrintPage',
            component: ChemicalBarCodePrintPage
        },
    ]
}