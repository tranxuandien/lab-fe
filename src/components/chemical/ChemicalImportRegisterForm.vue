<template>
  <div>
    <div>
      <Vueform ref="form$">
        <GroupElement name="scanCode" label="Mã barcode hóa chất">
          <TextElement name="barcode" placeholder="Mã hóa chất" :columns="6" @change="getInfo">
          </TextElement>
        </GroupElement>
        <ButtonElement :disabled="!chemical" name="submit" add-class="mt-2" @click="chemicalImport">
          Đăng kí
        </ButtonElement>
      </Vueform>
    </div>
    <div>
      <table class="table table-bordered table-striped table-hover">
        <thead class="thead-dark">
          <tr>
            <th>Tên hóa chất</th>
            <th>Hãng sản xuất</th>
            <th>Dạng hóa chất</th>
            <th>Khối lượng đăng kí</th>
            <th>Khối lượng còn lại</th>
            <th>Mô tả lọ đựng</th>
            <th>Hóa chất SHPT</th>
            <th>Thông tin người nhập</th>
            <th>Vị trí</th>
            <th>Trạng thái nhập xuất</th>
            <th>Tình trạng hóa chất</th>
            <th>Nguồn</th>
            <th>Khác</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="chemical">
            <td>{{ chemical.name }}</td>
            <td>{{ chemical.brand }}</td>
            <td>{{ chemical.chemicalType }}</td>
            <td>{{ chemical.quantity }}</td>
            <td>{{ chemical.remain }}</td>
            <td>{{ chemical.description }}</td>
            <td>{{ chemical.chemicalShpt }}</td>
            <td>{{ chemical.registerUser }}</td>
            <td>{{ chemical.position }}</td>
            <td>{{ chemical.chemicalStatus }}</td>
            <td>{{ chemical.chemicalStatus }}</td>
            <td>{{ chemical.purchaseSrc }}</td>
            <td>{{ chemical.otherInfo }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import api from '@/plugin/axios';
import { toast } from 'vue3-toastify';

export default {
  data() {
    return {
      chemical: null
    }
  },
  methods: {
    async getInfo(n) {
      if (n.length == 10)//check barcode length
      //get chemical 
      {
        try {
          api.get("chemical/register?barcode=" + n).then((res) => {
            this.chemical = res.data;
          })
          // return conn;
        } catch (error) {
          console.error('There was a problem with the axios request:', error);
        }
      }
      return;
    }
    ,
    async chemicalImport() {
      try {
        console.log(this.$refs.form$.data.barcode)
        api.get("chemical/import?barcode=" + this.$refs.form$.data.barcode).then(res => {
          console.log(res.data)
          this.chemical = res.data.data;
          this.$refs.form$.update({ // updates form data
            barcode: '',
          })
          if (!res.data.errorMessage) {
            toast.success("Đã nhập mã code hóa chất!", {
              position: toast.POSITION.TOP_CENTER,
            });
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
      }
    }
  }
}
</script>