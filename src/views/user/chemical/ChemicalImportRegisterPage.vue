<template>
  <div>
    <div style="margin-bottom: 10px;">
      <h2><b>Nhập hóa chất</b></h2>
    </div>
    <div>
      <ChemicalImportRegisterForm />
    </div>
  </div>
</template>

<script>
import ChemicalImportRegisterForm from '@/components/chemical/ChemicalImportRegisterForm.vue'

export default {
  components: {
    ChemicalImportRegisterForm
  }
}
</script>