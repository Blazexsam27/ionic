<template>
  <div class="admin_container">
    <AssetUploadForm />
  </div>
</template>
<script>
import AssetUploadForm from "../components/Admin/AssetUploadForm.vue";
export default {
  name: "AdminContainer",
  components: {
    AssetUploadForm,
  },
};
</script>
<style lang="scss" scoped>
.admin_container {
  @include dflex($align: normal);
  width: 100%;
  min-height: 100vh;
  margin-top: 3rem;
}
</style>
