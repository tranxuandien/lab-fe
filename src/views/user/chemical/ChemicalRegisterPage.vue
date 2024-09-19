<template>
  <div>
    <div style="margin-bottom: 10px;">
      <h2><b>Đăng kí hóa chất</b></h2>
    </div>
    <div>
      <ChemicalRegisterForm />
    </div>
  </div>
</template>

<script>
import ChemicalRegisterForm from '@/components/chemical/ChemicalRegisterForm.vue'

export default {
  components: {
    ChemicalRegisterForm
  }
}
</script>