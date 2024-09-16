<template>
    <div>
      
      <h2><b>Danh sách hóa chất</b></h2>
      <SearchChemicalForm @getData="searchData"/>
    <br>
      <ChemicalsViewTable :chemicals="chemicals"/>
    </div>
  </template>

<script>
import ChemicalsViewTable from '@/components/chemical/ChemicalsViewTable.vue'
import SearchChemicalForm from '@/components/chemical/SearchChemicalForm.vue'

export default {
  data(){
    return {
      chemicals:null
    }
  },
  components: {
    SearchChemicalForm,
    ChemicalsViewTable
  }
  ,
  methods:{
    searchData(data){
      console.log("child data")
      console.log(data)
      this.chemicals = data;
    }
  }
}
</script>
  