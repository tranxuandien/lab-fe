<template>
    <Vueform :endpoint="false" @submit="login" size="md" :display-errors="false">
        <StaticElement name="login_title" content="Đăng nhập" tag="h1" />
        <StaticElement name="divider" tag="hr" />
        <GroupElement name="container" :columns="{
            container: 6,
            label: 6,
            wrapper: 8,
        }">
            <TextElement name="username" placeholder="Tên đăng nhập" :columns="{
                container: 12,
                label: 12,
                wrapper: 12,
            }" field-name="userName" :rules="[
                'required',
                'max:255',
            ]" />
            <TextElement name="password" input-type="password" :rules="[
                'required',
                'min:8',
            ]" field-name="Password" placeholder="Mật khẩu" :columns="{
                container: 12,
                label: 12,
                wrapper: 12,
            }" />
        </GroupElement>
        <StaticElement name="divider_1" tag="hr" />
        <ButtonElement name="login" :submits="true" button-label="Đăng nhập" :full="true" size="md" :columns="2" />
    </Vueform>
</template>

<script>
// import { API_PATH } from '@/router/apiPath';
// import Router from '@/router';
// import { toast } from 'vue3-toastify';
import { useAuthStore } from '@/stores/auth'

export default {
    data() {
        return {
        }
    },
    components: {
    }
    ,
    methods: {
        async login(form$) {
            const data = form$.data
            // form$.submitting = true
            // form$.cancelToken = form$.$vueform.services.axios.CancelToken.source()
            // const url = form$.$vueform.services.axios.defaults.baseURL + "api/auth/login";
            // form$.$vueform.services.axios.defaults.headers.Authorization = null;
            // console.log(url);
            const authStore = useAuthStore();
            await authStore.login(data.username, data.password);
        }
        // try {
        //     await form$.$vueform.services.axios.post(url,
        //         data,
        //         {
        //             cancelToken: form$.cancelToken.token,
        //         }
        //     ).then(res => {
        //         console.log("========")
        //         console.log(res.data.response.data)
        //         if (!res.data.errorMessage) {

        //             toast.success("Đăng nhập thành công", {
        //                 position: toast.POSITION.TOP_CENTER,
        //             });
        //             //redirect user page
        //             Router.push()
        //         }

        //     })
        // } catch (error) {
        //     toast.error(error.response.data.errorMessage, {
        //         position: toast.POSITION.TOP_CENTER,
        //     });
        // } finally {
        //     form$.submitting = false
        // }
        // }
    }
}
</script>