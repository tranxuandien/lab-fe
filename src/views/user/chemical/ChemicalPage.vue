<template>
  <div>
    <div style="margin-bottom: 10px;">
      <b><h2>Danh sách hóa chất</h2></b>
    </div>
    <div>
      <div class="col-md-12 d-flex justify-content-center"><SearchChemicalForm @getData="searchData" /></div>
    </div>
    <div>
      <ChemicalsViewTable :chemicals="chemicals" />
    </div>
  </div>
</template>

<script>
import ChemicalsViewTable from '@/components/chemical/ChemicalsViewTable.vue'
import SearchChemicalForm from '@/components/chemical/SearchChemicalForm.vue'

export default {
  data() {
    return {
      chemicals: null
    }
  },
  components: {
    SearchChemicalForm,
    ChemicalsViewTable
  }
  ,
  methods: {
    searchData(data) {
      console.log("child data")
      console.log(data)
      this.chemicals = data;
    }
  }
}
</script>